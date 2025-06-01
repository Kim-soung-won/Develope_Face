import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { PostQuery } from '@/shared/db/post' // PostQuery 클래스 경로 (네 프로젝트에 맞게)
import { z } from 'zod'
import { CreatePostEntitySchema } from '@/shared/db/post/post.contracts'
import { dataURLtoFile, getExtensionFromMimeType } from '@/shared/utils'
import { supabase, uploadFile } from '@/shared/file-storage'
import { PostImageQuery } from '@/shared/db/post-image'
import { CreatePostImagesEntity } from '@/shared/db/post-image/post-image.types'

// POST 요청을 처리할 함수 (게시글 생성)
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json()

    const { title, markdown_content: originalMarkdownContent } =
      CreatePostEntitySchema.parse(requestBody)

    // g 플레그를 사용하여 마크다운에서 이미지 태그를 찾습니다.
    const imageRegex =
      /!\[(.*?)\]\((data:image\/(?:png|jpeg|jpg|gif|webp);base64,([A-Za-z0-9+/=]+))\)/g
    const imagesToProcess: Array<{
      altText: string
      dataUrl: string // 전체 데이터 URL (data:image/png;base64,...)
      base64Data: string // 순수 Base64 데이터
      mimeType: string // 예: image/png
      originalMarkdownTag: string // 원본 마크다운 태그 (예: ![alt](data:...))
    }> = []

    let match
    /**
     * exec 메서드를 사용하여 모든 이미지 태그를 찾습니다.
     * exec 메서드는 정규 표현식에서 g 플래그가 설정된 경우 반복적으로 호출할 수 있습니다.
     * 각 이미지 태그를 순회하면서 필요한 정보를 추출합니다.
     */
    while ((match = imageRegex.exec(originalMarkdownContent)) !== null) {
      // match[0]: 전체 매치 (예: ![alt](data:image/png;base64,...))
      // match[1]: alt 텍스트 (예: alt)
      // match[2]: 전체 데이터 URL (예: data:image/png;base64,...)
      // match[3]: 순수 Base64 데이터 (예: ...)
      imagesToProcess.push({
        altText: match[1] || '', // alt 텍스트가 없을 수도 있음
        dataUrl: match[2],
        base64Data: match[3],
        mimeType: match[2].substring(
          match[2].indexOf(':') + 1,
          match[2].indexOf(';'),
        ),
        originalMarkdownTag: match[0],
      })
    }

    let finalMarkdownContent = originalMarkdownContent
    const uploadedImageDetailsForDB: Array<CreatePostImagesEntity> = []

    if (imagesToProcess.length > 0) {
      const uploadPromises = imagesToProcess.map(async (imgData, index) => {
        const extension = getExtensionFromMimeType(imgData.mimeType)
        // 임시 파일 이름 (필요하다면 클라이언트에서 원본 파일명을 함께 보내는 것도 방법)
        const tempFileName = `${imgData.altText.replace(/\s+/g, '_') || 'image'}_${Date.now()}_${index}.${extension}`
        const fileToUpload = dataURLtoFile(imgData.dataUrl, tempFileName)

        // Supabase Storage에 저장될 경로 (버킷 최상위에 posts_images 폴더 만들고 그 안에 저장)
        const storageFilePath = `posts_images/${uuidv4()}.${extension}`

        // 파일 업로드
        const uploadResult = await uploadFile(fileToUpload, storageFilePath) // uploadFile은 { path: string, ... } 반환

        // 공개 URL 가져오기
        const bucketName = process.env.SUPABASE_BUCKET!
        const { data: publicUrlData } = supabase.storage
          .from(bucketName)
          .getPublicUrl(uploadResult.path) // uploadResult.path는 버킷 내 경로

        if (!publicUrlData.publicUrl) {
          throw new Error(`Failed to get public URL for ${uploadResult.path}`)
        }

        return {
          originalMarkdownTag: imgData.originalMarkdownTag, // 교체를 위해 원본 태그 저장
          publicUrl: publicUrlData.publicUrl,
          storageFilePath: uploadResult.path, // 버킷 내 경로
          altText: imgData.altText,
          fileName: tempFileName,
          mimeType: imgData.mimeType,
          sizeKb: Math.round(fileToUpload.size / 1024),
        }
      })

      // 모든 이미지 업로드 시도 (성공/실패 결과 받기)
      const settledUploads = await Promise.allSettled(uploadPromises)

      const successfulUploads = []
      for (const result of settledUploads) {
        if (result.status === 'fulfilled') {
          successfulUploads.push(result.value)
        } else {
          // 개별 업로드 실패 시 처리 (여기서는 전체 실패로 간주하고 에러 발생)
          console.error('An image upload failed:', result.reason)
          // TODO: 이미 업로드된 파일들 롤백(삭제) 로직 고려 가능
          throw new Error(
            '하나 이상의 이미지 업로드에 실패했습니다. 게시글이 저장되지 않았습니다.',
          )
        }
      }

      // 4. 마크다운 내용의 Base64 URL을 실제 Supabase URL로 교체
      finalMarkdownContent = successfulUploads.reduce(
        (currentMarkdown, uploadedImg) => {
          // 정규식 특수문자 이스케이프 (간단한 버전)
          const escapedOriginalTag = uploadedImg.originalMarkdownTag.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&',
          )
          return currentMarkdown.replace(
            new RegExp(escapedOriginalTag, 'g'),
            `![${uploadedImg.altText}](${uploadedImg.publicUrl})`,
          )
        },
        originalMarkdownContent,
      )

      // DB에 저장할 이미지 정보 정리
      successfulUploads.forEach((s) => {
        uploadedImageDetailsForDB.push({
          post_id: BigInt(0),
          image_url: s.publicUrl,
          storage_file_path: s.storageFilePath,
          alt_text: s.altText,
          file_name: s.fileName,
          mime_type: s.mimeType,
          size_kb: s.sizeKb,
        })
      })
    }

    const postDataToSave = {
      title,
      markdown_content: finalMarkdownContent, // 실제 URL로 교체된 마크다운
    }
    const savedPost = await PostQuery.save(postDataToSave)

    if (uploadedImageDetailsForDB.length > 0) {
      const imageSavePromises = uploadedImageDetailsForDB.map((detail) =>
        PostImageQuery.save({
          post_id: savedPost.post_id,
          image_url: detail.image_url,
          storage_file_path: detail.storage_file_path,
          alt_text: detail.alt_text || null,
          file_name: detail.file_name || null,
          mime_type: detail.mime_type || null,
          size_kb: detail.size_kb || null,
        }),
      )
      await Promise.all(imageSavePromises)
    }

    const serializableSavedPost = {
      ...savedPost,
      post_id: savedPost.post_id.toString(),
    }

    return NextResponse.json(serializableSavedPost, { status: 201 }) // 201 Created
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: '데이터 유효성 검사 실패', errors: error.errors },
        { status: 400 },
      )
    }

    console.error('[API_ROUTE_POST_ERROR]', error)
    const errorMessage =
      error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    return NextResponse.json(
      { message: '게시글 저장에 실패했습니다.', error: errorMessage },
      { status: 500 },
    )
  }
}

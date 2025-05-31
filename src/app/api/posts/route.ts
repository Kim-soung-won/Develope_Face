import { NextResponse } from 'next/server'
import { PostQuery } from '@/shared/db/post' // PostQuery 클래스 경로 (네 프로젝트에 맞게)
import { z } from 'zod'
import { CreatePostEntitySchema } from '@/shared/db/post/post.contracts'

// POST 요청을 처리할 함수 (게시글 생성)
export async function POST(request: Request) {
  try {
    const requestBody = await request.json()

    const postDataToSave = CreatePostEntitySchema.parse(requestBody)

    const savedPost = await PostQuery.save(postDataToSave)

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

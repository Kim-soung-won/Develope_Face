import { PostQuery } from '@/shared/db/post'
import { NextRequest, NextResponse } from 'next/server'
import { transformFindQueryPostToResponsePostData } from '../posts.lib'

export async function GET(
  request: NextRequest,
  context: { params: { postId: string } },
) {
  const { postId } = await context.params

  const idAsNumber = parseInt(postId, 10)

  if (isNaN(idAsNumber)) {
    return NextResponse.json(
      { message: '잘못된 post ID 형식입니다.' },
      { status: 400 },
    )
  }

  try {
    const post = await PostQuery.getById(idAsNumber)

    if (!post) {
      // 게시글이 없으면 404 응답
      return NextResponse.json(
        { message: `ID가 ${idAsNumber}인 게시글을 찾을 수 없습니다.` },
        { status: 404 },
      )
    }

    return NextResponse.json(transformFindQueryPostToResponsePostData(post), {
      status: 200,
    })
  } catch (error) {
    console.error(`[API_ROUTE_GET_BY_ID_ERROR] postId: ${postId}`, error)
    const errorMessage =
      error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.'
    return NextResponse.json(
      {
        message: '게시글 조회 중 서버 에러가 발생했습니다.',
        error: errorMessage,
      },
      { status: 500 },
    )
  }
}

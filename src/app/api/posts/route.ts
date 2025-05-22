// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { PostQuery } from '@/shared/db/post'; // PostQuery 클래스 경로 (네 프로젝트에 맞게)
import { z } from 'zod';
import { CreatePostEntitySchema } from '@/shared/db/post/post.contracts';

// POST 요청을 처리할 함수 (게시글 생성)
export async function POST(request: Request) {
  try {
    // 1. 클라이언트로부터 전송된 데이터 파싱
    const requestBody = await request.json();

    // 2. Zod 스키마를 사용한 데이터 유효성 검사
    // 클라이언트는 { title: string, markdown_content: string } 형태의 데이터를 보낼 거야.
    // CreatePostEntitySchema가 이 형태와 일치해야 함.
    const postDataToSave = CreatePostEntitySchema.parse(requestBody);

    // 3. 서버사이드 PostQuery.save 호출
    // CreatePostEntity 타입이므로, PostQuery.save는 { title, markdown_content }를 받음
    const savedPost = await PostQuery.save(postDataToSave);

    const serializableSavedPost = {
      ...savedPost,
      // post_id 필드가 BigInt 타입이라면 문자열로 변환
      // 만약 다른 BigInt 필드가 있다면 그것들도 변환해줘야 함
      post_id: savedPost.post_id.toString(),
    };

    // 4. 성공 응답 반환
    return NextResponse.json(serializableSavedPost, { status: 201 }); // 201 Created
  } catch (error) {
    // 5. 에러 처리
    if (error instanceof z.ZodError) {
      // 유효성 검사 에러
      return NextResponse.json({ message: "데이터 유효성 검사 실패", errors: error.errors }, { status: 400 });
    }

    // 기타 서버 에러
    console.error("[API_ROUTE_POST_ERROR]", error);
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다.';
    return NextResponse.json({ message: '게시글 저장에 실패했습니다.', error: errorMessage }, { status: 500 });
  }
}
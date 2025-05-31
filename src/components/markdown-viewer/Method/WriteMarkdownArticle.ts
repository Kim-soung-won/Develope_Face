interface CreatePostEntity {
  title: string
  content: string
}

export const markdownHandleWrite = async ({
  title,
  content,
}: CreatePostEntity) => {
  // async 키워드 추가
  // 실제 제목은 상태나 입력 필드에서 가져와야 해. 여기서는 임시값 사용.
  const postPayload = {
    title: title,
    markdown_content: content,
  }

  // 간단한 클라이언트 측 유효성 검사 (선택 사항)
  if (!postPayload.title.trim() || !postPayload.markdown_content.trim()) {
    alert('제목과 내용을 모두 입력해주세요.')
    return
  }

  try {
    const response = await fetch('/api/posts', {
      // API 엔드포인트 호출
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postPayload), // API로 보낼 데이터 (CreatePostEntity 형식)
    })

    if (!response.ok) {
      // 서버에서 에러 응답을 보냈을 경우
      const errorData = await response.json()
      throw new Error(
        errorData.message ||
          errorData.error ||
          `HTTP error! status: ${response.status}`,
      )
    }

    const savedPost = await response.json()
    console.log('✅ 게시글이 API를 통해 성공적으로 저장되었습니다:', savedPost)
    alert('게시글이 성공적으로 저장되었습니다!')
    // TODO: 저장 후 작업 (예: 폼 초기화, 페이지 이동 등)
  } catch (error) {
    console.error('❌ 클라이언트에서 게시글 저장 중 에러 발생:', error)
    alert(
      `게시글 저장에 실패했습니다: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

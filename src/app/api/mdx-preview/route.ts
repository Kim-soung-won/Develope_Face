export const runtime = 'edge'; // Edge Runtime은 전 세계 여러 지역에 분산된 서버에서 코드를 실행하여 사용자에게 더 빠른 응답을 제공하기 위한 환경

import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'next-mdx-remote/serialize';

import rehypePrettyCode from 'rehype-pretty-code';

export async function POST(req: NextRequest) {
  try {
    const { markdown } = await req.json();

    if (typeof markdown !== 'string') {
      return NextResponse.json({ error: 'Markdown 내용은 문자열이어야 합니다.' }, { status: 400 });
    }

    // 🚨 중요: 여기에 실제 블로그 게시물 렌더링 시 사용하는 remark/rehype 플러그인과
    // 동일한 설정을 적용해야 미리보기와 실제 게시글 스타일이 일치합니다.
    const mdxSource = await serialize(markdown, {
      mdxOptions: {
        // remarkPlugins: [remarkGfm], // GFM 사용 시
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: 'github-dark', // rehype-pretty-code 테마 (예: 'github-dark', 'material-theme-palenight')
              // keepBackground: true, // 테마 배경 유지 여부
              // 필요한 다른 rehype-pretty-code 옵션들
            },
          ],
          // 만약 다른 rehype 플러그인(rehype-slug, rehype-autolink-headings 등)을 사용한다면 여기에 추가
        ],
        format: 'mdx', // 'mdx' 또는 'md'
      },
      parseFrontmatter: true, // 에디터에서 프론트매터도 다룰 경우 true로 설정
    });

    return NextResponse.json({ mdxSource });
  } catch (error: any) {
    console.error('MDX 직렬화 오류 (API):', error);
    
    return NextResponse.json(
      {
        error: 'MDX 내용을 처리하는 중 오류가 발생했습니다.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
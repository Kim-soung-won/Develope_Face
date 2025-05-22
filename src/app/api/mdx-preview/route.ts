import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'next-mdx-remote/serialize';

import rehypePrettyCode from 'rehype-pretty-code';
import { createHighlighterCore } from '@shikijs/core'; // Shiki 버전에 따라 'shiki/core'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'; // Shiki 버전에 따라 'shiki/engine/javascript'

// 필요한 특정 언어와 테마만 가져오세요.
import langJavascript from '@shikijs/langs/javascript'; // 예시
import themeGithubDark from '@shikijs/themes/github-dark'; // 예시

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { markdown } = await req.json();

    if (typeof markdown !== 'string') {
      return NextResponse.json({ error: 'Markdown 내용은 문자열이어야 합니다.' }, { status: 400 });
    }

    const mdxSource = await serialize(markdown, {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              highlighter: async (options: any) => {
                const jsEngine = createJavaScriptRegexEngine();
                return createHighlighterCore({
                  themes: [themeGithubDark], // 사용할 테마 지정
                  langs: [langJavascript], // 사용할 언어 지정
                  engine: jsEngine,
                });
              },
              keepBackground: true, // 테마 배경 유지 여부
              // 필요한 다른 rehype-pretty-code 옵션들
            },
          ],
        ],
        format: 'mdx',
      },
      parseFrontmatter: true,
    });

    return NextResponse.json({ mdxSource });
  } catch (error: any) {
    console.error('MDX 직렬화 오류 (API):', error);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    console.error('Cause:', error.cause);
    return NextResponse.json(
      {
        error: 'MDX 내용을 처리하는 중 오류가 발생했습니다.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
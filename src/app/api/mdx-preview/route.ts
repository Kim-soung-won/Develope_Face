import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'next-mdx-remote/serialize';

import rehypePrettyCode from 'rehype-pretty-code';
// Ensure you are using the newer @shikijs packages
import { createHighlighterCore } from '@shikijs/core';
import { createOnigurumaEngine } from '@shikijs/engine-oniguruma';

// Import only the languages and themes you need to optimize bundle size
import langJavascript from '@shikijs/langs/javascript'; // Example language
import themeGithubDark from '@shikijs/themes/github-dark'; // Your chosen theme

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { markdown } = await req.json();

    if (typeof markdown !== 'string') {
      return NextResponse.json({ error: 'Markdown 내용은 문자열이어야 합니다.' }, { status: 400 });
    }

    const onigEngine = await createOnigurumaEngine();
    const highlighter = await createHighlighterCore({
      themes: [themeGithubDark],
      langs: [langJavascript],
      engine: onigEngine,
    });

    const mdxSource = await serialize(markdown, {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              highlighter,
              keepBackground: true,
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
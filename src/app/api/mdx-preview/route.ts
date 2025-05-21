// app/api/mdx-preview/route.ts
export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';


export async function POST(req: NextRequest) {
  try {
    const { markdown } = await req.json();

    if (typeof markdown !== 'string') {
      return NextResponse.json({ error: 'Markdown 내용은 문자열이어야 합니다.' }, { status: 400 });
    }

    const prettyCodeOptions: RehypePrettyCodeOptions = {
      theme: 'github-dark', // shiki v1.4.2가 기본적으로 포함하고 있을 일반적인 테마
      // langs 옵션을 명시하지 않으면 rehype-pretty-code는 shiki에 포함된 모든 언어를 사용하려고 시도합니다.
      // 또는 필요한 언어만 명시할 수도 있습니다:
      // langs: ['javascript', 'typescript', 'css', 'html', 'json', 'markdown'],
    };

    const mdxSource = await serialize(markdown, {
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    });

    return NextResponse.json({ mdxSource });

  } catch (error: any) {
    // Edge 런타임에서 발생하는 오류의 상세 내용을 확인하기 위해 로그를 강화합니다.
    console.error('[MDX API EDGE ERROR] Name:', error.name);
    console.error('[MDX API EDGE ERROR] Message:', error.message);
    if (error.stack) console.error('[MDX API EDGE ERROR] Stack:', error.stack);
    // 'cause'는 Vercel Edge Runtime에서 유용할 수 있지만, Cloudflare에서는 다를 수 있습니다.
    // if (error.cause) console.error('[MDX API EDGE ERROR] Cause:', error.cause);

    const errorDetails = process.env.NODE_ENV === 'development' 
      ? { name: error.name, message: error.message, cause: error.cause ? String(error.cause) : undefined } 
      : 'MDX 내용을 처리하는 중 서버에서 오류가 발생했습니다.';

    return NextResponse.json(
      { error: 'Failed to process MDX on Edge.', details: errorDetails },
      { status: 500 }
    );
  }
}
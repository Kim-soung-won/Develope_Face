import nextMDX from '@next/mdx';
import type { NextConfig } from 'next';

// rehype-pretty-code 플러그인과 해당 플러그인의 옵션 타입을 가져옵니다.
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';

// unified의 Pluggable 타입을 가져옵니다. remark/rehype 플러그인 배열의 요소 타입입니다.
// 만약 'unified'가 직접적인 의존성이 아니라면, @mdx-js/mdx 나 @types/mdx 등에서 유사한 타입을 찾아 사용하거나,
// 간단히 [Function, object] | Function 형태로 유추할 수도 있습니다.
// 보통은 @mdx-js/mdx 가 내부적으로 이 타입을 사용합니다.
import type { Pluggable } from 'unified';

// rehype-pretty-code에 전달할 옵션을 명시적으로 정의합니다.
const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: 'github-dark', // 원하는 테마로 변경하세요 (예: 'material-theme-palenight')
  // keepBackground: false, // 필요한 경우 다른 옵션 추가
};

// @next/mdx에 전달될 MDX 처리 옵션의 타입을 정의합니다.
// 이 타입은 @mdx-js/mdx의 Options 인터페이스와 호환되어야 합니다.
interface CustomMDXOptions {
  format?: 'mdx' | 'md';
  remarkPlugins?: Pluggable[];
  rehypePlugins?: Pluggable[];
  [key: string]: any; // 그 외 다른 MDX 옵션들을 허용하기 위함
}

const mdxProcessingOptions: CustomMDXOptions = {
  // remarkPlugins: [], // 필요하다면 여기에 remark 플러그인을 추가합니다.
  rehypePlugins: [
    // 옵션이 있는 플러그인은 [플러그인, 플러그인옵션] 형태의 튜플로 전달합니다.
    // 이 튜플 자체가 rehypePlugins 배열의 *하나의 요소*입니다.
    [rehypePrettyCode, prettyCodeOptions],

    // 만약 옵션이 없는 다른 플러그인 (예: rehypeSlug)을 추가한다면:
    // import rehypeSlug from 'rehype-slug';
    // rehypeSlug, // 이렇게 직접 추가합니다.

    // 만약 옵션이 있는 다른 플러그인을 또 추가한다면:
    // [anotherPluginWithOptions, { optionA: true }],
  ],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: mdxProcessingOptions,
});

const config: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // 여기에 다른 Next.js 설정을 추가할 수 있습니다.
};

export default withMDX(config);
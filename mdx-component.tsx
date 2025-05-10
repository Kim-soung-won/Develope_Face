import type { MDXComponents } from 'mdx/types';

/**
 * Next.js에서 MDX 컴포넌트를 사용하기 위한 기본 설정.
 * Nextjs의 컨벤션기반 설정에 의해 root경로에 해당 파일이 위치해야한다.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 기본 컴포넌트 오버라이드
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    // 기존 컴포넌트 유지
    ...components,
  };
}

import nextMDX from '@next/mdx';
import type { NextConfig } from "next";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // MDX 처리 옵션
    remarkPlugins: [],
    rehypePlugins: [require('rehype-highlight')],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);

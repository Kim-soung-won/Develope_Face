import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '../../../../mdx-component'

// 정적 경로 생성
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'md-content', 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }))
}

// 비동기 함수 외부에서 컴포넌트 정의
function MDXContent({ source }: { source: string }) {
  const components = useMDXComponents({})
  return <MDXRemote source={source} components={components} />
}

interface Params {
  slug: string
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const filePath = path.join(
    process.cwd(),
    'md-content',
    'posts',
    `${slug}.mdx`,
  )

  // MDX 파일 내용 읽기
  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="max-w-4xl mx-auto p-4">
      <article className="">
        <MDXContent source={source} />
      </article>
    </div>
  )
}

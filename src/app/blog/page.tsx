import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogPage() {
  // content/posts 디렉토리에서 모든 MDX 파일 가져오기
  const postsDirectory = path.join(process.cwd(), 'md-content', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    return { slug };
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">블로그</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded-lg">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:text-blue-600">
              {post.slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

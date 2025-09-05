import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navigation from '@/components/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { ArrowLeft, Circle } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      <main className="px-6 md:px-12 lg:px-20 pt-24 pb-20">
        <article className="max-w-4xl mx-auto">
          {/* Back Link */}
          <div className="mb-12">
            <Link 
              href="/writing"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to writing
            </Link>
          </div>

          {/* Post Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>{formattedDate}</span>
              <Circle className="w-1 h-1 fill-current" />
              <span>{post.readingTime}</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.description}
            </p>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content - Editorial Typography */}
          <div className="prose prose-lg max-w-none prose-gray">
            <MDXRemote 
              source={post.content}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-serif text-3xl text-gray-900 mt-12 mb-6 leading-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-4 leading-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-serif text-xl text-gray-900 mt-8 mb-3 leading-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-gray-300 pl-6 my-8 italic text-gray-600">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 leading-relaxed text-lg pl-2">
                    • {children}
                  </li>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-8 font-mono text-sm">
                    {children}
                  </pre>
                ),
                hr: () => (
                  <hr className="my-12 border-t border-gray-200" />
                ),
                em: ({ children }) => (
                  <em className="font-serif italic">
                    {children}
                  </em>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
              }}
            />
          </div>

          {/* Post Footer */}
          <footer className="mt-20 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                href="/writing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                ← More writing
              </Link>
              
              <div className="text-sm text-gray-500">
                {formattedDate}
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}
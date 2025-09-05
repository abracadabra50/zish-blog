import Link from 'next/link';
import Navigation from '@/components/navigation';
import { getAllPosts, getAllTags } from '@/lib/posts';
import { Circle } from 'lucide-react';

export const metadata = {
  title: 'Writing',
  description: 'Long-form thoughts on technology, creativity, and the ideas that shape our world.',
};

export default function WritingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-6">
              Writing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Long-form thoughts on technology, creativity, and the ideas that shape our world. 
              Essays on AI, entrepreneurship, and the future of commerce.
            </p>
          </div>

          {/* Topics */}
          {tags.length > 0 && (
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Topics</h2>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Posts List */}
          <div className="space-y-16">
            {posts.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500">All Articles</h2>
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags?: string[];
}

function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="group">
      <Link href={`/writing/${post.slug}`}>
        <div className="border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-all duration-300">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{formattedDate}</span>
            <Circle className="w-1 h-1 fill-current" />
            <span>{post.readingTime}</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            {post.description}
          </p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="py-20 text-center">
      <p className="font-serif text-3xl text-gray-400 italic mb-4">
        First article coming soon
      </p>
      <p className="text-gray-500">
        Currently crafting thoughtful pieces on AI, entrepreneurship, and technology.
      </p>
    </div>
  );
}
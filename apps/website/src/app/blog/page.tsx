import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { BlogPost } from '@workspace/types';
import { BlogEmpty } from './empty';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on autonomous mobile robots, warehouse automation, and industrial robotics from Momentum Robotics.',
};

export default function BlogPage() {
  if (blogPosts.length === 0) {
    return <BlogEmpty />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-5">
          Insights
        </span>
        <h1 className="font-heading text-5xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed text-lg">
          Insights on robotics, automation, and the future of Indian manufacturing.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post: BlogPost) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-primary/20 hover:bg-surface-elevated"
          >
            <div className="aspect-[2/1] bg-accent relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl border border-border bg-surface flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted">{formatDate(post.publishedAt)}</p>
              <h2 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-accent px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

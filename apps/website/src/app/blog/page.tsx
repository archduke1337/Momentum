import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { BlogPost } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on autonomous mobile robots, warehouse automation, and industrial robotics from Momentum Robotics.',
};

function BlogSkeleton() {
  return (
    <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-surface p-6" aria-busy="true">
          <div className="mb-4 h-3 w-20 animate-pulse rounded-md bg-muted-foreground/20" />
          <div className="mb-3 h-6 w-3/4 animate-pulse rounded-md bg-muted-foreground/20" />
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded-md bg-muted-foreground/20" />
            <div className="h-3 w-2/3 animate-pulse rounded-md bg-muted-foreground/20" />
          </div>
          <div className="mt-5 h-4 w-12 animate-pulse rounded-md bg-muted-foreground/10" />
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
          Insights
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Insights on robotics, navigation, and the future of Indian manufacturing.
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <BlogSkeleton />
      ) : (
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: BlogPost) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-surface p-6 transition hover:bg-background"
            >
              <p className="text-xs font-medium text-primary">{formatDate(post.publishedAt)}</p>
              <h2 className="mt-3 font-heading text-xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
                Read
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { BlogPost } from '@workspace/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post: BlogPost) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        &larr; All Posts
      </Link>
      <div className="max-w-3xl">
        <p className="text-sm text-muted">
          {formatDate(post.publishedAt)} &middot; {post.readingTime} min read
        </p>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-primary">By {post.author}</p>
        <div className="mt-8 text-muted-foreground leading-relaxed">
          {post.content || post.excerpt}
        </div>
      </div>
    </article>
  );
}

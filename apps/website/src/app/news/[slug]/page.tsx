import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { newsItems } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { NewsItem } from '@workspace/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsItems.map((item: NewsItem) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n: NewsItem) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = newsItems.find((n: NewsItem) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/news"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-10"
      >
        &larr; All News
      </Link>
      <div className="max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs text-muted capitalize">
            {item.type}
          </span>
          <p className="text-sm text-muted">{formatDate(item.date)}</p>
        </div>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight">{item.title}</h1>
        {item.source && (
          <p className="mt-2 text-sm text-primary">Source: {item.source}</p>
        )}
        <div className="mt-8 text-muted-foreground leading-relaxed">
          {item.excerpt}
        </div>
      </div>
    </article>
  );
}

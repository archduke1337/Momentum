import type { Metadata } from 'next';
import Link from 'next/link';
import { newsItems } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { NewsItem } from '@workspace/types';
import { NewsEmpty } from './empty';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest news, media coverage, and event updates from Momentum Robotics.',
};

export default function NewsPage() {
  if (newsItems.length === 0) {
    return <NewsEmpty />;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-5">
          Latest Updates
        </span>
        <h1 className="font-heading text-5xl font-bold tracking-tight">News</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed text-lg">
          Media coverage, events, and exhibitions featuring Momentum Robotics.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item: NewsItem) => (
          <Link
            key={item.id}
            href={`/news/${item.slug}`}
            className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:border-primary/20 hover:bg-surface-elevated"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs text-muted capitalize">
                {item.type}
              </span>
              <p className="text-xs text-muted">{formatDate(item.date)}</p>
            </div>
            <h2 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

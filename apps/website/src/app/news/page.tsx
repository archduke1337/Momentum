import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@workspace/content';
import { formatDate } from '@workspace/utils';
import type { NewsItem } from '@workspace/types';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest news, media coverage, and event updates from Momentum Robotics.',
};

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
          Latest Updates
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          News
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Media coverage, events, and exhibitions featuring Momentum Robotics.
        </p>
      </div>

      {newsItems.length === 0 ? (
        <div className="mt-20 grid gap-px border border-border bg-border md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface p-8">
              <div className="mb-4 h-3 w-16 rounded bg-border" />
              <div className="mb-3 h-5 w-3/4 rounded bg-border" />
              <div className="h-3 w-full rounded bg-border" />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item: NewsItem) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group bg-surface p-6 transition hover:bg-background"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs text-muted capitalize">
                  {item.type}
                </span>
                <p className="text-xs text-muted">{formatDate(item.date)}</p>
              </div>
              <h2 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
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

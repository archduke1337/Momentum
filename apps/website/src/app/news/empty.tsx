'use client';

import Skeleton from '@/components/smoothui/skeleton-loader';

export function NewsEmpty() {
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
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface p-7">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-3 w-16 rounded-full" />
            </div>
            <Skeleton className="h-5 w-full rounded-full mb-2" />
            <Skeleton className="h-5 w-3/4 rounded-full mb-3" />
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-2/3 rounded-full mt-1" />
          </div>
        ))}
      </div>
    </section>
  );
}

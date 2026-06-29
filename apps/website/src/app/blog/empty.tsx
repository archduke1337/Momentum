'use client';

import Skeleton from '@/components/smoothui/skeleton-loader';

export function BlogEmpty() {
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
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface overflow-hidden">
            <Skeleton className="aspect-[2/1]">
              <div className="w-12 h-12 rounded-xl border border-border bg-surface-elevated flex items-center justify-center mx-auto mt-[calc(50%-24px)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted/30">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
            </Skeleton>
            <div className="p-6 space-y-3">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-5 w-full rounded-full" />
              <Skeleton className="h-5 w-3/4 rounded-full" />
              <Skeleton className="h-3 w-full rounded-full mt-4" />
              <Skeleton className="h-3 w-2/3 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

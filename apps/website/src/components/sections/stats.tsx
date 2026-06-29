'use client';

import { HexagonPattern } from '@/components/ui/hexagon-pattern';

const stack = [
  {
    term: 'ROS2',
    line: 'Teaching teams how modern robot software is structured.',
  },
  {
    term: 'SLAM',
    line: 'Helping learners see mapping and localization as a real system.',
  },
  {
    term: 'Navigation',
    line: 'Moving from maps into routes, obstacles, recovery, and behavior.',
  },
  {
    term: 'Load movement',
    line: 'Translating that autonomy into Cyborg for factory and warehouse work.',
  },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/25">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Navigation is the through-line
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              This is the clearer Momentum story: teach autonomy, test it at larger scale, then deploy it where material movement matters.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {stack.map((item) => (
              <div key={item.term} className="bg-background p-6">
                <p className="font-heading text-3xl font-bold text-primary">{item.term}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

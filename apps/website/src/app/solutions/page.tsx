import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@workspace/content';
import type { Solution } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Momentum Robotics solutions for robotics education, Cyborg pilots, warehouse movement, and early automation planning.',
};

export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            Solution tracks
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
            Start with the right robotics problem
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
          Momentum solutions are organized around learning, pilot planning, and industrial load movement, not one-size-fits-all automation.
        </p>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
        {solutions.map((solution: Solution) => (
          <Link
            key={solution.id}
            href={`/solutions/${solution.slug}`}
            className="group flex min-h-80 flex-col bg-surface p-7 transition hover:bg-background md:p-8"
          >
            <p className="text-sm font-semibold text-primary">{solution.name}</p>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight">
              {solution.description}
            </h2>
            <div className="mt-8 grid gap-2">
              {solution.benefits.slice(0, 3).map((benefit) => (
                <span key={benefit} className="border border-border bg-background/55 px-3 py-2 text-sm text-muted">
                  {benefit}
                </span>
              ))}
            </div>
            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-foreground group-hover:text-primary">
              Open solution
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

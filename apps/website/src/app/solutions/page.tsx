import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@workspace/content';
import type { Solution } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Solutions',
};

export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
        Solutions
      </h1>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
        {solutions.map((solution: Solution) => (
          <Link
            key={solution.id}
            href={`/solutions/${solution.slug}`}
            className="group flex min-h-80 flex-col bg-surface p-7 transition hover:bg-background md:p-8"
          >
            <p className="text-sm font-semibold text-primary">{solution.name}</p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">{/* TODO: Add real description */}</p>
            <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-foreground group-hover:text-primary">
              View
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

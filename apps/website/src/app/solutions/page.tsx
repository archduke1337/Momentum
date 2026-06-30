import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { solutions } from '@workspace/content';
import type { Solution } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Autonomous material handling solutions: line-side delivery, warehouse automation, fleet management, and custom integration.',
};

export default function SolutionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="label-mono">Solutions</span>
      </div>
      <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
        <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
          Matched to your floor.
        </h1>
        <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
          From line-side delivery to full fleet orchestration — autonomous material
          handling matched to your processes.
        </p>
      </div>

      <div className="grid border-t border-l border-border md:grid-cols-2">
        {solutions.map((solution: Solution) => (
          <Link
            key={solution.id}
            href={`/solutions/${solution.slug}`}
            className="group flex min-h-72 flex-col border-b border-r border-border p-8 transition-colors hover:bg-surface md:p-10"
          >
            <h2 className="text-2xl tracking-tight">{solution.name}</h2>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{solution.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
              Explore solution
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

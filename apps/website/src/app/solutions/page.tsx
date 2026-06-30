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
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-3xl">
        <span className="eyebrow">Solutions</span>
        <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] md:text-7xl">
          Solutions
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          From line-side delivery to full fleet orchestration — autonomous material
          handling matched to your floor and your processes.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {solutions.map((solution: Solution) => (
          <Link
            key={solution.id}
            href={`/solutions/${solution.slug}`}
            className="group surface-card flex min-h-72 flex-col p-8"
          >
            <h2 className="font-heading text-xl font-bold">{solution.name}</h2>
            <p className="mt-4 flex-1 text-sm leading-6 text-muted">{solution.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore solution
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

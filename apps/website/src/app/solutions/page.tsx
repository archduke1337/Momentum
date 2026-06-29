import type { Metadata } from 'next';
import Link from 'next/link';
import { solutions } from '@workspace/content';
import type { Solution } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'End-to-end automation solutions for warehouses, education, inventory management, and startups.',
};

export default function SolutionsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-5">
          Automation Solutions
        </span>
        <h1 className="font-heading text-5xl font-bold tracking-tight">Our Solutions</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed text-lg">
          Industry-specific automation solutions powered by our AMR platforms.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {solutions.map((solution: Solution) => (
          <Link
            key={solution.id}
            href={`/solutions/${solution.slug}`}
            className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-primary/20 hover:bg-surface-elevated"
          >
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
              {solution.name}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {solution.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {solution.benefits.slice(0, 3).map((benefit: string) => (
                <span
                  key={benefit}
                  className="rounded-full border border-border bg-accent px-3 py-1.5 text-xs text-muted"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            About Momentum
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
            {/* TODO: Add real heading */}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            {/* TODO: Add real company description */}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 border border-border bg-surface p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">Talk to the team</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              {/* TODO: Add real CTA copy */}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Contact
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

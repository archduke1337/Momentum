import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="border border-border bg-surface p-7 md:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            Interested in Momentum Robotics?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Reach out to discuss pilots, product inquiries, or partnership opportunities.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Contact us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground transition hover:border-primary/45"
            >
              View products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

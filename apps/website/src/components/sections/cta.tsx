'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealText from '@/components/smoothui/reveal-text';

const steps = ['Share one movement problem', 'Map the pilot route', 'Choose the right platform'];

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="industrial-shell overflow-hidden rounded-2xl">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              <RevealText direction="up" triggerOnView>Bring us one route worth automating</RevealText>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              We will help evaluate whether an AMR pilot makes operational sense before you commit to a fleet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                Book a demo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground transition hover:border-primary/45"
              >
                View robots
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

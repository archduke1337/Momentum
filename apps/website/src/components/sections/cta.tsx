'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RevealText from '@/components/smoothui/reveal-text';

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 border border-border bg-surface p-7 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">next step</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
            <RevealText direction="up" triggerOnView>Pilot one route, then decide</RevealText>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Share one load movement route. We will help evaluate whether Cyborg makes operational sense before you commit to a fleet.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Pilot Cyborg
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground transition hover:border-primary/45"
            >
              Compare platforms
            </Link>
          </div>
        </div>

        <div className="grid content-between gap-4 border-l border-border/50 pl-6">
          <p className="text-xs font-mono tracking-wider text-muted/60 uppercase">The pilot path</p>
          <div className="space-y-5">
            {[
              { step: '01', text: 'Share one load movement route' },
              { step: '02', text: 'Map the floor and handoffs' },
              { step: '03', text: 'Scope a Cyborg pilot' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-primary/60">{item.step}</span>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

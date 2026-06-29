'use client';

import Link from 'next/link';
import Image from 'next/image';
import { industries } from '@workspace/content';
import type { Industry } from '@workspace/types';
import GlowHover from '@/components/smoothui/glow-hover-card';
import RevealText from '@/components/smoothui/reveal-text';

export function IndustryList() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted font-medium mb-5">
          Industry Solutions
        </span>
        <h1 className="font-heading text-5xl font-bold tracking-tight">
          <RevealText direction="up">Industries We Serve</RevealText>
        </h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed text-lg">
          Purpose-built AMR solutions for diverse industrial verticals.
        </p>
      </div>
      <div className="mt-16">
        <GlowHover
          items={industries.map((industry: Industry) => ({
            id: industry.id,
            element: (
              <Link
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-primary/20 hover:bg-surface-elevated block"
              >
                <div className="aspect-[2/1] bg-accent relative overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                </div>
                <div className="p-7">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h2>
                  <p className="mt-1 text-sm text-primary">{industry.tagline}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ),
          }))}
          glowIntensity={0.12}
          maskSize={300}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        />
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@workspace/content';
import type { Industry } from '@workspace/types';

export function IndustryList() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="label-mono">Industries</span>
      </div>
      <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-24">
        <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
          The bottleneck, sector by sector.
        </h1>
        <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
          Material handling looks different everywhere. See how Momentum AMRs fit yours.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry: Industry, index) => (
          <Link
            key={industry.id}
            href={`/industries/${industry.slug}`}
            className={`group bg-surface transition hover:bg-background ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
          >
            <div className={`relative overflow-hidden bg-accent ${index === 0 ? 'h-80 lg:h-[470px]' : 'h-48'}`}>
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'}
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/10 to-transparent" />
            </div>
            <div className="p-5 md:p-6">
              <h2 className="text-2xl tracking-tight">{industry.name}</h2>
              <p className="label-mono mt-2 text-primary">{industry.tagline}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{industry.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
                View fit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

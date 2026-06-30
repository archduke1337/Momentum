import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@workspace/content';
import type { Industry } from '@workspace/types';

export function IndustryList() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-3xl">
        <span className="eyebrow">Industries</span>
        <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] md:text-7xl">
          Industries
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          The material-handling bottleneck looks different in every sector. See how
          Momentum AMRs fit yours.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
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
              <h2 className="font-heading text-2xl font-bold">{industry.name}</h2>
              <p className="mt-2 text-sm font-medium text-primary">{industry.tagline}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{industry.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
                View fit
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

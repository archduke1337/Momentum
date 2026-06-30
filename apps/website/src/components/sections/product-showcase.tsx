'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@workspace/content';

const pixel = products.find((product) => product.slug === 'pixel')!;
const orbit = products.find((product) => product.slug === 'orbit')!;
const cyborg = products.find((product) => product.slug === 'cyborg')!;

export function ProductShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">product line</p>
        <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
          Same autonomy core, three form factors
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          Pixel and Orbit are training and validation platforms. Cyborg is the production AMR. All three share the same navigation stack.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {/* Pixel */}
        <Link
          href={`/products/pixel`}
          className="group relative flex flex-col overflow-hidden border border-border bg-surface transition hover:border-primary/40"
        >
          <div className="relative aspect-[4/3] bg-[#050706]">
            <Image
              src={pixel.image}
              alt="Pixel ROS2 learning platform"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain p-5 transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-mono tracking-wider text-primary/60 uppercase">education</p>
            <h3 className="mt-2 font-heading text-2xl font-bold">{pixel.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{pixel.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">
              Explore
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Orbit */}
        <Link
          href={`/products/orbit`}
          className="group relative flex flex-col overflow-hidden border border-border bg-surface transition hover:border-primary/40"
        >
          <div className="relative aspect-[4/3] bg-[#050706]">
            <Image
              src={orbit.image}
              alt="Orbit scaled navigation platform"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain p-5 transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-mono tracking-wider text-primary/60 uppercase">validation</p>
            <h3 className="mt-2 font-heading text-2xl font-bold">{orbit.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{orbit.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">
              Explore
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Cyborg */}
        <Link
          href={`/products/cyborg`}
          className="group relative flex flex-col overflow-hidden border border-border bg-surface transition hover:border-primary/40"
        >
          <div className="relative aspect-[4/3] bg-[#f4f5ef]">
            <Image
              src={cyborg.image}
              alt="Cyborg industrial AMR"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-contain p-5 transition duration-700 group-hover:scale-[1.025]"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-mono tracking-wider text-primary/60 uppercase">industrial</p>
            <h3 className="mt-2 font-heading text-2xl font-bold">{cyborg.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{cyborg.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">
              View Cyborg
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

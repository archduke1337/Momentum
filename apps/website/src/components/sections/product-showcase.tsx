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
      <div className="max-w-3xl">
        <h2 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
          One robotics stack, two market doors
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Momentum starts with education and validation platforms, then carries that learning into industrial load movement.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-5">
          {[pixel, orbit].map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group grid overflow-hidden border border-border bg-surface transition hover:border-primary/40 md:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="relative min-h-64 bg-[#050706]">
                <Image
                  src={product.image}
                  alt={`${product.name} robotics learning platform`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-contain p-4 transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col p-6">
                <p className="text-sm font-medium text-primary">Education platform</p>
                <h3 className="mt-2 font-heading text-3xl font-bold">{product.name}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-foreground group-hover:text-primary">
                  Learn with {product.name}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/products/cyborg"
          className="group relative min-h-[720px] overflow-hidden border border-border bg-[linear-gradient(180deg,var(--color-surface)_0%,var(--color-surface-elevated)_100%)] text-foreground transition hover:border-primary/50"
        >
          <Image
            src={cyborg.image}
            alt="Cyborg industrial AMR"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-contain object-bottom p-4 transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgb(246_247_241/0.96),rgb(246_247_241/0.76),transparent)] p-7 md:p-9">
            <p className="text-sm font-semibold text-[#3e6c25]">Industrial product</p>
            <h3 className="mt-2 font-heading text-5xl font-bold leading-none md:text-6xl">Cyborg</h3>
            <p className="mt-5 max-w-md text-base leading-7 text-[#394236]">
              Factory and warehouse AMR for carrying loads, connecting routes, and replacing repeated manual movement.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#10140f] px-5 py-3 text-sm font-semibold text-white">
              View Cyborg
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

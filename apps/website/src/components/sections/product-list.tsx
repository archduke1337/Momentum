'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';

const roles: Record<string, { label: string; action: string; blurb: string }> = {
  pixel: {
    label: 'Education kit',
    action: 'Study Pixel',
    blurb: 'A compact, industry-grade ROS 2 SLAM platform for teaching real autonomous navigation — the same stack that powers our factory robots.',
  },
  orbit: {
    label: 'Scaled learning platform',
    action: 'Study Orbit',
    blurb: 'A multi-robot coordination platform for research labs exploring fleet management, path planning, and sensor fusion at scale.',
  },
  cyborg: {
    label: 'Industrial AMR',
    action: 'Pilot Cyborg',
    blurb: 'Modular autonomous mobile robots from 150 to 1000 kg, built for automotive, pharma, manufacturing, and warehouse floors.',
  },
};

function payload(product: Product) {
  if (product.variants?.length) {
    return product.variants.map((variant) => variant.payload).join(', ');
  }
  return product.specifications['Payload Capacity'] ?? 'Configured platform';
}

export function ProductList() {
  const cyborg = products.find((product) => product.slug === 'cyborg')!;
  const learningProducts = products.filter((product) => product.slug !== 'cyborg');

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-28">
      <div className="max-w-3xl">
        <span className="eyebrow">The platforms</span>
        <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.05] md:text-7xl">
          Products
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          One open software stack across three hardware platforms — so what you learn on
          Pixel scales straight to the factory floor.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-5">
          {learningProducts.map((product) => {
            const role = roles[product.slug];
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group surface-card grid overflow-hidden md:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative min-h-52 bg-background/60">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${role.label}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-contain p-4 transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <p className="text-sm font-semibold text-primary">{role.label}</p>
                  <h2 className="mt-1.5 font-heading text-2xl font-bold">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{role.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-foreground group-hover:text-primary">
                    {role.action}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/products/cyborg"
          className="group surface-card relative min-h-[600px] overflow-hidden text-foreground"
        >
          <Image
            src={cyborg.image}
            alt="Cyborg industrial AMR"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-bottom p-4 transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-background via-background/80 to-transparent p-6 md:p-8">
            <p className="text-sm font-semibold text-primary">{roles.cyborg.label}</p>
            <h2 className="mt-1.5 font-heading text-5xl font-bold leading-none md:text-6xl">Cyborg</h2>
            <p className="mt-3 text-sm font-semibold text-muted">{payload(cyborg)} variant planning</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">
              {roles.cyborg.action}
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

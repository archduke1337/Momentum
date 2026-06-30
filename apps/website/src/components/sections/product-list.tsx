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
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="label-mono">Platforms</span>
        <span className="label-mono hidden sm:block">One stack — three platforms</span>
      </div>
      <div className="grid gap-y-8 py-16 lg:grid-cols-12 lg:gap-x-10 lg:py-20">
        <h1 className="display max-w-3xl text-5xl sm:text-6xl lg:col-span-8 lg:text-7xl">
          From the lab to the line.
        </h1>
        <p className="self-end text-lg leading-relaxed text-muted lg:col-span-4">
          One open software stack across three hardware platforms — so what you learn on
          Pixel scales straight to the factory floor.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
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
                <div className="flex flex-col p-6 md:p-8">
                  <span className="label-mono text-primary">{role.label}</span>
                  <h2 className="mt-2 text-2xl tracking-tight">{product.name}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{role.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
                    {role.action}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
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
            <span className="label-mono text-primary">{roles.cyborg.label}</span>
            <h2 className="display mt-2 text-5xl leading-none md:text-6xl">Cyborg</h2>
            <p className="mt-3 font-mono text-sm text-muted">{payload(cyborg)} variant planning</p>
            <span className="mt-5 inline-flex items-center gap-2 bg-foreground px-5 py-3 text-sm font-medium tracking-tight text-background">
              {roles.cyborg.action}
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

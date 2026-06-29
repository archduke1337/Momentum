'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';

const roles: Record<string, { label: string; action: string; accent: string }> = {
  pixel: {
    label: 'Education kit',
    action: 'Study Pixel',
    accent: 'ROS2 + SLAM fundamentals',
  },
  orbit: {
    label: 'Scaled learning platform',
    action: 'Study Orbit',
    accent: 'Navigation at larger scale',
  },
  cyborg: {
    label: 'Industrial AMR',
    action: 'Pilot Cyborg',
    accent: 'Load movement for operations',
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
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="max-w-4xl">
        <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
          Products for learning autonomy and moving loads
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Pixel and Orbit are education platforms for ROS2 navigation. Cyborg is the industrial AMR for factories and warehouses.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-5">
          {learningProducts.map((product) => {
            const role = roles[product.slug];
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group grid overflow-hidden border border-border bg-surface transition hover:border-primary/40 md:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative min-h-64 bg-[#050706]">
                  <Image
                    src={product.image}
                    alt={`${product.name} ${role.label}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-contain p-5 transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <p className="text-sm font-semibold text-primary">{role.label}</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold">{product.name}</h2>
                  <p className="mt-2 text-sm font-medium text-muted">{role.accent}</p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{product.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-foreground group-hover:text-primary">
                    {role.action}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/products/cyborg"
          className="group relative min-h-[720px] overflow-hidden border border-border bg-[linear-gradient(180deg,#f4f5ef_0%,#dfe6d8_100%)] text-[#10140f] transition hover:border-primary/50"
        >
          <Image
            src={cyborg.image}
            alt="Cyborg industrial AMR"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-bottom p-5 transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgb(246_247_241/0.98),rgb(246_247_241/0.72),transparent)] p-7 md:p-9">
            <p className="text-sm font-semibold text-[#3e6c25]">{roles.cyborg.label}</p>
            <h2 className="mt-2 font-heading text-5xl font-bold leading-none md:text-6xl">Cyborg</h2>
            <p className="mt-4 text-sm font-semibold text-[#46513f]">{payload(cyborg)} variant planning</p>
            <p className="mt-5 max-w-md text-base leading-7 text-[#394236]">{cyborg.description}</p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#10140f] px-5 py-3 text-sm font-semibold text-white">
              {roles.cyborg.action}
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

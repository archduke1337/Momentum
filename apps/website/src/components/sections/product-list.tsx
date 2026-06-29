'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Boxes, PackageCheck, SlidersHorizontal } from 'lucide-react';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';

const categories = [
  { label: 'All robots', value: 'all' },
  { label: 'AMR platforms', value: 'amr' },
  { label: 'Future systems', value: 'fleet-management' },
];

function productPayload(product: Product) {
  if (product.variants?.length) {
    return product.variants.map((variant) => variant.payload).join(', ');
  }

  return product.specifications['Payload Capacity'] ?? 'Configured per use case';
}

export function ProductList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            AMR platforms
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
            Robots for practical material movement
          </h1>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">
          Compare current Momentum platforms by payload, role, and deployment fit. More assets, CAD packs, and field data can be added as the product library grows.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            className={`min-h-10 rounded-full border px-4 text-sm font-medium transition ${
              activeCategory === category.value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-surface text-muted hover:border-primary/35 hover:text-foreground'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-8 lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold">Future product space</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              This category is reserved for upcoming software and fleet-management modules. It is ready for content as the roadmap becomes public.
            </p>
          </div>
        ) : null}

        {filtered.map((product: Product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:border-primary/40 hover:bg-surface-elevated"
          >
            <div className="relative h-72 bg-accent">
              <Image
                src={product.image}
                alt={`${product.name} AMR platform`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain p-6 transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-heading text-3xl font-bold">{product.name}</h2>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Pilot-ready
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-primary">{productPayload(product)}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>

              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-3 text-muted">
                  <Boxes className="size-4 text-primary" aria-hidden="true" />
                  <span>{product.tagline}</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <PackageCheck className="size-4 text-primary" aria-hidden="true" />
                  <span>{product.industries.slice(0, 3).map((item) => item.replace(/-/g, ' ')).join(', ')}</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <SlidersHorizontal className="size-4 text-primary" aria-hidden="true" />
                  <span>{product.features.slice(0, 2).join(', ')}</span>
                </div>
              </div>

              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-foreground transition group-hover:text-primary">
                Open product page
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

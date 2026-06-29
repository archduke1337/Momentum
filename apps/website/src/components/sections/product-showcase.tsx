'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';
import RevealText from '@/components/smoothui/reveal-text';

const featuredOrder = ['orbit', 'pixel', 'cyborg'];

function ProductTile({ product, featured = false }: { product: Product; featured?: boolean }) {
  const payload = product.variants
    ? product.variants.map((variant) => variant.payload).join(', ')
    : product.specifications['Payload Capacity'];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:border-primary/40 hover:bg-surface-elevated ${
        featured ? 'grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]' : 'min-h-[250px]'
      }`}
    >
      <div className={`relative bg-accent ${featured ? 'min-h-[300px] lg:min-h-full' : 'h-44'}`}>
        <Image
          src={product.image}
          alt={`${product.name} autonomous mobile robot`}
          fill
          sizes={featured ? '(max-width: 1024px) 100vw, 42vw' : '(max-width: 1024px) 100vw, 30vw'}
          className="object-contain p-6 transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className={`flex flex-col ${featured ? 'p-7 md:p-10' : 'p-6'}`}>
        <p className="text-sm font-medium text-primary">{payload}</p>
        <h3 className={`mt-3 font-heading font-bold leading-tight ${featured ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
          {product.tagline}
        </p>
        <p className="mt-5 line-clamp-4 text-sm leading-6 text-muted">
          {product.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-foreground transition group-hover:text-primary">
          View details
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function ProductShowcase() {
  const orderedProducts = featuredOrder
    .map((slug) => products.find((product: Product) => product.slug === slug))
    .filter(Boolean) as Product[];

  const [featured, ...rest] = orderedProducts;

  return (
    <section className="industrial-section mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
          <RevealText direction="up" triggerOnView>Robots that start small and scale deliberately</RevealText>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          Momentum is building a focused AMR portfolio for material movement, not a catalogue of unrelated automation promises.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.95fr]">
        {featured ? <ProductTile product={featured} featured /> : null}
        <div className="grid gap-5">
          {rest.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

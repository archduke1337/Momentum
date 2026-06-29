'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';
import GlowHover from '@/components/smoothui/glow-hover-card';
import RevealText from '@/components/smoothui/reveal-text';
import AnimatedTags from '@/components/smoothui/animated-tags';

const categories = ['all', ...new Set(products.map((p) => p.category))];

export function ProductList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <p className="text-sm text-muted font-medium tracking-wide mb-4">AMR Platforms</p>
        <h1 className="font-heading text-5xl font-bold tracking-tight">
          <RevealText direction="up">Our Products</RevealText>
        </h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Autonomous mobile robots built for Indian industrial environments. From compact agile bots to heavy-duty haulers.
        </p>
      </div>

      <div className="mt-8">
        <AnimatedTags
          initialTags={categories}
          selectedTags={[activeCategory]}
          onChange={(tags) => setActiveCategory(tags[0] ?? 'all')}
        />
      </div>

      <div className="mt-10">
        <GlowHover
          items={filtered.map((product: Product) => ({
            id: product.id,
            element: (
              <Link
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-surface-elevated block"
              >
                <div className="aspect-[4/3] bg-accent relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">
                    {product.category === 'amr' ? 'Autonomous Mobile Robot' : product.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                  {product.variants && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.variants.map((v) => (
                        <span key={v.id} className="rounded-full border border-border bg-accent px-2.5 py-1 text-[11px] text-muted">
                          {v.payload}
                        </span>
                      ))}
                    </div>
                  )}
                  {!product.variants && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                      <span>{product.specifications['Payload Capacity']}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span>{product.specifications['Speed']}</span>
                    </div>
                  )}
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

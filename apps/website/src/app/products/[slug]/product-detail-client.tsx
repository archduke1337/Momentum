'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import SmoothButton from '@/components/smoothui/smooth-button';
import ProductBreadcrumb from '@/components/smoothui/product-breadcrumb';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const allImages = product.images ?? [product.image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <ProductBreadcrumb productName={product.name} />

      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
            {product.category === 'amr' ? 'Autonomous Mobile Robot' : product.category}
          </span>
          <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight">{product.name}</h1>
          <p className="mt-3 text-lg text-primary">{product.tagline}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            {product.description}
          </p>

          {/* Image gallery */}
          <div className="mt-10">
            <div className="aspect-[4/3] rounded-2xl border border-border bg-surface relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={allImages[activeImage]}
                    alt={`${product.name} view ${activeImage + 1}`}
                    fill
                    className="object-contain p-6"
                    priority={activeImage === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-16 rounded-lg border overflow-hidden shrink-0 transition-all duration-300 ${
                      activeImage === i
                        ? 'border-primary ring-1 ring-primary/30'
                        : 'border-border hover:border-muted/40'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <ul className="mt-5 space-y-4">
              {product.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-6">
                Specifications
              </h2>
              <div className="space-y-5">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center pb-4 border-b border-border last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-muted">{key}</span>
                    <span className="text-sm font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link href="/contact">
                <SmoothButton variant="default" size="lg" className="rounded-full w-full px-6 py-4 text-sm font-semibold">
                  Request a Quote
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmoothButton>
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                Industries
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.industries.map((industry: string) => (
                  <span
                    key={industry}
                    className="rounded-full border border-border bg-accent px-3 py-1.5 text-xs text-muted"
                  >
                    {industry.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

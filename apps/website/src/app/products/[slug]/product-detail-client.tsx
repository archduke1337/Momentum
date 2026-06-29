'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Factory, PackageCheck } from 'lucide-react';
import ProductBreadcrumb from '@/components/smoothui/product-breadcrumb';
import { products } from '@workspace/content';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const allImages = product.images ?? [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const specEntries = Object.entries(product.specifications);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <ProductBreadcrumb productName={product.name} />

      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            Autonomous mobile robot
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-xl font-medium text-primary">{product.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            {product.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Book a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:border-primary/40"
            >
              Compare robots
            </Link>
          </div>
        </div>

        <div>
          <div className="media-chrome aspect-[4/3] bg-accent">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={allImages[activeImage]}
                  alt={`${product.name} product view ${activeImage + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-contain p-6"
                  priority={activeImage === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {allImages.length > 1 ? (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {allImages.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative size-20 shrink-0 overflow-hidden rounded-xl border transition ${
                    activeImage === i
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/35'
                  }`}
                  aria-label={`Show ${product.name} image ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-20 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-border bg-surface p-7">
          <h2 className="font-heading text-3xl font-bold">Platform fit</h2>
          <div className="mt-6 grid gap-4">
            <div className="flex gap-3">
              <PackageCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Best starting point</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{product.tagline}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Factory className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Industries</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {product.industries.map((industry) => industry.replace(/-/g, ' ')).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {specEntries.map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-muted-foreground">{key}</p>
              <p className="mt-3 font-heading text-2xl font-bold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-border bg-surface p-7 md:p-9">
        <h2 className="font-heading text-3xl font-bold">What this page can grow into</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          The product page is structured for future product photography, CAD previews, downloadable spec sheets, deployment videos, and customer proof as they become available.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div key={feature} className="flex gap-3 rounded-xl border border-border bg-background/45 p-4 text-sm text-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Factory, GraduationCap, PackageCheck } from 'lucide-react';
import ProductBreadcrumb from '@/components/smoothui/product-breadcrumb';
import { products } from '@workspace/content';

const productRoles: Record<string, { label: string; intent: string; icon: typeof GraduationCap }> = {
  pixel: {
    label: 'Compact Autonomous Mobile Robot',
    intent: 'Add your product intent statement here in CONTENT_TEMPLATES.md Section 3',
    icon: GraduationCap,
  },
  orbit: {
    label: 'Mid-Duty Autonomous Mobile Robot',
    intent: 'Add your product intent statement here in CONTENT_TEMPLATES.md Section 3',
    icon: GraduationCap,
  },
  cyborg: {
    label: 'Industrial Autonomous Mobile Robot',
    intent: 'Add your product intent statement here in CONTENT_TEMPLATES.md Section 3',
    icon: Factory,
  },
};

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;

  const allImages = product.images ?? [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const specEntries = Object.entries(product.specifications);
  const [activeVariantId, setActiveVariantId] = useState(product.variants?.[0]?.id ?? '');
  const activeVariant = product.variants?.find((variant) => variant.id === activeVariantId);
  const role = productRoles[product.slug] ?? productRoles.cyborg;
  const RoleIcon = role.icon;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-28">
      <ProductBreadcrumb productName={product.name} />

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            {role.label}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-3 text-xl font-medium text-primary">{product.tagline}</p>
          {product.description && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {product.description}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              {product.slug === 'cyborg' ? 'Pilot Cyborg' : 'Discuss kit'}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:border-primary/40"
            >
              Compare
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
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {allImages.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative size-16 shrink-0 overflow-hidden rounded-lg border transition ${
                    activeImage === i
                      ? 'border-primary ring-1 ring-primary/20'
                      : 'border-border hover:border-primary/35'
                  }`}
                  aria-label={`Show ${product.name} image ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-12 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border border-border bg-surface p-5">
          <h2 className="font-heading text-2xl font-bold">Details</h2>
          <div className="mt-4 grid gap-3">
            <div className="flex gap-3">
              <RoleIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">{role.label}</p>
                <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{role.intent}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <PackageCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">Industries</p>
                <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                  {product.industries.map((industry) => industry.replace(/-/g, ' ')).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {specEntries.map(([key, value]) => (
            <div key={key} className="border border-border bg-surface p-4">
              <p className="text-xs text-muted-foreground">{key}</p>
              <p className="mt-1.5 font-heading text-xl font-bold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border border-border bg-surface p-5 md:p-7">
        <h2 className="font-heading text-2xl font-bold">Features</h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div key={feature} className="flex gap-2.5 border border-border bg-background/45 p-3 text-sm text-muted">
              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-[13px]">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {product.variants?.length ? (
        <section className="mt-12 border border-border bg-surface p-5 md:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold">Variants</h2>
              <div className="mt-5 grid gap-1.5">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setActiveVariantId(variant.id)}
                    className={`flex h-10 items-center justify-between border px-3 text-left text-sm transition ${
                      activeVariantId === variant.id
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background/45 text-foreground hover:border-primary/40'
                    }`}
                  >
                    <span className="font-semibold">{variant.name}</span>
                    <span className="text-xs">{variant.payload}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              {activeVariant?.specificationImage ? (
                <div className="media-chrome aspect-[3/4] bg-white">
                  <Image
                    src={activeVariant.specificationImage}
                    alt={`${activeVariant.name} specification sheet`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex min-h-[360px] items-center justify-center border border-dashed border-border bg-background/45 p-6 text-center text-sm leading-6 text-muted">
                  <p>Specification sheet coming soon. Contact us for details.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

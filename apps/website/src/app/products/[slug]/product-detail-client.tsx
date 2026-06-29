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
    label: 'ROS2 education kit',
    intent: 'For learning SLAM, navigation, mapping, and robot software fundamentals.',
    icon: GraduationCap,
  },
  orbit: {
    label: 'Scaled navigation platform',
    intent: 'For larger experiments, route testing, payload movement, and applied autonomy learning.',
    icon: GraduationCap,
  },
  cyborg: {
    label: 'Industrial AMR',
    intent: 'For factories, warehouses, line-side delivery, and load-carrying material movement.',
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
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <ProductBreadcrumb productName={product.name} />

      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            {role.label}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-xl font-medium text-primary">{product.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            {product.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {product.slug === 'cyborg' ? (
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                Pilot Cyborg
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ) : (
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                Discuss education kit
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
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
        <div className="border border-border bg-surface p-7">
          <h2 className="font-heading text-3xl font-bold">Platform role</h2>
          <div className="mt-6 grid gap-4">
            <div className="flex gap-3">
              <RoleIcon className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">{role.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{role.intent}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <PackageCheck className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Use environments</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {product.industries.map((industry) => industry.replace(/-/g, ' ')).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {specEntries.map(([key, value]) => (
            <div key={key} className="border border-border bg-surface p-6">
              <p className="text-sm text-muted-foreground">{key}</p>
              <p className="mt-3 font-heading text-2xl font-bold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border border-border bg-surface p-7 md:p-9">
        <h2 className="font-heading text-3xl font-bold">
          {product.slug === 'cyborg' ? 'Industrial capabilities' : 'Learning outcomes'}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          {product.slug === 'cyborg'
            ? 'Cyborg focuses on repeatable load movement, operational routes, payload planning, and integration readiness.'
            : 'Pixel and Orbit are designed to make robotics concepts tangible through hardware, sensors, mapping, and ROS2 navigation practice.'}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature) => (
            <div key={feature} className="flex gap-3 border border-border bg-background/45 p-4 text-sm text-muted">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {product.variants?.length ? (
        <section className="mt-20 border border-border bg-surface p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold">Cyborg variants</h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                The specification sheets belong here: each variant can carry its own technical detail without being mistaken for the product hero image.
              </p>
              <div className="mt-7 grid gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setActiveVariantId(variant.id)}
                    className={`flex min-h-12 items-center justify-between border px-4 text-left text-sm transition ${
                      activeVariantId === variant.id
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background/45 text-foreground hover:border-primary/40'
                    }`}
                  >
                    <span className="font-semibold">{variant.name}</span>
                    <span>{variant.payload}</span>
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
                <div className="flex min-h-[420px] items-center justify-center border border-dashed border-border bg-background/45 p-8 text-center text-sm leading-6 text-muted">
                  Specification sheet for this variant will be added when finalized.
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

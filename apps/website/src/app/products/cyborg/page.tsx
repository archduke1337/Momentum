'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import AnimatedTabs from '@/components/ui/smoothui/animated-tabs';
import RevealText from '@/components/smoothui/reveal-text';
import SmoothButton from '@/components/smoothui/smooth-button';
import ProductBreadcrumb from '@/components/smoothui/product-breadcrumb';
import { products } from '@workspace/content';

const cyborg = products.find((p) => p.slug === 'cyborg')!;

const variantImages: Record<string, string> = {
  'cyborg-150': '/Product/cyborg/specifications/cyborg150.jpg',
  'cyborg-250': '/Product/cyborg/specifications/cyborg250.jpg',
  'cyborg-500': '/Product/cyborg/specifications/cyborg500.jpg',
  'cyborg-1000': '/Product/cyborg.png',
};

const whyCyborg = [
  {
    title: 'Modular by Design',
    desc: 'Swap payload decks, sensor modules, and battery packs without redesigning the base platform. One architecture covers 150kg to 1000kg.',
  },
  {
    title: 'Open Integration API',
    desc: 'Connect to your ERP, MES, or WMS through a documented API. No black boxes — you control the data flow.',
  },
  {
    title: 'Built for Indian Conditions',
    desc: 'Dust-resistant sensors, wide-voltage battery options, and navigation tuned for uneven factory floors.',
  },
  {
    title: 'Fleet-Ready from Day One',
    desc: 'Each Cyborg ships with fleet management software. Start with one unit, scale to fifty without re-architecting.',
  },
];

export default function CyborgProductClient() {
  const [activeVariant, setActiveVariant] = useState('cyborg-150');
  const variant = cyborg.variants?.find((v) => v.id === activeVariant);
  const tabs = [
    { id: 'cyborg-150', label: '150 kg' },
    { id: 'cyborg-250', label: '250 kg' },
    { id: 'cyborg-500', label: '500 kg' },
    { id: 'cyborg-1000', label: '1000 kg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <ProductBreadcrumb productName="Cyborg" />

      {/* Hero */}
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
            Autonomous Mobile Robot
          </span>
          <h1 className="mt-4 font-heading text-5xl font-bold tracking-tight">
            <RevealText direction="up">{cyborg.name}</RevealText>
          </h1>
          <p className="mt-3 text-lg text-primary">{cyborg.tagline}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            {cyborg.description}
          </p>

          {/* Variant selector tabs */}
          <div className="mt-8">
            <p className="text-xs text-muted uppercase tracking-[0.15em] mb-3">Payload Variants</p>
            <AnimatedTabs
              tabs={tabs}
              activeTab={activeVariant}
              onChange={setActiveVariant}
              variant="pill"
            />
          </div>

          {/* Variant image */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVariant}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                className="aspect-[4/3] rounded-2xl border border-border bg-surface relative overflow-hidden"
              >
                <Image
                  src={variantImages[activeVariant] ?? cyborg.image}
                  alt={variant?.name ?? cyborg.name}
                  fill
                  className="object-contain p-8"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Variant thumbnail strip */}
          <div className="mt-4 flex gap-3">
            {cyborg.variants?.map((v) => (
              <button
                key={v.id}
                onClick={() => setActiveVariant(v.id)}
                className={`relative w-20 h-16 rounded-lg border overflow-hidden transition-all duration-300 ${
                  activeVariant === v.id
                    ? 'border-primary ring-1 ring-primary/30'
                    : 'border-border hover:border-muted/40'
                }`}
              >
                <Image
                  src={variantImages[v.id] ?? cyborg.image}
                  alt={v.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <ul className="mt-5 space-y-4">
              {cyborg.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            {/* Specs for active variant */}
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-6">
                {variant?.name ?? 'Specifications'}
              </h2>
              <div className="space-y-5">
                {Object.entries(variant?.specifications ?? cyborg.specifications).map(([key, value]) => (
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
                {cyborg.industries.map((industry: string) => (
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

      {/* Why Cyborg section */}
      <section className="mt-24 border-t border-border pt-24">
        <h2 className="font-heading text-3xl font-bold tracking-tight mb-12">
          <RevealText direction="up" triggerOnView>Why Cyborg</RevealText>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {whyCyborg.map((item, i) => (
            <div
              key={item.title}
              className="border border-border rounded-2xl p-8 bg-surface"
            >
              <h3 className="text-lg font-semibold">
                <RevealText direction="up" delay={i * 80} triggerOnView>{item.title}</RevealText>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* All variants comparison */}
      {cyborg.variants && cyborg.variants.length > 0 && (
        <section className="mt-24 border-t border-border pt-24">
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-12">
            <RevealText direction="up" triggerOnView>Compare Variants</RevealText>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-6 text-muted font-medium">Specification</th>
                  {cyborg.variants.map((v) => (
                    <th key={v.id} className="text-left py-4 px-6 text-muted font-medium">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Payload Capacity', 'Speed', 'Battery', 'Run Time', 'Dimensions'].map((spec) => (
                  <tr key={spec} className="border-b border-border last:border-b-0">
                    <td className="py-4 pr-6 text-muted">{spec}</td>
                    {cyborg.variants!.map((v) => (
                      <td key={v.id} className="py-4 px-6 text-foreground font-medium">
                        {v.specifications[spec] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

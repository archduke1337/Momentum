'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Boxes, Factory, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const readiness = [
  { label: 'Payload range', value: '100 kg to 1000 kg' },
  { label: 'Built for', value: 'Factories and warehouses' },
  { label: 'Deployment style', value: 'Pilot first, scale next' },
];

const signals = [
  { icon: Factory, label: 'Indian floor conditions' },
  { icon: ShieldCheck, label: 'Safety-led deployment' },
  { icon: Boxes, label: 'Material movement focus' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,color-mix(in_srgb,var(--color-primary)_14%,transparent),transparent_34%)]" />
      <div className="mx-auto grid min-h-[88dvh] max-w-7xl items-center gap-12 px-6 pb-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-border bg-surface/70 px-3 py-1 text-sm text-muted shadow-sm backdrop-blur">
            Momentum Robotics
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.02] text-foreground md:text-6xl lg:text-7xl">
            Autonomous mobile robots for Indian industry
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            We help factories and warehouses move material safely with AMRs built for real floor conditions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Book a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-6 text-sm font-semibold text-foreground transition hover:border-primary/45 hover:bg-surface-elevated active:scale-[0.98]"
            >
              View robots
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="media-chrome aspect-[1.22/1] bg-[linear-gradient(145deg,#070907,#111812_55%,#090c09)]">
            <Image
              src="/Product/orbit/11.png"
              alt="Momentum Orbit autonomous mobile robot"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain p-5 md:p-8"
            />
            <div className="absolute inset-x-6 bottom-6 grid gap-2 rounded-xl border border-white/10 bg-background/70 p-3 backdrop-blur md:grid-cols-3">
              {readiness.map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-border bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-3">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.label} className="flex items-center gap-3 text-sm text-muted">
                <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-surface">
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                </span>
                <span>{signal.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

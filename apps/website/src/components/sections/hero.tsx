'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { HexagonPattern } from '@/components/ui/hexagon-pattern';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,var(--color-background)_0%,var(--color-surface)_50%,var(--color-background)_100%)]" />
      <div className="absolute inset-0 -z-10">
        <HexagonPattern
          radius={30}
          gap={5}
          className="stroke-primary/[0.05] fill-primary/[0.015]"
          strokeDasharray="2 4"
        />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-12 lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-8 lg:min-h-[100dvh]">
        {/* Left: Text content */}
        <div className="lg:pr-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted">Pune, Maharashtra</span>
            </div>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            Learn
            <br />
            autonomy.
            <br />
            <span className="text-primary">Move loads.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-base leading-7 text-muted"
          >
            Pixel and Orbit teach ROS2 navigation in labs. Cyborg carries real loads in factories and warehouses.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products/cyborg"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              See Cyborg
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface/50 px-7 text-sm font-semibold text-foreground transition hover:border-primary/40"
            >
              All platforms
            </Link>
          </motion.div>

          {/* Bottom stats strip */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex gap-10 border-t border-border pt-6"
          >
            <div>
              <p className="font-heading text-2xl font-bold text-primary">3</p>
              <p className="text-xs text-muted mt-1">Robot platforms</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-primary">ROS2</p>
              <p className="text-xs text-muted mt-1">Navigation stack</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-primary">India</p>
              <p className="text-xs text-muted mt-1">Built locally</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Product image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/Product/cyborg/Cyborg.png"
              alt="Cyborg industrial autonomous mobile robot"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain drop-shadow-[0_20px_60px_rgb(0,0,0/0.4)]"
            />
          </div>

          {/* Floating spec cards */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -left-4 bottom-8 rounded-xl border border-border bg-surface/80 px-4 py-3 backdrop-blur-md"
          >
            <p className="text-xs text-muted">Payload</p>
            <p className="font-heading text-lg font-bold">150–1000 kg</p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -right-4 top-8 rounded-xl border border-border bg-surface/80 px-4 py-3 backdrop-blur-md"
          >
            <p className="text-xs text-muted">Navigation</p>
            <p className="font-heading text-lg font-bold">LiDAR + SLAM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

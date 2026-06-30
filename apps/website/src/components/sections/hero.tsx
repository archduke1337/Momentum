'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { HexagonPattern } from '@/components/ui/hexagon-pattern';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[94dvh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,var(--color-background)_0%,var(--color-surface)_54%,var(--color-background)_100%)]" />
      <div className="absolute inset-0 -z-10">
        <HexagonPattern
          radius={35}
          gap={6}
          className="stroke-primary/[0.06] fill-primary/[0.02]"
          strokeDasharray="3 5"
        />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[12%] right-[-18%] z-0 w-[1050px] max-w-[105vw] md:right-[-9%] lg:bottom-[4%] lg:right-[-5%] xl:w-[1180px]"
      >
        <Image
          src="/Product/cyborg/Cyborg.png"
          alt="Cyborg industrial autonomous mobile robot"
          width={1600}
          height={900}
          priority
          sizes="(max-width: 768px) 105vw, 70vw"
          className="h-auto w-full object-contain drop-shadow-[0_36px_80px_rgb(0_0_0/0.55)]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(94dvh-6rem)] max-w-7xl flex-col px-6 pb-8">
        <div className="max-w-4xl pt-10 md:pt-14">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            ROS 2 · VDA 5050 · Made in India
          </motion.span>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-heading text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
          >
            Autonomous Material Handling.
            <br />
            <span className="text-gradient">Open Standards. No Lock-In.</span>
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl"
          >
            Momentum solves the last unautomated bottleneck in manufacturing — material movement between stations, racks, and zones. Built on ROS 2, standards-based, and cost-effective, from education labs to global factories.
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110 active:scale-[0.98]"
            >
              Explore Our Solutions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface-elevated px-6 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-surface hover:shadow-md hover:shadow-primary/10"
            >
              Talk to Our Team
            </Link>
          </motion.div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            150–1000 kg payloads · Deployed across automotive, pharma &amp; logistics
          </motion.p>
        </div>
      </div>
    </section>
  );
}

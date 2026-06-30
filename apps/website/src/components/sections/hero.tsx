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
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl font-bold leading-[0.96] text-foreground md:text-8xl lg:text-9xl"
          >
            Momentum Robotics
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl"
          >
            {/* TODO: Add real tagline */}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products/cyborg"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110 active:scale-[0.98]"
            >
              See Cyborg
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface-elevated px-6 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-surface hover:shadow-md hover:shadow-primary/10"
            >
              Explore platforms
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

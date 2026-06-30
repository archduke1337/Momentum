'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const waypoints = [
  { label: 'A', x: '12%', y: '72%' },
  { label: 'B', x: '38%', y: '58%' },
  { label: 'C', x: '62%', y: '44%' },
  { label: 'D', x: '85%', y: '30%' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-background">
      {/* Dense grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,242,70,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,242,70,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_80%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-6 pt-28 pb-8">
        <div className="flex flex-1 flex-col justify-center lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text */}
          <div className="lg:w-[42%] lg:shrink-0">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-5 font-mono text-xs tracking-[0.2em] text-primary/60 uppercase"
            >
              // autonomous navigation stack
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl font-bold leading-[0.92] tracking-tight md:text-7xl lg:text-[5rem]"
            >
              Map it.
              <br />
              Route it.
              <br />
              <span className="text-primary">Move it.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-md text-base leading-7 text-muted"
            >
              One robot platform for the full autonomy pipeline: learn navigation on Pixel, validate routes on Orbit, move loads on Cyborg.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
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
          </div>

          {/* Right: Robot with navigation overlay */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mt-12 lg:mt-0 lg:flex-1"
          >
            <div className="relative">
              {/* Robot image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/Product/cyborg/Cyborg.png"
                  alt="Cyborg industrial autonomous mobile robot"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_20px_60px_rgb(0,0,0/0.5)]"
                />
              </div>

              {/* Navigation path overlay */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 300"
                fill="none"
                aria-hidden="true"
              >
                {/* Dotted path line */}
                <path
                  d="M48 216 L152 174 L248 132 L340 90"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.6"
                  fill="none"
                />

                {/* Waypoint circles */}
                {[
                  { cx: 48, cy: 216 },
                  { cx: 152, cy: 174 },
                  { cx: 248, cy: 132 },
                  { cx: 340, cy: 90 },
                ].map((wp, i) => (
                  <g key={i}>
                    <circle cx={wp.cx} cy={wp.cy} r="5" fill="var(--color-primary)" fillOpacity="0.3" />
                    <circle cx={wp.cx} cy={wp.cy} r="2.5" fill="var(--color-primary)" />
                    <text
                      x={wp.cx + 9}
                      y={wp.cy + 1}
                      fill="var(--color-primary)"
                      fontSize="7"
                      fontFamily="monospace"
                      opacity="0.8"
                    >
                      {String.fromCharCode(65 + i)}
                    </text>
                  </g>
                ))}

                {/* Sensor range cones */}
                <path d="M48 216 L28 240 L68 240 Z" fill="var(--color-primary)" fillOpacity="0.08" />
                <path d="M340 90 L320 114 L360 114 Z" fill="var(--color-primary)" fillOpacity="0.08" />

                {/* Grid lines on the floor area */}
                <line x1="20" y1="260" x2="380" y2="260" stroke="var(--color-border)" strokeOpacity="0.3" strokeWidth="0.5" />
                <line x1="20" y1="280" x2="380" y2="280" stroke="var(--color-border)" strokeOpacity="0.3" strokeWidth="0.5" />
                <line x1="20" y1="300" x2="380" y2="300" stroke="var(--color-border)" strokeOpacity="0.3" strokeWidth="0.5" />
              </svg>

              {/* Spec annotations - integrated into the frame */}
              <div className="absolute left-0 top-4 border-l-2 border-primary/40 pl-3">
                <p className="font-mono text-[10px] tracking-wider text-primary/60 uppercase">Payload</p>
                <p className="font-heading text-lg font-bold text-foreground">150–1000 kg</p>
              </div>

              <div className="absolute right-0 bottom-4 border-r-2 border-primary/40 pr-3 text-right">
                <p className="font-mono text-[10px] tracking-wider text-primary/60 uppercase">Runtime</p>
                <p className="font-heading text-lg font-bold text-foreground">8–16 hrs</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal-style status bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-auto grid grid-cols-3 divide-x divide-border/50 border-t border-border/50 pt-4 text-center font-mono text-[11px] tracking-wider text-muted/70"
        >
          <div>
            <span className="text-primary/60">$</span> platforms:{' '}
            <span className="text-foreground">3</span>
          </div>
          <div>
            <span className="text-primary/60">$</span> stack:{' '}
            <span className="text-foreground">ROS2</span>
          </div>
          <div>
            <span className="text-primary/60">$</span> origin:{' '}
            <span className="text-foreground">India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

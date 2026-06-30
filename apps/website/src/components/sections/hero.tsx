import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80dvh] overflow-hidden bg-background">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,242,70,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,242,70,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_80%)]" />

      <div className="relative mx-auto flex min-h-[80dvh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-6xl font-bold leading-[0.92] tracking-tight md:text-8xl lg:text-9xl">
          Momentum Robotics
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
          ROS2 navigation platforms for education and industrial load movement. Built in India.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            View products
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface/50 px-7 text-sm font-semibold text-foreground transition hover:border-primary/40"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

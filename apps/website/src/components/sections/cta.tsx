'use client';

import WaveText from '@/components/smoothui/wave-text';
import Link from 'next/link';
import MagneticButton from '@/components/ui/smoothui/magnetic-button';
import SmoothButton from '@/components/smoothui/smooth-button';

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl font-bold md:text-5xl leading-tight tracking-tight">
            <WaveText amplitude={6} staggerDelay={0.03}>Work smart.</WaveText>
            <br />
            <WaveText amplitude={6} staggerDelay={0.03}>Move heavy.</WaveText>
          </h2>
          <p className="mt-5 text-muted max-w-md leading-relaxed">
            Automate with Momentum Robotics. Let us show you how our AMRs can transform your operations.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact">
              <MagneticButton className="rounded-full px-8 py-4 text-sm font-semibold" strength={0.3}>
                Book a Demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </MagneticButton>
            </Link>
            <Link href="/products">
              <SmoothButton variant="outline" size="lg" className="rounded-full px-8 py-4 text-sm font-medium">
                Explore Products
              </SmoothButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

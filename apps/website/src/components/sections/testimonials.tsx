'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import RevealText from '@/components/smoothui/reveal-text';

const testimonials = [
  {
    quote: 'Momentum delivered a solution aligned with our manufacturing expectations, enabling contactless movement in production areas.',
    role: 'Head of Engineering',
    industry: 'Automotive Components',
  },
  {
    quote: 'The flexible software architecture enabled deep customization without reinventing the base platform — something most AMR vendors could not support.',
    role: 'Head of Industrial Automation',
    industry: 'Manufacturing',
  },
  {
    quote: 'The AMRs have been operating with no major downtime, supporting high-frequency material movement across our facility.',
    role: 'Head of Operations',
    industry: 'Industrial Manufacturing',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-y border-border bg-surface/20">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">Customer Stories</p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl leading-tight tracking-tight">
              What our
              <br />
              customers say
            </h2>

            {/* Slide indicators */}
            <div className="mt-10 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-10 h-10 rounded-full text-xs font-medium transition-all duration-300 ${
                    active === i
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border text-muted hover:text-foreground hover:border-muted/40'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex items-center">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              onSlideChange={(swiper: SwiperType) => setActive(swiper.realIndex)}
              className="w-full"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 border-l-2 border-primary pl-8">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4 pl-8">
                      <div className="w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center">
                        <span className="text-sm font-semibold text-muted">{t.role.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{t.role}</div>
                        <div className="text-xs text-muted mt-0.5">{t.industry}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

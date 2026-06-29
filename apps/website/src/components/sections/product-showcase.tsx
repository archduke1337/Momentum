'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@workspace/content';
import type { Product } from '@workspace/types';
import RevealText from '@/components/smoothui/reveal-text';

export function ProductShowcase() {
  return (
    <section className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">
              <RevealText direction="up">Our AMR Platforms</RevealText>
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl tracking-tight">
              <RevealText direction="up" delay={50}>Industrial Mobile Robots</RevealText>
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80 hidden md:flex items-center gap-1"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        slidesPerView={1.2}
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="!overflow-visible px-6"
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <Link
              href={`/products/${product.slug}`}
              className="group block relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-primary/30 h-full"
            >
              <div className="aspect-[4/3] bg-accent relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold">
                  {product.category === 'amr' ? 'Autonomous Mobile Robot' : product.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                {product.variants ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.variants.map((v) => (
                      <span key={v.id} className="rounded-full border border-border bg-accent px-2.5 py-1 text-[11px] text-muted">
                        {v.payload}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                    <span>{product.specifications['Payload Capacity']}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{product.specifications['Speed']}</span>
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

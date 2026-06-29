'use client';

import Link from 'next/link';
import {
  HeroColorPanelsRoot,
  HeroColorPanelsContainer,
  HeroColorPanelsContent,
  HeroColorPanelsHeading,
  HeroColorPanelsDescription,
  HeroColorPanelsActions,
  HeroColorPanelsVisual,
  HeroColorPanelsMobileVisual,
} from '@/components/ui/hero-color-panel';

export function Hero() {
  return (
    <HeroColorPanelsRoot
      className="min-h-[100dvh]"
      title={
        <span className="font-heading">
          Automate material<br />movement.
        </span>
      }
      subtitle={
        <span className="text-primary font-heading">
          Accelerate productivity.
        </span>
      }
      description="We help manufacturers and warehouses improve efficiency, safety, and throughput using autonomous mobile robots that integrate seamlessly into existing operations."
      srTitle="Momentum Robotics — Autonomous Mobile Robots"
      ctaProps={{
        label: 'Explore AMR Solutions',
        href: '/products',
        target: '_self',
      }}
      showBadges={false}
      desktopShaderProps={{
        width: 1280,
        height: 720,
        colors: ['#00c853', '#69f0ae', '#00897b', '#004d40'],
        colorBack: '#08080a00',
        density: 4.5,
        angle1: 0.6,
        angle2: 0.3,
        length: 1.2,
        edges: true,
        blur: 0.3,
        fadeIn: 0.9,
        fadeOut: 0.2,
        gradient: 0.6,
        speed: 3,
        scale: 0.95,
        rotation: 180,
      }}
      mobileShaderProps={{
        colors: ['#00c853', '#69f0ae', '#00897b', '#004d40'],
        speed: 3,
        scale: 0.95,
      }}
    >
      <HeroColorPanelsContainer>
        <HeroColorPanelsContent>
          <HeroColorPanelsHeading
            headingClassName="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
          />
          <HeroColorPanelsDescription
            descriptionClassName="text-muted text-lg leading-relaxed max-w-xl"
          />
          <HeroColorPanelsActions>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                Explore AMR Solutions
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:border-muted/40 hover:text-foreground active:scale-[0.98]"
              >
                Book a Demo
              </Link>
            </div>
          </HeroColorPanelsActions>
        </HeroColorPanelsContent>
        <HeroColorPanelsVisual className="relative hidden lg:block lg:h-[400px] xl:h-[500px]" />
      </HeroColorPanelsContainer>
      <HeroColorPanelsMobileVisual />
    </HeroColorPanelsRoot>
  );
}

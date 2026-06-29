'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';

const primaryLinks = [
  { label: 'Pixel', href: '/products/pixel', note: 'ROS2 kit' },
  { label: 'Orbit', href: '/products/orbit', note: 'Scaled lab' },
  { label: 'Cyborg', href: '/products/cyborg', note: 'Industrial AMR' },
  { label: 'Solutions', href: '/solutions', note: 'Pilot paths' },
  { label: 'Company', href: '/about', note: 'Momentum' },
];

export function MainNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
      >
        <div
          className={`mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 border px-3 transition duration-300 ${
            scrolled
              ? 'border-border bg-background/88 shadow-[0_18px_50px_rgb(0_0_0/0.22)] backdrop-blur-xl'
              : 'border-white/10 bg-background/48 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center px-1">
            <Logo className="h-5 w-auto" width={132} height={28} />
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Main navigation">
            <div className="flex items-center border border-border bg-surface/70">
              {primaryLinks.map((link) => {
                const active = pathname === link.href || (link.href !== '/about' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative flex min-h-11 flex-col justify-center border-r border-border px-4 last:border-r-0 transition hover:bg-primary/10 ${
                      active ? 'bg-primary text-primary-foreground' : 'text-foreground'
                    }`}
                  >
                    <span className="text-sm font-semibold leading-none">{link.label}</span>
                    <span className={`mt-1 text-[11px] leading-none ${active ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {link.note}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Pilot Cyborg
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center border border-border bg-surface text-foreground lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-8" aria-label="Mobile navigation">
              <div className="grid border border-border">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between border-b border-border bg-surface px-5 py-5 last:border-b-0"
                  >
                    <span>
                      <span className="block font-heading text-3xl font-bold">{link.label}</span>
                      <span className="mt-1 block text-sm text-muted">{link.note}</span>
                    </span>
                    <ArrowRight className="size-5 text-primary" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <div className="mt-auto grid gap-4 pt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Pilot Cyborg
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

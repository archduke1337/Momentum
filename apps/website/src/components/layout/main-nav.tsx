'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuIndicator,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from '@/components/unlumen-ui/motion-navigation-menu';

const productLinks = [
  { name: 'Pixel', href: '/products/pixel', desc: '100kg compact AMR' },
  { name: 'Orbit', href: '/products/orbit', desc: '500kg heavy-duty AMR' },
  { name: 'Cyborg', href: '/products/cyborg', desc: '150–1000kg modular' },
];

const industryLinks = [
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Warehouses', href: '/industries/warehouses-logistics' },
  { name: 'Pharma', href: '/industries/pharma' },
  { name: 'FMCG', href: '/industries/fmcg' },
  { name: 'Education', href: '/industries/education' },
];

const solutionLinks = [
  { name: 'Warehouse Automation', href: '/solutions/warehouse-automation' },
  { name: 'Inventory Management', href: '/solutions/inventory-management' },
  { name: 'Education Automation', href: '/solutions/education-automation' },
  { name: 'Startup Automation', href: '/solutions/startup-automation' },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const resourceLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: '/resources/documentation' },
  { name: 'Changelog', href: '/resources/changelog' },
];

const hl = 'bg-primary/[0.08] rounded-lg';
const contentHl = 'bg-primary/[0.06] rounded-lg ring-1 ring-primary/10';

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
    return () => { document.body.style.overflow = ''; };
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
              ? 'border-border bg-background/88 shadow-[0_18px_50px_rgb(0,0,0/0.22)] backdrop-blur-xl'
              : 'border-white/10 bg-background/48 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center px-1">
            <Logo className="h-5 w-auto" width={132} height={28} />
          </Link>

          <nav className="hidden justify-center lg:flex" aria-label="Main navigation">
            <MotionNavigationMenu
              viewportClassName="bg-surface border border-border shadow-xl shadow-black/5 backdrop-blur-md"
              springStiffness={350}
              springDamping={32}
            >
              <MotionNavigationMenuList highlightClassName={hl}>
                <MotionNavigationMenuItem value="products">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[12px] font-medium text-muted hover:text-foreground">
                    Products
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[420px] grid-cols-3 gap-1 p-1">
                      {productLinks.map((p) => (
                        <MotionNavigationMenuLink key={p.href} href={p.href} className="flex flex-col gap-0.5 rounded-lg p-3">
                          <span className="text-sm font-medium text-foreground">{p.name}</span>
                          <span className="text-xs text-muted-foreground">{p.desc}</span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="industries">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[12px] font-medium text-muted hover:text-foreground">
                    Industries
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[280px] grid-cols-2 gap-1 p-1">
                      {industryLinks.map((i) => (
                        <MotionNavigationMenuLink key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm text-foreground">
                          {i.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="solutions">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[12px] font-medium text-muted hover:text-foreground">
                    Solutions
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[260px] gap-1 p-1">
                      {solutionLinks.map((s) => (
                        <MotionNavigationMenuLink key={s.href} href={s.href} className="rounded-lg px-3 py-2.5 text-sm text-foreground">
                          {s.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="company">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[12px] font-medium text-muted hover:text-foreground">
                    Company
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[240px] gap-1 p-1">
                      {companyLinks.map((c) => (
                        <MotionNavigationMenuLink key={c.href} href={c.href} className="rounded-lg px-3 py-2 text-sm text-foreground">
                          {c.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="resources">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[12px] font-medium text-muted hover:text-foreground">
                    Resources
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[240px] gap-1 p-1">
                      {resourceLinks.map((r) => (
                        <MotionNavigationMenuLink key={r.href} href={r.href} className="rounded-lg px-3 py-2 text-sm text-foreground">
                          {r.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuIndicator />
              </MotionNavigationMenuList>
            </MotionNavigationMenu>
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
                {[
                  { label: 'Products', href: '/products' },
                  { label: 'Industries', href: '/industries' },
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Company', href: '/about' },
                  { label: 'Resources', href: '/blog' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between border-b border-border bg-surface px-5 py-5 last:border-b-0"
                  >
                    <span className="font-heading text-3xl font-bold">{link.label}</span>
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

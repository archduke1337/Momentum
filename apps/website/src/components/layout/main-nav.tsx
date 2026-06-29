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

const hl = 'bg-primary/[0.08] rounded-md';
const contentHl = 'bg-primary/[0.06] rounded-md ring-1 ring-primary/10';

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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-2.5"
      >
        <div
          className={`mx-auto flex h-[52px] max-w-7xl items-center justify-between border px-3 transition duration-300 ${
            scrolled
              ? 'border-border bg-background/92 shadow-[0_8px_30px_rgb(0,0,0/0.15)] backdrop-blur-xl'
              : 'border-white/8 bg-background/40 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center shrink-0 pl-0.5">
            <Logo className="h-[17px] w-auto" width={110} height={20} />
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <MotionNavigationMenu
              viewportClassName="bg-surface border border-border shadow-lg shadow-black/5 backdrop-blur-md"
              springStiffness={400}
              springDamping={28}
            >
              <MotionNavigationMenuList highlightClassName={hl}>
                <MotionNavigationMenuItem value="products">
                  <MotionNavigationMenuTrigger className="px-2.5 py-1 text-[12px] font-medium text-muted hover:text-foreground transition-colors">
                    Products
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[380px] gap-0 p-1">
                      {productLinks.map((p) => (
                        <MotionNavigationMenuLink key={p.href} href={p.href} className="flex items-center justify-between rounded-md px-3 py-2">
                          <div className="flex flex-col">
                            <span className="text-[13px] font-medium text-foreground">{p.name}</span>
                            <span className="text-[11px] text-muted-foreground">{p.desc}</span>
                          </div>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="industries">
                  <MotionNavigationMenuTrigger className="px-2.5 py-1 text-[12px] font-medium text-muted hover:text-foreground transition-colors">
                    Industries
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[260px] grid-cols-2 gap-0 p-1">
                      {industryLinks.map((i) => (
                        <MotionNavigationMenuLink key={i.href} href={i.href} className="rounded-md px-3 py-1.5 text-[13px] text-foreground">
                          {i.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="solutions">
                  <MotionNavigationMenuTrigger className="px-2.5 py-1 text-[12px] font-medium text-muted hover:text-foreground transition-colors">
                    Solutions
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[260px] gap-0 p-1">
                      {solutionLinks.map((s) => (
                        <MotionNavigationMenuLink key={s.href} href={s.href} className="rounded-md px-3 py-1.5 text-[13px] text-foreground">
                          {s.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="company">
                  <MotionNavigationMenuTrigger className="px-2.5 py-1 text-[12px] font-medium text-muted hover:text-foreground transition-colors">
                    Company
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[220px] gap-0 p-1">
                      {companyLinks.map((c) => (
                        <MotionNavigationMenuLink key={c.href} href={c.href} className="rounded-md px-3 py-1.5 text-[13px] text-foreground">
                          {c.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="resources">
                  <MotionNavigationMenuTrigger className="px-2.5 py-1 text-[12px] font-medium text-muted hover:text-foreground transition-colors">
                    Resources
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[220px] gap-0 p-1">
                      {resourceLinks.map((r) => (
                        <MotionNavigationMenuLink key={r.href} href={r.href} className="rounded-md px-3 py-1.5 text-[13px] text-foreground">
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

          <div className="hidden items-center gap-1.5 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-4 text-[12px] font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Pilot Cyborg
              <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-8 items-center justify-center border border-border bg-surface text-foreground rounded-md lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
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
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-7xl flex-col px-5 pb-6" aria-label="Mobile navigation">
              <div className="grid border border-border">
                {[
                  { label: 'Products', href: '/products' },
                  { label: 'Industries', href: '/industries' },
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Company', href: '/about' },
                  { label: 'Resources', href: '/blog' },
                ].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between border-b border-border bg-surface px-4 py-3.5 last:border-b-0"
                    >
                      <span className="font-heading text-xl font-bold">{link.label}</span>
                      <ArrowRight className="size-4 text-primary" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2.5 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-[13px] font-semibold text-primary-foreground"
                >
                  Pilot Cyborg
                  <ArrowRight className="size-3.5" aria-hidden="true" />
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

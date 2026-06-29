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
  { name: 'Pixel', href: '/products/pixel', desc: '100kg compact AMR', tag: 'Lab' },
  { name: 'Orbit', href: '/products/orbit', desc: '500kg heavy-duty AMR', tag: 'Lab' },
  { name: 'Cyborg', href: '/products/cyborg', desc: '150–1000kg modular platform', tag: 'Industrial' },
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
  { name: 'Warehouse Automation', href: '/solutions/warehouse-automation', desc: 'Pick, sort, goods-to-person' },
  { name: 'Inventory Management', href: '/solutions/inventory-management', desc: 'Cycle counting, audit trails' },
  { name: 'Education Automation', href: '/solutions/education-automation', desc: 'Campus logistics, ROS2 labs' },
  { name: 'Startup Automation', href: '/solutions/startup-automation', desc: 'Pay-as-you-grow model' },
];

const companyLinks = [
  { name: 'About', href: '/about', desc: 'Our mission and team' },
  { name: 'Contact', href: '/contact', desc: 'Start with one route' },
  { name: 'Careers', href: '/careers', desc: 'Join Momentum' },
];

const resourceLinks = [
  { name: 'Blog', href: '/blog', desc: 'Insights and articles' },
  { name: 'Documentation', href: '/resources/documentation', desc: 'Product guides' },
  { name: 'Changelog', href: '/resources/changelog', desc: 'Version history' },
];

const hl = 'bg-primary/[0.06] rounded-lg';
const contentHl = 'bg-primary/[0.05] rounded-lg ring-1 ring-primary/[0.08]';

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
        className="fixed inset-x-0 top-0 z-50 px-4 pt-3"
      >
        <div
          className={`mx-auto flex h-14 max-w-7xl items-center justify-between border px-4 transition duration-300 ${
            scrolled
              ? 'border-border bg-background/90 shadow-[0_12px_40px_rgb(0,0,0/0.18)] backdrop-blur-xl'
              : 'border-white/10 bg-background/50 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Logo className="h-[18px] w-auto" width={120} height={22} />
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <MotionNavigationMenu
              viewportClassName="bg-surface border border-border shadow-xl shadow-black/5 backdrop-blur-md"
              springStiffness={380}
              springDamping={30}
            >
              <MotionNavigationMenuList highlightClassName={hl}>
                <MotionNavigationMenuItem value="products">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors">
                    Products
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[460px] grid-cols-1 gap-0.5 p-1.5">
                      {productLinks.map((p) => (
                        <MotionNavigationMenuLink key={p.href} href={p.href} className="flex items-center justify-between rounded-lg px-3.5 py-2.5">
                          <div className="flex flex-col">
                            <span className="text-[13px] font-medium text-foreground">{p.name}</span>
                            <span className="text-[11px] text-muted-foreground mt-0.5">{p.desc}</span>
                          </div>
                          <span className="text-[10px] font-medium text-primary/70 uppercase tracking-wider">{p.tag}</span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="industries">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors">
                    Industries
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[300px] grid-cols-2 gap-0.5 p-1.5">
                      {industryLinks.map((i) => (
                        <MotionNavigationMenuLink key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-[13px] text-foreground">
                          {i.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="solutions">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors">
                    Solutions
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[320px] gap-0.5 p-1.5">
                      {solutionLinks.map((s) => (
                        <MotionNavigationMenuLink key={s.href} href={s.href} className="flex flex-col rounded-lg px-3.5 py-2.5">
                          <span className="text-[13px] font-medium text-foreground">{s.name}</span>
                          <span className="text-[11px] text-muted-foreground mt-0.5">{s.desc}</span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="company">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors">
                    Company
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[280px] gap-0.5 p-1.5">
                      {companyLinks.map((c) => (
                        <MotionNavigationMenuLink key={c.href} href={c.href} className="flex flex-col rounded-lg px-3.5 py-2.5">
                          <span className="text-[13px] font-medium text-foreground">{c.name}</span>
                          <span className="text-[11px] text-muted-foreground mt-0.5">{c.desc}</span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="resources">
                  <MotionNavigationMenuTrigger className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground transition-colors">
                    Resources
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[280px] gap-0.5 p-1.5">
                      {resourceLinks.map((r) => (
                        <MotionNavigationMenuLink key={r.href} href={r.href} className="flex flex-col rounded-lg px-3.5 py-2.5">
                          <span className="text-[13px] font-medium text-foreground">{r.name}</span>
                          <span className="text-[11px] text-muted-foreground mt-0.5">{r.desc}</span>
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuIndicator />
              </MotionNavigationMenuList>
            </MotionNavigationMenu>
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-primary px-5 text-[13px] font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            >
              Pilot Cyborg
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-9 items-center justify-center border border-border bg-surface text-foreground rounded-lg lg:hidden"
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
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between border-b border-border bg-surface px-5 py-4 last:border-b-0"
                    >
                      <span className="font-heading text-2xl font-bold">{link.label}</span>
                      <ArrowRight className="size-4 text-primary" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
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

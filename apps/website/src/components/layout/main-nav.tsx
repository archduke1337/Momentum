'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
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

const solutionLinks = [
  { name: 'Line-Side Delivery', href: '/solutions/line-side-delivery', desc: 'JIT parts & kits to the line' },
  { name: 'Warehouse & Fulfilment', href: '/solutions/warehouse-automation', desc: 'Picking, replenishment, cross-dock' },
  { name: 'Pallet & Heavy Payload', href: '/solutions/heavy-payload-transport', desc: 'Forklift-replacement moves to 1 t' },
  { name: 'Fleet Orchestration', href: '/solutions/fleet-management', desc: 'VDA 5050 mixed-fleet control' },
  { name: 'Custom Integration', href: '/solutions/custom-integration', desc: 'PLC, WMS & ROS 2 extension' },
];

const industryLinks = [
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Electronics', href: '/industries/electronics' },
  { name: 'Textiles & Apparel', href: '/industries/textiles-apparel' },
  { name: 'Warehousing & 3PL', href: '/industries/warehouses-logistics' },
  { name: 'E-commerce & Retail', href: '/industries/e-commerce-retail' },
  { name: 'Food & FMCG', href: '/industries/fmcg' },
  { name: 'Pharma', href: '/industries/pharma' },
  { name: 'Education', href: '/industries/education' },
];

const productLinks = [
  { name: 'Pixel', href: '/products/pixel', desc: 'ROS 2 education AMR' },
  { name: 'Orbit', href: '/products/orbit', desc: 'Multi-robot research platform' },
  { name: 'Cyborg', href: '/products/cyborg', desc: '150–1000 kg industrial AMR' },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Why Momentum', href: '/why-momentum' },
  { name: 'Technology', href: '/technology' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const resourceLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Documentation', href: '/resources/documentation' },
  { name: 'Changelog', href: '/resources/changelog' },
];

const hl = 'bg-accent';
const contentHl = 'bg-accent';

function isActive(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(prefix + '/');
}

function isCompanyActive(pathname: string) {
  return companyLinks.some((c) => isActive(pathname, c.href));
}

function ActiveDot({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <span className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-primary" />
  );
}

const triggerClass = (active: boolean) =>
  `relative px-3 py-1.5 text-sm font-semibold transition-colors ${active ? 'text-primary' : 'text-foreground hover:text-primary'}`;

export function MainNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 380, damping: 40, restDelta: 0.001 });

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
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[101] h-0.5 origin-left bg-primary"
      />
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[100] px-4 pt-3"
      >
        <div
          className={`mx-auto flex h-14 max-w-7xl items-center justify-between border px-4 transition duration-300 ${
            scrolled
              ? 'border-border bg-background/95 backdrop-blur-xl'
              : 'border-border/40 bg-background/50 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Logo className="h-5 w-auto" width={120} height={22} />
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <MotionNavigationMenu
              viewportClassName="bg-surface border border-border"
              springStiffness={400}
              springDamping={28}
            >
              <MotionNavigationMenuList highlightClassName={hl}>
                <MotionNavigationMenuItem value="solutions">
                  <MotionNavigationMenuTrigger className={triggerClass(isActive(pathname, '/solutions'))}>
                    Solutions
                    <ActiveDot active={isActive(pathname, '/solutions')} />
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="w-[420px] divide-y divide-border p-1">
                      {solutionLinks.map((s, i) => (
                        <MotionNavigationMenuLink key={s.href} href={s.href} className={`group flex flex-row items-center justify-between gap-3 p-3 ${pathname === s.href ? 'bg-primary/10 text-primary' : 'text-foreground'}`}>
                          <div className="flex items-baseline gap-3">
                            <span className="label-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-sm font-semibold">{s.name}</span>
                              <span className="text-xs text-muted-foreground">{s.desc}</span>
                            </div>
                          </div>
                          <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="industries">
                  <MotionNavigationMenuTrigger className={triggerClass(isActive(pathname, '/industries'))}>
                    Industries
                    <ActiveDot active={isActive(pathname, '/industries')} />
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="grid w-[380px] grid-cols-2 p-1">
                      {[0, 1].map((col) => (
                        <div key={col} className={`divide-y divide-border ${col === 1 ? 'border-l border-border' : ''}`}>
                          {industryLinks
                            .filter((_, i) => i % 2 === col)
                            .map((ind) => (
                              <MotionNavigationMenuLink key={ind.href} href={ind.href} className={`p-3 text-sm ${pathname === ind.href ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}>
                                {ind.name}
                              </MotionNavigationMenuLink>
                            ))}
                        </div>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="products">
                  <MotionNavigationMenuTrigger className={triggerClass(isActive(pathname, '/products'))}>
                    Products
                    <ActiveDot active={isActive(pathname, '/products')} />
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="w-[380px] divide-y divide-border p-1">
                      {productLinks.map((p) => (
                        <MotionNavigationMenuLink key={p.href} href={p.href} className={`group flex flex-row items-center justify-between gap-3 p-3 ${pathname === p.href ? 'bg-primary/10 text-primary' : 'text-foreground'}`}>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold">{p.name}</span>
                            <span className="text-xs text-muted-foreground">{p.desc}</span>
                          </div>
                          <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="company">
                  <MotionNavigationMenuTrigger className={triggerClass(isCompanyActive(pathname))}>
                    Company
                    <ActiveDot active={isCompanyActive(pathname)} />
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="w-[220px] divide-y divide-border p-1">
                      {companyLinks.map((c) => (
                        <MotionNavigationMenuLink key={c.href} href={c.href} className={`p-3 text-sm ${pathname === c.href ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}>
                          {c.name}
                        </MotionNavigationMenuLink>
                      ))}
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="resources">
                  <MotionNavigationMenuTrigger className={triggerClass(isActive(pathname, '/blog') || isActive(pathname, '/news') || isActive(pathname, '/resources'))}>
                    Resources
                    <ActiveDot active={isActive(pathname, '/blog') || isActive(pathname, '/news') || isActive(pathname, '/resources')} />
                  </MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName={contentHl}>
                    <div className="w-[200px] divide-y divide-border p-1">
                      {resourceLinks.map((r) => (
                        <MotionNavigationMenuLink key={r.href} href={r.href} className={`p-3 text-sm ${pathname === r.href ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'}`}>
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
              className="group inline-flex h-9 items-center gap-1.5 bg-foreground px-4 text-xs font-medium tracking-tight text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Request demo
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-9 items-center justify-center border border-border bg-surface text-foreground transition-colors hover:border-foreground lg:hidden"
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
                  { label: 'Solutions', href: '/solutions' },
                  { label: 'Industries', href: '/industries' },
                  { label: 'Products', href: '/products' },
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
                      className={`flex items-center justify-between border-b border-border px-5 py-4 last:border-b-0 ${isActive(pathname, link.href) ? 'bg-accent text-primary' : 'bg-surface text-foreground'}`}
                    >
                      <span className="text-2xl tracking-tight">{link.label}</span>
                      <ArrowRight className="size-5 text-muted" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-2.5 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-foreground px-6 text-sm font-medium tracking-tight text-background"
                >
                  Request a demo
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

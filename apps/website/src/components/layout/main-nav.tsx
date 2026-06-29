'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Briefcase,
  Building2,
  Factory,
  Mail,
  Menu,
  Newspaper,
  PackageCheck,
  X,
} from 'lucide-react';
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
  { name: 'Pixel', href: '/products/pixel', desc: 'Compact AMR for 100 kg movement' },
  { name: 'Orbit', href: '/products/orbit', desc: 'Heavy-duty AMR for plant logistics' },
  { name: 'Cyborg', href: '/products/cyborg', desc: 'Configurable platform from 150 kg to 1000 kg' },
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
  { name: 'About', href: '/about', icon: Building2 },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const resourceLinks = [
  { name: 'Blog', href: '/blog', icon: Newspaper },
  { name: 'Documentation', href: '/resources/documentation', icon: BookOpen },
  { name: 'Changelog', href: '/resources/changelog', icon: PackageCheck },
];

const mobileLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/blog' },
];

const hl = 'bg-primary/10 rounded-lg';

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
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3"
      >
        <div
          className={`mx-auto w-full max-w-7xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'border-border bg-background/88 shadow-[0_18px_60px_rgb(0_0_0/0.18)] backdrop-blur-xl'
              : 'border-transparent bg-background/45 backdrop-blur-md'
          }`}
        >
          <div className="flex h-14 items-center justify-between px-3 sm:px-4">
            <Link href="/" className="flex items-center rounded-lg px-1 py-2">
              <Logo className="h-5 w-auto" width={132} height={28} />
            </Link>

            <div className="hidden items-center lg:flex">
              <MotionNavigationMenu
                viewportClassName="border-border bg-surface-elevated/98 shadow-2xl shadow-black/20"
                springStiffness={420}
                springDamping={36}
              >
                <MotionNavigationMenuList highlightClassName={hl}>
                  <MotionNavigationMenuItem value="products">
                    <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
                      Products
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
                      <div className="grid w-[520px] grid-cols-[1.15fr_0.85fr] gap-2 p-1">
                        <MotionNavigationMenuLink href="/products" className="rounded-xl border border-border bg-background/55 p-4">
                          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Boxes className="size-5" aria-hidden="true" />
                          </span>
                          <span className="mt-4 text-base font-semibold text-foreground">AMR platforms</span>
                          <span className="text-sm leading-6 text-muted-foreground">Compare Pixel, Orbit, and Cyborg by payload, floor fit, and pilot scope.</span>
                        </MotionNavigationMenuLink>
                        <div className="grid gap-1">
                          {productLinks.map((p) => (
                            <MotionNavigationMenuLink key={p.href} href={p.href} className="rounded-lg p-3">
                              <span className="text-sm font-semibold text-foreground">{p.name}</span>
                              <span className="text-xs leading-5 text-muted-foreground">{p.desc}</span>
                            </MotionNavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  <MotionNavigationMenuItem value="solutions">
                    <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
                      Solutions
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
                      <div className="grid w-[340px] gap-1 p-1">
                        {solutionLinks.map((s) => (
                          <MotionNavigationMenuLink key={s.href} href={s.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground">
                            {s.name}
                          </MotionNavigationMenuLink>
                        ))}
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  <MotionNavigationMenuItem value="industries">
                    <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
                      Industries
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
                      <div className="grid w-[360px] grid-cols-2 gap-1 p-1">
                        {industryLinks.map((i) => (
                          <MotionNavigationMenuLink key={i.href} href={i.href} className="rounded-lg px-3 py-2 text-sm font-medium text-foreground">
                            {i.name}
                          </MotionNavigationMenuLink>
                        ))}
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  <MotionNavigationMenuItem value="company">
                    <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
                      Company
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
                      <div className="grid w-[300px] gap-1 p-1">
                        {companyLinks.map((c) => {
                          const Icon = c.icon;
                          return (
                            <MotionNavigationMenuLink key={c.href} href={c.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground">
                              <span className="flex items-center gap-2">
                                <Icon className="size-4 text-primary" aria-hidden="true" />
                                {c.name}
                              </span>
                            </MotionNavigationMenuLink>
                          );
                        })}
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  <MotionNavigationMenuItem value="resources">
                    <MotionNavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground">
                      Resources
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
                      <div className="grid w-[320px] gap-1 p-1">
                        {resourceLinks.map((r) => {
                          const Icon = r.icon;
                          return (
                            <MotionNavigationMenuLink key={r.href} href={r.href} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground">
                              <span className="flex items-center gap-2">
                                <Icon className="size-4 text-primary" aria-hidden="true" />
                                {r.name}
                              </span>
                            </MotionNavigationMenuLink>
                          );
                        })}
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  <MotionNavigationMenuIndicator />
                </MotionNavigationMenuList>
              </MotionNavigationMenu>
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <ThemeToggle />
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                Book a demo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-7xl flex-col px-6 pb-8" aria-label="Mobile navigation">
              <div className="grid gap-2">
                {mobileLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.035, duration: 0.28 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 font-heading text-2xl font-bold text-foreground"
                    >
                      {item.label}
                      <ArrowRight className="size-5 text-primary" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto grid gap-3 pt-8">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Book a demo
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

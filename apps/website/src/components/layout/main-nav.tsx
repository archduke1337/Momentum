'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
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

const hl = 'bg-foreground/[0.04] rounded-lg';

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3"
      >
        <div
          className={`mx-auto w-[94%] max-w-6xl rounded-xl border transition-all duration-300 ${
            scrolled
              ? 'bg-background/95 border-border shadow-sm'
              : 'bg-transparent border-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-11 px-4">
            <Link href="/" className="flex items-center shrink-0">
              <Logo className="h-4 w-auto" width={100} height={20} />
            </Link>

            <div className="hidden lg:flex items-center">
              <MotionNavigationMenu
                viewportClassName="bg-surface-elevated border-border shadow-xl shadow-black/5"
                springStiffness={400}
                springDamping={34}
              >
                <MotionNavigationMenuList highlightClassName={hl}>
                  <MotionNavigationMenuItem value="products">
                    <MotionNavigationMenuTrigger className="px-3 py-1 text-[12px] font-medium text-muted hover:text-foreground">
                      Products
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
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
                    <MotionNavigationMenuTrigger className="px-3 py-1 text-[12px] font-medium text-muted hover:text-foreground">
                      Industries
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
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
                    <MotionNavigationMenuTrigger className="px-3 py-1 text-[12px] font-medium text-muted hover:text-foreground">
                      Solutions
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
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
                    <MotionNavigationMenuTrigger className="px-3 py-1 text-[12px] font-medium text-muted hover:text-foreground">
                      Company
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
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
                    <MotionNavigationMenuTrigger className="px-3 py-1 text-[12px] font-medium text-muted hover:text-foreground">
                      Resources
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={hl}>
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
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-[12px] font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
              >
                Book a Demo
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1 p-1.5 relative w-8 h-8 items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block w-4 h-[1.5px] bg-foreground origin-center" />
              <motion.span animate={mobileOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="block w-4 h-[1.5px] bg-foreground" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} className="block w-4 h-[1.5px] bg-foreground origin-center" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background lg:hidden flex flex-col justify-center"
          >
            <nav className="flex flex-col items-center gap-1 px-8">
              {[
                { label: 'Products', href: '/products' },
                { label: 'Industries', href: '/industries' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'Company', href: '/about' },
                { label: 'Resources', href: '/blog' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-3xl font-heading font-bold text-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10 flex justify-center items-center gap-3">
              <ThemeToggle />
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-semibold">
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

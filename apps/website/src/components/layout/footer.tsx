import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { SocialLinks } from './social-links';
import { HexagonPattern } from '@/components/ui/hexagon-pattern';

const footerGroups = [
  {
    title: 'Products',
    items: [
      { label: 'Pixel', href: '/products/pixel' },
      { label: 'Orbit', href: '/products/orbit' },
      { label: 'Cyborg', href: '/products/cyborg' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { label: 'Warehouse Automation', href: '/solutions/warehouse-automation' },
      { label: 'Inventory Management', href: '/solutions/inventory-management' },
      { label: 'Startup Automation', href: '/solutions/startup-automation' },
      { label: 'Education Automation', href: '/solutions/education-automation' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Documentation', href: '/resources/documentation' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/25">
      <HexagonPattern
        radius={34}
        gap={9}
        className="stroke-primary/[0.05] fill-primary/[0.015]"
        strokeDasharray="3 6"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Link href="/" className="inline-block">
              <Logo width={150} height={32} className="h-6 w-auto" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              Autonomous mobile robots for Indian factories, warehouses, and teams entering industrial automation with discipline.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Book a demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium text-foreground">Pune, Maharashtra, India</p>
            <p className="mt-1 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Momentum Robotics Pvt. Ltd. All rights reserved.
            </p>
            <div className="mt-4 flex flex-wrap gap-5">
              <Link href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

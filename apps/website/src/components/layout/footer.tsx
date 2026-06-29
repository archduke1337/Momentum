import Link from 'next/link';
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
      { label: 'Education', href: '/solutions/education-automation' },
      { label: 'Startups', href: '/solutions/startup-automation' },
    ],
  },
  {
    title: 'Industries',
    items: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Pharma', href: '/industries/pharma' },
      { label: 'Warehouses', href: '/industries/warehouses-logistics' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <HexagonPattern
        radius={30}
        gap={8}
        className="stroke-primary/[0.04] fill-primary/[0.01]"
        strokeDasharray="3 5"
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-16 border-b border-border">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Logo width={140} height={28} className="h-5 w-auto" />
            </Link>
            <p className="mt-5 text-sm text-muted leading-relaxed">
              Autonomous mobile robots engineered for Indian industry. Manufacturing, warehousing, and logistics automation.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
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

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Momentum Robotics Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

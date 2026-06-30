import Link from 'next/link';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Logo } from './logo';
import { SocialLinks } from './social-links';

const footerLinks = [
  {
    title: 'Products', href: '/products',
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
      { label: 'Education Automation', href: '/solutions/education-automation' },
      { label: 'Startup Automation', href: '/solutions/startup-automation' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Changelog', href: '/resources/changelog' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA strip */}
      <div className="border-b border-border bg-surface/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">
              Let&apos;s automate your floor.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Tell us your payloads, routes, and floor conditions — we&apos;ll map the right platform for your operation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110 active:scale-[0.98]"
          >
            Request a Demo
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Top row: brand + columns */}
        <div className="grid gap-10 py-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center">
              <Logo width={140} height={28} className="h-5 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Open, standards-based autonomous mobile robots for industry and education.
              Engineered in Pune, deployable worldwide.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-muted">
              <a href="mailto:hello@momentumrobotics.in" className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                hello@momentumrobotics.in
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                Pune, Maharashtra, India
              </p>
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
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

        {/* Bottom row: Copyright */}
        <div className="py-6 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Momentum Robotics Pvt. Ltd.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

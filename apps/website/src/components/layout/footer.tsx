import Link from 'next/link';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Logo } from './logo';
import { SocialLinks } from './social-links';

const footerLinks = [
  {
    title: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Line-Side Delivery', href: '/solutions/line-side-delivery' },
      { label: 'Warehouse & Fulfilment', href: '/solutions/warehouse-automation' },
      { label: 'Pallet & Heavy Payload', href: '/solutions/heavy-payload-transport' },
      { label: 'Fleet Orchestration', href: '/solutions/fleet-management' },
      { label: 'Custom Integration', href: '/solutions/custom-integration' },
    ],
  },
  {
    title: 'Industries',
    href: '/industries',
    items: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Warehousing & 3PL', href: '/industries/warehouses-logistics' },
      { label: 'E-commerce & Retail', href: '/industries/e-commerce-retail' },
      // Temporarily disabled: { label: 'Pharma', href: '/industries/pharma' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
  {
    title: 'Products',
    href: '/products',
    items: [
      { label: 'Pixel', href: '/products/pixel' },
      { label: 'Orbit', href: '/products/orbit' },
      { label: 'Cyborg', href: '/products/cyborg' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Why Momentum', href: '/why-momentum' },
      { label: 'Technology', href: '/technology' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Changelog', href: '/resources/changelog' },
      { label: 'News', href: '/news' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      {/* CTA strip */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">
              <span aria-hidden className="size-1.5 self-center bg-primary" />
              Contact
            </span>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              Walk us through your floor.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              A rough layout, your payloads, and where the parts need to go. That&apos;s
              enough for a first conversation.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0 gap-2">
            Talk to an engineer
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Top row: brand + columns */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.3fr_2.7fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center">
              <Logo width={140} height={28} className="h-5 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Autonomous mobile robots on an open ROS&nbsp;2 stack, built for factories,
              warehouses and classrooms. Designed and manufactured in Pune.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-muted">
              <a href="mailto:hello@momentumrobotics.in" className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                <Mail className="size-4 text-muted-foreground" aria-hidden="true" />
                hello@momentumrobotics.in
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-muted-foreground" aria-hidden="true" />
                Pune, Maharashtra, India
              </p>
            </div>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="label-mono mb-5 block">
                  {group.href ? (
                    <Link href={group.href} className="transition-colors hover:text-foreground">
                      {group.title}
                    </Link>
                  ) : (
                    group.title
                  )}
                </h3>
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
      </div>

      {/* Wordmark, half-sunk behind the meta rule */}
      <div aria-hidden className="overflow-hidden border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <span className="display block translate-y-[0.14em] whitespace-nowrap text-[clamp(3.5rem,13.5vw,11rem)] leading-none text-foreground/[0.05] select-none">
            MOMENTUM
          </span>
        </div>
      </div>

      {/* Meta row */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">
            &copy; {new Date().getFullYear()} Momentum Robotics Pvt. Ltd.
          </p>
          <span className="label-mono hidden md:block">Pune · 18.5204° N / 73.8567° E</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="label-mono transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="label-mono transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

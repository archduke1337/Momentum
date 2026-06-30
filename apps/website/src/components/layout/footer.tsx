import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from './logo';
import { SocialLinks } from './social-links';

const links = [
  { label: 'Pixel', href: '/products/pixel' },
  { label: 'Orbit', href: '/products/orbit' },
  { label: 'Cyborg', href: '/products/cyborg' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Documentation', href: '/resources/documentation' },
  { label: 'Careers', href: '/careers' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <Logo width={150} height={32} className="h-6 w-auto" />
            <h2 className="mt-10 max-w-3xl font-heading text-5xl font-bold leading-none md:text-7xl">
              {/* TODO: Add real tagline */}
            </h2>
          </div>

          <div className="grid content-between gap-10">
            <p className="max-w-xl text-base leading-7 text-muted">
              {/* TODO: Add real description */}
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Contact
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-background px-4 py-4 text-sm font-medium text-muted transition hover:bg-primary hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Pune, Maharashtra, India</p>
            <p className="mt-1 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Momentum Robotics Pvt. Ltd. All rights reserved.
            </p>
            <div className="mt-4 flex gap-5">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
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

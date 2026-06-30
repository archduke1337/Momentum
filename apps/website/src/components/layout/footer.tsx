import Link from 'next/link';
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
      <div className="mx-auto max-w-7xl px-6">
        {/* Top row: Logo + Social */}
        <div className="flex items-center justify-between py-8">
          <Link href="/" className="flex items-center">
            <Logo width={140} height={28} className="h-5 w-auto" />
          </Link>
          <SocialLinks />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-10 border-t border-border sm:grid-cols-4">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-foreground mb-4">{group.title}</h3>
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

        {/* Bottom row: Copyright */}
        <div className="py-6 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} iMomentum Robotics Pvt. Ltd.
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

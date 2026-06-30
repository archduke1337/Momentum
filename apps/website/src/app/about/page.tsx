import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, industries } from '@workspace/content';
import { MediaPlaceholder } from '@/components/ui/media-placeholder';

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">
            Momentum Robotics
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Building ROS2 navigation platforms for education and industrial load movement.
          </p>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid divide-x-0 divide-y divide-border/50 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:px-6 md:py-16">
              <p className="text-sm font-medium text-primary">Products</p>
              <p className="mt-1 text-sm text-muted">{products.length} platforms</p>
            </div>
            <div className="py-10 md:px-6 md:py-16">
              <p className="text-sm font-medium text-primary">Industries</p>
              <p className="mt-1 text-sm text-muted">{industries.length} sectors</p>
            </div>
            <div className="py-10 md:px-6 md:py-16">
              <p className="text-sm font-medium text-primary">Location</p>
              <p className="mt-1 text-sm text-muted">Pune, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">Get in touch</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Questions about our products, pilots, or partnerships.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Contact us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

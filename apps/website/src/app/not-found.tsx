import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80dvh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-8xl font-bold text-primary md:text-9xl">404</p>
      <h1 className="mt-6 font-heading text-3xl font-bold md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The page you are looking for does not exist or has been moved. Let us get you back on track.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
        >
          Go home
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="/products"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/40 px-6 text-sm font-semibold text-foreground transition hover:border-primary/45"
        >
          View products
        </Link>
      </div>
    </section>
  );
}

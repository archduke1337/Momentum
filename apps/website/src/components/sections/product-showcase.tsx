import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@workspace/content';
import { MediaPlaceholder } from '@/components/ui/media-placeholder';

const pixel = products.find((product) => product.slug === 'pixel');
const orbit = products.find((product) => product.slug === 'orbit');
const cyborg = products.find((product) => product.slug === 'cyborg');

const productCards = [pixel, orbit, cyborg].filter(Boolean);

export function ProductShowcase() {
  if (productCards.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-border bg-surface p-5" aria-busy="true">
              <div className="mb-4 aspect-[4/3] animate-pulse rounded-md bg-muted-foreground/20" />
              <div className="mb-3 h-5 w-1/2 animate-pulse rounded-md bg-muted-foreground/20" />
              <div className="h-4 w-3/4 animate-pulse rounded-md bg-muted-foreground/20" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {productCards.map((product) => (
          <Link
            key={product!.id}
            href={`/products/${product!.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative aspect-[4/3] bg-surface-elevated">
              {product!.image ? (
                <Image
                  src={product!.image}
                  alt={product!.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-5 transition duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <MediaPlaceholder label={product!.name} aspect="aspect-[4/3]" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-heading text-2xl font-bold">{product!.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{product!.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">
                View
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

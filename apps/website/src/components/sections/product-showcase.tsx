import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@workspace/content';
import { MediaPlaceholder } from '@/components/ui/media-placeholder';

const pixel = products.find((product) => product.slug === 'pixel');
const orbit = products.find((product) => product.slug === 'orbit');
const cyborg = products.find((product) => product.slug === 'cyborg');

const productCards = [pixel, orbit, cyborg].filter(Boolean);

const keySpec: Record<string, { payload: string; runtime: string; role: string }> = {
  pixel: { payload: '300 kg', runtime: '8 h', role: 'Education kit' },
  orbit: { payload: '1000 kg', runtime: '12 h', role: 'Research platform' },
  cyborg: { payload: '150–1000 kg', runtime: 'up to 16 h', role: 'Industrial · 4 variants' },
};

export function ProductShowcase() {
  if (productCards.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16">
        <div className="grid border border-border md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border-border p-8 not-last:border-b md:not-last:border-b-0 md:not-last:border-r" aria-busy="true">
              <div className="mb-6 aspect-[4/3] animate-pulse bg-surface-elevated" />
              <div className="mb-3 h-6 w-1/2 animate-pulse bg-surface-elevated" />
              <div className="h-4 w-3/4 animate-pulse bg-surface-elevated" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-16">
      <div className="grid border-l border-t border-border md:grid-cols-3">
        {productCards.map((product) => (
          <Link
            key={product!.id}
            href={`/products/${product!.slug}`}
            className="group flex flex-col border-b border-r border-border p-8 transition-colors hover:bg-surface md:p-10"
          >
            <div className="relative aspect-[4/3] bg-surface-elevated">
              {product!.image ? (
                <Image
                  src={product!.image}
                  alt={product!.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <MediaPlaceholder label={product!.name} aspect="aspect-[4/3]" />
              )}
            </div>
            <div className="mt-6 flex flex-1 flex-col">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-3xl tracking-tight">{product!.name}</h3>
                <span className="label-mono">{keySpec[product!.slug]?.role}</span>
              </div>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{product!.tagline}</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 border-t border-border pt-4">
                <div>
                  <span className="spec-key">Payload</span>
                  <div className="spec-value mt-1 text-sm text-foreground">
                    {keySpec[product!.slug]?.payload}
                  </div>
                </div>
                <div>
                  <span className="spec-key">Runtime</span>
                  <div className="spec-value mt-1 text-sm text-foreground">
                    {keySpec[product!.slug]?.runtime}
                  </div>
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground group-hover:text-primary">
                View platform
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

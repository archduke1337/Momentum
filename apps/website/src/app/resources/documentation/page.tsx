import type { Metadata } from 'next';
import Link from 'next/link';
import { products, docs } from '@workspace/content';
import type { Product, DocPage } from '@workspace/types';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Product documentation, specifications, and setup guides for Momentum Robotics AMRs.',
};

export default function DocumentationPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl">
        <h1 className="font-heading text-5xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Technical documentation and guides for our AMR platforms.
        </p>
      </div>
      <div className="mt-14 space-y-10">
        {products.map((product: Product) => {
          const productDocs = docs.filter(
            (d: DocPage) => d.product === product.slug
          );
          return (
            <div key={product.id}>
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {productDocs.map((doc: DocPage) => (
                  <Link
                    key={`${doc.product}-${doc.section}`}
                    href={`/resources/documentation/${doc.product}/${doc.section}`}
                    className="rounded-xl border border-border bg-surface px-5 py-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:bg-surface-elevated"
                  >
                    {doc.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

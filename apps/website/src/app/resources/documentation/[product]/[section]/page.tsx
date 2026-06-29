import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { docs } from '@workspace/content';
import type { DocPage } from '@workspace/types';

type Props = {
  params: Promise<{ product: string; section: string }>;
};

export async function generateStaticParams() {
  return docs.map((doc: DocPage) => ({
    product: doc.product,
    section: doc.section,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product, section } = await params;
  const doc = docs.find(
    (d: DocPage) => d.product === product && d.section === section
  );
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.content,
  };
}

export default async function DocDetailPage({ params }: Props) {
  const { product, section } = await params;
  const doc = docs.find(
    (d: DocPage) => d.product === product && d.section === section
  );
  if (!doc) notFound();

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl">
        <p className="text-sm text-muted capitalize">
          {doc.product.replace('-', ' ')} · {doc.section.replace('-', ' ')}
        </p>
        <h1 className="mt-2 text-4xl font-bold">{doc.title}</h1>
        <div className="mt-8 text-muted-foreground leading-relaxed">
          {doc.content}
        </div>
      </div>
    </section>
  );
}

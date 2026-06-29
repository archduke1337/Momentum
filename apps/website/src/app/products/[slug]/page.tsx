import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@workspace/content';
import ProductDetailClient from './product-detail-client';

type Props = {
  params: Promise<{ slug: string }>;
};

function findProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  return <ProductDetailClient slug={slug} />;
}

import type { Metadata } from 'next';
import ProductDetailClient from '../[slug]/product-detail-client';

export const metadata: Metadata = {
  title: 'Cyborg',
  description:
    'Cyborg is Momentum Robotics industrial AMR for factories, warehouses, line-side movement, and load carrying.',
};

export default function CyborgPage() {
  return <ProductDetailClient slug="cyborg" />;
}

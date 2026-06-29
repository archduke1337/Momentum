import type { Metadata } from 'next';
import { ProductList } from '@/components/sections/product-list';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our range of Autonomous Mobile Robots — Pixel, Orbit, and Cyborg platforms.',
};

export default function ProductsPage() {
  return <ProductList />;
}

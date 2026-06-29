import type { Metadata } from 'next';
import { ProductList } from '@/components/sections/product-list';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Momentum Robotics products: Pixel and Orbit education platforms, and Cyborg industrial AMR for factories and warehouses.',
};

export default function ProductsPage() {
  return <ProductList />;
}

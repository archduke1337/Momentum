'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/smoothui/breadcrumb';

export default function ProductBreadcrumb({ productName }: { productName: string }) {
  return (
    <Breadcrumb
      items={[
        { label: 'Products', href: '/products' },
        { label: productName },
      ]}
      className="mb-12"
    />
  );
}

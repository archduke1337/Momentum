import type { Metadata } from 'next';
import { IndustryList } from '@/components/sections/industry-list';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Autonomous mobile robot solutions for education, hospitality, automotive, pharma, and manufacturing.',
};

export default function IndustriesPage() {
  return <IndustryList />;
}

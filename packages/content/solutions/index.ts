import type { Solution, CaseStudy } from '@workspace/types';

export const solutions: Solution[] = [
  {
    id: 'warehouse-automation',
    name: 'Warehouse Automation',
    slug: 'warehouse-automation',
    industry: 'warehouses-logistics',
    description:
      'End-to-end warehouse operations with autonomous mobile robots for picking, sorting, and goods-to-person workflows.',
    benefits: [
      '60% faster order fulfillment',
      'Reduced labor costs',
      '24/7 operational capability',
      'Real-time inventory visibility',
    ],
    useCases: [
      'E-commerce fulfillment',
      'Cold storage operations',
      'Cross-docking',
      'Returns processing',
    ],
    image: '/Assets/Square_metalcut.avif',
    products: ['pixel', 'orbit', 'cyborg-250'],
  },
  {
    id: 'education-automation',
    name: 'Education Automation',
    slug: 'education-automation',
    industry: 'education',
    description:
      'Smart campus logistics with autonomous delivery robots for labs, libraries, and administrative buildings.',
    benefits: [
      'Automated inter-building delivery',
      'Research platform for students',
      'Reduced campus logistics burden',
      'Modern campus experience',
    ],
    useCases: [
      'Lab sample transport',
      'Library book delivery',
      'Administrative document routing',
      'Campus mail delivery',
    ],
    image: '/Assets/draw.avif',
    products: ['cyborg-250'],
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    slug: 'inventory-management',
    industry: 'warehouses-logistics',
    description:
      'Automated inventory tracking and cycle counting with autonomous robots that scan and audit stock in real-time.',
    benefits: [
      '99.9% inventory accuracy',
      'Automated cycle counting',
      'Reduced shrinkage',
      'Real-time stock visibility',
    ],
    useCases: [
      'Warehouse cycle counts',
      'Retail stock auditing',
      'Pharma inventory compliance',
      'Asset tracking',
    ],
    image: '/Assets/69a6432069d0ae8ae745d6a0_Square Card-7.avif',
    products: ['pixel', 'cyborg-250'],
  },
  {
    id: 'startup-automation',
    name: 'Startup Automation',
    slug: 'startup-automation',
    industry: 'manufacturing',
    description:
      'Scalable automation solutions for growing businesses. Start small and expand your robot fleet as operations grow.',
    benefits: [
      'Pay-as-you-grow model',
      'Quick deployment',
      'Minimal infrastructure changes',
      'Fleet scaling roadmap',
    ],
    useCases: [
      'Small warehouse ops',
      'Startup manufacturing',
      'Lab automation',
      'Prototype logistics',
    ],
    image: '/Assets/drawing.avif',
    products: ['pixel', 'cyborg-250'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-warehouse-1',
    title: 'Automated Fulfillment for E-Commerce Giant',
    slug: 'ecommerce-fulfillment',
    client: 'Leading E-Commerce Company',
    industry: 'warehouses-logistics',
    product: 'pixel',
    challenge:
      'Manual picking processes causing 48-hour order fulfillment times during peak seasons with high error rates.',
    solution:
      'Deployed a fleet of 20 Pixel AMRs for goods-to-person picking, integrated with existing WMS for real-time task allocation.',
    results: [
      'Fulfillment time reduced to 12 hours',
      '99.7% pick accuracy achieved',
      'ROI achieved in 14 months',
      'Scaled to 50 units in Year 2',
    ],
    image: '/Assets/Square_metalcut.avif',
  },
  {
    id: 'cs-automotive-1',
    title: 'Line-Side Delivery for Automotive Assembly',
    slug: 'automotive-line-side',
    client: 'Major Automotive Manufacturer',
    industry: 'automotive',
    product: 'orbit',
    challenge:
      'Takt-time violations due to delayed parts delivery to assembly stations causing production bottlenecks.',
    solution:
      'Implemented Orbit AMRs for just-in-time parts delivery with ERP integration for automated order triggering.',
    results: [
      'Takt-time compliance improved to 99.2%',
      '60% reduction in line stoppages',
      'Annual savings of ₹2.4 crore',
      'Zero safety incidents',
    ],
    image: '/Assets/69a643215a51cb0780c58bc1_Square Card-6.avif',
  },
  {
    id: 'cs-pharma-1',
    title: 'GMP-Compliant Transport for Pharma Manufacturing',
    slug: 'pharma-gmp-transport',
    client: 'Top Pharma Company',
    industry: 'pharma',
    product: 'cyborg-250',
    challenge:
      'Manual material transport risking GMP compliance with limited traceability of raw materials between buildings.',
    solution:
      'Deployed Cyborg 250 fleet with cleanroom-compatible design and full audit trail logging for every material transfer.',
    results: [
      '100% GMP compliance maintained',
      'Full traceability achieved',
      '40% reduction in transfer time',
      'Zero contamination incidents',
    ],
    image: '/Assets/Agility_Digit.avif',
  },
];

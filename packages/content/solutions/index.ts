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
      'Faster order fulfillment workflows',
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
      'Higher inventory accuracy',
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
    image: '/industries/arno-senoner-bCgsKqFzUcg-unsplash.jpg',
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
    title: 'Warehouse Pilot Blueprint',
    slug: 'ecommerce-fulfillment',
    client: 'Example deployment scenario',
    industry: 'warehouses-logistics',
    product: 'pixel',
    challenge:
      'Teams need a low-risk way to test goods movement without changing the entire warehouse layout.',
    solution:
      'Start with a single route, validate charging, safety zones, operator handoff, and WMS integration before expanding.',
    results: [
      'Mapped pilot route',
      'Defined success metrics',
      'Integration checklist prepared',
      'Expansion plan documented',
    ],
    image: '/Assets/Square_metalcut.avif',
  },
  {
    id: 'cs-automotive-1',
    title: 'Line-Side Delivery Blueprint',
    slug: 'automotive-line-side',
    client: 'Example deployment scenario',
    industry: 'automotive',
    product: 'orbit',
    challenge:
      'Assembly teams need repeatable line feeding without adding more manual vehicle traffic.',
    solution:
      'Design a controlled route between supermarket, buffer zone, and line-side drop point with safety review gates.',
    results: [
      'Route simulation complete',
      'Handoff points documented',
      'Operator training scope defined',
      'Scale path prepared',
    ],
    image: '/industries/6904ac0e507b4eaf85d5be53_Application-4.png',
  },
  {
    id: 'cs-pharma-1',
    title: 'Traceable Transport Blueprint',
    slug: 'pharma-gmp-transport',
    client: 'Example deployment scenario',
    industry: 'pharma',
    product: 'cyborg-250',
    challenge:
      'Pharma and lab teams need cleaner movement records for samples, kits, and controlled materials.',
    solution:
      'Pair AMR routes with job IDs, access points, and operator approvals so every move can be reviewed later.',
    results: [
      'Traceability map prepared',
      'Access workflow outlined',
      'Audit fields identified',
      'Pilot governance aligned',
    ],
    image: '/Assets/Agility_Digit.avif',
  },
];

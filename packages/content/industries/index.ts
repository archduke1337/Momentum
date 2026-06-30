import type { Industry } from '@workspace/types';

export const industries: Industry[] = [
  {
    id: 'automotive',
    name: 'Automotive Manufacturing',
    slug: 'automotive',
    tagline: 'Keep the line fed, just in time',
    description:
      'Eliminate line starvation with autonomous just-in-time delivery of parts and sub-assemblies. Cyborg AMRs move material between stores and stations on schedule, lifting OEE and freeing skilled operators from manual hauling.',
    icon: 'Car',
    solutions: ['line-side-delivery', 'fleet-management'],
    image: '/industries/6904ac0e507b4eaf85d5be53_Application-4.png',
  },
  {
    id: 'pharma',
    name: 'Pharma & Life Sciences',
    slug: 'pharma',
    tagline: 'Compliant movement, full traceability',
    description:
      'Reduce contamination risk and audit exposure with autonomous material transport built for cleanroom and GMP environments. Every mission is logged for traceability, with controlled access between classified zones.',
    icon: 'Pill',
    solutions: ['fleet-management', 'custom-integration'],
    image: '/Assets/draw.avif',
  },
  {
    id: 'warehouses-logistics',
    name: 'Warehouses & 3PL',
    slug: 'warehouses-logistics',
    tagline: 'Scale through peak without scaling headcount',
    description:
      'Absorb 2–3× peak-season demand without the cost and attrition of temporary labour. AMRs integrate with your WMS for pull-based picking, replenishment, and cross-dock movement that runs around the clock.',
    icon: 'Warehouse',
    solutions: ['warehouse-automation', 'fleet-management'],
    image: '/industries/arno-senoner-bCgsKqFzUcg-unsplash.jpg',
  },
  {
    id: 'fmcg',
    name: 'Food & Beverage / FMCG',
    slug: 'fmcg',
    tagline: 'Consistent handling, fewer damaged goods',
    description:
      'Move high-volume cases and pallets with consistent, gentle handling that cuts product damage and rework. Autonomous routing keeps fast-moving lines supplied while maintaining hygiene and safety standards.',
    icon: 'Package',
    solutions: ['warehouse-automation', 'fleet-management'],
    image: '/industries/refinary.jpg',
  },
  {
    id: 'electronics',
    name: 'Electronics Manufacturing',
    slug: 'electronics',
    tagline: 'Precision delivery for high-mix lines',
    description:
      'Deliver trays, reels, and WIP between SMT and assembly with the gentle, precise handling sensitive electronics demand. ESD-aware transport and accurate docking keep high-mix, high-throughput lines moving.',
    icon: 'Zap',
    solutions: ['line-side-delivery', 'fleet-management'],
    image: '/Assets/Square_metalcut.avif',
  },
  {
    id: 'education',
    name: 'Education & Research',
    slug: 'education',
    tagline: 'Learn on the same stack industry runs',
    description:
      'Teach real autonomous navigation on industry-grade hardware. Pixel and Orbit run the same ROS 2 stack as our factory robots, giving students and researchers a direct pathway from the lab to the production floor.',
    icon: 'GraduationCap',
    solutions: ['custom-integration'],
    image: '/Assets/drawing.avif',
  },
];

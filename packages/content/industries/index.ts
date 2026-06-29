import type { Industry } from '@workspace/types';

export const industries: Industry[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    slug: 'automotive',
    tagline: 'Assembly line automation',
    description:
      'Power automotive assembly lines with precision robots for parts delivery, line feeding, and end-of-line testing.',
    icon: 'Car',
    solutions: [],
    image: '/industries/6904ac0e507b4eaf85d5be53_Application-4.png',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    slug: 'manufacturing',
    tagline: 'Production optimization',
    description:
      'Optimize manufacturing workflows with autonomous material handling, WIP transport, and line-side delivery.',
    icon: 'Factory',
    solutions: ['warehouse-automation'],
    image: '/Assets/Square_metalcut.avif',
  },
  {
    id: 'warehouses-logistics',
    name: 'Warehouses & Logistics',
    slug: 'warehouses-logistics',
    tagline: 'Storage & distribution',
    description:
      'Transform warehouse operations with autonomous mobile robots for picking, sorting, and goods-to-person systems.',
    icon: 'Warehouse',
    solutions: ['warehouse-automation', 'inventory-management'],
    image: '/industries/arno-senoner-bCgsKqFzUcg-unsplash.jpg',
  },
  {
    id: 'pharma',
    name: 'Pharma',
    slug: 'pharma',
    tagline: 'Compliant material transport',
    description:
      'Ensure GMP-compliant material transport in pharmaceutical manufacturing with traceable autonomous robots.',
    icon: 'Pill',
    solutions: [],
    image: '/Assets/draw.avif',
  },
  {
    id: 'fmcg',
    name: 'FMCG',
    slug: 'fmcg',
    tagline: 'Fast-moving consumer goods',
    description:
      'Accelerate FMCG operations with automated picking, packing, and intralogistics across distribution centers.',
    icon: 'Package',
    solutions: ['warehouse-automation'],
    image: '/industries/refinary.jpg',
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    tagline: 'Campus logistics & research',
    description:
      'Streamline campus logistics and enable robotics research with autonomous material transport and lab automation.',
    icon: 'GraduationCap',
    solutions: ['education-automation'],
    image: '/Assets/drawing.avif',
  },
  {
    id: 'hotels-resorts',
    name: 'Hotels & Resorts',
    slug: 'hotels-resorts',
    tagline: 'Guest experience automation',
    description:
      'Enhance guest experiences with autonomous room service, luggage delivery, and housekeeping support robots.',
    icon: 'Hotel',
    solutions: [],
    image: '/Assets/hi hand.avif',
  },
  {
    id: 'airports',
    name: 'Airports',
    slug: 'airports',
    tagline: 'Baggage & retail logistics',
    description:
      'Optimize airport operations with automated baggage handling, retail logistics, and passenger assistance.',
    icon: 'Plane',
    solutions: [],
    image: '/Assets/343x480.png',
  },
];

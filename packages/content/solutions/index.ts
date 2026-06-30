import type { Solution, CaseStudy } from '@workspace/types';

export const solutions: Solution[] = [
  {
    id: 'line-side-delivery',
    name: 'Line-Side Material Delivery',
    slug: 'line-side-delivery',
    industry: 'manufacturing',
    description:
      'Autonomous just-in-time delivery of parts and kits from stores to the production line, eliminating line starvation and manual hauling between stations.',
    benefits: [
      'Eliminate line starvation and unplanned downtime',
      'Free skilled operators from manual material movement',
      'Improve OEE with predictable, on-schedule delivery',
    ],
    useCases: [
      'Just-in-time kitting to assembly stations',
      'Empty-bin return and tugger replacement',
    ],
    image: '/Assets/Square_metalcut.avif',
    products: ['pixel', 'cyborg-250', 'cyborg-500'],
  },
  {
    id: 'warehouse-automation',
    name: 'Warehouse & Logistics Automation',
    slug: 'warehouse-automation',
    industry: 'warehouses-logistics',
    description:
      'End-to-end autonomous movement for picking, replenishment, and cross-docking that scales through peak demand without adding temporary labour.',
    benefits: [
      'Absorb seasonal demand spikes without new hires',
      'Cut walking time with pull-based task assignment',
      'Run reliably across multiple shifts, 24/7',
    ],
    useCases: [
      'Goods-to-person and replenishment workflows',
      'Cross-dock and inbound-to-storage transport',
    ],
    image: '/Assets/Square_metalcut.avif',
    products: ['orbit', 'cyborg-250', 'cyborg-500'],
  },
  {
    id: 'fleet-management',
    name: 'Fleet Management Software',
    slug: 'fleet-management',
    industry: 'warehouses-logistics',
    description:
      'A VDA 5050 compliant control layer that coordinates mixed robot fleets — handling mission assignment, traffic arbitration, and charging from one dashboard.',
    benefits: [
      'Coordinate multi-vendor fleets via open standards',
      'Prevent deadlocks with smart traffic arbitration',
      'Integrate with WMS/MES over REST API and MQTT',
    ],
    useCases: [
      'Centralised mission orchestration across zones',
      'Automated charging and uptime optimisation',
    ],
    image: '/Assets/Square_metalcut.avif',
    products: ['pixel', 'orbit', 'cyborg-150', 'cyborg-250', 'cyborg-500', 'cyborg-1000'],
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration',
    slug: 'custom-integration',
    industry: 'manufacturing',
    description:
      'Tailored deployments that connect Momentum robots to your existing PLCs, WMS, and processes — with custom perception and planning modules where you need them.',
    benefits: [
      'Connect to existing PLCs via OPC-UA or Modbus TCP',
      'Extend the open ROS 2 stack with custom modules',
      'Engineering support from pilot to scaled rollout',
    ],
    useCases: [
      'Bespoke WMS/MES and conveyor handshakes',
      'Custom payload decks and end-effectors',
    ],
    image: '/Assets/drawing.avif',
    products: ['pixel', 'orbit', 'cyborg-150', 'cyborg-250', 'cyborg-500', 'cyborg-1000'],
  },
];

export const caseStudies: CaseStudy[] = [];

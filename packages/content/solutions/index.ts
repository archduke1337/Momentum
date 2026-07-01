import type { Solution, CaseStudy } from '@workspace/types';

export const solutions: Solution[] = [
  {
    id: 'line-side-delivery',
    name: 'Line-Side Material Delivery',
    slug: 'line-side-delivery',
    industry: 'automotive',
    description:
      'Autonomous just-in-time delivery of parts, kits, and sub-assemblies from stores to the production line — replacing manual tugger routes and hand-pushed trolleys so stations are never waiting on material.',
    problem:
      'On a just-in-time line, a late delivery starves the station: the line stops, takt slips, and the delay ripples downstream. Manual delivery depends on who is on shift, and Kanban signals get lost or skipped during changeovers.',
    benefits: [
      'Stations stay fed on a fixed cadence, independent of who is on shift',
      'Skilled operators stop hauling carts and stay on value-added work',
      'Repeatable routes make delivery timing something planners build around',
    ],
    useCases: [
      'Just-in-time kitting to assembly and sub-assembly stations',
      'Empty-bin and returnable-container return loops',
      'Tugger-train replacement on fixed milk-run routes',
    ],
    image: '/Assets/Square_metalcut.avif',
    products: ['cyborg-150', 'cyborg-250', 'cyborg-500'],
  },
  {
    id: 'warehouse-automation',
    name: 'Warehouse & Fulfilment Transport',
    slug: 'warehouse-automation',
    industry: 'warehouses-logistics',
    description:
      'Autonomous horizontal transport for picking, replenishment, and cross-dock flows — moving totes, cases, and carts between receiving, storage, pick faces, and dispatch so people stop walking inventory across the building.',
    problem:
      'Fulfilment throughput scales with walking, and walking scales with headcount. Peak seasons force temporary hires who need training and churn out quickly — right when picking accuracy matters most.',
    benefits: [
      'Absorb seasonal peaks without proportional temporary hiring',
      'Cut unproductive walking with pull-based task assignment',
      'Run consistently across multiple shifts, day and night',
    ],
    useCases: [
      'Goods-to-person and pick-face replenishment',
      'Cross-dock and inbound-to-storage transport',
      'Consolidation and dispatch-lane staging',
    ],
    image: '/industries/arno-senoner-bCgsKqFzUcg-unsplash.jpg',
    products: ['cyborg-250', 'cyborg-500'],
  },
  {
    id: 'heavy-payload-transport',
    name: 'Pallet & Heavy Payload Transport',
    slug: 'heavy-payload-transport',
    industry: 'manufacturing',
    description:
      'Autonomous movement of pallets, stillages, and heavy loads up to a tonne between docks, buffers, and lines — handling the point-to-point moves that today tie up a forklift and a driver.',
    problem:
      'Forklift moves occupy a licensed driver for repetitive trips that rarely need judgement, and mixed forklift-and-pedestrian aisles are one of the most common sources of floor incidents.',
    benefits: [
      'Free forklift drivers from repetitive point-to-point runs',
      'Take heavy loads out of mixed pedestrian aisles',
      'Move full pallets and stillages on a predictable schedule',
    ],
    useCases: [
      'Pallet moves between receiving, buffer, and line-side',
      'Finished-goods transport to wrapping and dispatch',
      'Inter-cell transport of heavy stillages and fixtures',
    ],
    image: '/Product/cyborg/Cyborg.png',
    products: ['cyborg-500', 'cyborg-1000'],
  },
  {
    id: 'fleet-management',
    name: 'Fleet Orchestration',
    slug: 'fleet-management',
    industry: 'warehouses-logistics',
    description:
      'A VDA 5050-compliant control layer that coordinates a mixed robot fleet from one interface — assigning missions, arbitrating traffic, and scheduling charging, with hooks into your WMS and MES.',
    problem:
      'A fleet is only as good as its coordination. Without open orchestration, robots deadlock at intersections, idle waiting to charge, and cannot be mixed across vendors — quietly locking you into one supplier.',
    benefits: [
      'Coordinate mixed and multi-vendor fleets through open VDA 5050',
      'Avoid deadlocks and congestion with live traffic arbitration',
      'Integrate with WMS and MES over REST and MQTT',
    ],
    useCases: [
      'Centralised mission orchestration across zones and floors',
      'Automated opportunity charging and uptime management',
      'Live fleet state and a logged record of every mission',
    ],
    image: '/Assets/drawing.avif',
    products: ['pixel', 'orbit', 'cyborg-150', 'cyborg-250', 'cyborg-500', 'cyborg-1000'],
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration & Deployment',
    slug: 'custom-integration',
    industry: 'manufacturing',
    description:
      'Tailored deployments that fit the robots to your floor — connecting to existing PLCs, conveyors, and WMS, and extending the open ROS 2 stack with the perception or planning modules a site needs, from pilot to scaled rollout.',
    problem:
      'No two floors are identical. A robot that cannot talk to your existing controls or handle your specific payloads never leaves the pilot, and a proprietary stack makes every change a vendor ticket.',
    benefits: [
      'Connect to existing PLCs via OPC-UA or Modbus TCP',
      'Extend the open ROS 2 stack — no black boxes, no lock-in',
      'Engineering support from pilot through scaled rollout',
    ],
    useCases: [
      'Custom WMS/MES and conveyor handshakes',
      'Bespoke payload decks, lifts, and end-effectors',
      'Site-specific perception tuning for tough floor conditions',
    ],
    image: '/Assets/draw.avif',
    products: ['pixel', 'orbit', 'cyborg-150', 'cyborg-250', 'cyborg-500', 'cyborg-1000'],
  },
];

export const caseStudies: CaseStudy[] = [];

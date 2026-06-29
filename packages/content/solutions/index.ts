import type { Solution, CaseStudy } from '@workspace/types';

export const solutions: Solution[] = [
  {
    id: 'warehouse-automation',
    name: 'Warehouse Automation',
    slug: 'warehouse-automation',
    industry: 'warehouses-logistics',
    description:
      'Pilot Cyborg routes for internal warehouse movement, staging, handoff points, and load transport.',
    benefits: [
      'Route-first pilot planning',
      'Load movement review',
      'Operator handoff mapping',
      'Scale path for fleets',
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
      'Robotics education platforms for ROS2, SLAM, mapping, and autonomous navigation learning.',
    benefits: [
      'Hands-on ROS2 learning',
      'SLAM and navigation practice',
      'Sensor fusion experiments',
      'Research-ready hardware',
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
      'Early planning track for autonomous stock movement, inventory routes, and future scanning workflows.',
    benefits: [
      'Route and rack mapping',
      'Workflow discovery',
      'Integration planning',
      'Future scanning readiness',
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
      'A practical automation entry point for growing manufacturers, labs, and operators that need a first robotics pilot.',
    benefits: [
      'Pilot-first scope',
      'Simple route selection',
      'Training pathway',
      'Expansion roadmap',
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

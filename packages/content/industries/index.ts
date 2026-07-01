import type { Industry } from '@workspace/types';

export const industries: Industry[] = [
  {
    id: 'automotive',
    name: 'Automotive Manufacturing',
    slug: 'automotive',
    tagline: 'Keep the line fed, exactly on takt',
    description:
      'Assembly lines live or die on material arriving on time. Cyborg AMRs run fixed delivery routes between stores and stations so the line is never waiting on parts — and skilled operators are not pushing carts.',
    challenge:
      'Assembly runs on just-in-time delivery inherited from global parent plants. When material is late, the station starves and takt slips; when delivery depends on manual tuggers and Kanban cards, it depends on who is on shift and whether a card was misfiled during changeover. Forklifts sharing aisles with operators add a safety cost on top.',
    approach:
      'AMRs handle line-side delivery and empty-container return on repeatable routes, so delivery timing becomes something planners design around instead of react to.',
    icon: 'Car',
    solutions: ['line-side-delivery', 'heavy-payload-transport', 'fleet-management'],
    image: '/industries/6904ac0e507b4eaf85d5be53_Application-4.png',
  },
  {
    id: 'manufacturing',
    name: 'Discrete & General Manufacturing',
    slug: 'manufacturing',
    tagline: 'Move work-in-progress without the walking',
    description:
      'Between machines, cells, and buffers, work-in-progress still moves by hand or forklift. AMRs automate the transport steps between value-adding operations so machines and people spend less time waiting on material.',
    challenge:
      'In high-mix manufacturing, layouts change and material routes change with them. Manual transport between cells is unpredictable and pulls skilled staff off the machines that actually add value, while fixed conveyors are expensive to rebuild every time the line moves.',
    approach:
      'AMRs move WIP, fixtures, and finished parts between cells and buffers, and re-route in software when the layout changes — no track to tear up and relay.',
    icon: 'Factory',
    solutions: ['line-side-delivery', 'heavy-payload-transport', 'fleet-management'],
    image: '/Product/cyborg/Cyborg.png',
  },
  {
    id: 'warehouses-logistics',
    name: 'Warehousing & 3PL',
    slug: 'warehouses-logistics',
    tagline: 'Scale through peak without scaling headcount',
    description:
      'Absorb peak-season demand without the cost and churn of temporary labour. AMRs integrate with your WMS for pull-based picking, replenishment, and cross-dock movement that runs around the clock.',
    challenge:
      'Peak-season demand lifts throughput sharply, but capacity scales with people walking the floor. Temporary hires need training and churn quickly — right when order accuracy matters most — and narrow, multi-floor buildings leave little room to add more forklifts.',
    approach:
      'AMRs handle pull-based picking, replenishment, and cross-dock transport in step with the WMS, and can be added for peak and redeployed after — capacity you turn up, not headcount you hire.',
    icon: 'Warehouse',
    solutions: ['warehouse-automation', 'heavy-payload-transport', 'fleet-management'],
    image: '/industries/arno-senoner-bCgsKqFzUcg-unsplash.jpg',
  },
  {
    id: 'e-commerce-retail',
    name: 'E-commerce & Retail Fulfilment',
    slug: 'e-commerce-retail',
    tagline: 'Fulfil orders at peak without the walking',
    description:
      'High-volume order fulfilment lives on picking speed and accuracy. AMRs move totes and carts between storage, pick stations, and pack-out so associates pick more and walk less — through every sale event and festival peak.',
    challenge:
      'Order profiles are small, frequent, and spiky. Fulfilment centres staff up for sale events and festival demand, but temporary pickers spend much of the shift walking, and accuracy slips exactly when volume is highest.',
    approach:
      'AMRs bring work to the picker — goods-to-person and pick-face replenishment in step with the WMS — so associates stay at the station and throughput scales with robots, not footsteps.',
    icon: 'ShoppingCart',
    solutions: ['warehouse-automation', 'fleet-management'],
    image: '/industries/6904ac0e507b4eaf85d5be53_Application-4.png',
  },
  {
    id: 'pharma',
    name: 'Pharma & Life Sciences',
    slug: 'pharma',
    tagline: 'Compliant movement, full traceability',
    description:
      'Reduce contamination risk and audit exposure with autonomous transport built for cleanroom and GMP environments. Every mission is logged for traceability, with controlled access between classified zones.',
    challenge:
      'In GMP manufacturing the constraint is not throughput — it is contamination risk and traceability. Every human entry into a cleanroom is a contamination event with a gowning cost, auditors scrutinise material-movement records, and a wrong batch in the wrong zone is a failed batch.',
    approach:
      'AMRs move material between manufacturing, QC, and packaging with controlled access between classified zones and a logged, timestamped record of every mission — fewer human entries, a cleaner audit trail.',
    icon: 'Pill',
    solutions: ['warehouse-automation', 'fleet-management', 'custom-integration'],
    image: '/Assets/draw.avif',
  },
  {
    id: 'fmcg',
    name: 'Food, Beverage & FMCG',
    slug: 'fmcg',
    tagline: 'Consistent handling, shift after shift',
    description:
      'Move high-volume cases and pallets with consistent, gentle handling that cuts product damage and rework. Autonomous routing keeps fast-moving lines supplied while holding hygiene and safety standards.',
    challenge:
      'FMCG lines swing between stable runs and frequent changeovers, and material handling varies with whoever is on shift — different speeds, different care, different damage rates. Wet, humid floors add a hazard for people and a durability demand on equipment.',
    approach:
      'AMRs move cases and pallets at a consistent rate and route regardless of shift, so planners can forecast flow and gentle, repeatable handling brings product damage down.',
    icon: 'Package',
    solutions: ['warehouse-automation', 'heavy-payload-transport', 'fleet-management'],
    image: '/industries/refinary.jpg',
  },
  {
    id: 'electronics',
    name: 'Electronics Manufacturing',
    slug: 'electronics',
    tagline: 'Precise, ESD-aware delivery for high-mix lines',
    description:
      'Deliver trays, reels, and WIP between SMT and assembly with the gentle, precise handling sensitive electronics demand. ESD-aware transport and accurate docking keep high-mix, high-throughput lines moving.',
    challenge:
      'SMT and assembly lines are high-mix and high-throughput, moving trays, reels, and WIP that are sensitive to static and rough handling. Docking precision matters — a few millimetres off at a handoff stalls the line.',
    approach:
      'ESD-aware AMRs deliver trays, reels, and WIP between SMT and assembly with accurate docking, keeping high-mix lines supplied without manual runs between stations.',
    icon: 'Cpu',
    solutions: ['line-side-delivery', 'fleet-management'],
    image: '/Assets/Square_metalcut.avif',
  },
  {
    id: 'textiles-apparel',
    name: 'Textiles & Apparel',
    slug: 'textiles-apparel',
    tagline: 'Keep fabric and WIP moving between stages',
    description:
      'Garment and textile production moves rolls, bundles, and work-in-progress through cutting, stitching, finishing, and packing. AMRs carry material between stages so lines stay fed and floor space goes to production, not trolleys.',
    challenge:
      'Textile and apparel floors are labour-dense and space-constrained, with WIP shuttled between cutting, stitching, and finishing by hand. Manual movement adds handling time between every stage and clutters already-narrow aisles.',
    approach:
      'AMRs move bundles, rolls, and finished cartons between stages on repeatable routes, freeing operators to stay on the machines and keeping aisles clear.',
    icon: 'Shirt',
    solutions: ['line-side-delivery', 'warehouse-automation', 'fleet-management'],
    image: '/Product/orbit/11.png',
  },
  {
    id: 'education',
    name: 'Education & Research',
    slug: 'education',
    tagline: 'Learn on the stack industry actually runs',
    description:
      'Teach real autonomous navigation on industry-grade hardware. Pixel and Orbit run the same ROS 2 stack as our factory robots, giving students and researchers a direct path from the lab to the production floor.',
    challenge:
      'Robotics courses teach navigation in simulation, and graduates often meet real hardware for the first time on the job. Industrial robots are too costly to run a teaching fleet, while toy platforms do not behave like real robots on real floors.',
    approach:
      'Pixel and Orbit run the same ROS 2 stack as our factory robots, so students build SLAM, navigation, and multi-robot coordination skills on industry-grade hardware — a direct path from the lab to the floor.',
    icon: 'GraduationCap',
    solutions: ['fleet-management', 'custom-integration'],
    image: '/Assets/drawing.avif',
  },
];

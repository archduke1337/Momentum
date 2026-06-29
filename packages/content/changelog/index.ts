import type { ChangelogEntry } from '@workspace/types';

export const changelog: ChangelogEntry[] = [
  {
    version: '1.2.0',
    date: '2026-06-15',
    changes: [
      { type: 'added', description: 'Cyborg 500 product page' },
      { type: 'added', description: 'Case studies section for solutions' },
      { type: 'improved', description: 'Navigation menu animation performance' },
      { type: 'fixed', description: 'Mobile responsiveness on product detail pages' },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-05-20',
    changes: [
      { type: 'added', description: 'Industry pages with solution mappings' },
      { type: 'added', description: 'Blog section with initial posts' },
      { type: 'improved', description: 'Hero section with 3D globe' },
      { type: 'fixed', description: 'Contact form validation errors' },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-04-01',
    changes: [
      { type: 'added', description: 'Initial website launch' },
      { type: 'added', description: 'Product pages for Pixel, Orbit, Cyborg 250' },
      { type: 'added', description: 'Navigation with animated mega-menu' },
      { type: 'added', description: 'Contact form with lead capture' },
    ],
  },
];

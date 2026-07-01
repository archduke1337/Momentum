# Momentum Robotics

Monorepo for the [Momentum Robotics](https://momentumrobotics.in) marketing website — an open, ROS 2-native autonomous mobile robot (AMR) company. For company/product background (what Momentum builds, positioning, technology, content status), see **[MOMENTUM_ROBOTICS.md](MOMENTUM_ROBOTICS.md)** — read that first if you're unfamiliar with the business this codebase represents.

## Stack

- **Monorepo:** npm workspaces + Turborepo
- **Web app:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui primitives, Framer Motion / `motion`
- **Package manager:** npm 10.9.0

## Structure

```
apps/
  website/            Next.js marketing site (apps/website/src/app/**)
packages/
  content/            Single source of truth for site content (products, solutions,
                       industries, blog, news, changelog, docs, careers, team)
  types/               Shared TypeScript interfaces for all content shapes
  utils/               Shared helpers (cn, slugify, formatDate, readingTime, debounce)
  config/              Shared ESLint config
```

`apps/website/src/content/*` is a thin re-export shim over `@workspace/content` — edit content in `packages/content`, not in `apps/website/src/content`.

## Getting started

```bash
npm install
npm run dev         # turbo dev — starts apps/website on its Next.js dev server
```

Other workspace-wide scripts (run from repo root, fanned out via Turborepo):

```bash
npm run build        # turbo build
npm run lint         # turbo lint
npm run typecheck    # turbo typecheck
npm run clean        # turbo clean
```

## Content model

All page content (products, solutions, industries, blog, news, changelog, docs, careers, team) is defined in `packages/content/*/index.ts`, typed against `packages/types/index.ts`, and imported into `apps/website` via `@workspace/content`. Several collections (`team`, `careers`, `blogPosts`, `newsItems`, `caseStudies`) are intentionally empty arrays rather than filled with placeholder content — see [MOMENTUM_ROBOTICS.md § Content Status](MOMENTUM_ROBOTICS.md#7-content-status--whats-real-vs-placeholder) for which pages currently render an empty state and why.

**Content honesty policy:** no fabricated figures (pricing, payback periods, deployment counts, invented percentages) may be added anywhere on the site. See [MOMENTUM_ROBOTICS.md § 9](MOMENTUM_ROBOTICS.md#9-content-honesty-rules-important) before writing new copy.

## Documentation index

| Doc | What it covers |
|---|---|
| [MOMENTUM_ROBOTICS.md](MOMENTUM_ROBOTICS.md) | **Start here.** Company overview, full product/solutions/industries reference, tech stack, contact/team facts, content-honesty rules, current site structure |
| [STARTUP_POSITIONING.md](STARTUP_POSITIONING.md) | Early positioning brainstorm — origin story, industry problem narratives, competitive landscape. ⚠️ Contains fabricated stats/case studies; mine only for qualitative problem framing, never for numbers or competitor claims (see MOMENTUM_ROBOTICS.md §9) |
| [GLOBAL_STRATEGY.md](GLOBAL_STRATEGY.md) | Earlier draft of a "solutions-first, global-not-India-centric" site/nav restructuring strategy |
| [FINAL_IMPLEMENTATION_PLAN.md](FINAL_IMPLEMENTATION_PLAN.md) | Earlier draft balancing open-standards / cost / education-bridge messaging into a homepage + nav plan |
| [CONTENT_TEMPLATES.md](CONTENT_TEMPLATES.md) | Reusable per-page-type content templates and SEO checklists used during initial content buildout |
| [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) | Phased launch checklist (Phase 1–3) from the initial "half-built with TODOs → launch-ready" push |
| [PRODUCT_SPECS.csv](PRODUCT_SPECS.csv) | Draft spec sheet for all product variants — cross-check against `packages/content/products` before quoting; the two have some unreconciled discrepancies (see MOMENTUM_ROBOTICS.md §2) |

The strategy/roadmap/template docs above predate the content-honesty pass and the `packages/content` single-source-of-truth setup — treat their concrete numbers and "current state" claims as historical, not current, and defer to the live code and `MOMENTUM_ROBOTICS.md` when they disagree.

# Momentum Robotics — Company & Product Reference

This is the single, current-truth reference for what Momentum Robotics *is*: the company, its products, its positioning, and the state of the website that represents it. It exists so anyone (human or AI) picking up this repo can get oriented without re-reading the whole codebase or the older planning docs in the repo root.

**Read this first if you're new here.** For "how the code is organized," see [README.md](README.md). For "how the website should look/feel," see the design-system notes referenced in [§8](#8-brand-voice--design-system).

---

## 1. What Momentum Robotics Is

Momentum Robotics builds **open, ROS 2-native autonomous mobile robots (AMRs)** for material handling — moving parts, kits, pallets, and totes between stations, racks, and storage in factories and warehouses. The core pitch: production itself (welding, painting, assembly) has been heavily automated for years, but the *movement between* those automated steps is still done by forklifts and hand-pushed trolleys. Momentum automates that last manual step.

**Positioning in one line:** open standards (ROS 2 + VDA 5050), no vendor lock-in, engineered to survive real factory conditions (dust, glare, reflective metal, mixed human-robot traffic) rather than clean warehouse floors only.

**Company stage:** early-stage / selective deployment. The company is explicit on its own site about being in this phase — it does not claim market share, named large customers, or deployment counts it can't back up. This honesty-about-stage is a deliberate, user-directed content policy (see [§9](#9-content-honesty-rules-important)).

**HQ:** A-612 Park Plaza Business Center, Porwal Rd, Lohegaon, Pune 411047, India.

**Contact:** hello@momentumrobotics.in · Mon–Fri, 9:00–18:00 IST.

**Legal entity (footer copyright):** Momentum Robotics Pvt. Ltd.

**Social:** [LinkedIn](https://www.linkedin.com/company/momentum-robotics/) (only confirmed public social channel in the codebase — no Twitter/GitHub/YouTube wired up despite older planning docs mentioning them as aspirational).

**European partner:** Gebroeders Doms BV (Belgium) — described consistently across the site as a technical/standards partnership (VDA 5050, ISO compliance expertise, European market access), not a customer case study with metrics.

**Founder:** Deepak Yadav, Founder & CTO — leads robotics engineering and the ROS 2 navigation stack across Pixel, Orbit, and Cyborg. This is the only named team member that currently appears on the live site (`/about`); the "About" page's team section otherwise points to `/careers` ("We're hiring").

---

## 2. Product Lineup

Three platforms, one shared ROS 2 stack. The pitch for the lineup as a whole: *"what a student writes on Pixel in the lab runs on a Cyborg on the line — same stack, no rewrite."*

### Pixel — ROS 2 SLAM education kit
- **Category:** AMR · **Industries:** Education
- **Tagline:** ROS2 SLAM education kit
- Payload: 300 kg · Dimensions: 600 × 400 × 300 mm · Speed: 1.5 m/s
- Battery: 24V Li-Ion · Runtime: 8 h · Charging: 2–3 h, contact-based
- Navigation: 2D LiDAR (30 m range) + Intel RealSense D435i 3D depth camera + IMU
- Connectivity: Wi-Fi 2.4/5 GHz + ROS 2 DDS · Safety: E-stop + bumper + proximity sensors
- IP Rating: IP42 · Drive: Differential 2WD
- Positioning: industry-grade robot at education pricing — direct pathway from classroom to Cyborg deployment.

### Orbit — Multi-robot coordination education platform
- **Category:** AMR · **Industries:** Education
- **Tagline:** Multi-robot coordination education platform
- Payload: 1000 kg · Dimensions: 1200 × 800 × 500 mm · Speed: 1.2 m/s
- Battery: 48V Li-Ion · Runtime: 12 h · Charging: 2–4 h, contact-based
- Navigation: 2D LiDAR (25 m) + IMU + wheel odometry
- IP Rating: IP43 · Drive: Differential 2WD
- Positioning: advanced research platform for multi-robot fleet coordination and distributed planning studies.

### Cyborg — Industrial AMR (4 payload variants)
- **Category:** AMR · **Industries:** Pharma, Automotive, Manufacturing, Warehousing/Logistics
- **Tagline:** Industrial AMR
- Shared features: modular design, open integration API, configurable payload deck, swappable sensor modules, remote fleet management.
- Navigation across all variants: 2D LiDAR (25 m) + 3D camera + IMU · Software: ROS 2 Humble, Nav2, SLAM Toolbox · Connectivity: Wi-Fi + Ethernet + ROS 2 DDS · Safety: safety-rated LiDAR fields + bumpers · IP Rating: IP43.

| Variant | Payload | Dimensions (mm) | Speed | Battery | Runtime | Charging | Drive | Best use case |
|---|---|---|---|---|---|---|---|---|
| **Cyborg 150** | 150 kg | 700×450×200 (spec sheet: 1000×700×200) | 1.8 m/s (spec sheet: 1.2 m/s) | LiFePO4 24V 40Ah / spec sheet: 48V Li-Ion | 5–6 h | 2 h | Differential 2WD | Cleanroom + pharma |
| **Cyborg 250** | 250 kg | 900×600×400 (spec sheet: 1200×800×400) | 1.0 m/s | 36V Li-Ion / spec sheet: 48V Li-Ion | 10 h | 2.5 h | Differential 2WD | Manufacturing + WIP |
| **Cyborg 500** | 500 kg | 1400×900×550 (spec sheet: 1400×900×400) | 1.0 m/s | 48V Li-Ion / spec sheet: 72V LFP | 14 h (spec sheet: 12 h) | 1.5 h, fast-charge | Differential 2WD | Pallet + heavy duty |
| **Cyborg 1000** | 1000 kg | 1800×1100×650 (spec sheet: 1600×1000×650) | 0.8 m/s | 48V Li-Ion / spec sheet: 72V LFP | 16 h | 2 h, fast-charge | 4-wheel independent | 24/7 heavy industrial |

> **Known discrepancy:** `packages/content/products/index.ts` (rendered live on the site) and `PRODUCT_SPECS.csv` (repo root, a planning artifact) disagree on some Cyborg dimensions/battery/runtime numbers. `packages/content` is the live source of truth for the site; the CSV looks like an earlier or aspirational spec pass that was never reconciled back. Treat the CSV as reference-only and verify against real BOM/CAD before quoting exact numbers anywhere.

---

## 3. Solutions (5)

Rendered from `packages/content/solutions`. Each maps to specific Cyborg variants:

1. **Line-Side Material Delivery** (`/solutions/line-side-delivery`) — JIT parts/kit delivery to assembly stations, replacing manual tugger routes and Kanban-card delivery. → Cyborg 150/250/500.
2. **Warehouse & Fulfilment Transport** (`/solutions/warehouse-automation`) — picking, replenishment, cross-dock movement integrated with a WMS. → Cyborg 250/500.
3. **Pallet & Heavy Payload Transport** (`/solutions/heavy-payload-transport`) — forklift-replacement moves up to a tonne between docks/buffers/lines. → Cyborg 500/1000.
4. **Fleet Orchestration** (`/solutions/fleet-management`) — VDA 5050-compliant control layer coordinating mixed/multi-vendor fleets, REST + MQTT hooks into WMS/MES. → all platforms.
5. **Custom Integration & Deployment** (`/solutions/custom-integration`) — PLC/WMS integration (OPC-UA, Modbus TCP), extending the open ROS 2 stack, pilot-to-scale engineering support. → all platforms.

`caseStudies` is an intentionally empty array — there are no real case studies yet, and the content-honesty rule is to leave it empty rather than invent one.

---

## 4. Industries (9 defined, 2 currently live-disabled)

Rendered from `packages/content/industries`. Live/active on nav + homepage:

- **Automotive Manufacturing** — keep the line fed, exactly on takt.
- **Discrete & General Manufacturing** — move WIP without the walking.
- **Warehousing & 3PL** — scale through peak without scaling headcount.
- **E-commerce & Retail Fulfilment** — fulfil orders at peak without the walking.
- **Electronics Manufacturing** — precise, ESD-aware delivery for high-mix lines.
- **Education & Research** — learn on the stack industry actually runs (Pixel/Orbit).

**Temporarily disabled** (defined in content, commented out of routing/nav/homepage — "until ready to relaunch," per inline code comments):
- **Pharma & Life Sciences** — compliant movement, full traceability (cleanroom/GMP framing).
- **Food, Beverage & FMCG** — consistent handling, shift after shift.
- **Textiles & Apparel** — keep fabric and WIP moving between stages.

Each industry has an optional `challenge`/`approach` field — deliberately qualitative (no invented percentages/₹ figures), per the content-honesty policy.

---

## 5. Technology Stack

As described on `/technology` and the homepage "Technology" section — this is the standing technical narrative, consistent across both:

- **Navigation:** LiDAR SLAM for map building, Adaptive Monte Carlo Localization (AMCL) for real-time positioning, Nav2 for global + local path planning. No tape/QR-code infrastructure required.
- **Perception / sensor fusion:** 2D LiDAR (25–30 m range) + Intel RealSense 3D depth camera + 9-axis IMU + wheel encoders. Redundancy is the point — LiDAR-only fails on reflective metal, vision-only fails on dust/variable lighting.
- **Fleet management:** centralized browser-based dashboard — mission assignment, traffic arbitration, deadlock prevention, charging optimization. **VDA 5050 compliant** for multi-vendor interoperability. REST API + MQTT for WMS/MES integration.
- **Software architecture:** ROS 2 Humble on Ubuntu 22.04, standard DDS communication, built on open-source packages (Nav2, SLAM Toolbox) — no proprietary black boxes, fully extensible by the customer's own engineers.
- **Integration:** REST API for missions/fleet status/logs, MQTT for telemetry, PLC connectivity via OPC-UA or Modbus TCP.
- **Safety & compliance:** ISO 3691-4 (AGV/AMR safety), safety-rated LiDAR fields, bumper sensors, E-stop, zone-based traffic management, audit logging for regulated environments (pharma/food, when those industries are re-enabled).

---

## 6. Website Structure (apps/website)

Next.js 16 (App Router) + React 19 + Tailwind v4, inside an npm-workspaces + Turborepo monorepo.

**Live routes:**
```
/                           Homepage
/about                      Company story, partnership, team, HQ
/why-momentum               4 differentiators vs. "usual AMR deal"
/technology                 6-part technical deep dive
/products                   Product index
/products/[slug]            Pixel, Orbit, Cyborg (+ /products/cyborg dedicated variant page)
/solutions                  Solutions index
/solutions/[slug]           5 solution detail pages
/industries                 Industries index
/industries/[slug]          Industry detail pages (6 active)
/careers                    Empty state (careers[] === [])
/blog                       Empty state (blogPosts[] === [])
/news                       Empty state (newsItems[] === [])
/resources/documentation    Doc index + /[product]/[section] pages
/resources/changelog        Version history (sample/placeholder entries — see §7)
/contact                    Lead form (mailto: submission — see caveat below)
/privacy, /terms            Legal placeholders
```

**Main nav groups** (`components/layout/main-nav.tsx`): Solutions ▾ · Industries ▾ · Products ▾ · Company ▾ (About / Why Momentum / Technology / Careers / Contact) · Resources ▾ (Blog / News / Documentation / Changelog) · [Contact us] CTA.

**Contact form caveat:** `/contact` currently posts via `action="mailto:"` with `encType="text/plain"` — opens the visitor's mail client instead of hitting a real backend endpoint. No server-side validation; can fail silently if the visitor has no mail client configured. This is a known, unresolved UX weakness pending a backend decision — not a bug to "fix" casually without picking a real submission target first.

---

## 7. Content Status — What's Real vs. Placeholder

Important for anyone editing content: several `packages/content` collections are intentionally empty or sample data, not oversights.

| Collection | State | Notes |
|---|---|---|
| `products` | **Real** | Pixel, Orbit, Cyborg (4 variants) — live source of truth |
| `solutions` | **Real** | 5 solutions, fully written |
| `industries` | **Real** | 9 defined, 6 live, 3 commented out pending relaunch |
| `caseStudies` | **Empty by design** | No fabricated case studies — leave `[]` until real ones exist |
| `team` | **Empty array** | Only Deepak Yadav is hardcoded directly into `/about/page.tsx`, not in this array |
| `careers` | **Empty array** | `/careers` renders an empty-state page |
| `blogPosts` | **Empty array** | `/blog` renders an empty-state page |
| `newsItems` | **Empty array** | `/news` renders an empty-state page |
| `changelog` | **Sample/placeholder data** | 3 versions (1.0.0–1.2.0) describing features not all confirmed shipped — e.g. references a "case studies section" that doesn't functionally exist yet. Treat as illustrative, not a real release log. |
| `docs` | **Placeholder** | 6 entries, each with a one-line `content` stub (e.g. "Overview of unboxing, setup, and first autonomous run.") — no actual documentation body yet |

---

## 8. Brand Voice & Design System

**Voice:** direct, engineering-credible, allergic to hype. Explicit rules found across `/about`, `/why-momentum`, homepage copy:
- Avoid: "cutting-edge," "revolutionary," "world-class," "industry-leading," "we're disrupting."
- Use: industry terminology (JIT, Kanban, line starvation, takt, WMS/MES, OEE), problem-first framing, honest staging language ("selective deployment," "early customers," "we're not going to claim a fleet we haven't shipped").
- The homepage explicitly contrasts "the usual AMR deal" (proprietary lock-in, per-seat licences, one-vendor fleets, clean-warehouse-only tuning) against "how Momentum works" (open ROS 2, no licences, VDA 5050 mixed-fleet, dust/glare-tuned sensing) — this us-vs-them framing is a core rhetorical device, not just a stylistic choice.

**Visual design language:** editorial/Swiss, near-monochrome, sharp corners (no rounded pills), numbered section headers, hairline-grid layouts. Full detail lives in the persistent memory file `design-system.md` (Momentum Robotics editorial design system) — read that before touching any styling, especially the `--radius: 0` / shadcn-rounded-corner gotcha and the ban on green-tinted backgrounds/glows.

---

## 9. Content Honesty Rules (Important)

This is a standing, user-mandated policy, not a one-off cleanup:

> **The site must contain no fabricated figures.** No invented ₹ pricing, payback periods, percentages (OEE, turnover, damage rates), deployment/robot counts, or named-but-unverified customer results. When real numbers aren't available, use honest qualitative copy or point to "contact us" — never a plausible-sounding invented statistic.

Already stripped from the live site under this policy: ₹ pricing, payback-year claims, "99% manual" framing, downtime-cost-per-hour figures, "2–3×" multipliers, and generic "Real Example (Anonymized)" case narratives.

**`STARTUP_POSITIONING.md`** (repo root) is the main minefield here — it reads like an authoritative internal doc but is full of fabricated statistics, invented percentages, anonymized "Real Example" case studies, and direct named-competitor comparisons (Addverb, MiR, OTTO). **Do not lift numbers, case studies, or competitor claims from it onto the site.** It is still useful, carefully, for:
- The qualitative problem narratives (line starvation, Kanban-card failures, cleanroom-entry-as-contamination-event, peak-season labour churn, ESD/high-mix electronics handling) — these informed the real `Industry.challenge` / `Solution.problem` copy now living in `packages/content`.
- Historical context on *why* the company exists and how positioning evolved.

The other root planning docs (`CONTENT_TEMPLATES.md`, `FINAL_IMPLEMENTATION_PLAN.md`, `GLOBAL_STRATEGY.md`, `IMPLEMENTATION_ROADMAP.md`) are earlier-stage brainstorming/roadmap drafts from before the content-honesty pass and before `packages/content` became the single source of truth. They're kept for historical/strategic context (messaging angles, SEO checklists, phased rollout thinking) but **their concrete numbers, page structures, and "current state" claims are outdated** — cross-check against the live `apps/website` routes and `packages/content` before trusting anything specific in them.

---

## 10. Quick Facts Reference

| Fact | Value |
|---|---|
| Company stage | Early-stage, selective deployment (not mass-market yet) |
| HQ | Pune, Maharashtra, India |
| Full address | A-612 Park Plaza Business Center, Porwal Rd, Lohegaon, Pune 411047 |
| Contact email | hello@momentumrobotics.in |
| Office hours | Mon–Fri, 9:00–18:00 IST |
| LinkedIn | linkedin.com/company/momentum-robotics |
| Founder | Deepak Yadav, Founder & CTO |
| European partner | Gebroeders Doms BV, Belgium |
| Core stack | ROS 2 Humble · Nav2 · SLAM Toolbox · VDA 5050 |
| Products | Pixel (education) · Orbit (multi-robot research) · Cyborg (industrial, 150/250/500/1000 kg) |
| Legal name | Momentum Robotics Pvt. Ltd. |

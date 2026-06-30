# Momentum Robotics — Website Implementation Roadmap

**Goal:** Take the website from "half-built with TODOs" → "credible, complete, launch-ready"

**Timeline:** Phase 1 (2-3 days) → Phase 2 (1-2 weeks) → Phase 3 (ongoing)

---

## PHASE 1: UNBLOCK LAUNCH (Do First — 2-3 Days)

These are blocking issues. Fix these before sharing the URL with anyone.

### Homepage
- [ ] Write hero headline (value prop, 20-30 words)
  - *Input needed:* What is your core message to a plant manager landing on the home page?
  - *Example:* "Autonomous Material Handling for Indian Factories" + supporting subline
  
- [ ] Write hero subline (problem statement, 40-50 words)
  - *Input needed:* Describe the customer pain point you solve
  
- [ ] Curate hero image/video
  - [ ] Use current Cyborg image OR find a deployment photo
  
- [ ] Write product positioning for Pixel, Orbit, Cyborg (1 sentence each)
  - See `CONTENT_TEMPLATES.md` Section 2 for guidance
  
- [ ] Add 4-6 industry tiles with icons to homepage
  - [ ] Define industries (Automotive, Pharma, Warehouse, FMCG, Education, etc.)
  - [ ] Write 1-line description per industry
  - [ ] Link each to /industries/[slug] (can be empty page for now)

- [ ] Write 3-step "How It Works" section
  - [ ] Step 1: Site survey & simulation
  - [ ] Step 2: Pilot deployment
  - [ ] Step 3: Fleet scale-up

### Product Pages
- [ ] **Replace TODO placeholders** on Pixel, Orbit, Cyborg product pages
  - [ ] Pixel intent statement (2-3 sentences)
  - [ ] Orbit intent statement (2-3 sentences)
  - [ ] Cyborg intent statement (2-3 sentences)

- [ ] **Fix payload specs** (correct these in your content/products/index.ts)
  - [ ] Pixel: 100 kg → **300 kg**
  - [ ] Orbit: 500 kg → **1,000 kg**
  - [ ] Cross-check all other specs in the CSV template against actual product

- [ ] Add product images gallery
  - [ ] Pixel: minimum 4 images
  - [ ] Orbit: minimum 4 images
  - [ ] Cyborg: minimum 4 images

### About Page
- [ ] Write company story (300-400 words)
  - *Input needed:* Why did you start Momentum? What problem are you solving?
  
- [ ] List team members with 1-2 line bios
  - [ ] Deepak Yadav (Founder, role)
  - [ ] [Team member 2] (Role)
  - [ ] [Team member 3] (Role)
  - [ ] [Team member 4] (Role)
  - [ ] Optionally: photos

- [ ] Write partnership narrative (if applicable)
  - [ ] Gebroeders Doms BV partnership explanation (100-150 words)

- [ ] Create timeline of milestones
  - [ ] Company founded
  - [ ] Key product launches
  - [ ] Deployment milestones
  - [ ] Recognition (DPIIT, awards, etc.)

- [ ] Add location & contact info
  - [ ] Address
  - [ ] Phone
  - [ ] Email
  - [ ] Office hours (if applicable)

### Navbar Fixes
- [ ] Change "Pilot Cyborg" CTA to "Request Demo"
- [ ] Update navbar structure (see `CONTENT_TEMPLATES.md` Section 11)
  - [ ] Products dropdown: Pixel, Orbit, Cyborg, Compare All
  - [ ] Industries dropdown: link to industry pages
  - [ ] Remove "Solutions" from navbar (or add properly in Phase 2)
  - [ ] Add "Technology" as single page link (can be empty for now)

### Footer Fixes
- [ ] Remove "Startup Automation" and "Education Automation" from Solutions column
- [ ] Update to recommended footer structure (see `CONTENT_TEMPLATES.md` Section 12)
  - [ ] Column 1: Brand + social links + DPIIT badge
  - [ ] Column 2: Products (Pixel, Orbit, Cyborg)
  - [ ] Column 3: Solutions (rebranded categories)
  - [ ] Column 4: Company info
  - [ ] Bottom: Address, CIN, Privacy, Terms

### Codebase Housekeeping
- [ ] Remove all visible TODO comments from product pages
  - [ ] Search for "TODO" in codebase
  - [ ] Resolve or hide all TODOs from public-facing pages
  
- [ ] Hide empty pages from navigation
  - [ ] Blog page: hide from navbar until you have posts
  - [ ] Empty Solutions pages: hide until content is written
  - [ ] Empty Industries pages: hide until content is written
  - [ ] OR: create placeholder pages with "Coming soon" messaging

- [ ] Changelog cleanup
  - [ ] Remove references to features that don't exist
  - [ ] Example: "Case studies section" mentioned in v1.2.0 but doesn't exist
  - [ ] Mark features as "In Development" if not yet live

### Quality Assurance
- [ ] Spellcheck all visible text (especially on homepage, products, about)
- [ ] Verify all internal links work (Products → Product detail, etc.)
- [ ] Test on mobile (responsiveness)
- [ ] Check form submission on /contact page

---

## PHASE 2: BUILD CORE CONTENT (1-2 Weeks)

After Phase 1 is done, build out the foundational content pages.

### Solutions Pages (4 Total)
- [ ] **Line-Side Delivery** (/solutions/line-side-delivery)
  - [ ] Problem statement written (200-300 words)
  - [ ] Solution narrative (150-200 words)
  - [ ] 4-5 benefits listed
  - [ ] 2-3 use cases written
  - [ ] Target industries identified
  - [ ] CTA configured

- [ ] **Warehouse Transport** (/solutions/warehouse-transport)
  - [ ] [Same checklist as above]

- [ ] **Fleet Management Software** (/solutions/fleet-management)
  - [ ] [Same checklist as above]

- [ ] **Education & Research** (/solutions/education-research)
  - [ ] [Same checklist as above]

### Industries Pages (3 Minimum, 5+ Ideal)
- [ ] **Automotive** (/industries/automotive)
  - [ ] Industry overview (100-150 words)
  - [ ] Pain point narrative (200-300 words)
  - [ ] Momentum solution explanation (150-200 words)
  - [ ] 3-4 benefits listed
  - [ ] Recommended robot(s) with rationale
  - [ ] Compliance/environment notes
  - [ ] Deployment workflow outlined
  - [ ] Optional: case reference

- [ ] **Pharma & Life Sciences** (/industries/pharma)
  - [ ] [Same checklist as above]

- [ ] **Warehousing & 3PL** (/industries/warehousing)
  - [ ] [Same checklist as above]

- [ ] **FMCG & Food Processing** (/industries/fmcg) — *Optional, lower priority*
  - [ ] [Same checklist as above]

- [ ] **Education & Research** (/industries/education) — *Optional, lower priority*
  - [ ] [Same checklist as above]

### Technology Page
- [ ] **Create /technology page** with 6 sections:
  - [ ] Autonomous Navigation Stack (150-200 words)
  - [ ] Sensor Fusion & Perception (100-150 words)
  - [ ] Fleet Management Architecture (150-200 words)
  - [ ] Software Architecture (100-150 words)
  - [ ] Integration & Extensibility (150-200 words)
  - [ ] Safety & Compliance (100-150 words)

### Blog Seed Content
- [ ] **Write & publish minimum 2-3 seed articles** before launch
  
  **Article 1: AMR vs AGV** (800-1200 words)
  - [ ] What is an AGV?
  - [ ] What is an AMR?
  - [ ] Key differences table
  - [ ] Why AMR is better for Indian factories
  - [ ] Meta title, description, keywords
  
  **Article 2: Navigation Stack** (1000-1500 words)
  - [ ] What is SLAM?
  - [ ] LiDAR-based mapping
  - [ ] Nav2 path planning
  - [ ] Dynamic obstacle handling
  - [ ] Technical diagrams
  - [ ] Meta title, description, keywords
  
  **Article 3: ROI Calculator** (800-1200 words)
  - [ ] Cost replacement analysis
  - [ ] Payback period calculation
  - [ ] Industry-specific scenarios
  - [ ] Meta title, description, keywords

### Careers Page
- [ ] Rewrite intro/culture statement (100-150 words)
- [ ] List 2-5 open positions
  - [ ] For each: title, location, level, responsibilities (5 bullets), requirements (5 bullets), nice-to-haves
- [ ] Set up careers contact email
- [ ] General application statement

### Product Specifications
- [ ] Fill out PRODUCT_SPECS.csv with all actual specs
  - [ ] Use this as the source of truth for all product pages
  - [ ] Verify with your CAD/BOM for payload, dimensions, runtime, etc.

---

## PHASE 3: OPTIMIZE & SCALE (Ongoing / 2-4 Weeks)

### SEO & Metadata
- [ ] Unique meta titles for every page (50-60 chars)
  - [ ] Homepage
  - [ ] Products (index + all 6 variants)
  - [ ] All Solutions pages (4)
  - [ ] All Industries pages (5+)
  - [ ] Technology, About, Careers, Blog, Contact

- [ ] Unique meta descriptions for every page (120-160 chars)
  - [ ] [Same list as above]

- [ ] Structured data (JSON-LD) for:
  - [ ] Organization (on homepage + footer)
  - [ ] LocalBusiness (on About + footer)
  - [ ] Product schema (on all product pages)
  - [ ] JobPosting schema (on all job listings)
  - [ ] FAQPage schema (on Solutions pages, optional)

- [ ] Internal linking strategy
  - [ ] Homepage → all product pages, key solution pages, industries
  - [ ] Product pages → related solutions, related industries
  - [ ] Solution pages → relevant products, relevant industries
  - [ ] Industry pages → relevant products, relevant solutions

- [ ] External linking
  - [ ] Blog articles: 2-3 external links to authoritative sources
  - [ ] Product pages: link to ROS 2, Nav2 docs where relevant
  - [ ] Technology page: link to standards (ISO, VDA 5050), research papers

### Performance & Accessibility
- [ ] Image optimization
  - [ ] All images compressed (WebP where supported)
  - [ ] Proper alt text on every image
  - [ ] Responsive image sizes (<100kb per image ideal)

- [ ] Core Web Vitals check
  - [ ] Run PageSpeed Insights on 5-10 key pages
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

- [ ] Mobile responsiveness
  - [ ] Test navbar on mobile
  - [ ] Test forms on mobile
  - [ ] Test images/galleries on mobile

- [ ] Accessibility (WCAG AA)
  - [ ] All form fields have labels
  - [ ] All images have alt text
  - [ ] Color contrast ratios meet standards (4.5:1 for text)
  - [ ] Keyboard navigation works

### Analytics & Tracking
- [ ] Google Search Console
  - [ ] Verify site ownership
  - [ ] Submit sitemap.xml
  - [ ] Monitor search performance

- [ ] Google Analytics 4
  - [ ] Track page views, scroll depth, form submissions
  - [ ] Set up goals: "Contact form submission", "Product page views", "Blog reads"

- [ ] Conversion tracking
  - [ ] Contact form submission → email notification
  - [ ] Product detail page visit → analytics event
  - [ ] CTA clicks → analytics event

### Extended Content
- [ ] Blog articles 4-5 (Pixel story, VDA 5050, etc.)
- [ ] Case studies or deployment references (when available)
- [ ] Product comparison table on /products index
- [ ] Documentation pages for Pixel, Orbit (optional but valuable)

### Social & Branding
- [ ] OG images (1200×630px) for social sharing
  - [ ] Homepage
  - [ ] All product pages
  - [ ] All blog articles
  - [ ] All solution/industry pages

- [ ] Social media profiles linked
  - [ ] LinkedIn
  - [ ] GitHub (if public)
  - [ ] YouTube (if you have videos)
  - [ ] Twitter (if active)

---

## PRIORITY MATRIX

### Do First (Unblock Launch)
```
Phase 1 checklist items marked [Highest Priority]
- Homepage hero + value prop
- Product page intent statements + spec fixes
- About page (story + team)
- Navbar/footer cleanup
- Remove TODO comments
- Hide empty pages
```

### Do Second (Build Credibility)
```
Phase 2 checklist items in this order:
1. Industries pages (3 key: Auto, Pharma, Warehouse)
2. Solutions pages (2 key: Line-Side, Warehouse)
3. Technology page
4. Blog seed articles (2-3)
5. Careers page with listings
```

### Do Third (Polish)
```
Phase 3 checklist items:
1. SEO metadata + structured data
2. Internal/external linking
3. Performance optimization
4. Extended blog articles (4-5)
5. Case studies (when deployment refs available)
```

---

## TIME ESTIMATE BY PHASE

| Phase | Task | Time |
|-------|------|------|
| **Phase 1** | Write homepage, product pages, about, fix navbar | 2-3 days |
| **Phase 2** | Write 3 industry pages, 4 solutions, tech page, 3 blog articles | 1-2 weeks |
| **Phase 3** | SEO metadata, performance, extended content, case studies | 2-4 weeks |
| **Total** | Minimum viable launch → fully-fleshed-out | 3-5 weeks |

---

## SUCCESS CRITERIA

### Phase 1 Complete When:
- [ ] Homepage has clear headline, value prop, and industries strip
- [ ] All product TODO comments removed
- [ ] Payload specs correct (Pixel 300kg, Orbit 1000kg)
- [ ] About page has company story + team
- [ ] No empty pages visible in navigation
- [ ] All links work

### Phase 2 Complete When:
- [ ] 3 industry pages live and linked
- [ ] 4 solution pages live and linked
- [ ] Technology page live
- [ ] 2-3 blog articles published and indexed
- [ ] Careers page has job listings
- [ ] Product specs CSV filled out and verified

### Phase 3 Complete When:
- [ ] All pages have unique meta titles and descriptions
- [ ] Structured data on all major pages
- [ ] Google Search Console set up and sitemap submitted
- [ ] Core Web Vitals green on all pages
- [ ] 5 blog articles published
- [ ] Case studies or deployment references added
- [ ] Analytics tracking configured

---

## RESOURCES PROVIDED

| File | Purpose |
|------|---------|
| `CONTENT_TEMPLATES.md` | Detailed templates for every page type + SEO guidance |
| `PRODUCT_SPECS.csv` | Specs database for all robot variants |
| `IMPLEMENTATION_ROADMAP.md` | This file — prioritized checklist |

---

## NEXT STEPS FOR YOU

1. **Gather content:** Use the checklists above to identify what information you need to write/collect
2. **Draft Phase 1:** Write homepage, product pages, about page (2-3 days)
3. **Get feedback:** Share Phase 1 with a team member or trusted advisor before deploying
4. **Deploy Phase 1:** Make sure Phase 1 is live and functional
5. **Plan Phase 2:** Assign team members to write solutions/industries pages
6. **Iterate:** Use analytics to see which pages perform best, double down on those topics

---

**Questions?** Ask and I can:
- Expand any section of the templates
- Review your draft content for clarity/tone
- Help with SEO keyword research
- Troubleshoot implementation issues

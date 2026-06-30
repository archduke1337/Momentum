# Momentum Robotics — Content Template Package

This document provides reusable templates for building out your website content. Each section includes a structure you can fill in with your company-specific information.

---

## 1. HOMEPAGE (/index.tsx)

### Structure
```
Section 1: Hero
  - Headline (value proposition)
  - Subheadline (problem statement)
  - Primary CTA + Secondary CTA
  - Background image/video

Section 2: Product Overview
  - 3 product cards (Pixel, Orbit, Cyborg)
  - Brief positioning for each

Section 3: Industries Served
  - 4-6 industry tiles with icons
  - Quick description per industry
  - Links to industry pages

Section 4: How It Works
  - 3-step deployment flow
  - One paragraph per step

Section 5: Why Momentum (Differentiators)
  - 4 key differentiators
  - 1-2 lines per differentiator

Section 6: Social Proof / Deployments
  - Client logos OR anonymized deployment refs
  - 2-3 testimonials/case stats

Section 7: Final CTA
  - "Get in touch" block
  - Link to /contact
```

### Content Checklist
- [ ] Hero headline written (20-30 words)
- [ ] Subheadline written (40-50 words)
- [ ] 3 product positioning statements (1 sentence each)
- [ ] 4-6 industries identified with 1-line descriptions
- [ ] 3-step deployment flow written
- [ ] 4 differentiators identified with supporting text
- [ ] Social proof/deployment refs gathered (minimum 2)
- [ ] Hero image/video selected
- [ ] CTA text written

### SEO
- **Meta title:** "Autonomous Mobile Robots (AMRs) for Indian Factories | Momentum Robotics"
- **Meta description:** "Momentum builds ROS 2 native AMRs for material handling in automotive, pharma, FMCG, and warehouses. Pixel, Orbit, Cyborg platforms."
- **Schema:** Organization + LocalBusiness (include address, phone, email)

---

## 2. PRODUCTS INDEX (/products/page.tsx)

### Structure
```
Hero Section
  - Headline: "Three Platforms. One Mission."
  - Subline: Brief philosophy statement (2-3 sentences)

Product Philosophy
  - 2-3 paragraphs on why you built this product line
  - Mention unified ROS 2 stack, modular approach, fleet management

Comparison Table
  - Columns: Pixel, Orbit, Cyborg
  - Rows: Payload, Footprint, Speed, Navigation, Battery, Runtime, Best For, Key Differentiator

Product Cards (linked to individual product pages)
  - Pixel card → /products/pixel
  - Orbit card → /products/orbit
  - Cyborg card → /products/cyborg
  - Each shows: image, name, tagline, key specs (2-3), CTA "View Details"

Bottom CTA
  - "Not sure which platform fits? Let's talk." → /contact
```

### Content Checklist
- [ ] Product philosophy written (150-200 words)
- [ ] Comparison table specs gathered (all 6 rows complete)
- [ ] Pixel tagline (5-10 words)
- [ ] Orbit tagline (5-10 words)
- [ ] Cyborg tagline (5-10 words)
- [ ] 2-3 key specs per product selected for index display

### SEO
- **Meta title:** "Autonomous Mobile Robot Platforms | Pixel, Orbit, Cyborg | Momentum"
- **Meta description:** "Compare Momentum AMR platforms — Pixel (300 kg), Orbit (1000 kg), Cyborg (150-1000 kg variants). Specs, features, use cases."
- **Schema:** Product schema for each robot with specs

---

## 3. INDIVIDUAL PRODUCT PAGES (/products/[slug])

### Structure (Pixel example, repeat for Orbit & Cyborg)

```
HERO SECTION
  Tagline: "[Platform name] — [Value Prop]"
  Product intent: 1-2 paragraph problem/solution narrative

PRODUCT INTENT STATEMENT
  "Pixel is a compact, maneuverable AMR designed for... [your description]"
  Replace the TODO placeholder with 2-3 sentences

SPECIFICATIONS TABLE
  | Spec | Value |
  | Payload Capacity | X kg |
  | Dimensions | X × Y × Z mm |
  | Max Speed | X m/s |
  | Navigation | Sensors + SLAM approach |
  | Battery | Voltage, chemistry, capacity |
  | Runtime | X hours |
  | Charging | Method, duration |
  | Connectivity | Wi-Fi, Ethernet, ROS 2 DDS |
  | Safety | E-stop, bumpers, safety sensors |
  | Software | ROS 2 version + key packages |
  | IP Rating | IP rating |

INDUSTRIAL USE CASES
  3-4 bullet points explaining where this robot works in real factories

EDUCATION USE CASES (if applicable)
  2-3 bullet points if product has education relevance

ATTACHMENTS / TOP MODULES
  List available payload modules (flat deck, conveyor, hitch, lift, etc.)

TECHNICAL FEATURES
  3-4 features with 1-2 sentence explanations
  Focus on differentiators, not generic "autonomous navigation"

INTEGRATION & EXTENSIBILITY
  How customers extend/customize this platform

GALLERY
  4-6 images showing:
    - Robot from multiple angles
    - In deployment environment (if available)
    - Sensor close-ups
    - Attachment modules

BOTTOM CTA
  "Ready to see [Product] in action? Request a demo." → /contact
```

### Content Checklist (per product)
- [ ] Product intent statement written (2-3 sentences, replace TODO)
- [ ] All 12 specs gathered and entered in table
- [ ] 3-4 industrial use cases written (1 line each)
- [ ] 2-3 education use cases written (if applicable)
- [ ] Attachments/modules listed (5+ options)
- [ ] 3-4 technical features written (1-2 lines each)
- [ ] Integration examples provided (2-3)
- [ ] Product images selected (min 6)

### SEO
- **Meta title:** "[Product Name] — [Tagline] | Momentum Robotics"
- **Meta description:** "[Product name]: [Payload] kg payload, [speed] m/s, [key differentiator]. Use cases: [industries]. Specs, gallery, and integration guide."
- **Schema:** Product schema with aggregateRating (if reviews exist), price (if public)

---

## 4. SOLUTIONS PAGES (/solutions/[slug])

### Structure (Template for all 4 solutions)

```
HERO SECTION
  Headline: "[Solution Name] — [Brief Value Prop]"

PROBLEM STATEMENT
  2-3 paragraphs describing the customer pain point
  Use industry-specific language (e.g., "line starvation", "labor turnover", "compliance burden")
  Include quantitative impact if possible ("costs ₹X per hour")

HOW MOMENTUM SOLVES IT
  2-3 paragraphs explaining the technical and operational approach
  Mention specific products (Pixel, Orbit, Cyborg)
  Link to product pages inline

KEY BENEFITS
  4-5 bullet points
  Focus on outcomes, not features
  Example: "Operators stay at workstations → zero walking time for material fetching"

TYPICAL USE CASES
  2-3 specific applications with brief context
  Example: "Kanban delivery loops in automotive assembly" or "Pallet-to-rack movement in 3PL warehouses"

PRODUCTS USED
  Which Momentum robots are most common for this solution
  Link to product pages

TARGET INDUSTRIES
  2-4 industries where this solution is most relevant

INTEGRATION POINTS
  How this integrates with customer systems
  Example: "WMS integration via REST API" or "PLC coordination via Modbus TCP"

CASE EXAMPLE (OPTIONAL)
  If available: anonymized or named case study showing results
  Before/after metrics, timeline, deployment size

BOTTOM CTA
  "Explore [Solution] for your facility" → /contact or /industries/[industry]
```

### Content Checklist (per solution)
- [ ] Problem statement written (200-300 words)
- [ ] Solution narrative written (150-200 words)
- [ ] 4-5 benefits identified and written
- [ ] 2-3 use cases written
- [ ] Target products listed
- [ ] 2-4 target industries listed
- [ ] Integration points explained
- [ ] Case example gathered (if available)

### 4 Solutions to Build
1. **Line-Side Delivery** (/solutions/line-side-delivery)
2. **Warehouse Transport** (/solutions/warehouse-transport)
3. **Fleet Management Software** (/solutions/fleet-management)
4. **Education & Research** (/solutions/education-research)

### SEO (per solution)
- **Meta title:** "[Solution Name] — Momentum AMRs for [Industry]"
- **Meta description:** "[Solution]: How Momentum robots solve [pain point]. Used by [industries]. Specs, integrations, and deployment workflow."
- **Schema:** FAQPage schema with 3-4 common questions + answers

---

## 5. INDUSTRIES PAGES (/industries/[slug])

### Structure (Template for all industries)

```
HERO SECTION
  Headline: "AMRs for [Industry] — [Specific Application]"

INDUSTRY OVERVIEW
  1-2 paragraphs on industry context
  Who makes decisions? What are their KPIs?

PAIN POINT DEEP DIVE
  2-3 paragraphs describing the material handling challenge
  Use industry terminology
  Quantify impact if possible (cost per hour, labor constraints, compliance gaps)

MOMENTUM SOLUTION
  2-3 paragraphs explaining how Momentum robots address this pain point
  Mention specific products (Pixel/Orbit/Cyborg)
  Link to product pages

KEY BENEFITS
  3-4 outcomes specific to this industry
  Example (Pharma): "Full traceability → FDA 21 CFR Part 11 compliance"

ROBOTS RECOMMENDED
  Which Momentum platform(s) best fit this industry
  Brief rationale per platform

COMPLIANCE & ENVIRONMENT
  Industry-specific regulations or conditions
  Example (Pharma): Cleanroom compatibility, stainless steel options
  Example (FMCG): Food-grade surfaces, high-humidity tolerance
  Example (Automotive): ISO 3691-4 safety, integration with PLC systems

DEPLOYMENT WORKFLOW
  Typical timeline and phases for deploying robots in this industry
  Site survey → Pilot → Scale-up

CASE REFERENCE (IF AVAILABLE)
  Anonymized or named deployment in this industry
  Size, results, timeline

BOTTOM CTA
  "Ready to transform [Industry] logistics? Let's talk." → /contact
```

### Content Checklist (per industry)
- [ ] Industry overview written (100-150 words)
- [ ] Pain point narrative written (200-300 words)
- [ ] Momentum solution explained (150-200 words)
- [ ] 3-4 benefits identified
- [ ] Recommended robot(s) selected with rationale
- [ ] Compliance/environment considerations listed (3-5)
- [ ] Deployment workflow outlined (3-5 phases)
- [ ] Case reference gathered (if available)

### 5+ Industries to Build
1. **Automotive** (/industries/automotive)
2. **Pharma & Life Sciences** (/industries/pharma)
3. **FMCG & Food Processing** (/industries/fmcg)
4. **Warehousing & 3PL** (/industries/warehousing)
5. **Education & Research** (/industries/education)
6. (Optional) Heavy Manufacturing, Hospitals, Retail

### SEO (per industry)
- **Meta title:** "AMRs for [Industry] | Material Handling Automation | Momentum"
- **Meta description:** "Momentum robots for [industry] — solve [pain point]. Recommended platforms: [Pixel/Orbit/Cyborg]. Compliance, specs, deployment timeline."
- **Schema:** LocalBusiness schema (if you have regional presence)

---

## 6. TECHNOLOGY PAGE (/technology)

### Structure

```
HERO SECTION
  Headline: "Built on Open Standards. Engineered for Indian Factories."
  Subline: Brief intro (50-75 words)

SECTION 1: AUTONOMOUS NAVIGATION STACK
  Heading: "Your Robots Navigate Like Robots, Not Tape Followers"
  
  Content:
    - LiDAR SLAM approach (build maps, localize in real-time)
    - Nav2 path planning (global + local layers)
    - Adaptive Monte Carlo Localization (AMCL)
    - Why no infrastructure (tapes, QR codes) is an advantage
    - Robustness to Indian factory conditions (dust, reflective surfaces, dynamic obstacles)
  
  Paragraph structure: 3-4 focused paragraphs, 100-150 words total

SECTION 2: SENSOR FUSION & PERCEPTION
  Heading: "Multi-Sensor Redundancy for Real-World Robustness"
  
  Content:
    - What sensors (2D LiDAR, 3D depth camera, IMU, encoders)
    - Why each sensor (LiDAR for long-range, camera for close objects, IMU for inertial data)
    - How they combine for robust perception
    - Tolerance for challenging environments
  
  Paragraph structure: 2-3 paragraphs, 100-150 words total

SECTION 3: FLEET MANAGEMENT ARCHITECTURE
  Heading: "One Dashboard for Every Robot on Your Floor"
  
  Content:
    - Centralized fleet manager (browser-based)
    - Mission assignment & load balancing
    - Traffic management (intersection arbitration, deadlock prevention)
    - Charging optimization
    - VDA 5050 standard compliance (why this matters for future multi-vendor fleets)
    - REST API + MQTT for WMS/MES integration
  
  Paragraph structure: 3-4 paragraphs, 150-200 words total

SECTION 4: SOFTWARE ARCHITECTURE
  Heading: "ROS 2 Native. No Vendor Lock-In. Fully Extensible."
  
  Content:
    - ROS 2 Humble, Ubuntu 22.04 base
    - Standard DDS communication
    - Documented topics, services, actions (link to API docs if available)
    - Open-source packages (Nav2, SLAM Toolbox, etc.)
    - Why this matters: if you have in-house robotics engineers, you can extend the robots
    - No proprietary black boxes
  
  Paragraph structure: 2-3 paragraphs, 100-150 words total

SECTION 5: INTEGRATION & EXTENSIBILITY
  Heading: "Built to Integrate With Your Factory Systems"
  
  Content:
    - REST API endpoints for mission management, fleet status, logs
    - MQTT topics for real-time robot telemetry
    - PLC connectivity (OPC-UA, Modbus TCP examples)
    - WMS/MES integration patterns (pull-based missions, push-based feedback)
    - Call-button and sensor-triggered mission examples
    - Custom perception/planning modules (if customers want to add their own)
  
  Paragraph structure: 3-4 paragraphs, 150-200 words total

SECTION 6: SAFETY & COMPLIANCE
  Heading: "Industrial-Grade Safety. Standards-Compliant."
  
  Content:
    - ISO 3691-4 (AGV/AMR safety standard)
    - Safety-rated LiDAR fields and bumper sensors
    - E-stop functionality
    - Zone-based traffic management (no collisions)
    - Audit logging for compliance (pharma, food safety)
  
  Paragraph structure: 2-3 paragraphs, 100-150 words total

BOTTOM SECTION: TECHNICAL SPECIFICATIONS (OPTIONAL)
  - Link to full API documentation
  - Link to ROS 2 package repository (if public)
  - Link to architecture diagrams
```

### Content Checklist
- [ ] Navigation stack explanation written (150-200 words)
- [ ] Sensor fusion explanation written (100-150 words)
- [ ] Fleet management architecture written (150-200 words)
- [ ] Software architecture explanation written (100-150 words)
- [ ] Integration points written (150-200 words)
- [ ] Safety/compliance section written (100-150 words)
- [ ] Technical diagrams prepared (optional but recommended)
- [ ] Links to API docs prepared

### SEO
- **Meta title:** "Technology — Autonomous Mobile Robot Navigation & Fleet Management | Momentum"
- **Meta description:** "Momentum's ROS 2 navigation stack, sensor fusion, fleet management, and integration architecture. Open standards, no vendor lock-in."
- **Schema:** SoftwareApplication schema (if you document the fleet manager)

---

## 7. ABOUT PAGE (/about)

### Structure

```
HERO SECTION
  Headline: "Why We Built Momentum Robotics"
  Subline: 1-2 sentence value statement

SECTION 1: COMPANY STORY
  Heading: "The Problem We're Solving"
  
  Content (3-4 paragraphs, 300-400 words):
    - Observation: Indian factories automate production but not material movement
    - Why this matters: labor bottleneck, safety risk, cost
    - The market: 35+ AMR companies globally, but most designed for Western labor costs
    - Momentum's angle: engineered for Indian factory conditions and economics
    - The partnership with Gebroeders Doms BV (if relevant)
    - Current stage: founded X, deployed Y robots, growing team of Z

SECTION 2: THE TEAM
  For each team member:
    - Name
    - Role
    - 1-2 sentence background
    - Focus area / responsibilities
    - (Optional) photo
  
  List format or card format

SECTION 3: PARTNERSHIP (IF APPLICABLE)
  Heading: "[If you have Gebroeders Doms partnership]"
  
  Content:
    - What the partnership is (co-development, manufacturing, distribution)
    - Why it matters (European engineering + Indian market access)
    - What it means for customers (stability, dual-geography support)

SECTION 4: MILESTONES TIMELINE
  Timeline of key achievements:
    - Founded [date]
    - [Achievement] [date]
    - [Achievement] [date]
    - [Achievement] [date]
  
  Use a visual timeline if possible

SECTION 5: LOCATION & CONTACT
  Heading: "Where to Find Us"
  
  Content:
    - Physical address
    - Phone
    - Email
    - Map embed (optional)
    - Office hours
    - "DPIIT Recognized Startup" or other official recognition badges

BOTTOM CTA
  "Join the team" → /careers
  or
  "Get in touch" → /contact
```

### Content Checklist
- [ ] Company story written (300-400 words)
- [ ] Team members listed (name, role, 1-2 line bio each, optional photo)
- [ ] Partnership narrative written (if applicable, 100-150 words)
- [ ] Milestones gathered and dated (minimum 5)
- [ ] Official recognition badges collected (DPIIT cert, etc.)
- [ ] Contact information finalized

### SEO
- **Meta title:** "About Momentum Robotics — ROS 2 AMR Manufacturer in Pune"
- **Meta description:** "Meet the team building industrial autonomous mobile robots for Indian factories. Founded in Pune, partnered with European robotics firms, DPIIT recognized startup."
- **Schema:** Organization schema with team member details (name, jobTitle, etc.)

---

## 8. CAREERS PAGE (/careers)

### Structure

```
HERO SECTION
  Headline: "[Your tagline about the team culture]"
  Subline: "We're small and growing. Join us if you want to build robots that move real factories."

SECTION 1: WHY WORK HERE
  3-4 bullet points on company culture, mission, or benefits
  Example:
    - "Write code that runs on real hardware, not just servers"
    - "Small team, direct impact — your work ships in weeks"
    - "Learning-friendly environment" (Pune robotics hub, access to mentors, conference budget)

SECTION 2: OPEN POSITIONS
  For each open role:
    - Job title
    - Location (on-site, hybrid, remote)
    - Experience level (0-2 years, 3-5 years, 5+ years)
    - Department/function
    
    Responsibilities (3-5 bullet points)
    
    Requirements (must-haves, 3-5 bullet points)
    
    Nice-to-haves (optional skills, 2-3 bullet points)
    
    [APPLY] button → email or form

  Example roles (from audit):
    1. Tecnomatix Simulation Expert (3-5 yrs)
    2. Sales & Proposal Specialist (3-5 yrs)
    3. ROS 2 Software Engineer (2-5 yrs) [if hiring]
    4. Mechanical Engineer (2-5 yrs) [if hiring]
    5. Field Deployment Engineer (1-3 yrs) [if hiring]

SECTION 3: GENERAL APPLICATION
  Heading: "Don't see your role?"
  
  Content:
    "We're always looking for [types of roles]. Send your resume to careers@momentumrobotics.in with a note on what you'd like to build."

BOTTOM CTA
  Link to /about (team page) or /contact for informal chats
```

### Content Checklist
- [ ] Company culture statement written (100-150 words)
- [ ] 3-4 "Why Work Here" points identified
- [ ] Open positions listed (minimum 2, maximum 5)
- [ ] For each position: title, location, level, responsibilities (5 bullets), requirements (5 bullets), nice-to-haves (2-3)
- [ ] General application statement written
- [ ] Career contact email confirmed

### SEO
- **Meta title:** "Careers — Join Momentum Robotics, Pune"
- **Meta description:** "We're hiring! Robotics engineers, sales, simulation experts. Pune-based AMR startup. Apply now."
- **Schema:** JobPosting schema for each open position (Google Jobs listing)

---

## 9. BLOG STRATEGY

### Blog Seed Articles (Write 3-5 before launch)

**Article 1: Educational/Explanatory**
- Title: "AMR vs AGV — What's the Difference and Why It Matters for Indian Factories"
- Length: 800-1200 words
- Purpose: SEO + credibility on a key search term
- Sections:
  - What is an AGV? (tape-guided, inflexible)
  - What is an AMR? (map-based, autonomous)
  - Key differences table (infrastructure, cost, flexibility, scalability)
  - Why AMR is better for Indian factories (no floor modifications, works with legacy layouts)
  - Momentum's approach to AMR design
- Keywords: "AMR vs AGV", "autonomous mobile robot", "India factory automation"

**Article 2: Technical Deep-Dive**
- Title: "How We Navigate: Inside the Momentum Robot Navigation Stack"
- Length: 1000-1500 words
- Purpose: Technical credibility + engineering hiring signal
- Sections:
  - What is SLAM? (brief intro)
  - Our LiDAR-based mapping approach
  - Nav2 path planning (global + local)
  - Handling dynamic obstacles (people, forklifts)
  - Sensor fusion for robustness
  - Diagram: navigation pipeline (map building → localization → path planning → execution)
- Keywords: "ROS 2 navigation", "SLAM tutorial", "autonomous robot navigation"

**Article 3: Business/ROI**
- Title: "Calculating ROI on Your First AMR: A Plant Manager's Guide"
- Length: 800-1200 words
- Purpose: Help buyers justify investment
- Sections:
  - What costs are you replacing? (manual material handling, forklift operator, safety incidents)
  - Momentum AMR cost (example: ₹20 lakh Pixel, ₹40 lakh Cyborg)
  - Payback period calculation (example: 18-24 months)
  - Beyond payback: safety, throughput, flexibility
  - Common ROI scenarios by industry (automotive, pharma, warehouse)
  - Financing options (if applicable)
- Keywords: "AMR ROI", "autonomous robot cost benefit", "material handling automation cost"

**Article 4: Product/Brand**
- Title: "From Classroom to Factory Floor: Why We Built Pixel"
- Length: 600-1000 words
- Purpose: Tell the product origin story
- Sections:
  - The education gap (theory vs. real hardware)
  - Why Pixel exists (bridge that gap)
  - Same software, different scale (education → industry)
  - Deployment workflow examples
  - Universities using Pixel
- Keywords: "robotics education", "ROS 2 learning", "hands-on robotics platform"

**Article 5: Standards/Compliance**
- Title: "VDA 5050 — The Fleet Management Standard Your Next AMR Should Speak"
- Length: 600-1000 words
- Purpose: Position as forward-thinking, standards-aware
- Sections:
  - What is VDA 5050? (German standard for AMR fleet management)
  - Why it matters (interoperability, future-proofing)
  - How Momentum implements it
  - What it means for your fleet (flexibility, no lock-in)
  - Comparison: proprietary vs. standards-based systems
- Keywords: "VDA 5050", "AMR fleet management standard", "robot interoperability"

### Blog Checklist
- [ ] Article 1 drafted (AMR vs AGV)
- [ ] Article 2 drafted (Navigation stack)
- [ ] Article 3 drafted (ROI calculator)
- [ ] Article 4 drafted (Pixel story)
- [ ] Article 5 drafted (VDA 5050)
- [ ] Images/diagrams prepared for each article
- [ ] Author bio written (Deepak Yadav or team member)
- [ ] Publishing dates staggered (1 article per week)

### SEO per Article
- Unique meta title and description
- 1-2 internal links per article (to product pages, solutions, etc.)
- External links to 2-3 authoritative sources (ROS 2 docs, IEEE papers, industry reports)
- H2/H3 hierarchy for readability
- CTA at bottom (e.g., "Interested in Pixel for your lab? Contact us.")

---

## 10. CONTACT PAGE (MINOR TWEAKS ONLY)

### Current State
Your contact page is already good! Just minor additions:

### Recommended Additions
- [ ] WhatsApp contact option (common in Indian B2B)
- [ ] Expected response time message: "We respond within 24 business hours"
- [ ] Location map embed (Google Maps of your office)
- [ ] Business hours (if applicable)
- [ ] Alternative contact methods (LinkedIn profile link, Twitter if active)

### Contact Form Fields (Keep As-Is)
- Name ✓
- Work Email ✓
- Company ✓
- Phone ✓
- Primary Need (dropdown) ✓
- Movement Problem / Project Description ✓

---

## 11. NAVBAR STRUCTURE (RECOMMENDED)

### Current
```
Logo | Products ▾ | Industries ▾ | Solutions ▾ | Company ▾ | Resources ▾ | [Pilot Cyborg]
```

### Recommended
```
Logo | Products ▾ | Solutions ▾ | Industries ▾ | Technology | Company ▾ | [Request Demo]

Products ▾
  - Pixel (Light-Duty)
  - Orbit (Mid-Duty)
  - Cyborg (Heavy-Duty)
  - Compare All →

Solutions ▾
  - Line-Side Delivery
  - Warehouse Transport
  - Fleet Management
  - Education & Research

Industries ▾
  - Automotive
  - Pharma & Life Sciences
  - FMCG & Food
  - Warehousing & 3PL
  - Education & Research

Technology (no dropdown, single page)

Company ▾
  - About
  - Careers
  - Blog
  - Contact
```

---

## 12. FOOTER STRUCTURE (RECOMMENDED)

### Current
```
Products | Solutions | Company | Resources | [Social links] | [Copyright]
```

### Recommended
```
Column 1: Brand
  - Logo
  - "Autonomous material handling for Indian factories."
  - LinkedIn | GitHub | YouTube
  - "DPIIT Recognized Startup"

Column 2: Products
  - Pixel
  - Orbit
  - Cyborg
  - Compare All →

Column 3: Solutions
  - Line-Side Delivery
  - Warehouse Transport
  - Fleet Management
  - Education & Research

Column 4: Company
  - About
  - Careers
  - Blog
  - Contact
  - Documentation

Bottom Bar
  - © 2026 iMomentum Robotics Pvt. Ltd.
  - [Address if public]
  - Privacy | Terms | Sitemap
```

---

## 13. SEO CHECKLIST (ALL PAGES)

For each page, ensure:
- [ ] Unique meta title (50-60 chars)
- [ ] Unique meta description (120-160 chars)
- [ ] H1 heading (one per page, matches or relates to title)
- [ ] H2/H3 hierarchy (clear structure)
- [ ] 2-3 internal links (to related pages)
- [ ] 2-3 external links (to authoritative sources)
- [ ] Image alt text (descriptive, includes keyword where natural)
- [ ] Schema markup (Organization, Product, JobPosting, Article, etc.)
- [ ] Mobile-friendly (test on mobile)
- [ ] Core Web Vitals (LCP, FID, CLS)

---

## 14. GLOBAL METADATA NEEDED

- [ ] Google Search Console account set up
- [ ] Google Analytics 4 configured
- [ ] Sitemap.xml generated and submitted
- [ ] Robots.txt configured (allow all crawlers)
- [ ] Favicon and apple-touch-icon set
- [ ] OG images prepared for social sharing (1200×630px per page)
- [ ] Canonical URLs set for all pages
- [ ] Structured data (JSON-LD) for Organization, LocalBusiness, Product, Article schemas

---

## 15. CONTENT PRIORITIES (FILL FIRST)

### Must-Have Before Going Live
1. Homepage (hero value prop + industries strip + why Momentum section)
2. Product pages (Pixel, Orbit, Cyborg — replace TODO, fix specs)
3. About (company story + team)
4. Navbar structure (fix to recommended version)

### Should-Have Within 2 Weeks
5. Solutions pages (at least 2: Line-Side Delivery, Warehouse Transport)
6. Industries pages (at least 2: Automotive, Pharma or Warehousing)
7. Technology page
8. Blog seed articles (2-3)

### Nice-to-Have Within 1 Month
9. All Solutions pages (4)
10. All Industries pages (5+)
11. Careers page with job listings
12. All blog articles (5)
13. Case studies or deployment references

---

## 16. CONTENT VOICE GUIDELINES

When writing your content:

**Tone:** Professional but not stuffy. Direct. Assume the reader is a plant manager or ops director, not a marketing person.

**Avoid:**
- Marketing jargon ("cutting-edge", "revolutionary", "next-generation")
- Hype language ("world-class", "industry-leading")
- Empty superlatives

**Use:**
- Industry terminology (Kanban, JIT, line starvation, throughput, OEE)
- Specific numbers (payback period, deployment size, cycle time improvement)
- Problem-solution framing (here's the pain, here's how we fix it)
- Case context (this robot is good at X because of Y)

**Example (Bad):**
"Momentum robots are cutting-edge autonomous systems that revolutionize material handling."

**Example (Good):**
"Cyborg carries up to 1,000 kg and runs three shifts without manual intervention, solving the labor bottleneck in heavy-duty pallet transport."

---

## IMPLEMENTATION WORKFLOW

**Step 1:** Fill out the section checklists above (content gathering phase)
**Step 2:** Draft content for Priority 1 pages (homepage, products, about)
**Step 3:** Create React components with placeholder content
**Step 4:** Refine copy, test SEO metadata, check links
**Step 5:** Deploy and monitor analytics

**Estimated time:**
- Checklists + gathering: 2-3 days
- Writing Priority 1 content: 2-3 days
- Writing Priority 2 content: 1 week
- Writing Priority 3 content: 1-2 weeks
- Component development & QA: ongoing alongside writing

---

Done! Use these templates to guide your writing. The structure is here — you just fill in the specifics.

**Questions?**
- Need a specific template expanded?
- Want a starter outline for a particular page?
- Need SEO keyword suggestions?

Just ask and I'll provide more detail!

# Project Instructions — Sales Professional Portfolio Website

> Paste this whole doc into Claude Cowork (or feed to Claude Code) as the build spec. Fill the `[RESUME DATA]` placeholders once resume is provided.

---

## 1. Project Overview

Build a **premium, single-professional portfolio website** for a sales professional, built in **React** (Vite), styled for a luxury-yet-trustworthy sales brand identity. Site must feel like a mix of an executive personal brand site and a high-end SaaS landing page — not a generic resume-to-website template.

**Tech stack (mandatory):**
- React 19 (functional components, hooks only)
- Tailwind CSS 4 for styling
- GSAP (ScrollTrigger) for scroll-based animation
- Three.js (via `@react-three/fiber` + `@react-three/drei`) for a subtle 3D hero element — do NOT overuse; one tasteful 3D moment (e.g. abstract glass/metallic geometric shape, particle field, or animated line-graph mesh), not a gimmick-heavy scene
- Reference **21st.dev** component patterns/library for UI primitives (buttons, cards, badges, marquees) — adapt, don't copy verbatim; restyle to match the palette below
- Framer Motion optional for micro-interactions (hover states, page transitions) if GSAP feels heavy for a given element
- Fully responsive (mobile-first breakpoints), accessible (semantic HTML, proper contrast ratios, keyboard nav)

---

## 2. Brand Identity & Color Palette

Sales-professional identity = **trust + authority + high performance**. Use this exact palette:

| Role | Color | Hex (suggested) | Usage |
|---|---|---|---|
| Primary base | Navy Blue | `#0B1F3A` / `#0F2A4A` | backgrounds, headers, dominant sections — conveys authority, trust, stability |
| Secondary base | White | `#FFFFFF` / `#F8F9FA` | negative space, cards, readability, cleanliness |
| Accent (achievement) | Gold | `#C9A24B` / `#D4AF37` | CTAs, awards/badges, numbers, key stats, dividers — conveys luxury, results, "closer" energy |
| Neutral | Silver / Cool Gray | `#C7CCD1` / `#8A94A6` | secondary text, icons, subtle borders — conveys precision, professionalism |
| Support accent | Deep Green (optional, sparing) | `#1B4332` | only for "growth/results" data visualizations (charts, upward trend lines) — do not overuse; green should never compete with gold as the primary accent |

**Rule:** Navy + white carry 80% of the UI. Gold is the accent used only for emphasis (CTA buttons, key metrics, hover states, dividers). Silver for secondary/support text. Green is optional and reserved strictly for growth/data visuals (e.g. a small upward chart in the achievements section).

**Typography:**
- Headings: a confident, slightly condensed serif or geometric sans (e.g. "Fraunces" or "Playfair Display" for luxury serif headlines, OR "General Sans"/"Inter Tight" for a sharper modern-authority feel — pick one direction and stay consistent)
- Body: clean sans-serif (Inter, or similar) for readability
- Use generous whitespace, large type scale for hero headline, tight letter-spacing on all-caps labels (e.g. section eyebrows like "ACHIEVEMENTS")

---

## 3. Trait → Design Mapping

Every trait below must be expressed through **design language and micro-copy**, not literal labels on the page. Do not write "I am manipulative" anywhere — traits are conveyed through composition, tone, and content strategy.

| Trait | How to express it |
|---|---|
| **Sturdiness / reliability** | Solid grid structure, thick confident dividers, bold stat blocks, minimal visual clutter, consistent alignment — nothing feels flimsy or trend-chasing |
| **Politeness / approachability** | Warm micro-copy in CTAs ("Let's talk" not "Submit"), soft rounded corners on cards (not sharp everywhere), friendly testimonial section with real quotes |
| **Persuasive influence ("manipulation" in the positive, sales-craft sense)** | Strong narrative arc per section (problem → agitation → proof → resolution), strategic use of social proof/testimonials right before every CTA, scarcity/urgency micro-copy where appropriate (e.g. "Limited advisory slots"), directional visual cues (arrows, gaze direction of photo) guiding eye toward CTA |
| **Empathy** | A dedicated "philosophy" or "how I work with clients" section written in first person, focused on listening/understanding client pain points before pitching |
| **Clear result-orientation** | Big bold numbers section (revenue closed, quota attainment %, deals closed, client retention %) — animated count-up on scroll via GSAP, gold-accented stat cards |
| **Professionalism** | Consistent spacing system, no more than 2 fonts, restrained animation (nothing bouncy/cartoonish), polished photography treatment (duotone navy overlay option) |
| **Luxuriousness** | Generous whitespace, subtle gold hairline dividers, premium card shadows (soft, diffused — not harsh drop shadows), the one signature 3D hero moment, smooth scroll-linked reveals instead of hard cuts |

---

## 4. Page Structure & Sections

Single-page scroll site (with anchor nav) unless resume content demands multi-page. Sections in order:

1. **Hero**
   - Full name, title/role (e.g. "Senior Sales Director" — pull from resume), one-line value proposition
   - 3D background element (Three.js) — abstract, subtle, navy/gold toned
   - Primary CTA ("Book a Call" / "Let's Connect") + secondary CTA (download resume/PDF)
   - Placeholder professional headshot (see Section 6 — Assets)

2. **Trust bar / logos**
   - Row of past employer logos or industry logos (use placeholder logo blocks until real ones provided)

3. **Results / Key Metrics**
   - 3–5 animated stat cards: quota attainment %, total revenue generated, deals closed, client retention/NPS, years of experience — GSAP count-up on scroll

4. **About / Philosophy**
   - First-person narrative: who they are, how they sell, what makes their approach different (this is where empathy + persuasion craft shows through tone)

5. **Experience Timeline**
   - Vertical or horizontal scroll-triggered timeline pulling directly from `[RESUME DATA — Work Experience]`
   - Company, role, dates, 2–3 bullet achievements each (quantified wherever resume allows)

6. **Core Skills / Sales Expertise**
   - Grid of skill categories (e.g. Enterprise Sales, Negotiation, Account Management, CRM tools, Team Leadership) pulled from `[RESUME DATA — Skills]`
   - Consider a subtle skill-proficiency visual (bar or radial) in navy/gold

7. **Testimonials**
   - 3+ client/manager quotes — placeholder text until provided, styled as premium quote cards with subtle gold quotation marks

8. **Certifications / Education**
   - Clean badge-style grid from `[RESUME DATA — Education & Certifications]`

9. **Contact / CTA**
   - Strong closing CTA section, contact form (name, email, message), calendar booking link placeholder, social/LinkedIn icons
   - Reinforce urgency/scarcity micro-copy tastefully here

10. **Footer**
    - Name, tagline, quick nav links, copyright, social icons

---

## 5. Animation Spec

- **Hero:** Three.js canvas — floating abstract geometric form (e.g. faceted icosahedron or particle mesh) in navy with gold rim-light, slow auto-rotate, subtle parallax on mouse move
- **Scroll reveals:** GSAP ScrollTrigger — fade+slide-up on section entry, staggered for grids/cards
- **Stat counters:** GSAP-driven count-up triggered when stats section enters viewport
- **Nav bar:** shrink/blur-background on scroll
- **Hover states:** CTA buttons — subtle gold glow/scale, no jarring bounce
- **Performance rule:** lazy-load the Three.js canvas (dynamic import), respect `prefers-reduced-motion`, keep total JS animation libraries' impact on Lighthouse performance score minimal

---

## 6. Assets & Placeholder Content

- **Photo:** Real photo not yet available. Use a placeholder professional headshot (royalty-free/stock, businessperson in navy/dark suit, neutral studio background) until real photo is supplied — clearly mark the image component as `// TODO: replace with client-provided headshot`
- **Logos/testimonials:** Use clearly marked placeholder blocks, not fabricated real company names/quotes attributed as fact
- **Resume content:** All experience, metrics, skills, certifications must come from `[RESUME DATA]` — do not invent numbers or job history. Where resume lacks a quantified metric, either omit the stat or mark as `[NEEDS CLIENT INPUT]`

---

## 7. Folder Structure (Enterprise-Grade)

```
src/
├── assets/            # images, placeholder headshot, icons
├── components/
│   ├── ui/            # buttons, badges, cards (21st.dev-inspired primitives)
│   ├── sections/       # Hero, Results, About, Timeline, Skills, Testimonials, Contact, Footer
│   └── three/          # Three.js scene components
├── hooks/              # useScrollTrigger, useCountUp, etc.
├── data/               # resume-derived content as structured JS/JSON (not hardcoded in JSX)
├── styles/             # tailwind config, global tokens
└── App.jsx
```

Content (experience, skills, stats, testimonials) should live in `src/data/*.js` as structured objects — not hardcoded inline in JSX — so resume updates don't require touching component code.

---

## 8. Deliverable Expectations

- Fully working React app, responsive across mobile/tablet/desktop
- Clean component composition, no monolithic single-file dump
- Comments on non-obvious logic (Three.js scene setup, GSAP timelines)
- Placeholder content clearly marked so it's easy to swap in real resume data/photo later

---

## 9. Resume Data

```
[RESUME DATA]

Name: Anuj Jain
Title/Role: Sales Professional
Location: Prayagraj, Uttar Pradesh, India
Contact: mickeyjain.aj@gmail.com | 7084633460
Years of Experience: 15+
LinkedIn: [NEEDS CLIENT INPUT]

Summary/Value Prop:
Results-driven Sales Professional with 15+ years across furniture, DTH, and apparel,
consistently exceeding targets through strong lead generation, upselling, and deal
closing. Skilled in B2B/B2C sales, account management, negotiation, and CRM.
Focused on driving revenue growth and client retention through sharp market
knowledge and relationship-building.

Work Experience:

1. Business Development Manager — T.P. Furniture, Prayagraj (2022 – 2026)
   - Identified and secured B2B/institutional clients (schools, hospitals, government
     offices) for furniture and office setup solutions
   - Drafted proposals and negotiated pricing/contracts to close large-scale
     institutional deals
   - Coordinated production, logistics, and installation for timely, on-budget
     project delivery
   - Delivered complete furniture supply projects for St. John's Academy, Dwarka
     Hospital, and Prayagraj High Court

2. Sales Executive — Tata Sky DTH (2019 – 2022)
   - Managed HR operations for 150+ employees (onboarding, payroll, attendance,
     records, performance support) — cut early attrition by 12%
   - Drove field sales, lead generation, and upselling for Tata Sky DTH, building
     strong customer relationships to hit sales targets
   - Deployed 800+ DTH connections at JACPL Power Plant and 1,100+ at United
     Medicity Hospital
   - Led installation projects across NCR Railway (Ghaziabad–Gorakhpur) and
     Allahabad Airport, ensuring smooth deployment and client satisfaction

3. Owner — Apparel Business, Self-employed (2011 – 2019)
   - Founded and ran a retail/wholesale apparel business — managed purchasing,
     inventory, pricing, and end-to-end sales
   - Managed B2B/B2C accounts, negotiating with retailers and wholesalers and
     handling credit terms
   - Maintained supplier relationships and controlled daily cash flow, billing,
     and basic accounts

4. Sales Manager, Self-employed (2008 – 2011)
   - Managed regional sales operations across the Noida territory, driving lead
     tracking, pipeline management, and target achievement through a coordinated
     sales team
   - Maintained key client relationships and delivered regular sales reports and
     performance updates to management

Key Metrics (use these as the animated stat-block numbers — do not invent
revenue/quota figures beyond what's below, since resume does not state ₹ revenue
or quota % explicitly):
   - 15+ Years of Sales Experience
   - 150+ Employees managed (HR ops, Tata Sky DTH)
   - 12% Reduction in early attrition (Tata Sky DTH)
   - 1,900+ DTH connections deployed (800+ JACPL Power Plant + 1,100+ United
     Medicity Hospital)
   - 4 Major institutional/enterprise projects delivered (St. John's Academy,
     Dwarka Hospital, Prayagraj High Court, + NCR Railway/Allahabad Airport
     installations)
   - Revenue closed / quota attainment %: [NEEDS CLIENT INPUT]

Skills (group into a clean grid, 2 columns):
   - Customer Relationship Management (CRM) — Retail & Showroom Sales
   - Upselling & Cross-Selling — Field & Direct Sales
   - Negotiation & Deal Closing — B2B & B2C Sales
   - Account Management — Lead Generation & Conversion
   - Sales Target Achievement — Inventory & Pricing Management
   - Client Retention — Market & Competitor Analysis

Education:
   - Bachelor of Business Administration (BBA) — Guru Gobind Singh Indraprastha
     University, New Delhi (2005 – 2008)
   - Schooling: 12th (ISC Board, 2005), 10th (ICSE Board, 2003)

Certifications: [NEEDS CLIENT INPUT — none listed on resume]

Notes for the Timeline section:
   - Business Development Manager end date is listed as 2026 on the source
     resume (likely intended as "Present" or a forward-dated entry) — render
     this role as "2022 – Present" in the UI unless client confirms an actual
     end date.
```

# AI Assistant Context & Developer Guide

Welcome to the **Heera Singh Portfolio & Freelance Platform** codebase. This repository contains the source code for the personal portfolio, freelance showcase, and deep-dive case studies website for **Heera Singh Lodhi** (Full Stack Software Developer).

---

## 1. Project Mission & Positioning

- **Primary Goal:** Convert visitors into high-paying freelance and contract clients.
- **Positioning:** Freelance Full Stack Web Developer & Solution Specialist (React/Next.js, Node.js, WordPress Theme/Plugin Development, API Integrations, Cloud/Hosting).
- **Core Call-to-Action (CTA):** `"Start a Project"` / `"Book a Discovery Call"`.
- **Target Audience:** Business owners, startups, agencies, and founders looking for reliable, high-performance web applications and custom websites.

---

## 2. Technical Stack & Invariant Constraints

| Layer | Technology | Rules / Constraints |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Must use `output: 'export'` in `next.config.ts`. Strictly 100% static export. |
| **Language** | TypeScript | Strict mode enabled. No `any` types. Strongly typed data models for all entities. |
| **Styling** | Tailwind CSS + shadcn/ui | Custom Orange theme (Dark default, Light supported). Zero horizontal overflow. |
| **Typography** | Lexend Font Family | Clean, modern, highly readable, variable font weights. |
| **Rendering** | Static Site Generation (SSG) | Server Components by default; `'use client'` only where user interactivity is needed. |
| **Dynamic Routes** | `generateStaticParams()` | Mandatory for all dynamic routes (e.g., `app/work/[slug]/page.tsx`). |
| **Server Runtime** | **NONE** | **NO** Node.js runtime in production, **NO** API routes, **NO** Server Actions, **NO** runtime DB. |
| **Deployment** | Static `out/` Directory | Deployable anywhere: cPanel, Nginx, Apache, CDN, Cloudflare Pages, Vercel, GitHub Pages. |
| **SEO & Social** | Open Graph, Twitter, JSON-LD | Canonical URLs, dynamic sitemap (`sitemap.ts`), `robots.ts`, semantic H1-H6 hierarchy. |
| **Accessibility** | WCAG 2.1 AA Compliant | Full keyboard navigation, visible focus rings, aria attributes, `prefers-reduced-motion`. |

---

## 3. Repository Directory Structure

```text
.
├── .agents/
│   └── rules/
│       ├── 01-tech-stack-and-constraints.md  # Core technology and static export rules
│       ├── 02-design-and-theme.md            # Styling, Orange theme, Lexend, UI rules
│       └── 03-content-and-conversion.md       # Client-focused freelance messaging
├── app/
│   ├── layout.tsx                            # Root layout (Theme provider, Lexend, Header, Footer)
│   ├── page.tsx                              # Landing page (High-converting freelance homepage)
│   ├── about/
│   │   └── page.tsx                          # Full background, experience, education, skills
│   ├── services/
│   │   └── page.tsx                          # Detailed service offerings, deliverables, pricing/packages
│   ├── work/
│   │   ├── page.tsx                          # Filterable project catalog & case study gallery
│   │   └── [slug]/
│   │       └── page.tsx                      # Deep-dive case study (Problem, Solution, Tech, Impact)
│   ├── contact/
│   │   └── page.tsx                          # Contact form, direct booking links, FAQ, socials
│   ├── sitemap.ts                            # Static XML sitemap generator
│   ├── robots.ts                             # Static robots.txt generator
│   └── globals.css                           # Tailwind directives & CSS variable color system
├── components/
│   ├── layout/                               # Header, Footer, MobileNav, Container, ThemeToggle
│   ├── sections/                             # Hero, ServicesGrid, FeaturedWork, Process, WhyMe, Testimonials, FAQ, CTA
│   ├── projects/                             # ProjectCard, ProjectFilter, CaseStudyHeader, MetricBadge
│   └── ui/                                   # Primitive UI components (Button, Card, Badge, Dialog, Accordion, etc.)
├── data/
│   ├── profile.ts                            # Heera Singh's personal info, bio, contact links, stats
│   ├── services.ts                           # Service items, features, target client type, deliverables
│   ├── projects.ts                           # Projects list, metadata, tags, case study content
│   ├── skills.ts                             # Frontend, Backend, CMS, Tools, Database categorized skills
│   ├── experience.ts                         # MadQuick, Stack Console, freelance history, education
│   ├── process.ts                            # 4-step client engagement workflow
│   ├── testimonials.ts                       # Client reviews and quotes
│   └── faqs.ts                               # Frequently Asked Questions with answers
├── lib/
│   ├── utils.ts                              # Class variance authority / clsx / twMerge helpers
│   └── metadata.ts                           # Centralized SEO metadata and JSON-LD builders
├── public/
│   ├── images/                               # Profile pictures, illustrations, client logos
│   ├── projects/                             # Project screenshots, architecture diagrams, mockups
│   └── icons/                                # Technology and service SVGs
├── AGENTS.md                                 # This AI developer reference
├── ARCHITECTURE.md                           # Comprehensive architectural specifications
├── FLOW.md                                   # User journey, conversion funnel & build flows
├── REQUIREMENTS.md                           # Detailed functional & non-functional requirements
└── requirement.md                            # Original user specification document
```

---

## 4. Key Architectural & Development Rules for AI

When generating or refactoring code in this project, **strictly follow these rules**:

1. **Static Export Compatibility:**
   - Never import server-only modules or attempt to use `cookies()`, `headers()`, or runtime Node.js modules in pages.
   - If using `next/image` in static export, ensure images are either statically imported or configured with `unoptimized: true` in `next.config.ts` if remote loading is needed.
   - For all `[slug]` pages, export `generateStaticParams()` providing all valid slugs at build time.

2. **Data-Driven Architecture:**
   - Content and presentation must remain strictly separated.
   - Never hardcode portfolio projects, services, or testimonials directly inside component JSX.
   - Always read and type-check content from the `/data` folder.

3. **Client vs. Server Components:**
   - Keep components as React Server Components by default.
   - Add `'use client'` only for interactive primitives (e.g., Theme toggle, mobile drawer menu, project filter tabs, contact form handling, accordion toggles).

4. **Design System & Theme:**
   - **Primary Font:** Lexend (`next/font/google` with CSS variable `--font-lexend`).
   - **Theme:** Default to a sleek, modern dark mode with vibrant orange accents (`#f97316` / `#ea580c` / `hsl(var(--primary))`). Support clean light mode via `next-themes` / CSS variables.
   - **Responsiveness:** Mobile-first approach. Ensure zero horizontal scroll (`overflow-x-hidden`) at all viewports (320px to 4K).

5. **Contact Handling in Pure Static Context:**
   - The contact form on `/contact` and homepage must work on static hosts without a Node.js backend.
   - AI should implement client-side submission to a static form service (such as Web3Forms, Formspree, or mailto/WhatsApp fallback) with friendly validation and toast feedback.

---

## 5. Cross-Reference Documentation

- For system architecture, data models, and static export strategy: read [ARCHITECTURE.md](file:///mnt/data/projects/heera-singh/ARCHITECTURE.md).
- For user journeys, conversion funnels, and component lifecycles: read [FLOW.md](file:///mnt/data/projects/heera-singh/FLOW.md).
- For functional and non-functional specifications: read [REQUIREMENTS.md](file:///mnt/data/projects/heera-singh/REQUIREMENTS.md).
- For Antigravity project rules: check `.agents/rules/`.

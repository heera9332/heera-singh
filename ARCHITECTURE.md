# System Architecture & Technical Design

This document details the architectural blueprint, data flow, component design, and operational constraints for the **Heera Singh Portfolio & Freelance Platform**.

---

## 1. Architectural Philosophy & Principles

1. **Zero Server Dependency (Pure Static Export):**
   The application is engineered as a zero-server-dependency Static Site Generation (SSG) artifact. The build output is completely decoupled from any Node.js runtime, server-side database, or runtime API routes.
2. **Freelance Conversion Engine:**
   The UI/UX architecture is optimized around client acquisition. Every page and section naturally funnels prospective clients toward initiating a freelance engagement (`Start a Project` CTA).
3. **Decoupled Data Architecture:**
   Presentation logic is strictly separated from data content. All content (projects, case studies, services, skills, testimonials, FAQs) resides in typed TypeScript modules inside `data/`.
4. **Server Components First:**
   React Server Components (RSC) are used by default across the App Router to reduce JavaScript bundle sizes and accelerate initial page loads. Client Components (`'use client'`) are reserved strictly for interactive state (e.g., drawer menu, theme toggler, filter chips, contact form client handlers).
5. **Mobile-First & Overflow-Resistant:**
   Every component is designed from small screens (320px) up to large displays (1920px+). Horizontal overflow is prohibited at all viewport widths.

---

## 2. Technology Stack & Specifications

```text
┌──────────────────────────────────────────────────────────────┐
│                    Next.js 16 (App Router)                   │
├──────────────────────────────┬───────────────────────────────┤
│  React (Server Components)   │  TypeScript (Strict Mode)     │
├──────────────────────────────┼───────────────────────────────┤
│  Tailwind CSS                │  shadcn/ui (Tailwind Primitives)│
├──────────────────────────────┼───────────────────────────────┤
│  Lexend Font (next/font)     │  next-themes (Orange Dark/Light)│
├──────────────────────────────┼───────────────────────────────┤
│  Lucide React Icons          │  clsx / tailwind-merge (lib/utils)│
└──────────────────────────────┴───────────────────────────────┘
                               │ Build Time (SSG)
                               ▼
┌──────────────────────────────────────────────────────────────┐
│               Static Export Build (out/ Directory)           │
│  - HTML Pre-rendered Pages                                   │
│  - Bundled CSS & Optimized Static Assets                     │
│  - Zero Node.js Runtime in Production                        │
│  - Deployable to cPanel, Apache, Nginx, CDN, Cloudflare Pages│
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Directory & File Organization

```text
heera-singh/
├── app/
│   ├── layout.tsx                # Root layout (Theme provider, Lexend font, Navbar, Footer)
│   ├── page.tsx                  # Home page (Conversion-focused landing page)
│   ├── about/
│   │   └── page.tsx              # About page (Journey, Experience, Education, Philosophy)
│   ├── services/
│   │   └── page.tsx              # Services page (Packages, deliverables, tech breakdown)
│   ├── work/
│   │   ├── page.tsx              # Projects gallery with category filtering
│   │   └── [slug]/
│   │       └── page.tsx          # Case study deep dive with generateStaticParams()
│   ├── contact/
│   │   └── page.tsx              # Contact page (Inquiry form, booking link, direct socials)
│   ├── sitemap.ts                # Dynamic static sitemap generation (XML output)
│   ├── robots.ts                 # Static robots.txt generation
│   └── globals.css               # Theme color tokens, CSS variables, Tailwind base
├── components/
│   ├── layout/
│   │   ├── header.tsx            # Sticky desktop & mobile navigation header
│   │   ├── footer.tsx            # Site footer with navigation links and copyright
│   │   ├── mobile-nav.tsx        # Responsive drawer/sheet navigation for mobile
│   │   ├── theme-toggle.tsx      # Dark / Light theme switcher
│   │   └── container.tsx         # Responsive layout boundary container
│   ├── sections/
│   │   ├── hero-section.tsx      # High-impact value proposition & primary CTA
│   │   ├── what-i-build.tsx      # Solution categories (Web Apps, WordPress, Mobile)
│   │   ├── services-preview.tsx  # Featured freelance services summary
│   │   ├── featured-work.tsx     # Highlighted portfolio case studies
│   │   ├── why-me.tsx            # Value differentiator & client benefits
│   │   ├── process-section.tsx   # 4-step execution workflow (Discovery -> Launch)
│   │   ├── tech-stack.tsx        # Interactive/categorized skill & technology badges
│   │   ├── testimonials.tsx      # Social proof & client feedback
│   │   ├── faq-section.tsx       # Interactive FAQ accordion
│   │   └── cta-banner.tsx        # Global project launch call-to-action banner
│   ├── projects/
│   │   ├── project-card.tsx      # Reusable project card preview with tags & metrics
│   │   ├── project-filter.tsx    # Category/Tech filter tabs
│   │   ├── case-study-header.tsx # Case study hero with client, role, year, and metrics
│   │   └── metric-badge.tsx      # Key impact statistics badge (e.g., "+150% speed")
│   └── ui/                       # Accessible UI primitives (shadcn/ui based)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── accordion.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
├── data/
│   ├── profile.ts                # Developer biography, metrics, contact handles
│   ├── services.ts               # Freelance services array with features & deliverables
│   ├── projects.ts               # Complete project data & full case study content
│   ├── skills.ts                 # Categorized technical skills & proficiencies
│   ├── experience.ts             # Professional roles (MadQuick, Stack Console, Freelance)
│   ├── process.ts                # Structured workflow steps
│   ├── testimonials.ts           # Client reviews & testimonials
│   └── faqs.ts                   # Client FAQ questions and answers
├── lib/
│   ├── utils.ts                  # Class merging utility (clsx + twMerge)
│   └── metadata.ts               # OpenGraph, Twitter card, and JSON-LD structured data generators
└── public/
    ├── images/                   # Developer avatars, illustrations, client brand logos
    ├── projects/                 # Case study mockups, responsive screenshots, diagrams
    └── icons/                    # Technology logos and SVG assets
```

---

## 4. Routing & Static Export Pipeline

### Static Generation Strategy
Next.js 16 configuration enforces static HTML export:

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for pure static hosting without Node.js image optimization server
  },
};

export default nextConfig;
```

### Dynamic Route Parameter Pre-computation
For the case studies route `app/work/[slug]/page.tsx`, `generateStaticParams()` computes all routes ahead of time:

```typescript
// app/work/[slug]/page.tsx
import { getAllProjectSlugs, getProjectBySlug } from '@/data/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudyView project={project} />;
}
```

---

## 5. Design System & Theme Engine

### 1. Typography: Lexend
- Loaded via `next/font/google` with `display: 'swap'` and injected as a CSS variable `--font-lexend`.
- Applied globally to `body` ensuring crisp, legible typography on mobile and high-density screens.

### 2. Orange Theme Palette (Dark Default / Light Supported)
The theme utilizes HSL CSS variables with an energizing modern Orange primary accent:

- **Primary Hue:** `24.6` (Orange)
- **Primary Color:** `hsl(24.6 95% 53.1%)` (`#f97316` / `#ea580c`)
- **Dark Theme (Default):**
  - Background: `hsl(240 10% 3.9%)` (Deep Obsidian / Zinc 950)
  - Foreground: `hsl(0 0% 98%)` (Crisp White)
  - Card / Surface: `hsl(240 10% 6.5%)`
  - Border: `hsl(240 3.7% 15.9%)`
  - Accent / Hover: `hsl(24.6 95% 53.1% / 0.15)`
- **Light Theme:**
  - Background: `hsl(0 0% 100%)` (Pure White)
  - Foreground: `hsl(240 10% 3.9%)`
  - Card / Surface: `hsl(0 0% 98%)`
  - Border: `hsl(240 5.9% 90%)`

### 3. Responsive Breakpoints
- `sm`: 640px (Phones in landscape)
- `md`: 768px (Tablets)
- `lg`: 1024px (Laptops)
- `xl`: 1280px (Desktops)
- `2xl`: 1400px (Wide displays)

---

## 6. Strongly Typed Data Layer Architecture

All content is strictly modeled with TypeScript interfaces in `data/`:

```typescript
// Core Data Interfaces

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  points?: string[];
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  category: 'Web App' | 'WordPress' | 'Full Stack' | 'Mobile / API';
  featured: boolean;
  year: string;
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  technologies: string[];
  metrics: ProjectMetric[];
  overview: {
    challenge: string;
    solution: string;
    architecture: string;
    results: string;
  };
  sections?: CaseStudySection[];
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'General' | 'Pricing & Contracts' | 'Technical' | 'Process';
}
```

---

## 7. SEO, Metadata & JSON-LD Architecture

Every page generates type-safe metadata using `generateMetadata` or static `Metadata` objects.

### Structured Data (JSON-LD)
`lib/metadata.ts` outputs JSON-LD schema objects:
1. **`Person` Schema:** Defines Heera Singh Lodhi, job title (`Full Stack Software Developer`), URL, social profiles (LinkedIn, GitHub), and skills.
2. **`ProfessionalService` Schema:** Highlights freelance web development services, area served, and contact point.
3. **`CreativeWork` / `SoftwareApplication` Schema:** Placed on `/work/[slug]` pages for search engines to index individual case studies with client names and technologies.

---

## 8. Static Contact Flow & Form Architecture

Since this is a 100% static export with no Node.js backend:
1. The contact form operates completely on the client side (`'use client'`).
2. Submissions can be routed through:
   - External static form endpoint (e.g. Web3Forms or Formspree).
   - Instant WhatsApp quick-link fallback (`https://wa.me/...`).
   - Direct `mailto:` button with pre-filled subject and body.
3. Full form validation (name, email, project budget, message) is executed with instantaneous inline feedback and toast notifications.

---

## 9. Performance & Accessibility Verification

- **Lighthouse Performance Score:** 95+ target across Mobile and Desktop.
- **First Contentful Paint (FCP):** < 1.0s.
- **Cumulative Layout Shift (CLS):** 0 (explicit width/height on images, font display swap).
- **Accessibility:** Semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`), visible focus rings (`focus-visible:ring-2`), ARIA labels on icon-only buttons, color contrast ratio >= 4.5:1 for normal text.
- **Reduced Motion:** Components wrap CSS animations with `motion-reduce:transition-none` or `prefers-reduced-motion` media queries.

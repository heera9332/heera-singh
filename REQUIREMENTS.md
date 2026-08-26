# Comprehensive Technical & Functional Requirements

This document is the single source of truth for all requirements, constraints, content guidelines, and quality standards for the **Heera Singh Portfolio & Freelance Platform**.

---

## 1. Technical Requirements

### 1.1 Core Stack
- **Framework:** Next.js 16 (using App Router).
- **Language:** TypeScript with strict type checking enabled (`strict: true` in `tsconfig.json`).
- **Rendering Model:** Static Site Generation (SSG) with pure static export (`output: 'export'`).
- **Styling:** Tailwind CSS with `@tailwindcss/typography` where appropriate.
- **Component Primitives:** shadcn/ui (customized with project orange theme tokens).
- **Typography:** Lexend font family from `next/font/google`.
- **Icons:** `lucide-react` icons.

### 1.2 Absolute Technical Constraints
- **NO Node.js Runtime in Production:** The final build must be 100% static HTML, CSS, JavaScript, and asset files output to the `out/` directory.
- **NO Server-Side APIs or Endpoints:** No `app/api/*` routes.
- **NO Next.js Server Actions:** Interactivity and form submissions must be client-side.
- **NO Runtime Database Dependencies:** All content must be pre-compiled from static data files in `data/`.
- **Static Export Dynamic Routes:** All dynamic routes (such as `app/work/[slug]/page.tsx`) must export `generateStaticParams()` returning all valid slugs at build time.
- **Universal Static Hosting Compatibility:** Output must be directly deployable to cPanel (`public_html`), Apache, Nginx, Shared Hosting, Cloudflare Pages, GitHub Pages, or any CDN.

---

## 2. Functional Requirements by Page

### 2.1 Global Layout (`app/layout.tsx`)
- Root HTML with language attribute `en`, Lexend font class, and ThemeProvider (`next-themes`).
- Responsive sticky Header containing:
  - Brand identity / Logo.
  - Navigation links: Home, Services, Work, About, Contact.
  - Theme toggle button (Dark / Light).
  - Primary CTA button: `"Start a Project"`.
  - Mobile hamburger button opening a full-screen or slide-in drawer menu.
- Global Footer containing:
  - Brief bio and status indicator (*"Available for freelance projects"*).
  - Quick navigation links.
  - Social profiles (LinkedIn, GitHub, Email, WhatsApp).
  - Copyright and credits.

### 2.2 Home Page (`app/page.tsx`)
The home page must adhere to the high-converting freelance flow:
1. **Hero Section:** Clear value proposition, headline, badges, primary CTA (`"Start a Project"`), secondary CTA (`"View Case Studies"`).
2. **What I Build:** High-level solution categories (Modern Web Apps, Custom WordPress Themes/Plugins, Full-Stack Platforms, APIs & Integrations).
3. **Services Preview:** Highlights of freelance services with deliverables and key technologies.
4. **Selected Work / Featured Projects:** High-impact cards with live links, tags, and metrics leading to `/work/[slug]`.
5. **Why Choose Me:** Value propositions (Direct developer communication, production-grade clean code, business-focused results, fast delivery).
6. **4-Step Client Process:** Discovery & Blueprint → UI/UX & Architecture → Development & Testing → Launch & Handover.
7. **Tech Stack & Tools:** Visual badges for React, Next.js, Node.js, TypeScript, Tailwind, WordPress, MySQL, MongoDB, PHP, etc.
8. **About Teaser:** Brief introduction to Heera Singh Lodhi and background.
9. **FAQ Section:** Accordion handling common questions on timelines, pricing, process, and maintenance.
10. **CTA Banner:** Bold closing section driving visitors to the contact form.

### 2.3 About Page (`app/about/page.tsx`)
- Detailed developer biography and background.
- Education: B.Tech in Computer Science from Infinity Management & Engineering College, Sagar (MP).
- Verified Professional Experience:
  - **MadQuick Pvt Ltd:** Web Developer (Full-Time, May 2024 - Present). Custom WordPress themes/plugins (e.g., *Madquick Notice* plugin), React/Node full-stack apps, payment gateway integration, WHM/WHMCS server hosting management.
  - **Stack Console:** Full Stack Developer (Remote, 3+ Months). Scalable web apps, Next.js/React frontends, database optimization.
  - **Freelance & Independent Projects:** Custom client websites, performance optimization, API integrations.
- Categorized skill grid with proficiency indicators.
- Downloadable Resume / CV button.

### 2.4 Services Page (`app/services/page.tsx`)
- Comprehensive breakdown of freelance service offerings:
  1. **Full Stack Web Application Development** (Next.js, React, Node.js, Tailwind).
  2. **Custom WordPress Development** (Custom themes from scratch, bespoke plugins, WooCommerce, speed optimization).
  3. **API Design & Third-Party Integrations** (Payment gateways, REST APIs, CRM/WHMCS integrations).
  4. **Performance, SEO & Hosting Management** (WHM/cPanel setup, Core Web Vitals optimization, database tuning).
- Each service card must list: Ideal Client / Use Case, Deliverables, Key Technologies, Expected Turnaround, and direct CTA.

### 2.5 Work Catalog (`app/work/page.tsx`)
- Filterable gallery of all projects (Filters: All, Web Apps, WordPress, Full Stack, Mobile/API).
- Responsive grid of project cards with thumbnail, title, summary, tech stack chips, metric badges, and link to case study.

### 2.6 Dynamic Case Study Pages (`app/work/[slug]/page.tsx`)
Detailed deep-dive case studies for projects such as:
- `/work/wordpress-business-website`
- `/work/nextjs-saas-platform`
- `/work/react-admin-dashboard`
- `/work/ecommerce-platform`
- Case study structure:
  - Header: Title, Client Name, Role, Year, Category, Live Demo link, GitHub repo link.
  - Metric callouts (e.g., *"+180% PageSpeed Score"*, *"0 to 10k Active Users"*).
  - Business Challenge & Problem Statement.
  - Technical Solution & Architecture decisions.
  - Key Implementation Details (code highlights, features).
  - Results & Client Impact.
  - Navigation to Next/Previous Case Study.

### 2.7 Contact Page (`app/contact/page.tsx`)
- Client inquiry form with fields for Name, Email, Project Type, Estimated Budget, and Project Details.
- Direct contact alternatives: Email (`heera9331@gmail.com` or custom domain), LinkedIn profile, GitHub profile, WhatsApp instant chat link.
- Availability status indicator (e.g., *"🟢 Available for new freelance projects — Q1/Q2"*).
- Client FAQ accordion for quick pre-inquiry answers.

### 2.8 SEO & Static Crawlers (`app/sitemap.ts`, `app/robots.ts`)
- Automated generation of XML sitemap including all static pages and dynamic case study slugs.
- Valid `robots.txt` allowing indexing with reference to the sitemap URL.

---

## 3. Design System & Theming Requirements

- **Theme Base:** Custom Orange Palette (`#f97316` / `#ea580c` / `hsl(24.6 95% 53.1%)`).
- **Default Mode:** Dark mode (Dark Obsidian / Zinc 950 background with crisp text and vivid orange highlights).
- **Light Mode:** Supported seamlessly with clean neutral slate/zinc tones and balanced contrast.
- **Typography:** Lexend font family across all headings, body text, buttons, and badges.
- **Mobile First:** Must look intentional and polished on 320px, 375px, 414px, 768px, 1024px, and 1440px+ viewports.
- **Horizontal Scrolling:** **STRICT ZERO OVERFLOW**. No elements or fixed widths causing horizontal scrollbars on mobile.
- **Animations:** Subtle, performant micro-interactions (hover transitions, gentle card elevation, clean drawer open/close). No heavy canvas scripts or performance-degrading parallax.

---

## 4. Non-Functional & Quality Standards

- **Core Web Vitals:** 95+ score on Google Lighthouse for Performance, Accessibility, Best Practices, and SEO.
- **Accessibility (WCAG 2.1 AA):**
  - All interactive elements must be focusable with keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`).
  - High visible focus indicators (`focus-visible:ring-2 focus-visible:ring-primary`).
  - ARIA attributes on modals, accordions, and icon buttons.
  - Respect `prefers-reduced-motion`.
- **Code Quality:**
  - TypeScript strict typing (no `any`, no `@ts-ignore` unless documented).
  - Reusable, modular component structure.
  - Clean separation of data and presentation.
  - Descriptive, self-documenting code without excessive obvious comments.

---

## 5. Summary Constraint Matrix

| Feature / Pattern | Allowed / Required | Forbidden |
| :--- | :--- | :--- |
| **Static Export** | `output: 'export'` in Next.js config | Next.js dynamic server mode |
| **Server Actions** | Pure client form handlers / static endpoints | `use server` / Server Actions |
| **API Routes** | External APIs or static files | `app/api/*` runtime handlers |
| **Font Family** | Lexend (`next/font/google`) | Unoptimized external CDN font links |
| **Theme** | Dark (default) & Light with Orange accent | Unstyled layouts or non-themed components |
| **Content Source** | Typed data modules in `data/*.ts` | Hardcoded content buried in JSX |
| **Mobile Layout** | Mobile-first responsive flex/grid | Fixed-width desktop-only containers |

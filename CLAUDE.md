# Claude AI Development Guide

This repository is a static Next.js 16 portfolio and freelance showcase website for **Heera Singh Lodhi**.

## Essential Commands
```bash
npm run dev     # Start Next.js local development server
npm run build   # Run production build and static export to out/
npm run lint    # Run ESLint validation
```

## Critical Architecture Principles
1. **100% Static Export (`output: 'export'`):**
   - The application must compile to pure static assets in `out/`.
   - Never write Node.js runtime code, API routes (`app/api`), or Server Actions.
   - All `[slug]` pages must export `generateStaticParams()`.

2. **Data Layer Separation:**
   - All portfolio content, services, skills, testimonials, and FAQs must live in `data/*.ts`.
   - Never embed hardcoded content collections in JSX components.

3. **Styling & Design System:**
   - Tailwind CSS + shadcn/ui.
   - Primary font: Lexend (`next/font/google`).
   - Theme: Orange accent (`#f97316` / `hsl(24.6 95% 53.1%)`). Default is Dark Mode; Light Mode is supported.
   - Responsive & Mobile First: Zero horizontal overflow on any viewport.

4. **Detailed Specs:**
   - See [ARCHITECTURE.md](file:///mnt/data/projects/heera-singh/ARCHITECTURE.md) for architectural blueprints.
   - See [FLOW.md](file:///mnt/data/projects/heera-singh/FLOW.md) for conversion funnel and component flow.
   - See [REQUIREMENTS.md](file:///mnt/data/projects/heera-singh/REQUIREMENTS.md) for full functional/non-functional requirements.
   - See [AGENTS.md](file:///mnt/data/projects/heera-singh/AGENTS.md) for comprehensive agent instructions.

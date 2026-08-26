---
description: Technical stack, SSG export constraints, and runtime rules
trigger: always_on
---

# Tech Stack & Static Export Rules

1. **Framework & Output:**
   - Always configure Next.js 16 with `output: 'export'` in `next.config.ts`.
   - Never create dynamic server-rendered pages or API routes in `app/api/`.
   - Never use Server Actions (`'use server'`) or cookies/headers APIs.

2. **Dynamic Routes:**
   - Every dynamic route folder (e.g. `app/work/[slug]/page.tsx`) must export `generateStaticParams()` returning an array of objects `{ slug: string }`.

3. **TypeScript Strictness:**
   - Strict mode is mandatory.
   - Use explicit interfaces from `@/data` or `@/types` for all component props and data models.
   - Prohibit using `any` or disabling type checking.

4. **Component Paradigms:**
   - Default to React Server Components (RSC).
   - Only add `'use client'` to components that use React hooks (`useState`, `useEffect`, `useTheme`, `usePathname`) or DOM event handlers.

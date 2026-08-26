---
description: Freelance-first positioning, conversion funnel, and content structure rules
trigger: always_on
---

# Content Positioning & Conversion Funnel Rules

1. **Freelance Service Positioning:**
   - Content and messaging must position Heera Singh Lodhi as a freelance solutions provider and full-stack software engineer who solves real business problems.
   - Primary Call to Action throughout all pages: `"Start a Project"`.

2. **Homepage Information Sequence:**
   - Always follow the high-converting sequence:
     **Hero → What I Build → Services → Selected Work → Case Studies → Why Me → Process → Tech Stack → About → FAQ → Contact/CTA**.

3. **Decoupled Data Store:**
   - Never embed hardcoded portfolio items, services, testimonials, or FAQs directly inside JSX.
   - Always store data models in typed TypeScript files within `data/` (`projects.ts`, `services.ts`, `skills.ts`, `testimonials.ts`, `faqs.ts`, `experience.ts`, `profile.ts`).

4. **Case Studies Depth:**
   - Dynamic `/work/[slug]` pages must present a thorough engineering breakdown (Challenge, Architectural Decision, Implementation Highlights, Measurable Results/Metrics).

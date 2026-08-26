---
description: Design system, Orange theme, Lexend font, and responsive layout rules
trigger: always_on
---

# Design System, Orange Theme & UI Rules

1. **Typography:**
   - Use the **Lexend** font family everywhere.
   - Configure via `next/font/google` with CSS variable `--font-lexend` on the root HTML/body.

2. **Theming Architecture:**
   - Orange accent theme: Primary color is `hsl(24.6 95% 53.1%)` (`#f97316`).
   - Default theme must be **Dark Mode** (Premium obsidian/dark developer aesthetic).
   - Support seamless switching to **Light Mode** using `next-themes` and CSS variables.

3. **Responsiveness & Zero Horizontal Overflow:**
   - Design mobile-first. Test on 320px, 375px, 768px, and 1280px+.
   - Never allow elements to cause horizontal scroll (`overflow-x: hidden`).
   - Ensure touch targets are at least 44x44px on mobile devices.

4. **UI Components & Icons:**
   - Use `shadcn/ui` primitives with customized styling.
   - Use `lucide-react` icons.
   - Micro-animations must be subtle, performant, and honor `prefers-reduced-motion`.

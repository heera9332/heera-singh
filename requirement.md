
# Requirements

## Updated technical requirements

```text
TECH STACK

- Next.js 16
- TypeScript
- Static Site Generation / Static Export
- React
- Tailwind CSS
- shadcn/ui
- Lexend font family
- Responsive design
- Semantic HTML
- SEO optimized
- Accessible UI

## Theming

- Theme orange dark/light mode supported

## Static information source

- https://github.com/heera9332/heera9332/blob/main/README.md

DEPLOYMENT

The website must work as a completely static website.

Use Next.js static export:

output: 'export'

The final production build should generate an `out` directory containing
HTML, CSS, JavaScript, images and other static assets.

Do not depend on:

- Node.js runtime in production
- Next.js server
- API routes
- Server Actions
- Server-side database
- Dynamic server rendering
- Runtime backend processing

The generated static website should be deployable directly to:

- cPanel
- Apache
- Nginx
- Shared hosting
- Static hosting/CDN

Use static generation for all portfolio pages.

PROJECT ARCHITECTURE

Use the Next.js App Router.

Recommended structure:

app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
├── work/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── sitemap.ts
└── robots.ts

components/
├── layout/
├── sections/
├── ui/
└── projects/

data/
├── projects.ts
├── services.ts
├── skills.ts
└── testimonials.ts

lib/
└── utils.ts

public/
├── images/
├── projects/
└── icons/

STATIC GENERATION

All project pages must be statically generated at build time.

Use:

generateStaticParams()

for dynamic project routes.

There must be no runtime dependency for rendering project pages.

UI

Use shadcn/ui components where appropriate.

Use Tailwind CSS for styling.

Do not overuse shadcn components. Build custom sections where a custom
design provides a better portfolio experience.

DESIGN SYSTEM

Use Lexend as the primary font family throughout the website.

Typography should be clean, modern and highly readable.

Use a consistent spacing system and responsive typography.

The website must work properly across:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop screens

Use Tailwind responsive breakpoints.

MOBILE FIRST

Design mobile-first.

The mobile experience must not simply be a collapsed desktop layout.

Pay particular attention to:

- Navigation
- Hero layout
- Typography
- Project cards
- Buttons
- Contact forms
- Section spacing
- Images
- Horizontal overflow
- Touch targets

RESPONSIVE REQUIREMENT

No horizontal scrolling should occur at any viewport width.

All sections, cards, images and typography must adapt naturally to different
screen sizes.

COMPONENT QUALITY

Create reusable TypeScript components.

Avoid duplicating markup.

Use strongly typed data models for:

- Projects
- Services
- Technologies
- Testimonials
- FAQs

Keep portfolio content separate from presentation components so that content
can easily be changed later.

CODE QUALITY

Use:

- TypeScript
- Strict typing
- Server Components by default
- Client Components only when interactivity requires them
- Reusable components
- Clean folder structure
- Meaningful component names
- No unnecessary dependencies

Do not add comments to every line of code.

PERFORMANCE

Prioritize excellent Lighthouse/Core Web Vitals performance.

Use:

- next/image
- optimized images
- lazy loading where appropriate
- minimal client-side JavaScript
- Server Components by default
- static generation
- efficient fonts
- minimal dependencies

Avoid unnecessary animations that negatively affect performance.

SEO

Every page must have proper metadata.

Include:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter/X metadata

Use semantic HTML.

Use:

- one primary H1
- logical H2/H3 structure
- descriptive image alt text
- sitemap
- robots.txt

Add appropriate JSON-LD structured data for the developer/business
and portfolio projects where useful.

ACCESSIBILITY

Follow WCAG-oriented accessibility practices.

Ensure:

- keyboard navigation
- visible focus states
- accessible buttons
- accessible navigation
- sufficient color contrast
- semantic HTML
- proper heading hierarchy
- aria labels where required
- reduced-motion support

DARK/LIGHT MODE

Support dark and light themes if appropriate, using shadcn's theme
architecture.

The default appearance should be a premium dark developer portfolio.

Do not make the design overly flashy.

ANIMATIONS

Use subtle animations only.

Examples:

- fade-in sections
- subtle card hover
- smooth transitions
- small scroll animations

Respect:

prefers-reduced-motion

Avoid excessive animations, parallax and distracting effects.
```

### One important recommendation

For your particular portfolio, I'd structure the **content around freelance services**, not around "I'm a developer and here are my skills."

Your positioning should roughly be:

**Hero → What I build → Services → Selected work → Case studies → Why me → Process → Tech → About → FAQ → Contact**

And make **"Start a Project"** the primary CTA throughout the site.

Since you're using **Next.js 16 + SSG**, I'd also make `/work/[slug]` a major part of the portfolio. A detailed case study such as:

```text
/work/wordpress-business-website
/work/nextjs-saas-platform
/work/react-admin-dashboard
/work/ecommerce-platform
```

will give you much more credibility than simply showing a grid of screenshots.

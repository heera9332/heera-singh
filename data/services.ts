export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  iconName: string;
  featured: boolean;
  idealFor: string;
  technologies: string[];
  deliverables: string[];
  benefits: string[];
  estimatedTimeline: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-stack-web-apps",
    slug: "full-stack-web-apps",
    title: "Full Stack Web Applications",
    shortDescription: "Custom, production-ready web apps built with Next.js, React, Node.js, and TypeScript, engineered for speed, scalability, and conversion.",
    fullDescription: "From interactive SaaS dashboards to custom customer portals, I build modern web applications that provide smooth user experiences, solid architecture, and clean, maintainable TypeScript code.",
    badge: "Most Popular",
    iconName: "LayoutGrid",
    featured: true,
    idealFor: "Startups, SaaS founders, and growing businesses needing custom digital software.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL / MongoDB"],
    deliverables: [
      "Custom responsive frontend built with Next.js App Router & Tailwind CSS",
      "Robust RESTful or GraphQL API backend integration",
      "Authentication & Role-Based Access Control (RBAC)",
      "Database schema design and query optimization",
      "Comprehensive test coverage & production deployment"
    ],
    benefits: [
      "Blazing-fast load times with Server Components and static optimization",
      "Scalable architecture that grows seamlessly with your user base",
      "Zero vendor lock-in with clean, standard TypeScript codebase"
    ],
    estimatedTimeline: "2 - 6 Weeks"
  },
  {
    id: "custom-wordpress-development",
    slug: "custom-wordpress-development",
    title: "Custom WordPress & WooCommerce",
    shortDescription: "Bespoke WordPress theme and plugin development tailored to your exact business needs without heavy bloat or sluggish page builders.",
    fullDescription: "I develop lightweight, custom-coded WordPress themes and specialized plugins from scratch. Whether you need a high-converting WooCommerce storefront or custom post types with tailored editorial workflows, I ensure peak performance and security.",
    badge: "Specialized",
    iconName: "Globe",
    featured: true,
    idealFor: "Agencies, e-commerce brands, and businesses wanting a fast, secure, and easily editable WordPress site.",
    technologies: ["WordPress", "PHP", "WooCommerce", "MySQL", "JavaScript", "Custom Gutenberg Blocks"],
    deliverables: [
      "100% custom, lightweight WordPress theme built from your design",
      "Bespoke WordPress plugin development for custom business logic",
      "WooCommerce setup, custom checkout flow & payment gateway integration",
      "Gutenberg block integration for effortless content editing",
      "Page speed tuning and database query optimization"
    ],
    benefits: [
      "Sub-second load times without reliance on slow visual page builders",
      "Effortless editorial experience for non-technical team members",
      "Rock-solid security standards following WordPress best practices"
    ],
    estimatedTimeline: "1 - 4 Weeks"
  },
  {
    id: "api-integrations-backend",
    slug: "api-integrations-backend",
    title: "API Development & Integrations",
    shortDescription: "Seamless third-party integrations, payment gateways (Stripe, Razorpay, PayPal), CRM synchronizations, and custom REST API development.",
    fullDescription: "Connect your disparate tools and automate manual business workflows. I design and build secure RESTful APIs and integrate third-party web services, billing systems (WHMCS), and payment solutions.",
    badge: "Automation",
    iconName: "Cpu",
    featured: true,
    idealFor: "Businesses wanting to connect apps, automate billing, or accept payments online.",
    technologies: ["Node.js", "Express", "REST APIs", "PHP", "Stripe", "Razorpay", "WHMCS API"],
    deliverables: [
      "Secure payment gateway integration (Stripe, Razorpay, WooCommerce)",
      "Automated webhooks and real-time event notifications",
      "Custom REST API architecture with thorough OpenAPI / Swagger documentation",
      "WHMCS billing automation and hosting account provisioning",
      "Data migration and sync pipelines between external services"
    ],
    benefits: [
      "Automated operations saving dozens of manual hours weekly",
      "Zero payment dropped transactions with resilient retry logic",
      "Secure token authentication and strict rate limiting"
    ],
    estimatedTimeline: "1 - 3 Weeks"
  },
  {
    id: "performance-seo-hosting",
    slug: "performance-seo-hosting",
    title: "Performance Optimization & Hosting",
    shortDescription: "Core Web Vitals acceleration, technical SEO architecture, and server management across WHM, cPanel, Nginx, and cloud hosting.",
    fullDescription: "A slow website costs conversions and ranks poorly on Google. I audit, troubleshoot, and refactor existing websites to achieve 95+ Google Lighthouse scores, configure caching layers, and set up robust hosting infrastructure.",
    badge: "High ROI",
    iconName: "Zap",
    featured: false,
    idealFor: "Websites suffering from slow load times, poor Google rankings, or hosting configuration issues.",
    technologies: ["Core Web Vitals", "WHM / cPanel", "Nginx / Apache", "Cloudflare", "Redis / Memcached"],
    deliverables: [
      "Complete Core Web Vitals audit & code-level bottleneck resolution",
      "Asset minification, responsive image pipeline & script optimization",
      "Server configuration, SSL certificates & caching rules",
      "WHM server setup, WHMCS billing bridge, and DNS propagation",
      "Technical SEO markup, JSON-LD schema, and XML sitemaps"
    ],
    benefits: [
      "Dramatic increase in organic search traffic and search rankings",
      "Higher conversion rates from sub-second page rendering",
      "Reliable 99.9% server uptime and proactive security hardening"
    ],
    estimatedTimeline: "3 - 7 Days"
  },
  {
    id: "frontend-ui-engineering",
    slug: "frontend-ui-engineering",
    title: "Responsive Frontend Engineering",
    shortDescription: "Pixel-perfect Figma to React / Next.js implementation with Tailwind CSS, shadcn/ui, and accessible component architectures.",
    fullDescription: "Transform design mockups into living, responsive, and accessible web experiences. Every component is built mobile-first, ensuring zero horizontal overflow and strict WCAG accessibility standards.",
    badge: "Design-Driven",
    iconName: "Smartphone",
    featured: false,
    idealFor: "Design teams, agencies, and founders with Figma files ready for clean frontend code.",
    technologies: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Figma", "Accessibility (a11y)"],
    deliverables: [
      "Pixel-perfect translation from Figma / Adobe XD to code",
      "Modular, reusable UI component library with TypeScript types",
      "Fluid responsive layout for 320px to 4K displays",
      "Dark / Light theme support with CSS variables",
      "Accessible keyboard navigation and screen-reader compliance"
    ],
    benefits: [
      "Zero layout bugs or broken mobile viewports",
      "Easily extendable component architecture for future features",
      "Smooth micro-interactions that engage visitors"
    ],
    estimatedTimeline: "1 - 3 Weeks"
  }
];

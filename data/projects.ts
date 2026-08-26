export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  points?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  clientIndustry: string;
  category: 'Web App' | 'WordPress' | 'Full Stack' | 'API & Backend';
  featured: boolean;
  year: string;
  thumbnail: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  role: string;
  duration: string;
  technologies: string[];
  metrics: ProjectMetric[];
  overview: {
    challenge: string;
    solution: string;
    architecture: string;
    results: string;
  };
  features: string[];
  sections: CaseStudySection[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: "headless-wordpress-nextjs",
    title: "Headless CMS Platform (WordPress + Next.js)",
    tagline: "Decoupled architecture combining WordPress editorial backend with a high-performance Next.js App Router frontend.",
    client: "Stack Console",
    clientIndustry: "Cloud Management & Developer Tools",
    category: "Full Stack",
    featured: true,
    year: "2024",
    thumbnail: "/portfolio/projects/headless-cms.svg",
    heroImage: "/portfolio/projects/headless-cms-hero.svg",
    liveUrl: "https://stackconsole.io",
    githubUrl: "https://github.com/heera9332",
    summary: "Architected and built a modern decoupled Headless CMS using WordPress as the editorial backend and Next.js App Router for the frontend, decreasing page load times to under 0.7s with on-demand static revalidation.",
    role: "Lead Full Stack Developer",
    duration: "3 Months",
    technologies: ["Next.js", "WordPress (Headless)", "React", "TypeScript", "Tailwind CSS", "REST API / GraphQL", "Node.js"],
    metrics: [
      { label: "Page Load Speed", value: "<0.7s", description: "Sub-second static & ISR rendering" },
      { label: "Lighthouse Score", value: "99/100", description: "Core Web Vitals & SEO excellence" },
      { label: "Revalidation Speed", value: "<2s", description: "On-demand webhook cache clearing" },
      { label: "Editorial Freedom", value: "100% WP", description: "Native WP Admin content management" }
    ],
    overview: {
      challenge: "Stack Console needed the intuitive editorial interface of WordPress for content editors, but standard WordPress themes suffered from slow loading speeds, theme bloat, and security concerns.",
      solution: "Engineered a headless decoupled CMS architecture: WordPress serves strictly as the content repository via REST/GraphQL APIs, while Next.js App Router renders blazing-fast, strictly typed React Server Components with instant live previews.",
      architecture: "Headless WordPress on backend server, WP REST API / GraphQL data layer, Next.js App Router frontend with On-Demand Incremental Static Regeneration (ISR), Tailwind CSS design tokens, and CDN edge caching.",
      results: "Delivered sub-0.7s page load times, 99/100 Lighthouse performance, eliminated frontend WordPress security vectors, and provided marketing teams with an effortless publishing workflow."
    },
    features: [
      "Decoupled Headless CMS separating editorial content from frontend presentation",
      "On-demand static revalidation (ISR) triggered automatically by WordPress publish hooks",
      "Draft live preview mode allowing editors to view Next.js previews before publishing",
      "Custom ACF (Advanced Custom Fields) schema mapped to typed TypeScript components",
      "Zero frontend PHP rendering for maximum performance and CDN caching"
    ],
    sections: [
      {
        title: "The Decoupled Architecture & Why Headless",
        description: "By decoupling WordPress from the presentation layer, content creators continue using the familiar WordPress admin dashboard while visitors experience instant Next.js page transitions without PHP processing latency.",
        points: [
          "Eliminated traditional theme bloat and heavy visual page builder dependencies",
          "Implemented secure token-based communication between WordPress and Next.js",
          "Mapped dynamic ACF custom fields to strongly typed React components"
        ]
      },
      {
        title: "On-Demand Revalidation & Editorial Preview Workflow",
        description: "Configured automated webhooks on post save to trigger Next.js cache revalidation, ensuring new blog posts and landing pages update on global CDNs in under 2 seconds.",
        points: [
          "Zero layout shift (CLS: 0) with optimized responsive images and Lexend typography",
          "Instant live draft preview URL for editors within WordPress admin",
          "Granular caching strategy reducing backend WordPress database queries by over 80%"
        ]
      }
    ]
  },
  {
    slug: "wordpress-business-website",
    title: "Custom Enterprise WordPress Solution",
    tagline: "Bespoke custom WordPress theme and notification plugin built from scratch with zero page-builder bloat.",
    client: "Self",
    clientIndustry: "Agency & Digital Solutions",
    category: "WordPress",
    featured: true,
    year: "2024",
    thumbnail: "/portfolio/projects/wordpress-site.svg",
    heroImage: "/portfolio/projects/wordpress-site-hero.svg",
    liveUrl: "https://github.com/heera9332",
    githubUrl: "https://github.com/heera9332",
    summary: "Engineered a custom WordPress theme and proprietary notification plugin ('Madquick Notice'), achieving a 99/100 Google PageSpeed score and doubling conversion inquiries.",
    role: "Full-Time Web Developer",
    duration: "6 Months",
    technologies: ["WordPress", "PHP 8", "MySQL", "JavaScript", "Tailwind CSS", "Gutenberg"],
    metrics: [
      { label: "Google PageSpeed", value: "99/100", description: "Mobile & Desktop performance" },
      { label: "Load Time Reduction", value: "72%", description: "From 4.2s down to 1.1s" },
      { label: "Plugin Footprint", value: "<15KB", description: "Custom Madquick Notice plugin" },
      { label: "Client Inquiries", value: "+110%", description: "Increase in quote requests" }
    ],
    overview: {
      challenge: "The agency's existing website was built on a generic page builder plugin that caused severe bloat, slow mobile loading speeds (4.2s), and poor search engine crawlability.",
      solution: "Coded a custom WordPress theme from scratch without third-party page builders. Developed custom Gutenberg blocks and a specialized 'Madquick Notice' plugin for real-time announcements.",
      architecture: "Custom PHP 8 theme template hierarchy, modular CSS compilation via PostCSS/Tailwind, native WordPress REST API integration for dynamic notices, and server-level Redis object caching.",
      results: "Reduced mobile load time from 4.2s to 1.1s, secured 99/100 Core Web Vitals, and enabled non-technical content editors to publish new pages in minutes."
    },
    features: [
      "Custom Gutenberg blocks matching exact brand design tokens",
      "Proprietary 'Madquick Notice' plugin for urgent site-wide announcements",
      "Dynamic lead capture form with instant email alerts and spam prevention",
      "Automated image WebP compression and lazy-loading pipeline",
      "Schema.org JSON-LD structured data for rich agency search snippets"
    ],
    sections: [
      {
        title: "Eliminating Page Builder Overhead",
        description: "By replacing heavy multi-purpose themes with a clean, bespoke PHP theme, we stripped over 85% of redundant CSS and JavaScript files.",
        points: [
          "Wrote clean semantic PHP template tags adhering strictly to WordPress coding standards",
          "Integrated native custom fields (ACF Pro) for easy client content editing",
          "Implemented database query caching to minimize SQL execution times"
        ]
      },
      {
        title: "Bespoke Plugin Development",
        description: "Created the 'Madquick Notice' plugin allowing administrators to broadcast critical announcements with scheduled expiration dates and custom styling options directly in the WP Admin.",
        points: [
          "Secure options API storage with nonce verification and capability checks",
          "Zero impact on frontend render time with asynchronous script loading",
          "Custom dashboard widget for one-click notice toggling"
        ]
      }
    ]
  },
  {
    slug: "ecommerce-platform",
    title: "High-Converting WooCommerce Store",
    tagline: "Custom WooCommerce digital storefront with optimized one-page checkout, multi-gateway payments, and automated invoice generation.",
    client: "E-Commerce Merchant",
    clientIndustry: "Retail & Consumer Goods",
    category: "WordPress",
    featured: true,
    year: "2023 - 2024",
    thumbnail: "/portfolio/projects/ecommerce-platform.svg",
    heroImage: "/portfolio/projects/ecommerce-platform-hero.svg",
    liveUrl: "https://edevhindi.com",
    githubUrl: "https://github.com/heera9332",
    summary: "Developed a custom e-commerce solution featuring streamlined payment gateway integrations (Razorpay, Stripe), reducing cart abandonment by 38%.",
    role: "Lead Full Stack Developer",
    duration: "2 Months",
    technologies: ["WooCommerce", "WordPress", "PHP", "Razorpay API", "Stripe API", "JavaScript", "Tailwind CSS"],
    metrics: [
      { label: "Cart Abandonment", value: "-38%", description: "Streamlined single-page checkout" },
      { label: "Checkout Speed", value: "2.1s", description: "Average transaction completion" },
      { label: "Payment Success", value: "99.8%", description: "Multi-gateway fallback routing" },
      { label: "Mobile Revenue", value: "+64%", description: "Increase in mobile purchases" }
    ],
    overview: {
      challenge: "The merchant was experiencing high cart abandonment rates (over 65%) on mobile devices due to a multi-step checkout and frequent payment gateway dropouts.",
      solution: "Engineered a custom single-page frictionless checkout experience, integrated Razorpay and Stripe with automated webhook callbacks, and optimized product catalog filters.",
      architecture: "WooCommerce core coupled with custom PHP checkout hooks, AJAX-powered instant cart updates, automated PDF invoice generation, and SSL/PCI compliant checkout pipelines.",
      results: "Cart abandonment dropped by 38%, mobile transactions surged by 64%, and customer support tickets regarding payment confirmation dropped to zero."
    },
    features: [
      "Custom single-step checkout with instant coupon code validation",
      "Dual payment gateway routing (Razorpay for INR, Stripe for International)",
      "Automated order confirmation WhatsApp and email notifications",
      "Faceted live search and instant product filter without page reload",
      "Customer account portal for re-orders, tracking, and downloadable invoices"
    ],
    sections: [
      {
        title: "Checkout Flow Optimization",
        description: "Redesigned the default 4-step WooCommerce checkout into a single clean screen with inline validation and autofill capabilities.",
        points: [
          "Integrated address auto-completion for faster form fills",
          "Removed all distraction elements (menus, sidebars) from the checkout screen",
          "Added instant visual trust badges and SSL security indicators"
        ]
      }
    ]
  },
  {
    slug: "react-admin-dashboard",
    title: "Server & Hosting Automation Portal",
    tagline: "Full-stack management portal integrating WHM and WHMCS APIs for automated hosting provisioning and client billing.",
    client: "MadQuick Infrastructure",
    clientIndustry: "Web Hosting & Cloud Services",
    category: "API & Backend",
    featured: true,
    year: "2024",
    thumbnail: "/portfolio/projects/admin-dashboard.svg",
    heroImage: "/portfolio/projects/admin-dashboard-hero.svg",
    liveUrl: "https://madquick.in",
    githubUrl: "https://github.com/heera9332",
    summary: "Engineered a custom hosting management dashboard integrating WHM and WHMCS APIs, automating client hosting setups and server monitoring.",
    role: "Full Stack Engineer",
    duration: "4 Months",
    technologies: ["React", "Node.js", "Express", "WHM API", "WHMCS API", "MySQL", "Tailwind CSS"],
    metrics: [
      { label: "Provisioning Time", value: "Instant", description: "Zero manual cPanel setup required" },
      { label: "Admin Time Saved", value: "15 hrs/wk", description: "Automated billing and server setup" },
      { label: "Uptime Reliability", value: "99.95%", description: "Monitored via automated health checks" },
      { label: "API Response", value: "<150ms", description: "Cached API bridge layer" }
    ],
    overview: {
      challenge: "Hosting account setup and billing reconciliation required repetitive manual intervention across WHM and WHMCS, taking over 30 minutes per new client onboarding.",
      solution: "Built a centralized web portal connecting WHM server APIs and WHMCS billing, enabling one-click automated account creation, DNS record configuration, and SSL deployment.",
      architecture: "Node.js/Express backend acting as a secure API gateway, React client with Tailwind CSS, encrypted credential vault, and scheduled cron workers for server health checks.",
      results: "Cut client onboarding time from 30 minutes to under 60 seconds, saving the operational team 15 hours every week while eliminating provisioning errors."
    },
    features: [
      "Automated cPanel account creation and quota assignment via WHM API",
      "Instant WHMCS invoice generation and payment verification webhook",
      "Real-time server CPU, RAM, and disk storage health meters",
      "One-click Let's Encrypt SSL certificate generation and auto-renewal check",
      "Audit log capturing every administrative action and server modification"
    ],
    sections: [
      {
        title: "API Gateway & Security",
        description: "Built a secure intermediary proxy in Node.js to safely communicate with WHM root endpoints without exposing sensitive server tokens to the client application.",
        points: [
          "AES-256 encryption for server access credentials and API tokens",
          "Strict rate-limiting and IP whitelisting for administrative endpoints",
          "Asynchronous queue for background DNS propagation checks"
        ]
      }
    ]
  }
];

export function getAllProjects(): ProjectItem[] {
  return projectsData;
}

export function getFeaturedProjects(): ProjectItem[] {
  return projectsData.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

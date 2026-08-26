export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  deliverables: string[];
  iconName: string;
}

export const clientProcess: ProcessStep[] = [
  {
    step: "01",
    number: "1",
    title: "Discovery & Strategy",
    tagline: "Aligning on goals, requirements, and technical architecture",
    description: "We begin with a focused discovery call or detailed async questionnaire to understand your business objectives, target audience, technical constraints, and design preferences.",
    duration: "2 - 4 Days",
    deliverables: [
      "Project scope document & feature roadmap",
      "Technical architecture & stack recommendation",
      "Milestone schedule & fixed transparent estimate"
    ],
    iconName: "Compass"
  },
  {
    step: "02",
    number: "2",
    title: "Design & Architecture",
    tagline: "Visual clarity, component design, and database schema",
    description: "Before writing production code, we establish the design system, wireframes, database schemas, and API contracts so there are no surprises later.",
    duration: "3 - 7 Days",
    deliverables: [
      "Responsive UI component specifications",
      "Database schema & API endpoints blueprint",
      "Interactive prototype review & approval"
    ],
    iconName: "Layers"
  },
  {
    step: "03",
    number: "3",
    title: "Development & Testing",
    tagline: "Clean, performant TypeScript & milestone reviews",
    description: "I build your application using clean, modular code with regular milestone updates. Every feature undergoes rigorous cross-browser testing, mobile responsiveness checks, and speed audits.",
    duration: "1 - 4 Weeks",
    deliverables: [
      "Live staging URL for hands-on milestone testing",
      "Clean, maintainable source code in private Git repo",
      "Automated Lighthouse speed and accessibility checks"
    ],
    iconName: "Code"
  },
  {
    step: "04",
    number: "4",
    title: "Launch & Post-Handover",
    tagline: "Seamless deployment, DNS setup, and ongoing support",
    description: "We deploy the production build to your hosting environment (cPanel, Nginx, Vercel, or CDN), configure SSL/DNS, verify SEO tags, and provide complete documentation and walkthroughs.",
    duration: "1 - 2 Days",
    deliverables: [
      "Production deployment with zero downtime",
      "Complete documentation & video walkthrough",
      "30-day complimentary bug fixing & support period"
    ],
    iconName: "Rocket"
  }
];

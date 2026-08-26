export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Familiar";
  highlight?: boolean;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance user interfaces",
    skills: [
      { name: "React / React 19", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "TypeScript", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: false, category: "Frontend" },
      { name: "shadcn/ui", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "HTML5 / Semantic HTML", level: "Advanced", highlight: false, category: "Frontend" },
      { name: "CSS3 / Modern CSS", level: "Advanced", highlight: false, category: "Frontend" },
      { name: "Responsive & Mobile-First Design", level: "Advanced", highlight: true, category: "Frontend" },
      { name: "Bootstrap", level: "Proficient", highlight: false, category: "Frontend" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Architecting reliable server logic, RESTful endpoints, and business workflows",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true, category: "Backend" },
      { name: "Express.js", level: "Advanced", highlight: true, category: "Backend" },
      { name: "RESTful API Design", level: "Advanced", highlight: true, category: "Backend" },
      { name: "PHP", level: "Advanced", highlight: true, category: "Backend" },
      { name: "Java (OOP & DSA)", level: "Proficient", highlight: false, category: "Backend" },
      { name: "Authentication (JWT, OAuth)", level: "Advanced", highlight: false, category: "Backend" },
      { name: "Payment Gateway Integration", level: "Advanced", highlight: true, category: "Backend" }
    ]
  },
  {
    title: "WordPress & CMS",
    description: "Bespoke theme and plugin development without page-builder bloat",
    skills: [
      { name: "Custom Theme Development", level: "Advanced", highlight: true, category: "CMS" },
      { name: "Custom Plugin Development", level: "Advanced", highlight: true, category: "CMS" },
      { name: "WooCommerce Development", level: "Advanced", highlight: true, category: "CMS" },
      { name: "Gutenberg Block Development", level: "Proficient", highlight: false, category: "CMS" },
      { name: "WordPress REST API", level: "Advanced", highlight: true, category: "CMS" },
      { name: "ACF Pro & Custom Post Types", level: "Advanced", highlight: false, category: "CMS" },
      { name: "WordPress Speed Optimization", level: "Advanced", highlight: true, category: "CMS" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Designing schemas, optimizing queries, and managing data integrity",
    skills: [
      { name: "MySQL", level: "Advanced", highlight: true, category: "Database" },
      { name: "PostgreSQL", level: "Proficient", highlight: true, category: "Database" },
      { name: "MongoDB", level: "Advanced", highlight: true, category: "Database" },
      { name: "Database Schema Design", level: "Advanced", highlight: false, category: "Database" },
      { name: "Query Optimization & Indexing", level: "Proficient", highlight: false, category: "Database" }
    ]
  },
  {
    title: "DevOps, Hosting & Tools",
    description: "Deploying, monitoring, and scaling applications on reliable infrastructure",
    skills: [
      { name: "WHM & cPanel Management", level: "Advanced", highlight: true, category: "DevOps" },
      { name: "WHMCS Integration & Billing", level: "Advanced", highlight: true, category: "DevOps" },
      { name: "Nginx / Apache Server Config", level: "Proficient", highlight: false, category: "DevOps" },
      { name: "Git & GitHub Version Control", level: "Advanced", highlight: true, category: "Tools" },
      { name: "Postman API Testing", level: "Advanced", highlight: false, category: "Tools" },
      { name: "Cloudflare DNS & SSL", level: "Advanced", highlight: false, category: "DevOps" },
      { name: "Vercel & Netlify Deployment", level: "Advanced", highlight: false, category: "DevOps" }
    ]
  }
];

export const coreTechBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "WordPress",
  "PHP",
  "WooCommerce",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "WHM / cPanel",
  "REST APIs",
  "Git"
];

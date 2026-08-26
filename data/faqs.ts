export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing & Timelines" | "Technical" | "Process";
}

export const faqsData: FAQItem[] = [
  {
    id: "services-offered",
    question: "What types of web development projects do you take on?",
    answer: "I specialize in three core areas: (1) Custom full-stack web applications using Next.js, React, Node.js, and TypeScript; (2) Bespoke WordPress themes and plugins built from scratch without bloated page builders; and (3) API integrations, payment gateways (Stripe, Razorpay), and WHM/WHMCS hosting automation.",
    category: "General"
  },
  {
    id: "pricing-structure",
    question: "How do you price freelance projects?",
    answer: "I typically work on a fixed-price project model based on clearly defined deliverables and milestone schedules. For long-term advisory, ongoing feature additions, or agency retainer partnerships, I also offer dedicated weekly or monthly sprint packages. You will always receive a clear, upfront estimate with no hidden costs.",
    category: "Pricing & Timelines"
  },
  {
    id: "project-timeline",
    question: "What is your typical turnaround time for a project?",
    answer: "Project timelines depend on scope. A custom WordPress website or landing page typically takes 1 - 3 weeks. A complex full-stack Next.js web application or SaaS platform usually takes 3 - 6 weeks. Fast-track delivery is available for urgent deadlines.",
    category: "Pricing & Timelines"
  },
  {
    id: "wordpress-vs-nextjs",
    question: "Should I build my website in WordPress or Next.js?",
    answer: "If your primary goal is editorial freedom where marketing teams frequently publish blog posts, landing pages, and standard content without code changes, a custom WordPress solution is ideal. If your project involves interactive web tools, complex dashboards, user authentication, or real-time SaaS features, Next.js provides unmatched performance and scalability. I can help you evaluate the best fit during our discovery call.",
    category: "Technical"
  },
  {
    id: "communication-updates",
    question: "How will we communicate during the project?",
    answer: "I prioritize clear, proactive communication. We will communicate via your preferred channel (Slack, WhatsApp, Email, or Zoom/Google Meet) with weekly video demos and access to a live staging environment where you can review work in progress.",
    category: "Process"
  },
  {
    id: "post-launch-support",
    question: "Do you offer post-launch maintenance and support?",
    answer: "Yes! Every project includes 30 days of complimentary post-launch bug fixing and support to ensure everything runs smoothly. After that, I offer flexible monthly maintenance plans covering security updates, backups, performance monitoring, and new feature additions.",
    category: "Process"
  },
  {
    id: "hosting-assistance",
    question: "Can you help deploy and configure our server hosting?",
    answer: "Absolutely. With extensive experience managing WHM, cPanel, Nginx, Apache, Vercel, and Cloudflare, I will handle the entire deployment process, configure your domain DNS, set up SSL certificates, and ensure your site is running with optimal caching.",
    category: "Technical"
  }
];

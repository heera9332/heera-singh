export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  projectType: string;
  rating: number;
  highlight: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Agency Director",
    role: "Managing Director",
    company: "Digital Solutions Agency",
    quote: "Heera transformed our agency's WordPress delivery. His custom themes load in under a second and our clients love how easy it is to manage content through Gutenberg without breaking layouts.",
    projectType: "Custom WordPress Theme & Plugin",
    rating: 5,
    highlight: "Under 1s load time and zero bloat"
  },
  {
    id: "2",
    name: "Product Lead",
    role: "Engineering Manager",
    company: "Stack Console",
    quote: "Heera engineered our Headless WordPress + Next.js setup flawlessly. Our content editors kept their familiar WP admin while our frontend now loads in under 0.7s with zero layout shift.",
    projectType: "Headless WordPress & Next.js Platform",
    rating: 5,
    highlight: "Sub-0.7s load time & decoupled headless CMS"
  },
  {
    id: "3",
    name: "E-Commerce Merchant",
    role: "Operations Head",
    company: "D2C Brand Store",
    quote: "Our mobile conversion rate jumped by 64% after Heera redesigned our WooCommerce checkout flow and integrated automated Razorpay/Stripe routing. Fast, reliable, and thorough.",
    projectType: "WooCommerce & Payment Integration",
    rating: 5,
    highlight: "+64% mobile conversions"
  },
  {
    id: "4",
    name: "Technical Lead",
    role: "Engineering Manager",
    company: "Hosting & Cloud Provider",
    quote: "Heera's WHM and WHMCS automation scripts saved our team over 15 hours a week in repetitive client provisioning. Highly recommend him for backend and API integrations.",
    projectType: "WHM / WHMCS Automation Portal",
    rating: 5,
    highlight: "Saved 15+ hours weekly in server operations"
  }
];

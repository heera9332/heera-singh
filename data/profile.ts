export interface ProfileData {
  name: string;
  shortName: string;
  title: string;
  role: string;
  tagline: string;
  avatar: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  locationDetails: string;
  email: string;
  phone?: string;
  whatsappUrl: string;
  socials: {
    github: string;
    linkedin: string;
    website: string;
    email: string;
  };
  availability: {
    status: 'available' | 'limited' | 'busy';
    message: string;
    responseTime: string;
  };
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  highlights: string[];
}

export const profileData: ProfileData = {
  name: "Heera Singh Lodhi",
  shortName: "Heera Singh",
  title: "Full Stack Software Developer & Freelance Specialist",
  role: "Full Stack Software Developer",
  tagline: "Building high-performance Next.js web applications, custom WordPress solutions, and scalable API systems for growing businesses.",
  avatar: "/portfolio/heera-singh.png",
  shortBio: "Dedicated Full Stack Developer with strong expertise in React/Next.js, Node.js, and custom WordPress theme & plugin development. Experienced in turning complex business requirements into fast, accessible, and revenue-generating digital products.",
  fullBio: [
    "I am a passionate Full Stack Software Developer with a B.Tech in Computer Science from Infinity Management & Engineering College, Sagar (MP).",
    "With hands-on industry experience at MadQuick Pvt Ltd and Stack Console, I specialize in building modern frontend experiences in React and Next.js, developing custom WordPress themes and plugins, architecting RESTful APIs, and managing server hosting infrastructures via WHM and cPanel.",
    "As a freelance engineer, I partner directly with business owners, founders, and agencies to deliver reliable, production-ready web solutions with clean code, fast loading speeds, and strong SEO foundations."
  ],
  location: "Madhya Pradesh, India",
  locationDetails: "Sagar, Madhya Pradesh, India (Available Worldwide for Remote / Contract Work)",
  email: "heera9331@gmail.com",
  whatsappUrl: "https://wa.me/918085589371?text=Hi%20Heera,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project.",
  socials: {
    github: "https://github.com/heera9332",
    linkedin: "https://www.linkedin.com/in/heera9331/",
    website: "https://heera.dev/portfolio",
    email: "mailto:heera9331@gmail.com"
  },
  availability: {
    status: "available",
    message: "Available for new freelance projects and contract engagements",
    responseTime: "Within 12 hours"
  },
  stats: [
    {
      value: "2+",
      label: "Years Experience",
      description: "Proven track record in agency & freelance development"
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Dedicated focus on clean code and reliable timelines"
    },
    {
      value: "15+",
      label: "Delivered Projects",
      description: "Ranging from enterprise WordPress sites to Next.js web apps"
    },
    {
      value: "95+",
      label: "Avg. Lighthouse Score",
      description: "Optimized for Core Web Vitals, SEO, and fast load times"
    }
  ],
  highlights: [
    "Custom WordPress Theme & Plugin Architecture (e.g. Madquick Notice)",
    "Modern Next.js 15/16 App Router & React 19 Development",
    "Tailwind CSS, Responsive Design & Mobile-First Excellence",
    "Secure Payment Gateway Integrations (Stripe, Razorpay, WooCommerce)",
    "Server & Hosting Infrastructure (WHM, WHMCS, cPanel, Nginx)"
  ]
};

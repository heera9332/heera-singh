export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: "Full-Time" | "Contract / Remote" | "Freelance";
  period: string;
  startDate: string;
  endDate: string;
  current: boolean;
  website?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  highlights: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "madquick",
    company: "MadQuick Pvt Ltd",
    role: "Web Developer",
    location: "Sagar, Madhya Pradesh, India",
    employmentType: "Full-Time",
    period: "May 2024 - Present (1.5+ Years)",
    startDate: "2024-05",
    endDate: "Present",
    current: true,
    website: "https://madquick.in",
    description: "Designing, developing, and maintaining high-performance responsive web applications, custom WordPress themes/plugins, and hosting automation solutions.",
    achievements: [
      "Engineered custom WordPress themes and proprietary plugins from scratch, including the 'Madquick Notice' plugin for seamless announcement management.",
      "Developed and maintained full-stack web applications using React, Next.js, and Node.js, delivering fast UI rendering and scalable backend APIs.",
      "Integrated secure payment gateways (WooCommerce, Razorpay, Stripe) ensuring frictionless e-commerce transactions.",
      "Managed web hosting infrastructures through WHM and integrated WHMCS for automated client billing and cPanel provisioning.",
      "Collaborated with cross-functional teams to translate complex business requirements into high-performing, SEO-optimized web solutions."
    ],
    technologies: ["WordPress", "PHP", "React", "Next.js", "Node.js", "MySQL", "WHM", "WHMCS", "WooCommerce", "Tailwind CSS"]
  },
  {
    id: "stack-console",
    company: "Stack Console",
    role: "Full Stack Developer",
    location: "Remote (Work From Home)",
    employmentType: "Contract / Remote",
    period: "3+ Months (Active Projects)",
    startDate: "2024-01",
    endDate: "2024-04",
    current: false,
    website: "https://stackconsole.io",
    description: "Built scalable, secure, and high-performance web applications across frontend and backend systems with a focus on real-world use cases.",
    achievements: [
      "Engineered modern frontend architectures in React and Next.js, cutting dashboard loading latency by 45%.",
      "Designed and optimized SQL database schemas, reducing query bottlenecks during high concurrency.",
      "Delivered production-ready, secure, and clean TypeScript code following continuous integration workflows."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"]
  },
  {
    id: "freelance-practice",
    company: "Freelance & Independent Practice",
    role: "Freelance Full Stack Web Developer",
    location: "Remote / Worldwide",
    employmentType: "Freelance",
    period: "2022 - Present",
    startDate: "2022-01",
    endDate: "Present",
    current: true,
    description: "Partnering directly with business owners, founders, and creative agencies to plan, build, and deploy custom web solutions and high-converting websites.",
    achievements: [
      "Delivered 15+ custom client websites and web applications with 100% client satisfaction.",
      "Consistently achieved 95+ Google Lighthouse scores across Core Web Vitals on client launches.",
      "Provided end-to-end solutions from UI/UX design implementation to server deployment and ongoing technical support."
    ],
    technologies: ["Next.js", "WordPress", "React", "Node.js", "Tailwind CSS", "PHP", "MySQL", "cPanel/WHM"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Infinity Management & Engineering College",
    location: "Sagar, Madhya Pradesh, India",
    period: "Graduated",
    details: "Comprehensive academic curriculum focused on Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles.",
    highlights: [
      "Strong foundation in OOP, Java, Data Structures & Algorithms",
      "Specialized coursework in Web Technologies, Cloud Computing, and Relational Databases",
      "Active participant in technical workshops, coding challenges, and open-source projects"
    ]
  }
];

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: "Full-Time" | "Contract / Remote" | "Freelance" | "Internship";
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
    id: "stack-console",
    company: "Stack Console",
    role: "Full Stack Developer",
    location: "Remote (Work From Home)",
    employmentType: "Contract / Remote",
    period: "8+ Months (Active Projects)",
    startDate: "2024-01",
    endDate: "Present",
    current: true,
    website: "https://stackconsole.io",
    description: "Full Stack Developer building scalable, secure, and high-performance web applications across frontend and backend, delivering clean, maintainable solutions with a strong focus on real-world use cases.",
    achievements: [
      "Modern frontend engineering in React & Next.js, building modular decoupled architectures (Headless CMS).",
      "Database schema design, query optimization, and REST / GraphQL API integrations with sub-2s revalidation.",
      "Writing production-ready, secure, and optimized TypeScript code following strict linting and code quality standards.",
      "Delivering practical results with clear communication, fast feedback loops, and long-term codebase maintainability."
    ],
    technologies: ["Next.js", "WordPress (Headless)", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "REST / GraphQL"]
  },
  {
    id: "madquick",
    company: "MadQuick Pvt Ltd",
    role: "Web Developer",
    location: "Sagar, Madhya Pradesh, India · On-site",
    employmentType: "Full-Time",
    period: "May 2024 - Present · 1 Year 6 Month",
    startDate: "2024-05",
    endDate: "Present",
    current: false,
    website: "https://madquick.in",
    description: "Full-time web developer responsible for designing, developing, and maintaining responsive web applications. Collaborates with cross-functional teams to translate business requirements into scalable solutions, optimizes web performance and SEO, and promptly troubleshoots technical issues to ensure seamless user experience.",
    achievements: [
      "WordPress Development: Creating custom themes and plugins from scratch, including the development of the 'Madquick Notice' plugin for seamless announcement management.",
      "Full-Stack Development: Developing and maintaining full-stack applications using ReactJS, Node.js, and Next.js, ensuring high performance and scalability.",
      "Frontend Development: Crafting responsive and visually appealing interfaces using HTML, CSS, JavaScript, Bootstrap, and Tailwind, ensuring an optimized user experience across devices.",
      "Backend Development: Implementing server-side logic in Node.js and PHP, including database management and API integration for enhanced functionality.",
      "Payment Integration: Integrating secure and reliable payment gateways for WooCommerce and other platforms to provide seamless transaction experiences.",
      "API Development & Integration: Designing and integrating APIs to facilitate seamless communication between systems and enhance application capabilities.",
      "WHM and WHMCS Management: Managing web hosting infrastructure through WHM, and integrating WHMCS for automated billing and client management.",
      "Collaboration: Working closely with designers and senior developers to optimize website performance, troubleshoot issues, and deliver high-quality products."
    ],
    technologies: ["WordPress", "PHP", "React", "Next.js", "Node.js", "MySQL", "WHM", "WHMCS", "WooCommerce", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: "madquick-intern",
    company: "MadQuick Pvt Ltd",
    role: "Web Development Intern",
    location: "Sagar, Madhya Pradesh, India · On-site",
    employmentType: "Internship",
    period: "Apr 2024 - Apr 2024 · 1 Month",
    startDate: "2024-04",
    endDate: "2024-04",
    current: false,
    website: "https://madquick.in",
    description: "Worked on multiple web development projects, focusing on WordPress theme and plugin development, as well as full-stack applications using ReactJS, Node.js, and Next.js.",
    achievements: [
      "Implemented payment integrations and built responsive, user-friendly websites.",
      "Enhanced the functionality of WordPress-based websites with custom PHP scripts.",
      "Utilized HTML, CSS, JavaScript, and Bootstrap for frontend development.",
      "Collaborated with senior developers to optimize and troubleshoot various projects."
    ],
    technologies: ["WordPress", "PHP", "React", "Node.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
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
    current: false,
    description: "Partnering directly with business owners, founders, and creative agencies to plan, build, and deploy custom web solutions, headless platforms, and high-converting websites.",
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

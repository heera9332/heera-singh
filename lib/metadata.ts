import { Metadata } from "next";
import { profileData } from "@/data/profile";
import { servicesData } from "@/data/services";

export const DOMAIN = "https://zoro-dev.com";
export const BASE_PATH = "/portfolio";
export const SITE_URL = `${DOMAIN}${BASE_PATH}`;

export const DEFAULT_KEYWORDS = [
  "Heera Singh",
  "Heera Singh Lodhi",
  "Full Stack Software Developer",
  "Freelance Next.js Developer",
  "Custom WordPress Developer",
  "WordPress Plugin Developer",
  "WooCommerce Specialist",
  "React Developer",
  "Node.js Backend Engineer",
  "REST API Integrations",
  "Web Development Sagar Madhya Pradesh",
  "Headless WordPress Next.js",
  "1-on-1 Student Mentorship",
  "Frontend Software Engineer",
  "Performance Optimization Core Web Vitals",
];

export function generateSeoMetadata({
  title,
  description,
  path = "",
  image = "/portfolio/heera-singh.png",
  keywords = [],
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
}): Metadata {
  const metaTitle = title
    ? `${title} | ${profileData.shortName} - Full Stack Developer`
    : `${profileData.name} | Full Stack Software Developer & Freelance Specialist`;

  const metaDescription =
    description ||
    "Freelance Full Stack Web Developer specializing in Next.js, React, Node.js, and custom WordPress theme & plugin development. Building high-speed, conversion-focused digital products.";

  const canonicalUrl = path
    ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
    : `${SITE_URL}/`;

  const fullImageUrl = image.startsWith("http")
    ? image
    : `${DOMAIN}${image.startsWith("/") ? image : `/${image}`}`;

  const allKeywords = Array.from(new Set([...DEFAULT_KEYWORDS, ...keywords]));

  return {
    metadataBase: new URL(SITE_URL),
    title: metaTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [
      {
        name: profileData.name,
        url: profileData.socials.github,
      },
    ],
    creator: profileData.name,
    publisher: profileData.name,
    applicationName: `${profileData.shortName} Portfolio`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: `${profileData.shortName} - Full Stack Developer Portfolio`,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${profileData.name} - Full Stack Web Developer`,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [fullImageUrl],
      creator: "@heera9331",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/portfolio/favicon.ico", sizes: "any" },
        { url: "/portfolio/heera-singh.png", type: "image/png" },
      ],
      apple: [{ url: "/portfolio/heera-singh.png" }],
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profileData.name,
    alternateName: profileData.shortName,
    jobTitle: profileData.role,
    description: profileData.shortBio,
    url: `${SITE_URL}/`,
    image: `${DOMAIN}/portfolio/heera-singh.png`,
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
      profileData.whatsappUrl,
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Madhya Pradesh",
      addressCountry: "India",
    },
    email: profileData.email,
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "WordPress Development",
      "WooCommerce",
      "API Integrations",
      "Full Stack Web Development",
      "Web Hosting & WHM",
      "Software Architecture",
      "Core Web Vitals Optimization",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance & Independent Consulting",
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: `${profileData.shortName} Portfolio & Services`,
    description: profileData.tagline,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

export function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Heera Singh Web Development & Mentorship Services",
    itemListElement: servicesData.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    })),
  };
}

export function getProjectJsonLd(project: {
  title: string;
  tagline: string;
  technologies: string[];
  slug: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary || project.tagline,
    applicationCategory: "WebApplication",
    operatingSystem: "All",
    url: `${SITE_URL}/work/${project.slug}/`,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

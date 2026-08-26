import { Metadata } from "next";
import { profileData } from "@/data/profile";

const SITE_URL = "https://heera.dev";

export function generateSeoMetadata({
  title,
  description,
  path = "",
  image = "/heera-singh.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const metaTitle = title
    ? `${title} | ${profileData.shortName} - Full Stack Developer`
    : `${profileData.name} | Full Stack Software Developer & Freelance Specialist`;

  const metaDescription =
    description ||
    "Freelance Full Stack Web Developer specializing in Next.js, React, Node.js, and custom WordPress theme & plugin development. Building high-speed, conversion-focused digital products.";

  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: `${profileData.shortName} Portfolio`,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.role,
    url: SITE_URL,
    sameAs: [
      profileData.socials.github,
      profileData.socials.linkedin,
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "WordPress Development",
      "WooCommerce",
      "API Integrations",
      "Full Stack Web Development",
      "Web Hosting & WHM"
    ],
  };
}

export function getProjectJsonLd(project: {
  title: string;
  tagline: string;
  technologies: string[];
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.tagline,
    applicationCategory: "WebApplication",
    operatingSystem: "All",
    url: `${SITE_URL}/work/${project.slug}/`,
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };
}

import { MetadataRoute } from "next";
import { SITE_URL, DOMAIN } from "@/lib/metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "YandexBot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "Twitterbot",
          "facebookexternalhit",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: DOMAIN,
  };
}

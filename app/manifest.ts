import { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profileData.name} - Full Stack Developer`,
    short_name: profileData.shortName,
    description: profileData.tagline,
    start_url: "/portfolio/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#f97316",
    icons: [
      {
        src: "/portfolio/heera-singh.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/portfolio/heera-singh.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

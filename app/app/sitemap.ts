import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://novacore-gamma.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://novacore-gamma.vercel.app/#features",
      lastModified: new Date(),
    },
    {
      url: "https://novacore-gamma.vercel.app/#pricing",
      lastModified: new Date(),
    },
    {
      url: "https://novacore-gamma.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
import { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact-us",
    "/products",
    "/projects",
    "/infrastructure",
    "/enquiry",
    "/get-a-quote",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}

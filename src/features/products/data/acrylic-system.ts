import { ProductData } from "../types";

export const acrylicSystem: ProductData = {
  slug: "acrylic-system",
  title: "Professional Acrylic System",
  tagline: "ITF-Certified Precision for Every Game",
  category: "Court Infrastructure",
  heroImage: "/images/projects/tennis.png",
  gallery: [
    "/images/projects/tennis.png",
    "/images/projects/tennis.png"
  ],
  description: "Our 8-layer professional acrylic systems are designed for high-end tennis and basketball tournament play. Featuring all-weather durability and UV resistance, this surface provides consistent ball bounce and player comfort in all climatic conditions.",
  features: [
    { title: "ITF Certified", description: "Meets international standards for tournament speed and performance." },
    { title: "UV Resistance", description: "Specially formulated pigments that resist fading under direct sunlight." },
    { title: "Layered Comfort", description: "Integrated cushioning layers for reduced impact on joints." },
    { title: "Excellent Traction", description: "Specifically textured surface for optimal grip and controlled slides." }
  ],
  specs: [
    { label: "System", value: "5-Layer / 8-Layer Cushioned" },
    { label: "Surface Finish", value: "Siliceous Sand Textured" },
    { label: "Base Type", value: "Concrete / Asphalt" },
    { label: "Certification", value: "ITF Pace Rating 2/3/4" }
  ],
  applications: ["Tennis Courts", "Basketball Courts", "Skating Rinks", "Multi-Sport Outdoor Areas"]
};

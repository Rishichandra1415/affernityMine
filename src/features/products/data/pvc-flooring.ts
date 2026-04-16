import { ProductData } from "../types";

export const pvcFlooring: ProductData = {
  slug: "pvc-flooring",
  title: "Synthetic PVC Flooring",
  tagline: "Vibrant, Durable, and Versatile",
  category: "Indoor Multi-Sport",
  heroImage: "/images/badminton-hero.png",
  gallery: [
    "/images/badminton-hero.png",
    "/images/badminton-hero.png"
  ],
  description: "Our high-density PVC flooring offers specialized solutions for indoor sports where durability and versatility are key. With a focus on antibacterial properties and high shock absorption, it's the ideal choice for modern multi-purpose community centers and schools.",
  features: [
    { title: "Point Elasticity", description: "Excellent cushioning for safe play and reduced injury risk." },
    { title: "Wear Layer", description: "High-density transparent wear layer for extreme scratch resistance." },
    { title: "Multiple Colors", description: "Available in custom colors to match your brand or team identity." },
    { title: "Dimensional Stability", description: "Reinforced with fiberglass to prevent shrinking or warping over time." }
  ],
  specs: [
    { label: "Thickness", value: "4.5mm / 6mm / 8mm" },
    { label: "Roll Width", value: "1.8m / 2.0m" },
    { label: "Material", value: "Virgin PVC Resin" },
    { label: "Fire Rating", value: "B1 Class" }
  ],
  applications: ["Multi-Sport Halls", "Volleyball Courts", "Indoor Football", "Table Tennis Arenas"]
};

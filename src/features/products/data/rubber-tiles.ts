import { ProductData } from "../types";

export const rubberTiles: ProductData = {
  slug: "rubber-tiles",
  title: "Premium Rubber Tiles",
  tagline: "Unmatched Cushioning and Durability",
  category: "Safety & Play",
  heroImage: "/images/projects/gym.png",
  gallery: [
    "/images/projects/gym.png",
    "/images/projects/gym.png"
  ],
  description: "Our commercial-grade rubber tiles are designed for areas where safety and shock absorption are paramount. From children's play areas to heavy-duty gym zones, these modular tiles provide a stable, anti-slip, and fall-safe environment.",
  features: [
    { title: "High Shock Absorption", description: "Excellent cushioning for high-impact activities and fall protection." },
    { title: "Noise Isolation", description: "Significant reduction in sound transmission and vibration." },
    { title: "Easy Installation", description: "Interlocking or straight-edged tiles for simple, tool-free setup." },
    { title: "Environmentally Safe", description: "Produced using high-quality recycled rubber and non-toxic binders." }
  ],
  specs: [
    { label: "Dimensions", value: "500mm x 500mm" },
    { label: "Thickness", value: "10mm / 15mm / 20mm" },
    { label: "Pattern", value: "Fine Texture / Square Design" },
    { label: "Certification", value: "Critical Fall Height Standards" }
  ],
  applications: ["Fitness Centers", "Indoor Play Areas", "Weightlifting Zones", "Ramp Buffering"]
};

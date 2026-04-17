import { ProductData } from "../types";

export const sportsEquipment: ProductData = {
  slug: "sports-equipment",
  title: "Professional Sports Equipment",
  tagline: "High-Durability Gear for Performance",
  category: "Professional Equipment",
  description: "We manufacture and export a wide range of premium sports equipment including Basketball poles (Fix & Moveable), Volleyball posts, Tennis posts, and Football goal posts. Our products are designed for durability and meet professional competition standards.",
  heroImage: "/images/serviceimage/basketball.png",
  gallery: [
    "/images/serviceimage/badminton.png",
    "/images/serviceimage/tennis.png",
    "/images/serviceimage/track.png"
  ],
  features: [
    { title: "Height Adjustable", description: "Advanced jack and spring-loaded systems for precise height control." },
    { title: "Mobility", description: "Heavy-duty wheels and portable designs for multi-purpose venues." },
    { title: "Safety Padding", description: "Front safety crash padding included for high-impact player protection." }
  ],
  specs: [
    { label: "Material", value: "Powder Coated Reinforced Steel" },
    { label: "Systems", value: "Jack System / Spring-Loaded / Fix" },
    { label: "Compliance", value: "International Standards" }
  ],
  applications: [
    "Indoor Stadiums",
    "Outdoor Community Parks",
    "Schools & Educational Institutions",
    "Professional Sports Academies"
  ]
};

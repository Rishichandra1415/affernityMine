import { ProductData } from "../types";

export const woodenFlooring: ProductData = {
  slug: "wooden-flooring",
  title: "Elite Wooden Flooring",
  tagline: "Natural Performance, Engineered Excellence",
  category: "Professional Indoor",
  heroImage: "/images/badminton-hero.png",
  gallery: [
    "/images/badminton-hero.png",
    "/images/projects/badminton.png",
    "/images/badminton-hero.png"
  ],
  description: "Our premium wooden flooring solutions are engineered from high-grade Maple and Teak, providing the perfect balance of shock absorption and ball bounce. Specifically designed for high-performance indoor sports arenas, it meets international standards for competition play.",
  features: [
    { title: "Point Elasticity", description: "Superior shock resistance to minimize player fatigue and joint stress." },
    { title: "High Grip Finish", description: "Anti-slip surface coating for maximum traction during fast movements." },
    { title: "Grade-A Maple", description: "Sourced from sustainable forests, ensuring longevity and consistent performance." },
    { title: "Easy Maintenance", description: "Advanced protective layer for quick cleaning and scratch resistance." }
  ],
  specs: [
    { label: "Total Thickness", value: "21mm / 19mm" },
    { label: "Surface Layer", value: "4mm Maple / Teak" },
    { label: "Base System", value: "Shock-absorbing Rubber Pads" },
    { label: "Friction", value: "0.5 - 0.7 (Standard)" }
  ],
  applications: ["Basketball Courts", "Badminton Arenas", "Squash Courts", "Multi-Purpose Gyms"]
};

import { ProductData } from "../types";

export const sbrFlooring: ProductData = {
  slug: "sbr-flooring",
  title: "Impact SBR Flooring",
  tagline: "Heavy-Duty Protection for Power Performers",
  category: "Gym & Strength",
  heroImage: "/images/projects/gym.png",
  gallery: [
    "/images/projects/gym.png",
    "/images/projects/gym.png"
  ],
  description: "Designed for the most demanding environments, our SBR rubber flooring provides unparalleled impact protection and noise reduction. Whether it's a commercial gym or an elite weightlifting facility, this flooring preserves both the subfloor and the players' equipment.",
  features: [
    { title: "Impact Shield", description: "Absorbs heavy vibrations and reduces noise from dropped weights." },
    { title: "Ultra Durable", description: "Resistant to moisture, ozone, and extreme physical wear." },
    { title: "Eco-Friendly", description: "Made from recycled rubber granules, contributing to sustainability." },
    { title: "Non-Slip Surface", description: "Stays grippy even when wet, ensuring maximum safety for lifters." }
  ],
  specs: [
    { label: "Format", value: "Tiles / Rolls / Interlocking" },
    { label: "Thickness", value: "10mm - 25mm" },
    { label: "Density", value: "950 kg/m³" },
    { label: "Hardness", value: "65 Shore A" }
  ],
  applications: ["Weightlifting Areas", "Crossfit Boxes", "Personal Training Studios", "Functional Zones"]
};

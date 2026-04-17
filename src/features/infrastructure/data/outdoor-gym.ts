import { InfrastructureData } from "../types";

export const outdoorGym: InfrastructureData = {
  slug: "outdoor-gym",
  title: "Professional Outdoor Fitness",
  tagline: "Healthy Communities, One Park at a Time",
  category: "Fitness Infrastructure",
  description: "Our outdoor gym solutions bring high-quality fitness equipment to public spaces. Designed for extreme durability and low maintenance, our equipment allows community members of all ages to exercise in a safe and open environment.",
  mainImage: "/images/serviceimage/outdoor-gym.png",
  gallery: ["/images/serviceimage/outdoor-gym.png"],
  features: [
    { title: "Heavy Duty Gear", description: "Constructed with galvanized steel to prevent rust and corrosion." },
    { title: "No Power Needed", description: "Purely mechanical equipment that uses body weight for resistance." },
    { title: "Ergonomic Design", description: "Scientifically designed to provide maximum fitness benefits with minimal joint stress." }
  ],
  specs: [
    { label: "Material", value: "Galvanized Reinforced Steel" },
    { label: "Coating", value: "Double Powder Coated" },
    { label: "Resistance", value: "Self-Weight Based" }
  ],
  constructionSteps: [
    { title: "Layout Planning", description: "Mapping out equipment placement for optimal flow and safety." },
    { title: "Foundation Fix", description: "Creating deep concrete footings for each equipment piece." },
    { title: "Installation", description: "Precision anchoring and technical check of all moving parts." },
    { title: "Final Inspection", description: "Rigorous testing of resistance systems and safety clearances." }
  ]
};

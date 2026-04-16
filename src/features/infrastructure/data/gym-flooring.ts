import { InfrastructureData } from "../types";

export const gymFlooring: InfrastructureData = {
  slug: "gym-flooring",
  title: "Professional Gym Infrastructure",
  tagline: "High-Impact Environments for Elite Fitness",
  category: "Fitness Facilities",
  description: "We design and install heavy-duty gym flooring systems that combine acoustics with extreme durability. From high-intensity zones to heavy weightlifting areas, our rubber and synthetic solutions protect both your athletes and your facility base.",
  mainImage: "/images/serviceimage/gym.png",
  gallery: ["/images/serviceimage/gym.png", "/images/projects/gym.png"],
  features: [
    { title: "Acoustic Insulation", description: "Significant noise reduction for multi-level facilities and urban areas." },
    { title: "Equipment Protection", description: "High-density polymers that resist damage from dropped weights and machines." },
    { title: "Anti-Bacterial", description: "Seamless and easy-to-clean surfaces that promote a hygienic workout environment." }
  ],
  specs: [
    { label: "Material", value: "SBR Rubber / PVC / PU" },
    { label: "Thickness", value: "10mm to 35mm (Customizable)" },
    { label: "Hardness", value: "65-75 Shore A" }
  ],
  constructionSteps: [
    { title: "Leveling", description: "Precision screeding of the concrete floor to ensure absolute flatness." },
    { title: "Adhesive Application", description: "Applying high-bond PU adhesive for permanent, shift-free installation." },
    { title: "Precision Cutting", description: "Laser-accurate cutting around machines, pillars, and facility corners." },
    { title: "Sealant Layer", description: "Final application of protective coatings for enhanced longevity and sheen." }
  ]
};

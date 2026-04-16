import { InfrastructureData } from "../types";

export const lawnTennisCourt: InfrastructureData = {
  slug: "lawn-tennis-court",
  title: "Professional Tennis Courts",
  tagline: "ITF-Approved Surfaces for Year-Round Play",
  category: "Court Infrastructure",
  description: "Affinity Sport provides world-class tennis court construction using premium 8-layer acrylic systems and synthetic turf. Our ITF-certified surfaces ensure consistent ball bounce and optimal sliding control for competitive and recreational play.",
  mainImage: "/images/serviceimage/tennis.png",
  gallery: ["/images/serviceimage/tennis.png", "/images/projects/tennis.png"],
  features: [
    { title: "ITF Certified", description: "Choice of Pace Rating 1 through 5 to match your desired game speed." },
    { title: "All-Weather Durability", description: "Acrylic systems resistant to UV rays and monsoon conditions." },
    { title: "Low Maintenance", description: "Specifically formulated surfaces that resist cracking and fading over decades." }
  ],
  specs: [
    { label: "Dimensions", value: "23.77m x 10.97m (Double)" },
    { label: "Surface Layer", value: "Multi-layered Acrylic System" },
    { label: "Foundation", value: "PCC / Bitumen Base" }
  ],
  constructionSteps: [
    { title: "Site Grading", description: "Comprehensive excavation and compaction of the sub-grade for stability." },
    { title: "Slope Management", description: "Precision slope engineering (1:100) to ensure immediate water drainage." },
    { title: "Acrylic Overlay", description: "Application of 5-8 layers of premium acrylic with precise sand texturing." },
    { title: "Installation & Fencing", description: "Final markings and installation of heavy-duty tennis posts and fencing." }
  ]
};

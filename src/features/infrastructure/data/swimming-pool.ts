import { InfrastructureData } from "../types";

export const swimmingPool: InfrastructureData = {
  slug: "swimming-pool",
  title: "Olympic Grade Swimming Pools",
  tagline: "State-of-the-Art Construction and Filtration",
  category: "Aquatic Infrastructure",
  description: "Affinity Sport specializes in the design and construction of commercial and recreational swimming pools. From Olympic-sized competition pools to high-end residential escapes, we ensure perfect waterproofing and advanced filtration systems.",
  mainImage: "/images/serviceimage/pool.png",
  gallery: ["/images/serviceimage/pool.png", "/images/serviceimage/pool.png"],
  features: [
    { title: "Olympic Standards", description: "Dimensions and depth accurately engineered for FINA competition standards." },
    { title: "Advanced Filtration", description: "Eco-friendly salt-water or high-efficiency sand filtration systems." },
    { title: "Superior Tiling", description: "Anti-slip, frost-proof ceramic and glass mosaic tiling options." }
  ],
  specs: [
    { label: "Construction", value: "Reinforced Gunite / Shotcrete" },
    { label: "Dimensions", value: "25m / 50m (Optional)" },
    { label: "Sanitization", value: "Automated Ozone / Salt Chlorination" }
  ],
  constructionSteps: [
    { title: "Excavation & Shoring", description: "Precision digging and reinforced shoring to define the pool shell." },
    { title: "Rebar & Plumbing", description: "Fixing high-tensile steel cages and laying industrial vacuum plumbing." },
    { title: "Shotcrete Pouring", description: "Pneumatically applied concrete to create a monolithic, watertight shell." },
    { title: "Finishing", description: "Application of specialized waterproofing followed by elite-grade tiling." }
  ]
};

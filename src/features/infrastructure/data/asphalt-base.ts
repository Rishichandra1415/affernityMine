import { InfrastructureData } from "../types";

export const asphaltBase: InfrastructureData = {
  slug: "asphalt-base",
  title: "Precision Asphalt Bases",
  tagline: "The Foundation of World-Class Performance",
  category: "Industrial Base-work",
  description: "A professional sports surface is only as good as its foundation. We specialize in precision-engineered asphalt bases specifically designed for acrylic tennis courts and athletic tracks, ensuring perfect drainage and zero undulations.",
  mainImage: "/images/serviceimage/tennis.png",
  gallery: ["/images/serviceimage/tennis.png", "/images/projects/tennis.png"],
  features: [
    { title: "Zero Undulation", description: "Precision leveling achieving within 3mm height difference over 3 meters." },
    { title: "Dynamic Drainage", description: "Engineered slope systems that eliminate water pooling within 20 minutes of rain." },
    { title: "High Load Bearing", description: "Specifically compacted layers to support heavy sports equipment and foot traffic." }
  ],
  specs: [
    { label: "Material", value: "Densely Graded Asphalt Macadam" },
    { label: "Compaction", value: "98% modified Proctor density" },
    { label: "Binder Type", value: "High-grade Bitumen VG-30" }
  ],
  constructionSteps: [
    { title: "Sub-grade Compaction", description: "Heavy-duty vibratory rolling of the earth to create a stable foundation." },
    { title: "Aggregate Layering", description: "Laying 150mm - 200mm of crushed stone base for drainage and strength." },
    { title: "Hot-Mix Paving", description: "Spreading high-temperature asphalt using laser-guided sensor pavers." },
    { title: "Precision Finishing", description: "Static and vibratory rolling for a smooth, glass-like base finish." }
  ]
};

import { InfrastructureData } from "../types";

export const chainLinkFencing: InfrastructureData = {
  slug: "chain-link-fencing",
  title: "Specialized Sport Fencing",
  tagline: "High-Visibility Perimeter Security",
  category: "Security Infrastructure",
  description: "Our sports fencing solutions provide robust security while maintaining maximum visibility. Specifically designed for tennis, basketball, and multi-sport arenas, our vinyl-coated chain link systems are rust-proof and aesthetically superior.",
  mainImage: "/images/serviceimage/tennis.png",
  gallery: ["/images/serviceimage/tennis.png", "/images/serviceimage/basketball.png"],
  features: [
    { title: "Vinyl Coating", description: "Smooth PVC coating that prevents rust and protects athletes' hands." },
    { title: "Impact Tension", description: "Specifically tensioned mesh that absorbs high-speed ball impacts without sagging." },
    { title: "Integrated Gates", description: "Heavy-duty gate systems designed for high-frequency facility access." }
  ],
  specs: [
    { label: "Mesh Size", value: "45mm - 50mm Diamond" },
    { label: "Wire Gauge", value: "8 / 10 / 12 Gauge (Custom)" },
    { label: "Post Material", value: "Hot-Dipped Galvanized Steel" }
  ],
  constructionSteps: [
    { title: "Post Anchoring", description: "Digging 3ft deep foundations and securing posts with high-strength concrete." },
    { title: "Frame Installation", description: "Welded/Bolt-on top and bottom rails for skeletal rigidity." },
    { title: "Mesh Mounting", description: "Applying diamond mesh with specialized tensioning tools for a flat finish." },
    { title: "Fitting & Capping", description: "Installing post caps and safety fittings to eliminate sharp edges." }
  ]
};

import { InfrastructureData } from "../types";

export const hockeyCourt: InfrastructureData = {
  slug: "hockey-court",
  title: "Synthetic Hockey Fields",
  tagline: "High-Speed Turf Solutions for Dynamic Play",
  category: "Field Infrastructure",
  description: "Our professional hockey field construction utilizes IAAF and FIH compliant synthetic turf. Engineered for optimal irrigation, ball speed, and player safety, these fields are the gold standard for competitive field hockey.",
  mainImage: "/images/serviceimage/track.png", // Using relevant placeholders
  gallery: ["/images/serviceimage/track.png", "/images/projects/multisport.png"],
  features: [
    { title: "FIH Standard", description: "Water-based or sand-dressed systems meeting international hockey standards." },
    { title: "Irrigation Systems", description: "Custom-integrated high-flow irrigation for water-based elite fields." },
    { title: "Enhanced Traction", description: "Specifically designed fiber density for consistent stick control and ball roll." }
  ],
  specs: [
    { label: "Dimensions", value: "91.4m x 55m" },
    { label: "Material", value: "PE Monofilament Synthetic Turf" },
    { label: "Shock Pad", value: "8mm-12mm In-situ layer" }
  ],
  constructionSteps: [
    { title: "Stabilization Layer", description: "Geotextile fabric and aggregate base for vertical drainage and stability." },
    { title: "Elastic Layer", description: "Applying a poured-in-place SBR/PU shock pad for consistent impact protection." },
    { title: "Turf Installation", description: "Precision seaming of high-density synthetic turf using PU adhesive." },
    { title: "Infill Application", description: "Systematic application of kiln-dried sand or water-management layers." }
  ]
};

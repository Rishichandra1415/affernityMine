import { InfrastructureData } from "../types";

export const squashPadel: InfrastructureData = {
  slug: "squash-padel-courts",
  title: "Squash & Padel Court Systems",
  tagline: "High-Speed Play, High-Tech Infrastructure",
  category: "Court Infrastructure",
  description: "We provide complete turnkey solutions for Squash and Padel courts. From the specialized glass wall systems to the shock-absorbing underlayments, we ensure your facility meets international competitive standards.",
  mainImage: "/images/serviceimage/squash-padel.png",
  gallery: ["/images/serviceimage/squash-padel.png"],
  features: [
    { title: "Glass Wall Systems", description: "Impact-resistant tempered glass for maximum visibility and safety." },
    { title: "Point-Elastic Flooring", description: "Specialized surfaces designed for rapid lateral movements and pivots." },
    { title: "Precision Lighting", description: "Shadow-free LED lighting systems optimized for high-speed ball tracking." }
  ],
  specs: [
    { label: "Glass Thickness", value: "10mm / 12mm Tempered" },
    { label: "Underlayment", value: "Area-Elastic / Foam-Backed" },
    { label: "Court Type", value: "Standard / Panoramic" }
  ],
  constructionSteps: [
    { title: "Site Foundation", description: "Reinforced concrete base with high-precision tolerance." },
    { title: "Wall Installation", description: "Expert placement of glass panels and steel structures." },
    { title: "Surface Laying", description: "Laying multi-layer synthetic or hardwood flooring." },
    { title: "Court Marking", description: "WSF/FIP compliant line marking and certification check." }
  ]
};

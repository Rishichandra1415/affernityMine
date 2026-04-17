import { InfrastructureData } from "../types";

export const maintenanceServices: InfrastructureData = {
  slug: "maintenance-amc",
  title: "Maintenance & AMC Services",
  tagline: "Preserving Performance and Longevity",
  category: "Professional Services",
  description: "Protect your investment with our professional maintenance and Annual Maintenance Contract (AMC) services. We provide specialized cleaning, resurfacing, and repair solutions for all types of sports flooring and equipment to ensure player safety and surface durability.",
  mainImage: "/images/serviceimage/track.png",
  gallery: ["/images/serviceimage/track.png"],
  features: [
    { title: "Sports Infra Audit", description: "Technical assessment of surface conditions, safety, and performance metrics." },
    { title: "Resurfacing Solutions", description: "Expert repair and resurfacing of worn-out acrylic or synthetic courts." },
    { title: "Equipment Servicing", description: "Regular checks and lubrication for moveable poles and gym systems." }
  ],
  specs: [
    { label: "Plans", value: "Quarterly / Annual AMC" },
    { label: "Service", value: "Audit, Repair, Deep Clean" },
    { label: "Benefit", value: "Extended Surface Life" }
  ],
  constructionSteps: [
    { title: "Condition Audit", description: "Evaluating cracks, color fading, or grip loss on existing surfaces." },
    { title: "Deep Cleaning", description: "Safe removal of debris and oxidation without damaging the synthetic layers." },
    { title: "Patch & Repair", description: "Fixing specific wear areas or base issues before they expand." },
    { title: "Protective Coating", description: "Applying fresh UV-resistant coats to revitalize the core performance." }
  ]
};

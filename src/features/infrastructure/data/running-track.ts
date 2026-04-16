import { InfrastructureData } from "../types";

export const runningTrack: InfrastructureData = {
  slug: "running-track",
  title: "Professional Athletic Tracks",
  tagline: "IAAF-Certified Solutions for Peak Vertical Performance",
  category: "Athletic Infrastructure",
  description: "Our running tracks are built to World Athletics (IAAF) standards, featuring all-weather EPDM and Sandwich systems. Optimized for force reduction and energy return, these tracks help athletes reach top speeds while minimizing injury risk.",
  mainImage: "/images/serviceimage/track.png",
  gallery: ["/images/serviceimage/track.png", "/images/projects/track.png"],
  features: [
    { title: "IAAF Standard", description: "Poured-in-place systems designed for national and international competition." },
    { title: "Force Reduction", description: "Optimized 35%-50% force reduction to protect athlete ligaments." },
    { title: "Vibrant Aesthetics", description: "Available in standard Terracotta Red, Blue, or custom branding colors." }
  ],
  specs: [
    { label: "Material", value: "EPDM / SBR / PU Sandwich System" },
    { label: "Thickness", value: "13mm (Standard Competition)" },
    { label: "Permeability", value: "Porous and Non-Porous options" }
  ],
  constructionSteps: [
    { title: "Macadam Base", description: "Installation of a porous asphalt/concrete base for rapid drainage." },
    { title: "Base Mat Paving", description: "In-situ paving of recycled SBR rubber granules mixed with PU binder." },
    { title: "Top Layer Casting", description: "Application of weather-resistant EPDM granules with specialized top-coating." },
    { title: "Lane Marking", description: "Precision marking of lanes and start/finish lines using IAAF-certified paint." }
  ]
};

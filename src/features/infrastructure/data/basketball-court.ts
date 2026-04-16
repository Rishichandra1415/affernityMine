import { InfrastructureData } from "../types";

export const basketballCourt: InfrastructureData = {
  slug: "basketball-court",
  title: "Premium Basketball Arenas",
  tagline: "Unmatched Bounce and Impact Protection",
  category: "Court Infrastructure",
  description: "We deliver full-service basketball arena construction featuring professional GRADE-A Maple wood for indoors and high-impact PP or Acrylic for outdoors. Our courts are built to withstand elite level competition while maintaining player safety.",
  mainImage: "/images/serviceimage/basketball.png",
  gallery: ["/images/serviceimage/basketball.png", "/images/basketball-hero.png"],
  features: [
    { title: "FIBA Standard", description: "Design and markings strictly following updated FIBA regulations." },
    { title: "Point Elasticity", description: "High-grade shock pads for maximum vertical rebound and energy return." },
    { title: "Reinforced Systems", description: "Specialized base systems to support heavy portable backstops and intense play." }
  ],
  specs: [
    { label: "Dimensions", value: "28m x 15m (Standard FIBA)" },
    { label: "Surfacing", value: "Area-Elastic Hardwood / Acrylic" },
    { label: "Shock Absorption", value: "Level 2 / 3 Certified" }
  ],
  constructionSteps: [
    { title: "Vapor Barrier", description: "Installing high-density moisture barriers to protect wooden/synthetic layers." },
    { title: "Shock-Pad Layering", description: "Laying specialized rubber pads for consistent energy absorption." },
    { title: "Surface Application", description: "Expert installation of tongue-and-groove hardwood or multi-layer acrylic." },
    { title: "System Finalization", description: "Precision line painting and installation of professional hoop systems." }
  ]
};

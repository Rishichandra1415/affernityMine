import { InfrastructureData } from "../types";

export const badmintonCourt: InfrastructureData = {
  slug: "badminton-court",
  title: "Professional Badminton Courts",
  tagline: "International Standards for Indoor Performance",
  category: "Indoor Facilities",
  description: "We specialize in turn-key badminton court construction, providing BWF-compliant surfaces that offer the perfect grip and shock absorption. From community centers to national stadiums, our courts are designed for peak player performance.",
  mainImage: "/images/serviceimage/badminton.png",
  gallery: ["/images/serviceimage/badminton.png", "/images/badminton-hero.png"],
  features: [
    { title: "BWF Compliant", description: "All markings and surface friction meet international badminton federation standards." },
    { title: "Shock Absorption", description: "Advanced sub-floor systems to protect player joints during high-impact lunges." },
    { title: "Anti-Glare Lighting", description: "Custom lighting solutions designed to eliminate shadows and glare for better shuttle visibility." }
  ],
  specs: [
    { label: "Dimensions", value: "13.4m x 6.1m (Double)" },
    { label: "Surfacing", value: "Synthetic PVC / Teak Wood" },
    { label: "Lighting Class", value: "Class I / II / III (Customizable)" }
  ],
  constructionSteps: [
    { title: "Sub-Base Preparation", description: "Excavation and leveling of the ground with moisture-barrier installation." },
    { title: "Base Flooring", description: "Asphalt or concrete base layer laid with high-precision leveling." },
    { title: "Surfacing", description: "Installation of professional PVC mats or multi-layer wooden systems." },
    { title: "Marking & Finishing", description: "BWF-standard court markings using high-durability acrylic paints." }
  ]
};

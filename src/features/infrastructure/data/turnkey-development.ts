import { InfrastructureData } from "../types";

export const turnkeyDevelopment: InfrastructureData = {
  slug: "turnkey-development",
  title: "Turnkey Sports Projects",
  tagline: "From Concept to Kick-off",
  category: "Professional Services",
  description: "Affinity Sports offers complete turnkey solutions for sports infrastructure. We manage the entire lifecycle of your project, from initial design and survey to procurement, construction, and final handover, ensuring a seamless and high-quality result.",
  mainImage: "/images/serviceimage/track.png",
  gallery: ["/images/serviceimage/track.png"],
  features: [
    { title: "Design & Survey", description: "Professional site analysis and technical architectural planning." },
    { title: "Project Management", description: "Dedicated managers oversee every phase of construction and quality control." },
    { title: "Single Point Contact", description: "Eliminate the hassle of multiple vendors with our end-to-end service." }
  ],
  specs: [
    { label: "Scope", value: "A to Z Project Lifecycle" },
    { label: "Consultation", value: "Expert technical guidance" },
    { label: "Handover", value: "Fully certified and ready-to-play" }
  ],
  constructionSteps: [
    { title: "Feasibility Study", description: "Analyzing site potential and budget requirements." },
    { title: "Technical Design", description: "Creating detailed 2D/3D blueprints and engineering plans." },
    { title: "Material Sourcing", description: "Procuring international-standard flooring and equipment." },
    { title: "Execution & QC", description: "Rigorous construction and quality checks before final delivery." }
  ]
};

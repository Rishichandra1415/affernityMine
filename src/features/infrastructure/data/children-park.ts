import { InfrastructureData } from "../types";

export const childrenPark: InfrastructureData = {
  slug: "children-park",
  title: "Innovative Children's Play Areas",
  tagline: "Safety First, Endless Fun Follows",
  category: "Play Infrastructure",
  description: "We design and install comprehensive children's play area solutions that prioritize child safety while encouraging creative play. Our equipment is manufactured to international safety standards using weather-resistant materials.",
  mainImage: "/images/serviceimage/children-park.png",
  gallery: ["/images/serviceimage/children-park.png"],
  features: [
    { title: "Non-Toxic Materials", description: "All equipment uses LLDPE and powder-coated steel that is safe for children." },
    { title: "Safe Flooring", description: "Anti-skid EPDM or SBR rubber flooring options to prevent injury from falls." },
    { title: "Modular Design", description: "Customizable play stations that can be configured to fit any park layout." }
  ],
  specs: [
    { label: "Durability", value: "All-weather UV protected" },
    { label: "Age Group", value: "3 to 12 Years" },
    { label: "Certifications", value: "ISO 9001:2015 Standards" }
  ],
  constructionSteps: [
    { title: "Site Grading", description: "Preparing a leveled and well-drained surface for the play area." },
    { title: "Base Preparation", description: "Installing a concrete or PCC base for equipment anchoring." },
    { title: "Equipment Assembly", description: "Professional installation of slides, swings, and climbing structures." },
    { title: "Safety Flooring", description: "Laying down cushioned rubber flooring over the entire play zone." }
  ]
};

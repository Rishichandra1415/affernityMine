import { ProductData } from "../types";

export const epdmRubberFlooring: ProductData = {
  slug: "epdm-rubber-flooring",
  title: "EPDM Rubber Flooring",
  tagline: "Seamless, Colorful, and Extremely Safe",
  category: "Safety Surfaces",
  heroImage: "/images/projects/track.png",
  gallery: [
    "/images/projects/track.png",
    "/images/projects/track.png"
  ],
  description: "Our poured-in-place EPDM rubber flooring provides a seamless, vibrant surface specifically designed for playgrounds and walking tracks. With the ability to create complex graphics and provide high-level fall safety, it's the premium Choice for modern urban spaces.",
  features: [
    { title: "Seamless Finish", description: "Poured-in-place application eliminates joints and tripping hazards." },
    { title: "Design Freedom", description: "Unmatched color options and the ability to create logos/graphics." },
    { title: "Excellent Safety", description: "Critical fall height protection for modern children's playgrounds." },
    { title: "Low Heat Retention", description: "Stays comfortable to walk on even in extreme summer heat." }
  ],
  specs: [
    { label: "Application", value: "Poured-in-Place (Wet-Pour)" },
    { label: "Material", value: "Virgin EPDM Granules" },
    { label: "Thickness", value: "15mm - 50mm (Customizable)" },
    { label: "Curing Time", value: "24-48 Hours" }
  ],
  applications: ["Children's Playgrounds", "Running Tracks", "Swimming Pool Decks", "Themed Parks"]
};

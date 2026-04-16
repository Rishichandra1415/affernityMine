export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  type: "Indoor" | "Outdoor";
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "jogging-track-heritage",
    title: "Heritage Jogging Track",
    description: "A state-of-the-art synthetic jogging track designed for high-performance training and community wellness. Features advanced shock-absorption layers and weather-resistant surfacing, ensuring year-round reliability for professional athletes and fitness enthusiasts alike.",
    location: "Rampurhat, West Bengal",
    category: "Running Track",
    type: "Outdoor",
    image: "/images/projects/track.png",
    stats: [
      { label: "Material", value: "PU Synthetic" },
      { label: "Area", value: "400m Loop" },
      { label: "Layers", value: "Double Coat" }
    ]
  },
  {
    id: "siddha-pine-badminton",
    title: "Siddha Pine Sports Club",
    description: "Multi-court indoor badminton facility featuring professional-grade maple flooring and world-class acoustics. Optimized for both competitive tournament play and intensive recreational sessions, providing the perfect grip and shock resistance for fast-paced action.",
    location: "Rajarhat, Kolkata",
    category: "Badminton Court",
    type: "Indoor",
    image: "/images/projects/badminton.png",
    stats: [
      { label: "Surfacing", value: "Teak Wood" },
      { label: "Courts", value: "4 Professional" },
      { label: "Lighting", value: "LED Anti-Glare" }
    ]
  },
  {
    id: "dimapur-army-tennis",
    title: "Dimapur Army Camp Arena",
    description: "Advanced all-weather tennis courts engineered for military-grade durability and high-traffic usage. Utilizing ITF-certified acrylic systems to provide consistent ball bounce and superior traction under diverse climatic conditions of the North-East.",
    location: "Dimapur, Nagaland",
    category: "Tennis Court",
    type: "Outdoor",
    image: "/images/projects/tennis.png",
    stats: [
      { label: "Certification", value: "ITF Level 2" },
      { label: "System", value: "8-Layer Acrylic" },
      { label: "Base", value: "Asphalt" }
    ]
  },
  {
    id: "port-blair-stadium",
    title: "Brichgunj Basketball Court",
    description: "Elite basketball court designed to survive coastal environments with high humidity. Features high-tensile structural systems and specialized surface coating that minimizes impact on players' joints while ensuring championship-level performance.",
    location: "Port Blair, Andaman",
    category: "Basketball Court",
    type: "Outdoor",
    image: "/images/projects/basketball.png",
    stats: [
      { label: "Finish", value: "Textured Acrylic" },
      { label: "Poles", value: "Hydraulic Pro" },
      { label: "Resistance", value: "UV & Saline" }
    ]
  }
];

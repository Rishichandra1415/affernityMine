import { InfrastructureData } from "../types";

export const cricketPitch: InfrastructureData = {
  slug: "cricket-pitch",
  title: "Professional Cricket Pitches",
  tagline: "The Foundation of Every Great Century",
  category: "Court Infrastructure",
  description: "We specialize in constructing high-performance cricket practice pitches and main match wickets. Using premium quality artificial turf and specialized sub-base layers, we ensure consistent bounce and turn for players at all levels.",
  mainImage: "/images/serviceimage/cricket.png",
  gallery: ["/images/serviceimage/cricket.png"],
  features: [
    { title: "True Bounce", description: "Engineered sub-base for consistent pace and vertical ball reaction." },
    { title: "UV Resistance", description: "Artificial turf that maintains its color and texture under harsh summer sun." },
    { title: "Quick Drainage", description: "Perforated systems that allow practice to resume minutes after rain." }
  ],
  specs: [
    { label: "Standard Length", value: "22 Yards / 20.12 Meters" },
    { label: "Surfacing", value: "Polypropylene / High-Density Turf" },
    { label: "Base Type", value: "Compacted Asphalt / Crushed Stone" }
  ],
  constructionSteps: [
    { title: "Excavation", description: "Deep excavation to remove organic matter and non-standard soil." },
    { title: "Sub-Base Layering", description: "Laying 100mm-150mm of graded aggregate for stability." },
    { title: "Asphalt Finishing", description: "Precision leveling with asphalt to provide a rock-hard foundation." },
    { title: "Turf Installation", description: "Glueing and stapling specialized cricket turf for a ripple-free finish." }
  ]
};

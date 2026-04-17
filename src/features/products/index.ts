import { woodenFlooring } from "./data/wooden-flooring";
import { pvcFlooring } from "./data/pvc-flooring";
import { sbrFlooring } from "./data/sbr-flooring";
import { acrylicSystem } from "./data/acrylic-system";
import { ppTiles } from "./data/pp-tiles";
import { rubberTiles } from "./data/rubber-tiles";
import { epdmRubberFlooring } from "./data/epdm-rubber-flooring";
import { sportsEquipment } from "./data/sports-equipment";

import { ProductData } from "./types";
export const productsData: Record<string, ProductData> = {
  "wooden-flooring": woodenFlooring,
  "pvc-flooring": pvcFlooring,
  "sbr-flooring": sbrFlooring,
  "acrylic-system": acrylicSystem,
  "pp-tiles": ppTiles,
  "rubber-tiles": rubberTiles,
  "epdm-rubber-flooring": epdmRubberFlooring,
  "sports-equipment": sportsEquipment,

};

export * from "./types";
export * from "./components/product-hero";
export { GallerySection } from "./components/gallery-section";
export * from "./components/product-features";
export * from "./components/product-spec-table";
export * from "./components/product-applications";
export * from "./components/product-cta";

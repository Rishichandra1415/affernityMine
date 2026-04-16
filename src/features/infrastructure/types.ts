import { ProductFeature, ProductSpec } from "../products/types";

export interface ConstructionStep {
  title: string;
  description: string;
}

export interface InfrastructureData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  mainImage: string;
  gallery: string[];
  features: ProductFeature[];
  specs: ProductSpec[];
  constructionSteps: ConstructionStep[];
}

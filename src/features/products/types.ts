export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  heroImage: string;
  gallery: string[];
  features: ProductFeature[];
  specs: ProductSpec[];
  applications: string[];
}

import { notFound } from "next/navigation";
import { 
  productsData, 
  ProductHero, 
  GallerySection, 
  ProductFeatures, 
  ProductSpecTable, 
  ProductApplications, 
  ProductCTA 
} from "@/features/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ProductHero product={product} />
      <GallerySection images={product.gallery} />
      <ProductFeatures features={product.features} />
      <ProductSpecTable specs={product.specs} />
      <ProductApplications applications={product.applications} />
      <ProductCTA />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}

import { Metadata } from "next";
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData[slug];

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.title,
    description: `High-quality ${product.title} from Affinity Sports Infra. Specialized sports infrastructure and equipment solutions.`,
    openGraph: {
      title: product.title,
      description: `High-quality ${product.title} from Affinity Sports Infra.`,
      images: [product.heroImage],
    },
  };
}


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

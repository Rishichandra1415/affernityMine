import { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  infrastructureData, 
  InfraHero, 
  ConstructionProcess, 
  InfraGallery, 
  InfraFeatures, 
  InfraSpecTable, 
  InfraCTA 
} from "@/features/infrastructure";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const infra = infrastructureData[slug];

  if (!infra) {
    return {
      title: "Infrastructure Not Found",
    };
  }

  return {
    title: infra.title,
    description: `Professional ${infra.title} construction and installation services by Affinity Sports Infra. Expert in sports infrastructure across India.`,
    openGraph: {
      title: infra.title,
      description: `Professional ${infra.title} construction services by Affinity Sports Infra.`,
      images: [infra.mainImage],
    },
  };
}


export default async function InfrastructurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const infra = infrastructureData[slug];

  if (!infra) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <InfraHero infra={infra} />
      <ConstructionProcess steps={infra.constructionSteps} />
      <InfraGallery images={infra.gallery} />
      <InfraFeatures features={infra.features} />
      <InfraSpecTable specs={infra.specs} />
      <InfraCTA />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(infrastructureData).map((slug) => ({
    slug,
  }));
}

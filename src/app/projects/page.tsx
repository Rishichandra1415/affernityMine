import { Metadata } from "next";
import { ProjectHero, ProjectList } from "@/features/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore our portfolio of world-class sports infrastructure projects across India, including stadiums, synthetic tracks, and multi-purpose sports arenas.",
};


export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectHero />
      <ProjectList />
    </main>
  );
}

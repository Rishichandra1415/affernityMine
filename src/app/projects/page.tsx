import { ProjectHero, ProjectList } from "@/features/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <ProjectHero />
      <ProjectList />
    </main>
  );
}

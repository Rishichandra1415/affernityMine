import {
  HeroSection,
  StatsSection,
  ProcessSection,
  WhyChooseUs,
  EnquirySection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  ClientsSection,
  MissionVisionSection
} from "@/features/home";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />


      <StatsSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ClientsSection />
      <EnquirySection />

    </main>
  );
}

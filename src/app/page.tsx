import { HeroSection, StatsSection, ProcessSection, WhyChooseUs, EnquirySection } from "@/features/home";
import { ServicesSection } from "@/features/services";
import { ProjectsSection } from "@/features/projects";
import { TestimonialsSection } from "@/features/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <EnquirySection />
    </main>
  );
}

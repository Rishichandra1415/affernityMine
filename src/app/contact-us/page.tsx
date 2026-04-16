import { ContactHero, ContactInfo, GeneralContactForm } from "@/features/contact";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <ContactHero 
        title="Contact Our Expert Team"
        description="We're here to answer your questions and help you plan your next world-class sports facility. Reach out to our regional offices today."
        highlightWords={["Expert Team"]}
      />
      <ContactInfo />
      <GeneralContactForm />
    </main>
  );
}

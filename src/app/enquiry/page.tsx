import { ContactHero, EnquiryForm } from "@/features/contact";

export default function EnquiryPage() {
  return (
    <main className="min-h-screen">
      <ContactHero 
        title="Project Enquiry Portal"
        description="Share your project vision with us. Our specialized consultants will help you select the right materials and infrastructure systems."
        badge="Enquiry"
        highlightWords={["Enquiry Portal"]}
      />
      <EnquiryForm />
    </main>
  );
}

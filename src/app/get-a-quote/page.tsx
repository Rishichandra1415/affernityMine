import { ContactHero, QuoteForm } from "@/features/contact";

export default function GetAQuotePage() {
  return (
    <main className="min-h-screen">
      <ContactHero 
        title="Get a Customized Quote"
        description="Provide your project dimensions and requirements to receive a comprehensive estimation for your sports facility."
        badge="Quotations"
        highlightWords={["Customized Quote"]}
      />
      <QuoteForm />
    </main>
  );
}

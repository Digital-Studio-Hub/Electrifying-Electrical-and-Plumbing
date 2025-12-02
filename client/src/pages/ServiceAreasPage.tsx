import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceAreas } from "@/components/ServiceAreas";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function ServiceAreasPage() {
  const seoTitle = "Service Areas | Electrician Near Me in Durban & KZN | Electrifying";
  const seoDescription = "Looking for an electrician near me? We service all of Durban and KwaZulu-Natal including Umhlanga, Durban North, Amanzimtoti, Pinetown, Westville, Ballito, and more. 24/7 emergency electrical and plumbing service available.";
  const keywords = ["electrician near me Durban", "electrician durban areas", "plumber durban coverage", "umhlanga electrician", "durban north plumber", "ballito electrical service", "pinetown plumbing", "westville electrician", "KZN electrical services", "electrician KwaZulu-Natal"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonical={`${SEO_CONFIG.baseUrl}/service-areas`}
        ogType="website"
      />
      <Header />
      <main className="flex-1">
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
}

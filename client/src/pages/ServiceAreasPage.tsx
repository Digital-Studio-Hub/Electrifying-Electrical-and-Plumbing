import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceAreas } from "@/components/ServiceAreas";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function ServiceAreasPage() {
  const seoTitle = "Service Areas - Durban Electrical & Plumbing Coverage | Electrifying";
  const seoDescription = "We service all of Durban and surrounding areas including Umhlanga, Durban North, Amanzimtoti, Pinetown, Ballito, and more. 24/7 emergency electrical and plumbing service available.";
  const keywords = ["electrician durban areas", "plumber durban coverage", "umhlanga electrician", "durban north plumber", "ballito electrical service", "pinetown plumbing"];

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

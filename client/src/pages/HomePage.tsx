import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function HomePage() {
  const seoTitle =
    "Electrician Durban | Plumber Durban | 24/7 Emergency Services | Electrifying";
  const seoDescription =
    "Looking for an electrician near me in Durban? Electrifying provides 24/7 emergency electrical and plumbing services across Durban and KZN. Prepaid meter specialists, geyser installation, DB board repairs, blocked drains. Call 069 805 5580 for fast, reliable service.";
  const keywords = [
    "electrician Durban",
    "plumber Durban",
    "electrician near me",
    "emergency electrician Durban",
    "emergency plumber Durban",
    "prepaid meter installation Durban",
    "geyser repair Durban",
    "blocked drain Durban",
    "DB board repair Durban",
    "24/7 electrician Durban",
    "electrical services KZN",
    "plumbing services Durban",
    "electrician KwaZulu-Natal",
    "Durban electrical contractor",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonical={SEO_CONFIG.baseUrl}
        ogType="website"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

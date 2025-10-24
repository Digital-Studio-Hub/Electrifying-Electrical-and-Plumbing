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
  const seoTitle = "Electrician & Plumber Durban | 24/7 Emergency Services | Electrifying Electrical and Plumbing";
  const seoDescription = "Professional electrical and plumbing services in Durban. 24/7 emergency electrician and plumber. Prepaid meter specialists, geyser installation, DB board repairs, blocked drains. Call 069 805 5580 for fast, reliable service.";
  const keywords = [
    "electrician Durban",
    "plumber Durban",
    "emergency electrician Durban",
    "emergency plumber Durban",
    "prepaid meter installation Durban",
    "geyser repair Durban",
    "blocked drain Durban",
    "DB board repair Durban",
    "24/7 electrician Durban",
    "electrical services Durban",
    "plumbing services Durban"
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

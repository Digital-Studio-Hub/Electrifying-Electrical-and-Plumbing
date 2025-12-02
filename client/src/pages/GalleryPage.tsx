import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function GalleryPage() {
  const seoTitle = "Our Work Gallery | Electrician Durban Portfolio | Electrifying";
  const seoDescription = "See our portfolio of completed electrical and plumbing projects across Durban and KZN. Battery backup installations, prepaid meter specialists, DB board upgrades, geyser repairs. Quality workmanship by certified electricians near you.";
  const keywords = ["electrical work Durban", "plumbing projects KZN", "prepaid meter installation photos", "electrician portfolio Durban", "plumber portfolio Durban", "electrical contractor gallery", "KwaZulu-Natal electrician"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonical={`${SEO_CONFIG.baseUrl}/gallery`}
        ogType="website"
      />
      <Header />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

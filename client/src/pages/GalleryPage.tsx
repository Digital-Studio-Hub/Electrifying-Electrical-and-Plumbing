import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function GalleryPage() {
  const seoTitle = "Our Work Gallery - Electrical & Plumbing Projects | Electrifying";
  const seoDescription = "View our portfolio of completed electrical and plumbing projects in Durban. Professional installations, repairs, and maintenance work by certified specialists.";
  const keywords = ["electrical work durban", "plumbing projects durban", "prepaid meter installation", "battery backup", "electrical maintenance portfolio"];

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

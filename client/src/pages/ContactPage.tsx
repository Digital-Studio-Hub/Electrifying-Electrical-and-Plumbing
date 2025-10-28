import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function ContactPage() {
  const seoTitle = "Contact Us - Get Fast Quote for Electrical & Plumbing | Electrifying Durban";
  const seoDescription = "Contact Electrifying Electrical and Plumbing for 24/7 emergency service in Durban. Call 069 805 5580, WhatsApp 061 405 5794, or fill out our online form for a free quote.";
  const keywords = ["contact electrician durban", "emergency plumber contact", "electrical quote durban", "plumbing quote", "24/7 emergency contact"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        canonical={`${SEO_CONFIG.baseUrl}/contact`}
        ogType="website"
      />
      <Header />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

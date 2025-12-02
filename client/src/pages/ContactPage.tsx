import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function ContactPage() {
  const seoTitle = "Contact Us | Get a Free Quote | Electrician Durban | Electrifying";
  const seoDescription = "Contact Electrifying Electrical and Plumbing for 24/7 emergency service in Durban and KZN. Call 069 805 5580, WhatsApp 061 405 5794, or fill out our online form. Visit us at Mercury House, 320 Anton Lembede Street, Durban CBD.";
  const keywords = ["contact electrician Durban", "emergency plumber contact KZN", "electrical quote Durban", "plumbing quote Durban", "24/7 emergency contact", "electrician near me contact", "Durban CBD electrician"];

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

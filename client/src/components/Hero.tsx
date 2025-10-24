import { Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/Main Hero Section Image_1761297633354.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[700px] flex items-center justify-center bg-[#111111]"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/75" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge 
              className="bg-primary text-white font-semibold"
              data-testid="badge-24-7"
            >
              <Clock className="h-4 w-4 mr-2" />
              24/7 Emergency Service
            </Badge>
            <Badge 
              className="bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20"
              data-testid="badge-durban"
            >
              Durban Specialists
            </Badge>
          </div>

          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Your Expert Electrical & Plumbing Solution
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Professional, Reliable 24/7 Service for Electrical and Plumbing Emergencies in Durban. Prepaid Meter Specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="default"
              className="text-lg font-semibold"
              data-testid="button-get-quote"
            >
              Get a Free Quote
            </Button>
            
            <a href="tel:0698055580" data-testid="link-call-hero">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-2 border-white/30 text-white text-lg font-semibold"
                data-testid="button-call-hero"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 069 805 5580
              </Button>
            </a>

            <a href="https://wa.me/27614055794" data-testid="link-whatsapp-hero">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-2 border-white/30 text-white text-lg font-semibold"
                data-testid="button-whatsapp-hero"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-white">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-availability">24/7</p>
              <p className="text-white/80 text-sm mt-1" data-testid="text-label-availability">Emergency Response</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-experience">15+</p>
              <p className="text-white/80 text-sm mt-1" data-testid="text-label-experience">Years Experience</p>
            </div>
            <div className="text-white">
              <p className="text-3xl font-bold text-primary" data-testid="text-stat-customers">1000+</p>
              <p className="text-white/80 text-sm mt-1" data-testid="text-label-customers">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

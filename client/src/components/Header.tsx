import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Logo_1761297985473.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#111111] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="Electrifying Logo" 
              className="h-12 w-12 rounded-full"
              data-testid="img-logo"
            />
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-lg">Electrifying</h1>
              <p className="text-white/70 text-xs">Electrical & Plumbing</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-white hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-gallery"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+27698055580" className="hidden sm:block" data-testid="link-call-header">
              <Button 
                size="default"
                variant="default"
                className="font-semibold"
                data-testid="button-call-header"
              >
                <Phone className="h-4 w-4 mr-2" />
                069 805 5580
              </Button>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-primary transition-colors text-left py-2"
                data-testid="link-home-mobile"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-primary transition-colors text-left py-2"
                data-testid="link-services-mobile"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-white hover:text-primary transition-colors text-left py-2"
                data-testid="link-gallery-mobile"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white hover:text-primary transition-colors text-left py-2"
                data-testid="link-testimonials-mobile"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors text-left py-2"
                data-testid="link-contact-mobile"
              >
                Contact
              </button>
              <a href="tel:+27698055580" className="mt-2" data-testid="link-call-mobile">
                <Button 
                  variant="default" 
                  className="w-full font-semibold"
                  data-testid="button-call-mobile"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 069 805 5580
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

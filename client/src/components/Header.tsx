import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/Logo_1761297985473.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-border shadow-sm" 
          : "bg-[#111111] border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logoImage} 
              alt="Electrifying Logo" 
              className="h-12 w-12 rounded-full"
              data-testid="img-logo"
            />
            <div className="hidden md:block">
              <h1 className={`font-bold text-lg transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}>
                Electrifying
              </h1>
              <p className={`text-xs transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}>
                Electrical & Plumbing
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-home"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-services"
            >
              Services
            </button>
            <Link
              href="/service-areas"
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-service-areas"
            >
              Service Areas
            </Link>
            <Link
              href="/gallery"
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-gallery"
            >
              Our Work
            </Link>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-testimonials"
            >
              Testimonials
            </button>
            <Link
              href="/contact"
              className={`transition-colors text-sm font-medium ${
                scrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
              data-testid="link-contact"
            >
              Contact
            </Link>
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
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 transition-colors ${
            scrolled ? "border-t border-border" : "border-t border-white/10"
          }`}>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-home-mobile"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-services-mobile"
              >
                Services
              </button>
              <Link
                href="/service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-service-areas-mobile"
              >
                Service Areas
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-gallery-mobile"
              >
                Our Work
              </Link>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-testimonials-mobile"
              >
                Testimonials
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left py-2 ${
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-primary"
                }`}
                data-testid="link-contact-mobile"
              >
                Contact
              </Link>
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

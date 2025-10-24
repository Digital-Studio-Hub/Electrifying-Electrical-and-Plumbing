import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react";
import badgeImage from "@assets/Level 1_1761330031028.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Electrifying Electrical and Plumbing</h3>
            <p className="text-white/70 mb-4 text-sm">
              Your trusted partner for all electrical and plumbing needs in Durban. 
              We are specialists in both trades, providing professional 24/7 emergency service.
            </p>
            <p className="text-white/70 text-sm">
              Prepaid meter specialists and authorized supplier.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-services-footer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-gallery-footer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-testimonials-footer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                  data-testid="link-contact-footer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs">24/7 Emergency</p>
                  <a 
                    href="tel:+27698055580" 
                    className="text-white hover:text-primary transition-colors font-medium text-sm"
                    data-testid="link-phone-footer"
                  >
                    069 805 5580
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs">WhatsApp</p>
                  <a 
                    href="https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors font-medium text-sm"
                    data-testid="link-whatsapp-footer"
                  >
                    061 405 5794
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs">Location</p>
                  <p className="text-white text-sm" data-testid="text-address-footer">
                    Mercury House<br />
                    320 Anton Lembede Street<br />
                    Durban, 4001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-xs">Follow Us</p>
                  <a 
                    href="https://www.facebook.com/Electrify-Electrical-Contractors-Prepaid-meter-specialists-1611937902412875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors text-sm"
                    data-testid="link-facebook-footer"
                  >
                    Facebook Page
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Verified Badge</h4>
            <a 
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              data-testid="link-lekker-badge"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={badgeImage}
                  alt="Lekker Network Verified Badge"
                  className="w-32 h-32 mb-2 transition-transform duration-300 group-hover:scale-105"
                  data-testid="img-lekker-badge"
                />
                <p className="text-white/90 text-sm font-medium text-center group-hover:text-primary transition-colors" data-testid="text-lekker-verified">
                  Lekker Network Verified
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Electrifying Electrical and Plumbing. All Rights Reserved.
            </p>
            <p className="text-white/70 text-sm">
              Professional Electrical & Plumbing Services in Durban
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

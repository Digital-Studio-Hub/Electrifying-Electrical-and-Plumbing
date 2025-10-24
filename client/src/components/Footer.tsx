import { Phone, MessageCircle, MapPin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Electrifying Electrical and Plumbing</h3>
            <p className="text-white/70 mb-4">
              Your trusted partner for all electrical and plumbing needs in Durban. 
              We are specialists in both trades, providing professional 24/7 emergency service.
            </p>
            <p className="text-white/70">
              Prepaid meter specialists and authorized supplier.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors"
                  data-testid="link-services-footer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors"
                  data-testid="link-gallery-footer"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors"
                  data-testid="link-testimonials-footer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-primary transition-colors"
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
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">24/7 Emergency</p>
                  <a 
                    href="tel:0698055580" 
                    className="text-white hover:text-primary transition-colors font-medium"
                    data-testid="link-phone-footer"
                  >
                    069 805 5580
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/27614055794" 
                    className="text-white hover:text-primary transition-colors font-medium"
                    data-testid="link-whatsapp-footer"
                  >
                    061 405 5794
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="text-white" data-testid="text-address-footer">
                    Mercury House, 320 Anton Lembede Street<br />
                    Durban, 4001
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Follow Us</p>
                  <a 
                    href="https://www.facebook.com/Electrify-Electrical-Contractors-Prepaid-meter-specialists-1611937902412875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    data-testid="link-facebook-footer"
                  >
                    Facebook Page
                  </a>
                </div>
              </li>
            </ul>
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

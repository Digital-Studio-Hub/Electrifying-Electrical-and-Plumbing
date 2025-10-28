import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const shouldShow = window.scrollY > 300;
      setIsVisible(shouldShow);
    };

    // Check scroll position whenever route changes
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const whatsappUrl =
    "https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center h-16 w-16 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover-elevate active-elevate-2 ${
        isVisible
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-20 opacity-0 invisible pointer-events-none"
      }`}
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-8 w-8" />
      <span
        className="absolute -top-1 -right-1 flex h-3.5 w-3.5"
        data-testid="status-whatsapp-indicator"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-yellow-500 ring-2 ring-white"></span>
      </span>
    </a>
  );
}

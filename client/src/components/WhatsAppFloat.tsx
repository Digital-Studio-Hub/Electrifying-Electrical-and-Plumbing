import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] text-white shadow-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl pl-4 pr-4 py-3 hover:pr-5"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="h-6 w-6 flex-shrink-0" />
      <span className="font-semibold text-sm whitespace-nowrap overflow-hidden transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-32 group-hover:opacity-100 group-hover:ml-2">
        Chat with us
      </span>
      <span
        className="absolute -top-1 -right-1 flex h-4 w-4"
        data-testid="status-whatsapp-indicator"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-300 border-2 border-[#25D366]"></span>
      </span>
    </a>
  );
}

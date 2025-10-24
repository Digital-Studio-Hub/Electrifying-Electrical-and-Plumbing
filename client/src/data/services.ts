import { Zap, Gauge, Wrench, Droplets, ShowerHead, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  heroDescription: string;
  benefits: string[];
  whatsIncluded: string[];
  emergencyAvailable: boolean;
  estimatedTime?: string;
  keywords: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "emergency-electrical",
    title: "Emergency Electrical Repair",
    icon: Zap,
    shortDescription: "24/7 emergency electrical services for power outages, electrical faults, and urgent repairs in Durban",
    heroDescription: "When electrical emergencies strike, you need a fast, reliable response. Our 24/7 emergency electricians in Durban are ready to restore power and safety to your home or business. We handle everything from tripped breakers to complete power failures.",
    benefits: [
      "24/7 emergency response across Durban",
      "Certified and experienced electricians",
      "Fast diagnosis and repair",
      "Safety compliance guaranteed",
      "Transparent pricing with no hidden costs",
      "Same-day service available"
    ],
    whatsIncluded: [
      "Emergency call-out service",
      "Fault finding and diagnosis",
      "Circuit breaker repairs",
      "Power restoration",
      "Safety inspection",
      "Certificate of Compliance (where required)"
    ],
    emergencyAvailable: true,
    estimatedTime: "Response within 1-2 hours",
    keywords: ["emergency electrician Durban", "electrical fault repair", "power outage Durban", "24/7 electrician"]
  },
  {
    slug: "prepaid-meters",
    title: "Prepaid Meter Installation & Repair",
    icon: Gauge,
    shortDescription: "Specialist prepaid electricity meter installation, repairs, and maintenance services in Durban",
    heroDescription: "As Durban's prepaid meter specialists, we install, repair, and maintain all brands of prepaid electricity meters. Control your electricity costs with expert prepaid meter solutions for homes, flats, and commercial properties.",
    benefits: [
      "Authorized prepaid meter suppliers",
      "Expert installation and configuration",
      "Repair all major brands",
      "Tenant billing solutions for landlords",
      "Energy management advice",
      "Compliance with municipal regulations"
    ],
    whatsIncluded: [
      "Prepaid meter supply and installation",
      "Meter programming and testing",
      "Wiring and connection",
      "Tenant key/card supply",
      "Usage demonstration",
      "Warranty and support"
    ],
    emergencyAvailable: false,
    estimatedTime: "Installation completed in 2-4 hours",
    keywords: ["prepaid meter installation Durban", "prepaid electricity", "electricity meter repair", "prepaid meter specialists"]
  },
  {
    slug: "db-boards",
    title: "DB Board Upgrades & Repairs",
    icon: Wrench,
    shortDescription: "Professional DB board (distribution board) upgrades, repairs, and installations in Durban",
    heroDescription: "Outdated or faulty DB boards pose serious safety risks. Our qualified electricians upgrade and repair distribution boards to meet current electrical regulations, ensuring your property's electrical system is safe and efficient.",
    benefits: [
      "Safety compliance with SANS 10142",
      "Increased electrical capacity",
      "Earth leakage protection",
      "Circuit breaker upgrades",
      "Neat and professional installations",
      "Certificate of Compliance issued"
    ],
    whatsIncluded: [
      "Site inspection and assessment",
      "DB board supply and installation",
      "Circuit breaker configuration",
      "Earth leakage unit installation",
      "Labeling and documentation",
      "Electrical compliance certificate"
    ],
    emergencyAvailable: true,
    estimatedTime: "Upgrade completed in 4-8 hours",
    keywords: ["DB board upgrade Durban", "distribution board repair", "electrical compliance", "circuit breaker replacement"]
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing Services",
    icon: AlertTriangle,
    shortDescription: "24/7 emergency plumbing services for burst pipes, leaks, and urgent plumbing repairs in Durban",
    heroDescription: "Plumbing emergencies can't wait. Our 24/7 emergency plumbers in Durban respond quickly to burst pipes, major leaks, and blocked drains. We minimize water damage and restore your plumbing system fast.",
    benefits: [
      "24/7 emergency response",
      "Rapid leak detection and repair",
      "Water damage prevention",
      "Experienced plumbing technicians",
      "Fully equipped service vehicles",
      "Insurance work accepted"
    ],
    whatsIncluded: [
      "Emergency call-out service",
      "Leak detection and location",
      "Pipe repairs and replacements",
      "Drain unblocking",
      "Water isolation if needed",
      "Temporary repairs and permanent solutions"
    ],
    emergencyAvailable: true,
    estimatedTime: "Response within 1-2 hours",
    keywords: ["emergency plumber Durban", "burst pipe repair", "plumbing leak", "24/7 plumber"]
  },
  {
    slug: "geyser-installation",
    title: "Geyser Installation & Repair",
    icon: ShowerHead,
    shortDescription: "Expert geyser and water heater installation, repairs, and replacement services in Durban",
    heroDescription: "From traditional geysers to solar water heaters, we install, repair, and maintain all types of water heating systems. Get hot water reliability and energy efficiency with professional geyser services.",
    benefits: [
      "All geyser brands serviced",
      "Solar geyser specialists",
      "Energy-efficient solutions",
      "Quick installation and repairs",
      "Pressure valve compliance",
      "Warranty on new installations"
    ],
    whatsIncluded: [
      "Geyser assessment and recommendations",
      "Removal of old geyser",
      "New geyser installation",
      "Pressure control valve installation",
      "Electrical connection (if required)",
      "Testing and commissioning"
    ],
    emergencyAvailable: true,
    estimatedTime: "Installation in 3-5 hours",
    keywords: ["geyser installation Durban", "geyser repair", "water heater", "solar geyser Durban"]
  },
  {
    slug: "drain-services",
    title: "Blocked Drains & Leak Detection",
    icon: Droplets,
    shortDescription: "Professional drain cleaning, unblocking, and leak detection services in Durban",
    heroDescription: "Blocked drains and hidden leaks cause major problems if left unchecked. Our drain specialists use advanced equipment to clear blockages and detect leaks, preventing costly water damage and sewage backups.",
    benefits: [
      "High-pressure drain jetting",
      "Camera inspection available",
      "Root removal from drains",
      "Leak detection technology",
      "Preventative maintenance plans",
      "Municipal drainage expertise"
    ],
    whatsIncluded: [
      "Drain inspection and diagnosis",
      "Blockage removal",
      "High-pressure water jetting",
      "Drain cleaning and flushing",
      "Leak detection if required",
      "Prevention advice"
    ],
    emergencyAvailable: true,
    estimatedTime: "Most blockages cleared within 1-2 hours",
    keywords: ["blocked drain Durban", "drain cleaning", "leak detection", "drain unblocking"]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find(service => service.slug === slug);
}

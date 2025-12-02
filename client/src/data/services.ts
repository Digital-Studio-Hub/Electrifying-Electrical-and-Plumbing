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
    shortDescription: "24/7 emergency electrical services for power outages, electrical faults, and urgent repairs across Durban and KwaZulu-Natal",
    heroDescription: "When electrical emergencies strike, you need a fast, reliable response. Our 24/7 emergency electricians in Durban and KZN are ready to restore power and safety to your home or business. We handle everything from tripped breakers to complete power failures across all Durban suburbs.",
    benefits: [
      "24/7 emergency response across Durban and KZN",
      "Certified and experienced electricians",
      "Fast diagnosis and repair",
      "Safety compliance guaranteed (SANS 10142)",
      "Transparent pricing with no hidden costs",
      "Same-day service available in all Durban areas"
    ],
    whatsIncluded: [
      "Emergency call-out service anywhere in Durban",
      "Fault finding and diagnosis",
      "Circuit breaker repairs",
      "Power restoration",
      "Safety inspection",
      "Certificate of Compliance (where required)"
    ],
    emergencyAvailable: true,
    estimatedTime: "Response within 1-2 hours",
    keywords: ["emergency electrician Durban", "electrician near me", "electrical fault repair", "power outage Durban", "24/7 electrician KZN", "emergency electrician KwaZulu-Natal"]
  },
  {
    slug: "prepaid-meters",
    title: "Prepaid Meter Installation & Repair",
    icon: Gauge,
    shortDescription: "Specialist prepaid electricity meter installation, repairs, and maintenance services across Durban and KZN",
    heroDescription: "As Durban's leading prepaid meter specialists, we install, repair, and maintain all brands of prepaid electricity meters. Control your electricity costs with expert prepaid meter solutions for homes, flats, and commercial properties throughout KwaZulu-Natal.",
    benefits: [
      "Authorized prepaid meter suppliers in Durban",
      "Expert installation and configuration",
      "Repair all major brands (Conlog, Hexing, Landis+Gyr)",
      "Tenant billing solutions for landlords in KZN",
      "Energy management advice",
      "Compliance with eThekwini municipal regulations"
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
    keywords: ["prepaid meter installation Durban", "prepaid electricity KZN", "electricity meter repair", "prepaid meter specialists Durban", "Conlog meter installation", "prepaid meter near me"]
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
    shortDescription: "24/7 emergency plumbing services for burst pipes, leaks, and urgent plumbing repairs across Durban and KZN",
    heroDescription: "Plumbing emergencies can't wait. Our 24/7 emergency plumbers in Durban and KwaZulu-Natal respond quickly to burst pipes, major leaks, and blocked drains. We minimize water damage and restore your plumbing system fast across all Durban suburbs.",
    benefits: [
      "24/7 emergency response across Durban",
      "Rapid leak detection and repair",
      "Water damage prevention",
      "Experienced plumbing technicians in KZN",
      "Fully equipped service vehicles",
      "Insurance work accepted"
    ],
    whatsIncluded: [
      "Emergency call-out service anywhere in Durban",
      "Leak detection and location",
      "Pipe repairs and replacements",
      "Drain unblocking",
      "Water isolation if needed",
      "Temporary repairs and permanent solutions"
    ],
    emergencyAvailable: true,
    estimatedTime: "Response within 1-2 hours",
    keywords: ["emergency plumber Durban", "burst pipe repair KZN", "plumbing leak Durban", "24/7 plumber near me", "plumber KwaZulu-Natal", "emergency plumber near me"]
  },
  {
    slug: "geyser-installation",
    title: "Geyser Installation & Repair",
    icon: ShowerHead,
    shortDescription: "Expert geyser and water heater installation, repairs, and replacement services across Durban and KwaZulu-Natal",
    heroDescription: "From traditional geysers to solar water heaters, we install, repair, and maintain all types of water heating systems across Durban and KZN. Get hot water reliability and energy efficiency with professional geyser services from local specialists.",
    benefits: [
      "All geyser brands serviced (Kwikot, Franke, Ariston)",
      "Solar geyser specialists in Durban",
      "Energy-efficient solutions for KZN homes",
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
    keywords: ["geyser installation Durban", "geyser repair KZN", "water heater Durban", "solar geyser Durban", "geyser replacement near me", "hot water cylinder installation"]
  },
  {
    slug: "drain-services",
    title: "Blocked Drains & Leak Detection",
    icon: Droplets,
    shortDescription: "Professional drain cleaning, unblocking, and leak detection services across Durban and KwaZulu-Natal",
    heroDescription: "Blocked drains and hidden leaks cause major problems if left unchecked. Our drain specialists across Durban and KZN use advanced equipment to clear blockages and detect leaks, preventing costly water damage and sewage backups.",
    benefits: [
      "High-pressure drain jetting",
      "CCTV camera inspection available",
      "Root removal from drains",
      "Advanced leak detection technology",
      "Preventative maintenance plans",
      "eThekwini municipal drainage expertise"
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
    keywords: ["blocked drain Durban", "drain cleaning KZN", "leak detection Durban", "drain unblocking near me", "blocked toilet Durban", "sewer cleaning KwaZulu-Natal"]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find(service => service.slug === slug);
}

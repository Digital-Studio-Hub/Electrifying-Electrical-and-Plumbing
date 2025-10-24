import { Zap, Droplets, Gauge, Wrench, Lightbulb, ShowerHead } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Emergency Electrical Repair",
    description: "24/7 availability for any electrical faults, power outages, or urgent repairs. Fast response times across Durban.",
    keywords: "emergency electrician Durban"
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing Installation",
    description: "Full installation and renovation services for toilets, basins, showers, and piping. Professional workmanship guaranteed.",
    keywords: "plumber Durban"
  },
  {
    icon: Droplets,
    title: "Water Heater / Geyser Installation",
    description: "Expert repair and installation for all models of water heaters and geysers. Quick turnaround for emergencies.",
    keywords: "geyser repair Durban"
  },
  {
    icon: Gauge,
    title: "Prepaid Meter Specialists",
    description: "Official installation, repair, and management of prepaid electrical meters. Authorized supplier in Durban South.",
    keywords: "prepaid meter installation Durban"
  },
  {
    icon: Wrench,
    title: "General Plumbing & Maintenance",
    description: "From leaky taps and burst pipes to blocked drains, we handle all plumbing maintenance with professional care.",
    keywords: "blocked drain Durban, emergency plumber Durban"
  },
  {
    icon: Lightbulb,
    title: "Wiring, Lighting & DB Boards",
    description: "Safe installation of new wiring, light fixtures, plugs, and distribution board upgrades. C.O.C. compliance certified.",
    keywords: "DB board repair Durban"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Professional Services
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-services-description"
          >
            We offer a complete range of electrical and plumbing solutions for your home or business. 
            We clearly list our services so you know exactly how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="hover-elevate transition-transform duration-300 hover:-translate-y-1"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="space-y-4 p-8">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" data-testid={`icon-service-${index}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need immediate assistance? We're available 24/7 for emergencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0698055580" data-testid="link-call-services">
              <Button size="lg" variant="default" className="font-semibold" data-testid="button-call-services">
                Call 069 805 5580
              </Button>
            </a>
            <a href="https://wa.me/27614055794" data-testid="link-whatsapp-services">
              <Button size="lg" variant="secondary" className="font-semibold" data-testid="button-whatsapp-services">
                WhatsApp 061 405 5794
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

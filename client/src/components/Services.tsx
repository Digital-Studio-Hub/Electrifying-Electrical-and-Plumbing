import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";


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
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} data-testid={`link-service-${index}`}>
                <Card 
                  className="hover-elevate transition-transform duration-300 hover:-translate-y-1 cursor-pointer h-full"
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
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need immediate assistance? We're available 24/7 for emergencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+27698055580" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-elevate active-elevate-2 min-h-10 px-8"
              data-testid="link-call-services"
            >
              Call 069 805 5580
            </a>
            <a 
              href="https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover-elevate active-elevate-2 min-h-10 px-8"
              data-testid="link-whatsapp-services"
            >
              WhatsApp 061 405 5794
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

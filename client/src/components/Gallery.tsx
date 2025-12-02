import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import image1 from "@assets/Image to use_1761297648916.jpg";
import image2 from "@assets/use this image_1761297648917.jpg";
import image3 from "@assets/use this image too_1761297648917.jpg";
import image4 from "@assets/Vision & Misson Section Image_1761297648918.jpg";

const galleryImages = [
  {
    src: image1,
    alt: "Battery backup and inverter installation by Durban electrician - Electrifying Electrical",
    caption: "Battery Backup & Inverter Installation",
    serviceLink: "/services/emergency-electrical"
  },
  {
    src: image2,
    alt: "Professional 3-phase electrical testing equipment used by electricians in Durban KZN",
    caption: "Professional Electrical Testing",
    serviceLink: "/services/db-boards"
  },
  {
    src: image3,
    alt: "Prepaid electricity meter installation in Durban - prepaid meter specialists",
    caption: "Prepaid Meter Installation",
    serviceLink: "/services/prepaid-meters"
  },
  {
    src: image4,
    alt: "Industrial electrical maintenance work in KwaZulu-Natal by certified electricians",
    caption: "Industrial Maintenance Work",
    serviceLink: "/services/emergency-electrical"
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Our Work in Durban & KZN
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-gallery-description"
          >
            See the professional standard we bring to every electrical and plumbing job across Durban and KwaZulu-Natal. From emergency repairs to complete installations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Link key={index} href={image.serviceLink}>
              <Card 
                className="overflow-hidden group hover-elevate transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                data-testid={`card-gallery-${index}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-gallery-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg" data-testid={`text-caption-${index}`}>{image.caption}</p>
                      <p className="text-white/80 text-sm mt-1">Click to learn more</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-why-choose-title">
            Why Choose Electrifying in Durban?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div data-testid="feature-professional">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-0">Professional KZN Specialists</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-0">
                Certified electricians and plumbers, not just handymen. We serve all of KwaZulu-Natal.
              </p>
            </div>
            <div data-testid="feature-emergency">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-1">24/7 Emergency Response</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-1">
                Fast response times for urgent electrical and plumbing emergencies across Durban.
              </p>
            </div>
            <div data-testid="feature-local">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-2">Local Durban Experts</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-2">
                Based at Mercury House in Durban CBD, we're part of the local community.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" variant="default" className="font-semibold" data-testid="button-gallery-contact">
                Get a Free Quote Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

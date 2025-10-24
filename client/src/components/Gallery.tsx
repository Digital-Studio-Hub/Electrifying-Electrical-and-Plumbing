import { Card } from "@/components/ui/card";
import image1 from "@assets/Image to use_1761297648916.jpg";
import image2 from "@assets/use this image_1761297648917.jpg";
import image3 from "@assets/use this image too_1761297648917.jpg";
import image4 from "@assets/Vision & Misson Section Image_1761297648918.jpg";

const galleryImages = [
  {
    src: image1,
    alt: "Electrical battery backup installation",
    caption: "Battery Backup & Inverter Installation"
  },
  {
    src: image2,
    alt: "Professional 3-phase electrical testing",
    caption: "Professional Electrical Testing"
  },
  {
    src: image3,
    alt: "Prepaid electricity meter installation",
    caption: "Prepaid Meter Installation"
  },
  {
    src: image4,
    alt: "Industrial electrical maintenance",
    caption: "Industrial Maintenance Work"
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
            Showcase of Our Past Work
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-gallery-description"
          >
            High-quality photos of our completed projects. See the professional standard we bring to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover-elevate transition-transform duration-300 hover:-translate-y-1"
              data-testid={`card-gallery-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-gallery-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg" data-testid={`text-caption-${index}`}>{image.caption}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-why-choose-title">
            Why Choose Electrifying?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div data-testid="feature-professional">
              <div className="text-primary text-4xl font-bold mb-2" data-testid="icon-feature-0">✓</div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-0">Professional & Reliable</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-0">
                We are specialists in both electrical and plumbing trades, not just handymen
              </p>
            </div>
            <div data-testid="feature-emergency">
              <div className="text-primary text-4xl font-bold mb-2" data-testid="icon-feature-1">✓</div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-1">24/7 Emergency Service</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-1">
                Fast response times for urgent electrical and plumbing emergencies
              </p>
            </div>
            <div data-testid="feature-local">
              <div className="text-primary text-4xl font-bold mb-2" data-testid="icon-feature-2">✓</div>
              <h4 className="font-semibold text-lg mb-2" data-testid="text-feature-title-2">Local Durban Experts</h4>
              <p className="text-muted-foreground" data-testid="text-feature-desc-2">
                Based at Mercury House, we're part of the Durban community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

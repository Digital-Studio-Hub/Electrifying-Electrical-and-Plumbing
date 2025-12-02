import { MapPin, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const serviceAreas = [
  {
    region: "Durban Central & CBD",
    areas: [
      "Durban CBD",
      "Point Waterfront",
      "Berea",
      "Greyville",
      "Morningside",
    ],
  },
  {
    region: "North Durban",
    areas: [
      "Umhlanga",
      "Durban North",
      "La Lucia",
      "Mount Edgecombe",
      "Phoenix",
    ],
  },
  {
    region: "South Durban",
    areas: ["Amanzimtoti", "Chatsworth", "Isipingo", "Umlazi", "Kingsburgh"],
  },
  {
    region: "West Durban",
    areas: ["Pinetown", "Westville", "Kloof", "Hillcrest", "Queensburgh"],
  },
  {
    region: "Coastal Areas",
    areas: ["Ballito", "Tongaat", "Verulam", "Umdloti", "Salt Rock"],
  },
  {
    region: "Outer Durban",
    areas: ["Cato Ridge", "Hammarsdale", "Inanda", "KwaMashu", "Newlands"],
  },
];

export function ServiceAreas() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin
              className="h-8 w-8 text-primary"
              data-testid="icon-map-pin"
            />
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground"
              data-testid="text-service-areas-title"
            >
              Electrician Near Me in Durban & KZN
            </h2>
          </div>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-service-areas-description"
          >
            Looking for an electrician or plumber near you? Our expert team provides fast, reliable 
            electrical and plumbing services across Durban and all of KwaZulu-Natal. From Umhlanga 
            to Amanzimtoti, Pinetown to Ballito - we've got you covered 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card
              key={area.region}
              className="hover-elevate transition-all duration-300"
              data-testid={`card-service-area-${index}`}
            >
              <CardContent className="p-6">
                <h3
                  className="text-xl font-bold text-foreground mb-4 flex items-center gap-2"
                  data-testid={`text-region-${index}`}
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  {area.region}
                </h3>
                <ul className="space-y-2">
                  {area.areas.map((location, locationIndex) => (
                    <li
                      key={location}
                      className="flex items-start gap-2 text-muted-foreground"
                      data-testid={`text-area-${index}-${locationIndex}`}
                    >
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>{location}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="bg-background rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427326.5913891816!2d30.559482434674484!3d-29.883003285753857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa45a8e7e321%3A0xf1f8d6e6a1c4a0a0!2sDurban%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Durban Service Area Map"
              data-testid="iframe-service-area-map"
            />
          </div>
          <div className="p-6 text-center bg-card">
            <p className="text-lg font-semibold text-foreground mb-2" data-testid="text-coverage-note">
              Serving Greater Durban & Surrounds
            </p>
            <p className="text-muted-foreground" data-testid="text-emergency-note">
              Don't see your area listed? Call us! We often service areas beyond our standard coverage for emergency repairs.
            </p>
          </div>
        </div> */}

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="tel:+27698055580" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover-elevate active-elevate-2 inline-block"
              data-testid="link-call-service-areas"
            >
              Call 069 805 5580 Now
            </a>
            <a
              href="https://wa.me/27614055794?text=Hi%2C%20I%20need%20electrical%20or%20plumbing%20service%20in%20Durban."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-semibold text-lg hover-elevate active-elevate-2 inline-block"
              data-testid="link-whatsapp-service-areas"
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

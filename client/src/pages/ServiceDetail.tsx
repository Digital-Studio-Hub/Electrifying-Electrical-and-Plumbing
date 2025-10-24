import { useRoute, Link } from "wouter";
import { Phone, MessageCircle, Check, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug } from "@/data/services";
import { SEO } from "@/components/SEO";
import { SEO_CONFIG } from "@/config/seo";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = params?.slug ? getServiceBySlug(params.slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The service you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button variant="default" data-testid="button-back-home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const Icon = service.icon;

  const seoTitle = `${service.title} Durban | Electrifying Electrical and Plumbing`;
  const seoDescription = `${service.longDescription} ${service.emergencyAvailable ? '24/7 emergency service available.' : ''} Professional ${service.title.toLowerCase()} in Durban. Call 069 805 5580 for fast, reliable service.`;
  const canonicalUrl = `${SEO_CONFIG.baseUrl}/services/${service.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={service.keywords}
        canonical={canonicalUrl}
        ogType="website"
      />
      <div className="bg-[#111111] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 text-white hover:text-primary"
              data-testid="button-back-services"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Button>
          </Link>

          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Icon className="h-10 w-10 text-primary" data-testid="icon-service-hero" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-service-title">
                {service.title}
              </h1>
              {service.emergencyAvailable && (
                <Badge className="bg-primary text-white mb-4" data-testid="badge-emergency">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7 Emergency Service
                </Badge>
              )}
              <p className="text-xl text-white/90 leading-relaxed" data-testid="text-hero-description">
                {service.heroDescription}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+27698055580" data-testid="link-call-service">
              <Button size="lg" variant="default" className="font-semibold" data-testid="button-call-service">
                <Phone className="h-5 w-5 mr-2" />
                Call 069 805 5580
              </Button>
            </a>
            <a 
              href={`https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service%20in%20Durban.`}
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-whatsapp-service"
            >
              <Button size="lg" variant="outline" className="font-semibold backdrop-blur-md bg-white/10 border-2 border-white/30 text-white" data-testid="button-whatsapp-service">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Quote
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" data-testid="text-benefits-title">
                  Why Choose Our {service.title} Service?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl" data-testid="text-included-title">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`included-${index}`}>
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4" data-testid="text-durban-title">
                  Serving All of Durban
                </h3>
                <p className="text-muted-foreground mb-4">
                  We provide {service.title.toLowerCase()} services throughout Durban and surrounding areas, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-foreground">• Durban Central</span>
                  <span className="text-foreground">• Durban North</span>
                  <span className="text-foreground">• Umhlanga</span>
                  <span className="text-foreground">• Berea</span>
                  <span className="text-foreground">• Morningside</span>
                  <span className="text-foreground">• Pinetown</span>
                  <span className="text-foreground">• Westville</span>
                  <span className="text-foreground">• Phoenix</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle data-testid="text-contact-title">Get a Free Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.estimatedTime && (
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Estimated Time</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-estimated-time">
                        {service.estimatedTime}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-3">Contact Us Now</h4>
                  <div className="space-y-3">
                    <a href="tel:+27698055580" className="block" data-testid="link-call-sidebar">
                      <Button variant="default" className="w-full font-semibold" data-testid="button-call-sidebar">
                        <Phone className="h-4 w-4 mr-2" />
                        Call 069 805 5580
                      </Button>
                    </a>
                    <a 
                      href={`https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service%20in%20Durban.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block"
                      data-testid="link-whatsapp-sidebar"
                    >
                      <Button variant="secondary" className="w-full font-semibold" data-testid="button-whatsapp-sidebar">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp Us
                      </Button>
                    </a>
                  </div>
                </div>

                {service.emergencyAvailable && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Emergency Service Available
                    </p>
                    <p className="text-sm text-muted-foreground">
                      24/7 call-outs for urgent {service.title.toLowerCase()} needs
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Location:</strong><br />
                    Mercury House<br />
                    320 Anton Lembede Street<br />
                    Durban, 4001
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

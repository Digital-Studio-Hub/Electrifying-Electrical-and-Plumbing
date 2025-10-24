import { Phone, MessageCircle, MapPin, Mail, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "Electrical",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please call us directly at 069 805 5580",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Get a Fast, Free Quote
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-contact-description"
          >
            Contact us 24/7 for any electrical or plumbing need. Fill out the form, call, or send us a WhatsApp message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us 24/7</h3>
              <a 
                href="tel:+27698055580"
                className="text-2xl font-bold text-primary block mb-2 hover-elevate"
                data-testid="link-phone-contact"
              >
                <span data-testid="text-phone-number">069 805 5580</span>
              </a>
              <p className="text-sm text-muted-foreground" data-testid="text-phone-description">
                Available 24/7 for emergency electrical and plumbing services
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp Us</h3>
              <a 
                href="https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban."
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary block mb-2 hover-elevate"
                data-testid="link-whatsapp-contact"
              >
                <span data-testid="text-whatsapp-number">061 405 5794</span>
              </a>
              <p className="text-sm text-muted-foreground" data-testid="text-whatsapp-description">
                Get a quick response via WhatsApp for quotes and inquiries
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="font-semibold text-foreground mb-1" data-testid="text-building-name">
                Mercury House
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-address-contact">
                320 Anton Lembede Street<br />
                Durban, 4001
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll respond within 24 hours</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Smith" 
                                {...field} 
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="0821234567" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="john@example.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Electrical" data-testid="option-electrical">Electrical</SelectItem>
                              <SelectItem value="Plumbing" data-testid="option-plumbing">Plumbing</SelectItem>
                              <SelectItem value="Emergency" data-testid="option-emergency">Emergency</SelectItem>
                              <SelectItem value="Quote" data-testid="option-quote">General Quote</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your electrical or plumbing needs..."
                              className="min-h-[120px]"
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg"
                      variant="default"
                      className="w-full font-semibold"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? "Sending..." : "Send Request"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Find Us on the Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[400px] rounded-b-lg overflow-hidden" data-testid="container-google-map">
                  <iframe
                    src="https://maps.google.com/maps?q=Mercury+House,+320+Anton+Lembede+Street,+Durban,+4001,+South+Africa&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mercury House Location Map"
                    data-testid="iframe-google-map"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Weekend & After Hours</span>
                    <span className="font-semibold">Emergency Call-Outs</span>
                  </div>
                  <div className="pt-4">
                    <div className="bg-primary/10 rounded-md p-4 text-center">
                      <p className="font-bold text-primary text-lg" data-testid="text-emergency-availability">
                        24/7 Emergency Service Available
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Call anytime for urgent electrical or plumbing issues
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="py-24 bg-muted/30">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name *</FormLabel>
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
                          <FormLabel>Your Phone *</FormLabel>
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

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
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
                          <FormLabel>Your Message *</FormLabel>
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
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Call Us 24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+27698055580"
                  className="text-2xl font-bold text-primary transition-colors hover-elevate"
                  data-testid="link-phone-contact"
                >
                  <span data-testid="text-phone-number">069 805 5580</span>
                </a>
                <p className="text-muted-foreground mt-2" data-testid="text-phone-description">
                  Available 24/7 for emergency electrical and plumbing services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  WhatsApp Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://wa.me/27614055794?text=Hi%2C%20I%27m%20interested%20in%20your%20electrical%20and%20plumbing%20services%20in%20Durban."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-primary transition-colors hover-elevate"
                  data-testid="link-whatsapp-contact"
                >
                  <span data-testid="text-whatsapp-number">061 405 5794</span>
                </a>
                <p className="text-muted-foreground mt-2" data-testid="text-whatsapp-description">
                  Get a quick response via WhatsApp for quotes and inquiries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground" data-testid="text-building-name">
                  Mercury House
                </p>
                <p className="text-muted-foreground" data-testid="text-address-contact">
                  320 Anton Lembede Street<br />
                  Durban, 4001<br />
                  South Africa
                </p>
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
                <p className="font-semibold text-foreground mb-2" data-testid="text-emergency-availability">
                  24/7 Emergency Service Available
                </p>
                <p className="text-muted-foreground" data-testid="text-business-hours">
                  Regular Hours: Mon-Fri 8:00 AM - 5:00 PM<br />
                  Weekend & After Hours: Emergency Call-Outs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Facebook className="h-5 w-5 text-primary" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.facebook.com/Electrify-Electrical-Contractors-Prepaid-meter-specialists-1611937902412875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors font-medium hover-elevate"
                  data-testid="link-facebook-contact"
                >
                  Visit our Facebook Page
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

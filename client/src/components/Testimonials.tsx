import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Incredible service! Called them for an emergency burst pipe, and they were at my house in 30 minutes. Professional and fast.",
    author: "S. Naidoo",
    location: "Durban",
    rating: 5
  },
  {
    quote: "Finally found reliable electricians! They installed our prepaid meter and fixed our wiring. Excellent job and very clean work.",
    author: "T. Johnson",
    location: "Umhlanga",
    rating: 5
  },
  {
    quote: "Best plumber in Durban! Fixed our geyser leak quickly and explained everything clearly. Will definitely use them again.",
    author: "P. Mkhize",
    location: "Phoenix",
    rating: 5
  },
  {
    quote: "Professional electrical work on our DB board. They were punctual, efficient, and the pricing was fair. Highly recommend!",
    author: "R. Singh",
    location: "Chatsworth",
    rating: 5
  },
  {
    quote: "Emergency plumbing service was exceptional. Blocked drain cleared in no time. These guys really know their stuff!",
    author: "M. van der Merwe",
    location: "Westville",
    rating: 5
  },
  {
    quote: "Trustworthy and skilled. They handled our complete bathroom plumbing installation perfectly. One call for both electrical and plumbing needs!",
    author: "K. Pillay",
    location: "Berea",
    rating: 5
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            What Our Customers Say
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-testimonials-description"
          >
            We leverage online reviews and are proud of our reputation. See what satisfied customers are saying about our electrical and plumbing services in Durban.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4" data-testid={`rating-${index}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-foreground mb-4 leading-relaxed" data-testid={`text-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground" data-testid={`text-author-${index}`}>{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-location-${index}`}>{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Happy Customers
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We actively ask every satisfied customer to leave a review on our Google Business Profile. 
            Your feedback helps us maintain our high standards and helps others find quality electrical and plumbing services in Durban.
          </p>
          <div className="flex justify-center gap-2 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-primary" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Based on 100+ Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
}

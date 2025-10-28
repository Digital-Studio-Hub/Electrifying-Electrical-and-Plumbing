import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import HomePage from "@/pages/HomePage";
import ServiceDetail from "@/pages/ServiceDetail";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/service-areas" component={ServiceAreasPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppFloat />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

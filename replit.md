# Electrifying Electrical and Plumbing - Website

## Overview
Professional marketing website for Electrifying Electrical and Plumbing, a Durban-based electrical and plumbing services company. The site features a modern yellow, white, and black color scheme with comprehensive SEO optimization for local Durban searches.

## Recent Changes

### December 02, 2025
- **Comprehensive SEO & Performance Optimization**:
  - **Structured Data**: Added schema.org "Electrician" type JSON-LD with proper PostalAddress, GeoCoordinates, areaServed (City/AdministrativeArea objects), and makesOffer for all 6 services
  - **XML Sitemap**: Created `client/public/sitemap.xml` with all pages and service detail pages for search engine indexing
  - **Robots.txt**: Created `client/public/robots.txt` with proper crawler directives and sitemap reference
  - **Caching Headers**: Added HTTP Cache-Control headers for static assets only (1 year, immutable); API routes explicitly no-cache
  - **Lazy Loading**: All gallery images now use `loading="lazy"` and `decoding="async"` for improved page speed
  - **Meta Tags Enhanced**: Added geo-location meta tags, Twitter cards, canonical URLs, and enhanced Open Graph tags
  - **Local SEO Keywords**: Integrated "electrician near me", "KwaZulu-Natal", "KZN", and Durban suburb keywords across all pages
  - **Internal Linking**: Footer now links to all 6 service pages using wouter Link components for better SEO crawlability
  - **Image Alt Text**: All images have descriptive, keyword-rich alt text for accessibility and SEO
  - **Service Data**: Enhanced all service descriptions with local keywords (Durban, KZN, specific suburbs)
  - **DNS Prefetch**: Added `dns-prefetch` for Google Maps to improve performance
  - **Accessibility Fix**: Removed button-in-anchor nesting in Services and ServiceAreas components
  - **Homepage Sections**: Re-enabled ServiceAreas, Gallery, and Contact sections on homepage for complete local SEO content exposure

### October 28, 2025
- **Multi-Route Architecture**: Restructured from single-page to multi-route app with separate pages:
  - `/service-areas` - Service Areas page with Google Maps integration
  - `/gallery` - Gallery page showcasing completed work
  - `/contact` - Contact page with form and business information
- **Scroll-Adaptive Navigation**: Header component now changes background and text colors based on scroll position for better visibility
- **SPA Navigation**: Updated all navigation links to use wouter's `navigate()` function instead of `window.location.href` to prevent page reloads
- **ZeptoMail Email Integration**: 
  - Installed and configured ZeptoMail package for professional email delivery
  - Secure API key management via `ZEPTOMAIL_API_KEY` environment variable
  - Professional HTML email template with yellow branding
  - Emergency requests highlighted with red border and "URGENT:" text banner
  - Emails sent to raymond@digitalstudiohub.com from noreply@electrifyelectrical.co.za
  - TypeScript declarations created in `server/zeptomail.d.ts`
  - Graceful error handling (logs errors but doesn't fail user request)
- **WhatsApp Floating Button**:
  - Added floating WhatsApp button component (`WhatsAppFloat.tsx`)
  - Fixed bottom-right positioning with smooth animations
  - Appears after scrolling 300px down the page
  - WhatsApp green background (#25D366) with animated pulse indicator
  - Pre-filled message linking to WhatsApp number 061 405 5794
  - Uses approved `hover-elevate` and `active-elevate-2` design patterns
  - Available on all pages via App.tsx integration
- **Code Quality**: Removed all emoji from codebase per strict design guidelines (replaced with text-based alternatives)

### October 24, 2025
- **Initial Frontend Implementation**: Built complete landing page with all sections
- **Design System**: Updated to yellow, white, and black color palette (HSL: 48 95% 53% for primary yellow)
- **SEO Optimization**: Added comprehensive meta tags targeting Durban-based keywords with canonical URLs
- **Components**: Created Header, Hero, Services, ServiceAreas, Gallery, Testimonials, Contact, and Footer components
- **Contact Form Schema**: Defined validation schema for contact form submissions
- **Service Detail Pages**: Added 6 individual service pages with routing
- **Service Areas**: Interactive service area coverage component with Google Maps
- **UI/UX Redesign**: Completely redesigned Contact section with cleaner card-based layout, improved spacing, and better information hierarchy
- **Footer Enhancement**: Updated to 4-column grid with Lekker Network Verified badge linked to verification page
- **Lekker Network Branding**: Added Lekker Network logo to footer center with "Powered by Lekker Network" text, linking to https://lekker.network/

## Project Architecture

### Frontend Structure
- **Framework**: React with TypeScript, Vite, Wouter for routing
- **UI Components**: Shadcn/ui with Tailwind CSS
- **Design**: Yellow (#F9CB15), white, and black color scheme with professional service business layout
- **Routing**: Multi-page architecture with separate routes for Service Areas, Gallery, and Contact
- **Key Pages**:
  - Home (`/`): Landing page with Hero, Services, Testimonials sections
  - Service Areas (`/service-areas`): Coverage map and area information
  - Gallery (`/gallery`): Portfolio of completed work
  - Contact (`/contact`): Contact form and business information
  - Service Detail Pages: Individual pages for each of 6 services
- **Key Components**:
  - Header: Scroll-adaptive sticky navigation with emergency call button and SPA navigation
  - Hero: Full-width hero with background image and CTAs
  - Services: 6-service grid showcasing electrical and plumbing offerings
  - WhatsAppFloat: Floating WhatsApp button with delayed visibility and animations
  - Footer: Complete business information with Lekker Network branding

### Business Information
- **Primary Contact**: 069 805 5580 (24/7 emergency)
- **WhatsApp**: 061 405 5794
- **Address**: Mercury House, 320 Anton Lembede Street, Durban, 4001
- **Facebook**: Electrify Electrical Contractors (Prepaid meter specialists)

### Services Offered
**Electrical:**
- Emergency Electrical Repair (24/7)
- Prepaid Meter Installation & Repair (specialists)
- DB Board Upgrades & Repairs
- Wiring & Lighting Installation
- General Electrical Maintenance

**Plumbing:**
- Emergency Plumbing (24/7)
- Geyser/Water Heater Installation & Repair
- Blocked Drains
- Bathroom Plumbing Installation
- Leak Detection & Repair

### SEO Keywords Targeted
- electrician Durban
- electrician near me
- plumber Durban
- emergency electrician Durban
- emergency plumber Durban
- prepaid meter installation Durban
- geyser repair Durban
- blocked drain Durban
- DB board repair Durban
- electrician KwaZulu-Natal
- electrical services KZN
- plumber KZN

### SEO Technical Implementation
- **Sitemap**: `client/public/sitemap.xml` - All pages with priority and update frequency
- **Robots.txt**: `client/public/robots.txt` - Crawler permissions and sitemap reference
- **Structured Data**: LocalBusiness schema in `client/index.html`
- **Canonical URLs**: Set to https://electrifyingelectrical.co.za/
- **Meta Tags**: Title, description, keywords, Open Graph, Twitter cards, geo-location
- **Caching**: Static assets 1 year, HTML 1 hour with stale-while-revalidate

### User Preferences
- **Brand Identity**: Professional specialists (not handymen) in both electrical and plumbing
- **Tone**: Trustworthy, authoritative, reliable, urgent response focus
- **Local Focus**: Durban community-based service
- **24/7 Emphasis**: Emergency availability is key selling point
- **Trust Signals**: Google Reviews, customer testimonials, completed work showcase

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn/ui, Wouter (routing)
- **Backend**: Express.js, Node.js
- **Email Service**: ZeptoMail (professional transactional email)
- **Forms**: React Hook Form with Zod validation
- **Build**: Vite
- **Fonts**: Inter, Poppins (Google Fonts)

## Backend API Endpoints
- **POST /api/contact**: Contact form submission endpoint
  - Validates form data using Zod schema
  - Sends professional HTML email via ZeptoMail
  - Returns success message to user
  - Graceful error handling for email failures

## Environment Variables
- **ZEPTOMAIL_API_KEY**: API key for ZeptoMail email service (required for email functionality)
- **SESSION_SECRET**: Session secret for Express session management

## Contact Form Schema
```typescript
{
  name: string (min 2 chars)
  phone: string (min 10 chars)
  email: string (optional, valid email)
  service: "Electrical" | "Plumbing" | "Emergency" | "Quote"
  message: string (min 10 chars)
}
```

## Assets
- Logo: `attached_assets/Logo_1761297985473.png`
- Hero Image: `attached_assets/Main Hero Section Image_1761297633354.png`
- Gallery Images:
  - Battery backup installation
  - 3-phase testing equipment
  - Prepaid meter
  - Industrial maintenance work

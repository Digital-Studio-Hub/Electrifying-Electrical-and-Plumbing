# Electrifying Electrical and Plumbing - Website

## Overview
Professional marketing website for Electrifying Electrical and Plumbing, a Durban-based electrical and plumbing services company. The site features a modern yellow, white, and black color scheme with comprehensive SEO optimization for local Durban searches.

## Recent Changes (October 24, 2025)
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
- **Design**: Dark and orange brand color scheme with professional service business layout
- **Key Sections**:
  - Header: Sticky navigation with emergency call button
  - Hero: Full-width hero with background image and CTAs
  - Services: 6-service grid showcasing electrical and plumbing offerings
  - Gallery: 4-image portfolio of completed work
  - Testimonials: Customer reviews with 5-star ratings
  - Contact: Multi-channel contact form with phone, WhatsApp, and location info
  - Footer: Complete business information and quick links

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
- plumber Durban
- emergency electrician Durban
- emergency plumber Durban
- prepaid meter installation Durban
- geyser repair Durban
- blocked drain Durban
- DB board repair Durban

### User Preferences
- **Brand Identity**: Professional specialists (not handymen) in both electrical and plumbing
- **Tone**: Trustworthy, authoritative, reliable, urgent response focus
- **Local Focus**: Durban community-based service
- **24/7 Emphasis**: Emergency availability is key selling point
- **Trust Signals**: Google Reviews, customer testimonials, completed work showcase

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Express.js, Node.js
- **Forms**: React Hook Form with Zod validation
- **Routing**: Wouter
- **Build**: Vite
- **Fonts**: Inter, Poppins (Google Fonts)

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

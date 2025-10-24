# Design Guidelines: Electrifying Electrical and Plumbing Website

## Design Approach

**Reference-Based Approach**: Local service business website inspired by professional home service platforms like Angi, HomeAdvisor, and Thumbtack, emphasizing trust, accessibility, and immediate action. The design prioritizes emergency service visibility and dual-expertise positioning.

## Core Design Principles

1. **Professional Credibility**: Clean, organized layouts that showcase expertise in both electrical and plumbing trades
2. **Emergency-First**: Prominent contact methods and 24/7 availability messaging throughout
3. **Local Trust Building**: Strong emphasis on Durban location, Google reviews, and completed work gallery
4. **Mobile-Optimized**: Touch-friendly contact buttons and thumb-zone CTAs for on-the-go emergency calls

## Typography System

**Primary Font**: Inter or Poppins (via Google Fonts CDN)
- Headings: 600-700 weight, sharp and professional
- Body: 400-500 weight for readability

**Scale**:
- Hero Title: text-5xl to text-6xl (mobile to desktop), font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Service Titles: text-xl, font-semibold
- Body Text: text-base to text-lg
- Small Text/Captions: text-sm

## Layout & Spacing System

**Container Strategy**:
- Full-width sections with inner max-w-7xl containers
- Content sections: max-w-6xl for balanced reading
- Form sections: max-w-2xl for focused completion

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 (vertical rhythm)
- Component gaps: gap-6 to gap-12
- Card padding: p-6 to p-8
- Button padding: px-6 py-3

## Component Library

### Header/Navigation
- Fixed/sticky header with dark background (#111111)
- Logo on left, navigation center, emergency call button on right
- Mobile: Hamburger menu with full-screen overlay
- Emergency contact button: Accent color (#F37021) with phone icon, always visible
- Navigation links: White text with orange underline on hover

### Hero Section
**Layout**: Full-width with provided hero image background
- Height: min-h-[600px] to min-h-[700px]
- Background: Dark overlay (rgba(17,17,17,0.7)) over hero image
- Content: Centered or left-aligned text over image
- Primary CTA: Large button with blurred background backdrop (backdrop-blur-md bg-white/10)
- Secondary info: Display both phone numbers prominently
- Badges: "24/7 Emergency" and "Durban Specialists" with orange accents

### Services Section
**Layout**: 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each service card: White background (#FFFFFF) with subtle shadow
- Icon: Orange accent color (#F37021), size 48px-64px, positioned top
- Title: Bold, dark text (#222222)
- Description: Muted text (#999999)
- Card padding: p-8, rounded-lg
- Hover state: Slight lift (transform) with increased shadow

### Gallery/Work Showcase
**Layout**: Masonry or grid layout (grid-cols-2 md:grid-cols-3)
- Images: Aspect ratio maintained, rounded corners
- Captions: Overlay on hover with dark background and white text
- Before/After: Side-by-side comparison slider where applicable
- Image treatment: Subtle border, shadow on hover

### Testimonials Section
**Layout**: 3-column grid transitioning to single column on mobile
- Background: Light section (#FFFFFF) for contrast against dark sections
- Each testimonial: Card with quote, author name, location
- Star ratings: Orange stars (#F37021)
- Google Reviews badge: Prominent with call-to-action to leave review
- Quote marks: Large, subtle orange accent

### Contact Section
**Layout**: 2-column split (md:grid-cols-2)
- Left: Contact form with dark background
- Right: Contact methods and business information
- Form fields: Dark inputs with white text, orange focus states
- Submit button: Full accent orange with white text
- Contact methods: Large touch-friendly buttons for Call, WhatsApp
- Map integration: Embedded Google Maps showing Mercury House location

### Footer
**Layout**: Multi-column grid (grid-cols-1 md:grid-cols-3)
- Dark background (#111111) with white text
- Left: Logo and brief company description
- Center: Quick links to services
- Right: Contact information and social media
- Bottom bar: Copyright and address with muted text

## Images

**Hero Section**:
- Use: "Main Hero Section Image_1761297633354.png"
- Placement: Full-width background with dark overlay
- Treatment: Sharp, professional imagery of electrical/plumbing work

**Gallery Section**:
- Use: All provided work images (Image to use, use this image, use this image too)
- Placement: Grid layout showcasing completed projects
- Captions: "DB Board Upgrade", "Bathroom Installation", "Geyser Repair", etc.

**Vision/Mission Section** (if included):
- Use: "Vision & Misson Section Image_1761297648918.jpg"
- Placement: Background or side image in About/Why Choose Us section

**Logo**:
- Use: "Logo_1761297985473.png"
- Placement: Header (left side) and footer
- Treatment: White version for dark backgrounds

## Trust Signals & SEO Elements

- **Review Integration**: Google star ratings with count prominently displayed
- **Location Badges**: "Proudly Durban-Based" with location pin
- **24/7 Badge**: Orange accent with phone icon, repeated throughout
- **Service Area Map**: Visual representation of Durban coverage
- **Certifications**: Display any electrical/plumbing certifications with icons

## Interactive Elements

**Minimal Animations**:
- Subtle fade-in on scroll for sections
- Hover lift for service cards (translateY(-4px))
- Button press states (scale(0.98))
- No excessive or distracting motion

**CTAs Throughout**:
- Multiple contact touchpoints every 2-3 sections
- Sticky mobile contact bar at bottom of viewport
- WhatsApp button with floating animation (subtle pulse)

## Accessibility & Performance

- High contrast between dark (#111111) and white (#FFFFFF)
- Orange accent (#F37021) meets WCAG AA against both backgrounds
- Large touch targets (min 44px) for mobile
- Form labels clearly visible and associated
- Icon fonts from popular CDN (Heroicons or Font Awesome)
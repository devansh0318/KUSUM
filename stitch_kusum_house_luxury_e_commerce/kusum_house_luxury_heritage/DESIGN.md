---
name: Kusum House Luxury Heritage
colors:
  surface: '#fff8f7'
  surface-dim: '#ecd5d3'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e7'
  surface-container-high: '#fae3e1'
  surface-container-highest: '#f4dddb'
  on-surface: '#251918'
  on-surface-variant: '#584140'
  inverse-surface: '#3b2d2c'
  inverse-on-surface: '#ffedeb'
  outline: '#8b716f'
  outline-variant: '#dfbfbd'
  surface-tint: '#aa3434'
  primary: '#550008'
  on-primary: '#ffffff'
  primary-container: '#7a0e16'
  on-primary-container: '#ff817c'
  inverse-primary: '#ffb3ae'
  secondary: '#5e5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dc'
  on-secondary-container: '#626360'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410005'
  on-primary-fixed-variant: '#891b1f'
  secondary-fixed: '#e3e2df'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fff8f7'
  on-background: '#251918'
  surface-variant: '#f4dddb'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-uppercase:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  edge-margin: 48px
  gutter: 24px
  unit-base: 8px
  section-gap: 120px
---

## Brand & Style

This design system is built upon the concept of "Contemporary Heritage." It bridges the gap between centuries-old Indian craftsmanship and the global luxury fashion landscape. The UI evokes the feeling of a high-end physical atelier—spacious, tactile, and curated. 

The aesthetic is rooted in **Minimalism** with an **Editorial** flair. By utilizing generous whitespace (negative space) and a strict visual hierarchy, we allow the intricate details of the traditional garments to remain the focal point. The interface should feel like a digital fashion magazine: effortless, sophisticated, and deeply feminine without being cliché. 

The target audience is the modern woman who values tradition but lives a cosmopolitan lifestyle. The emotional response should be one of aspiration, trust, and refined grace.

## Colors

The palette is designed to feel "warm-premium," avoiding the coldness often associated with modern luxury.

*   **Primary (Deep Maroon):** Used for brand identifiers, primary calls-to-action, and key UI accents. It represents heritage and the richness of Indian textiles.
*   **Secondary (Ivory/Off-white):** This serves as the canvas for the entire experience. It is softer than pure white, providing a more "organic paper" feel common in editorial print.
*   **Tertiary (Gold):** Used sparingly for highlights, icons, and subtle borders to signify premium quality and craftsmanship.
*   **Soft Beige:** Used for background containers and secondary sections to add depth without introducing high-contrast breaks.
*   **Charcoal:** A softened black used for all typography to ensure maximum readability while maintaining a sophisticated look.

## Typography

This design system employs a classic high-contrast pairing to establish a luxury editorial rhythm.

*   **Headlines (Bodoni Moda):** A serif font with extreme contrast between thick and thin strokes. It should be used for all major headings, product titles, and storytelling elements. Use larger sizes and tighter tracking for a high-fashion look.
*   **Body & Utility (Montserrat):** A clean, geometric sans-serif that balances the ornate nature of the serif. It provides a modern, functional edge and ensures that product descriptions and checkout flows are highly legible.
*   **Labels:** All-caps Montserrat with increased letter spacing is the standard for small metadata, button labels, and eyebrow headers to provide a "branded" feel to small UI elements.

## Layout & Spacing

The layout philosophy follows a **Fixed Editorial Grid**. Content is housed within a 12-column grid system with generous outer margins to simulate the feel of a luxury lookbook.

*   **Asymmetric Compositions:** For lookbooks and collections, images should break the standard grid—some spanning 4 columns, others 8—to create visual interest.
*   **Verticality:** Large vertical gaps (Section Gaps) are used between major content blocks to give the user "breathing room" and reinforce the premium positioning.
*   **Alignment:** Text is primarily left-aligned for body content, but display headings may be centered or offset to interact with photography.

## Elevation & Depth

To maintain the "Soft Premium" feel, this design system avoids heavy shadows and aggressive layering.

*   **Soft Ambient Shadows:** Elements like cards or dropdowns use extremely diffused shadows with a slight warm tint (`rgba(122, 14, 22, 0.04)`). The goal is to lift the element just enough to suggest it is floating on the ivory surface.
*   **Tonal Layers:** Depth is primarily created through color blocks. For example, a card might sit on a Soft Beige background while having an Ivory surface color.
*   **Glassmorphism:** The sticky navbar uses a backdrop blur (12px) with a semi-transparent Ivory overlay (85% opacity) to ensure the photography underneath remains visible but doesn't interfere with navigation legibility.

## Shapes

The shape language is approachable and modern, softening the traditional formality of the brand.

*   **Primary Radius:** A consistent 0.5rem (8px) radius is applied to buttons, input fields, and standard cards.
*   **Large Cards:** Editorial banners and featured collection cards use a 1rem (16px) radius for a more prominent, friendly appearance.
*   **Circular Elements:** The brand icon (the 'k' logo) and specific functional buttons (like "Back to Top" or "Wishlist") are fully circular to echo the logo's geometry.

## Components

### Buttons
*   **Primary:** Deep Maroon background, Ivory text, 8px radius. On hover, the background shifts slightly darker or adds a subtle gold glow.
*   **Secondary:** Ghost style with a thin Gold or Maroon border and Charcoal text. 
*   **CTA Animation:** Smooth transition (300ms ease-in-out) on hover, perhaps with a slight upward lift.

### Cards
*   **Product Cards:** Ivory background, subtle ambient shadow. Images should have a consistent aspect ratio (typically 4:5 for fashion). Title in Bodoni Moda, Price in Montserrat.
*   **Editorial Cards:** Large, image-heavy blocks with typography overlaid in the center or corner.

### Navigation
*   **Sticky Navbar:** Transparent background with backdrop-blur. The 'k' logo centered or on the far left. Navigation links in Montserrat (Label-uppercase style).
*   **Mega Menu:** Large, multi-column layout using Ivory background and Gold accents for category titles.

### Inputs & Forms
*   **Fields:** Minimalist bottom-border only or very light beige background with 8px radius. Focus states should highlight the border in Gold.

### Additional Elements
*   **Wishlist Icon:** A custom heart icon that fills with Maroon when active.
*   **Hover Effects:** Image zooming (subtle 1.05x scale) on product listings to reveal fabric texture.
# LE KÉNE — French Pâtisserie Website

## Problem Statement
Single-page marketing website for LE KÉNE, a French pâtisserie in HSR Layout, Bengaluru.
Tagline: "Petite French pâtisserie. Big on taste." Frontend-only, no backend.

## Architecture
- React (CRA + Tailwind) single-page site at `/app/frontend/src/pages/LeKene.jsx`
- Custom CSS in `/app/frontend/src/App.css` (palette, fonts, components)
- Fonts: Cormorant Garamond (headings), Inter (body) via Google Fonts
- Palette: ivory #F5F0E8, gold #C9A84C, charcoal #2C2C2C, dusty rose, sage

## User Personas
- HSR Layout locals discovering / re-finding the shop on mobile
- Out-of-area visitors checking menu, hours, directions before visiting

## Implemented (Dec 2025)
- Sticky nav with brand mark + scroll-blur background
- Hero: tagline, dual CTA (Call Us / Get Directions), 4.4★ rating, hours, floating pastry visual card
- About: story + 4 selling-point grid (not too sweet, handcrafted, éclairs, open till 11 PM)
- Menu: 3 categorised sections (Signature Pastries, Savoury Bites, Drinks) with ₹ INR pricing
- Testimonials: 4 verbatim Google review quotes + 4.4★ badge
- Visit: address, tel:, hours + embedded interactive Google Maps card
- Footer: charcoal, contact, hours, inclusivity note
- All CTAs use `tel:+917795374343` and Google Maps URL as specified
- Mobile responsive, data-testids on all interactive elements

## Backlog (P1/P2)
- P2: Online ordering / pre-order form (currently call-only)
- P2: Instagram feed embed for daily counter updates
- P2: Newsletter signup for new pastry drops

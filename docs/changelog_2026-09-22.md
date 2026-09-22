# Changelog: 2026-09-22

- **Documentation**: Reviewed initial requirements (`Master prompt.txt`, `Lovable _ Important notes.txt`).
- **Documentation**: Created `Requirements/Intentional_Deviations.txt` to track approved deviations (Typography, Glassmorphism, Parallax, WhatsApp CTA).
- **Planning**: Finalized project sitemap to match the client's direct request (Home, Wellness, Ayurveda, Stay & Rooms, About Us, Contact Us), dropping unused requirements (Blog, Experience).
- **Architecture**: Shifted project from a single-page application to a multi-page setup with Next.js App Router.
- **Development**: Scaffolded new page directories in Next.js App Router (`/wellness`, `/ayurveda`, `/stay`, `/about`, `/contact`).
- **Development**: Refactored `Navigation.tsx` (Desktop and Mobile) to use `next/link` and point to the new routes.
- **Development**: Updated `Hero.tsx` dual CTA buttons to use `next/link` routing to `/wellness` and `/stay`.
- **Development**: Implemented the complete `/wellness` page with Hero, Philosophy, Approach, Ayurveda highlight, Dimensions of Healing grid, Packages & Programmes cards, and CTAs.
- **Development**: Implemented the complete `/ayurveda` page with Hero, Introduction, Interactive Therapies Accordion, Panchakarma & Rasayana Packages, and CTAs.
- **Development**: Implemented the complete `/stay` page with Hero, Rooms Showcase, Monthly Stays section, Resort Amenities Grid, and CTAs.
- **Development**: Implemented the complete `/about` page with Hero, Sanctuary Story, Philosophy Narrative, and Founder Profile skeleton.
- **Development**: Implemented the complete `/contact` page with Hero, Functional Enquiry Form, Direct Contact details, and Google Maps location embed.
- **Documentation**: Generated `status.md` to track ongoing project progress across all phases.

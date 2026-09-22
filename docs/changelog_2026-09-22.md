# Changelog: 2026-09-22

- **Documentation**: Reviewed initial requirements (`Master prompt.txt`, `Lovable _ Important notes.txt`).
- **Documentation**: Created `Requirements/Intentional_Deviations.txt` to track approved deviations (Typography, Glassmorphism, Parallax, WhatsApp CTA).
- **Planning**: Finalized project sitemap to match the client's direct request (Home, Wellness, Ayurveda, Stay & Rooms, About Us, Contact Us), dropping unused requirements (Blog, Experience).
- **Architecture**: Shifted project from a single-page application to a multi-page setup.
- **Development**: Scaffolded new empty page directories in Next.js App Router (`/wellness`, `/ayurveda`, `/stay`, `/about`, `/contact`).
- **Development**: Refactored `Navigation.tsx` (Desktop and Mobile) to use `next/link` and point to the new routes.
- **Development**: Updated `Hero.tsx` dual CTA buttons to use `next/link` routing to `/wellness` and `/stay`.
- **Documentation**: Generated `status.md` to track ongoing project progress.

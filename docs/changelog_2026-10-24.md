# Changelog 2026-10-24

## UI Polish, SVG Icon Migration & Shared Travel Content

### Added
- **Centralized Travel Data (`src/content/travel.ts`)**: Created shared `TRAVEL_OPTIONS` constant for Chennai Airport (MAA), Bengaluru Airport (BLR), and Katpadi Junction railway station, avoiding duplicate travel descriptions across Contact and Location components.

### Changed
- **Inline SVG Icon Migration**:
  - Replaced font-based material icons in `Navigation.tsx` (mobile hamburger menu, drawer close icon, dropdown carets, checkmark, and navigation chevrons) with crisp inline SVGs to avoid font-loading flashes and layout shifts.
  - Replaced footer icons in `Footer.tsx` (location, WhatsApp, and Google Maps) with inline SVGs.
  - Refined the floating overlay badge in `Wellness.tsx` with an accent gold container and inline SVG icon.
- **CTA Button Simplification**:
  - Removed trailing arrow icons (`arrow_forward`, `→`) across all major site CTAs and links (`Hero`, `Contact`, `Dining`, `Experiences`, `Journal`, `Resort`, `Stay`, `Wellness`, `RetreatPackage`, and subpages) for cleaner, typography-driven button styling.
- **Contact & Location Polish**:
  - Refactored `TravelInformation` in `src/app/contact/page.tsx` to dynamically map over `TRAVEL_OPTIONS`.
  - Streamlined `Contact.tsx` by removing redundant duplicate CTA buttons above the interactive enquiry form.
- **Branding & SEO Consistency**:
  - Updated metadata description in `src/app/ayurveda-treatments-tiruvannamalai/page.tsx` replacing unconfirmed "Kizhi" with "Abhyanga".
  - Standardized branding terminology from "Sanctuary" to "Resort" in `Navigation.tsx`, `Footer.tsx`, and journal article metadata (`src/app/journal/[slug]/page.tsx`).
  - Standardized spelling to "Tiruvannamalai" in `Navigation.tsx`.
  - Updated Google Maps link in `Footer.tsx` to directly open the resort coordinates.

### Verification
- Production build (`npm run build`) completed successfully with 0 errors across all 19 statically generated routes.

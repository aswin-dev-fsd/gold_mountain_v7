# Changelog 2026-10-24

## Dining Feature Icons, Hero Heading Layout & Subtitle Consistency

### Changed
- **Dining Feature Badges (`src/components/Dining.tsx`)**:
  - Resized the three right-column feature badge containers from `32px` (`w-8 h-8`) to `56px` (`w-14 h-14`) with `rounded-xl` corners and solid `forest-deep` background, matching the height of the title and description block.
  - Aligned badge items to the top (`items-start mt-0.5`) alongside each title, and increased vertical row separation (`space-y-space-lg`).
  - Enscaled the inner Material Symbols icons (`eco`, `water_drop`, `group`) to 36px with explicit inline style (`style={{ fontSize: "36px" }}`) and `!text-[36px]` to prevent external Google Fonts CDN defaults (24px) from overriding Tailwind sizing.
  - Refined the "Ahara Chikitsa" quote card icon into a clean accent-gold container with a centered restaurant icon.
- **Hero Section Line Break & Typography Alignment**:
  - **Wellness Page (`src/app/wellness/page.tsx`)**: Added `block mt-2` to `<span className="text-accent-gold block mt-2">in Tiruvannamalai</span>` so the location cleanly breaks to the second line, matching the layout of Ayurveda, Stay, and About pages.
  - **Hero Subtitle Color Unification**: Changed hero subtitles from gold (`text-accent-gold`) to warm brand ivory (`text-canvas-ivory`) across Wellness (`/wellness-resort-tiruvannamalai`), Ayurveda (`/ayurveda-treatments-tiruvannamalai`), and About (`/about-us`) pages for unified typography across the entire site.
- **Home Components Polish**:
  - **Trust Section (`src/components/Trust.tsx`)**: Replaced star glyphs with rounded dark green icon badges (`spa`, `restaurant`, `landscape`, `self_improvement`) and optimized quote card padding.
  - **Journal Section (`src/components/Journal.tsx`)**: Standardized character encoding entities and refined card typography.
  - **Location Section (`src/components/Location.tsx`) & Resort Section (`src/components/Resort.tsx`)**: Fine-tuned spacing and typography consistency.

---

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


---

## About Location Enhancements, Stay Card Polish & Timeline Alignment

### Added
- **About Page Sacred Geography & Interactive Map (`src/app/about/page.tsx`)**:
  - Replaced the placeholder location section with a full-width two-column layout.
  - Added structured distance cards for key pilgrimage landmarks: Girivalam Path (1 km), Adi Arunachala Temple (1.5 km), Sri Ramanasramam (5 km), Arunachaleswarar Temple (6 km), and Parvati Malai view (visible from property).
  - Integrated an interactive Google Maps iframe with direct external directions link and resort address card.

### Changed
- **About Page Final CTA**: Restyled with a canvas-ivory card layout, gold accent badge ("Begin Your Journey"), centered copy, and dual action buttons (Plan Your Stay and WhatsApp).
- **Stay Page Room Cards (`src/app/stay/page.tsx`)**:
  - Restructured room details layout to position the nightly rate above the amenities grid for improved hierarchy.
  - Streamlined final CTA to two primary actions: "Enquiry Form" and WhatsApp.
- **Ayurveda & Wellness Spacing & CTA Polish (`src/app/ayurveda/page.tsx`, `src/app/wellness/page.tsx`)**:
  - Removed redundant secondary email action in favor of direct Enquiry Form and WhatsApp actions.
  - Polished FAQ section vertical spacing.
- **Retreat Package Timeline Polish (`src/components/RetreatPackage.tsx`)**:
  - Vertically centered the day bullet nodes (`top-[8.5px] -translate-y-1/2`) and line connectors for clean alignment with day headers.
  - Replaced raw unicode info character with Material Symbols `info` icon.

### Verification
- Production build (`npm run build`) completed successfully with 0 errors across all 19 statically generated routes.

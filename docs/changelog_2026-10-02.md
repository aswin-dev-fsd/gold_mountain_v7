
## [2026-10-02] - UI and Typography Adjustments

### Changed
- Updated section labels (`text-label-sm` and `text-label-md`) across all major components (`About.tsx`, `Ayurveda.tsx`, `Contact.tsx`, `Stay.tsx`, `Wellness.tsx`) from `text-accent-gold` to `text-forest-deep` for better contrast and branding consistency.
- Adjusted line heights in `tailwind.config.ts` for body text (`body-lg`, `body-md`, `body-sm`) to create tighter, more readable paragraphs.
- Tweaked hover state transitions on action buttons to use `text-accent-gold` on the icon instead of translating the whole button text.

### Added
- Added missing subtitle paragraph to the Hero section of the About page (`src/app/about/page.tsx`) to match the consistency and length of the hero sections on other pages.

### Fixed
- Fixed character encoding issues for currency symbols (Rupee and Euro) in the Stay page (`src/app/stay/page.tsx`).

### Changed
- Reverted section label colors (`text-label-sm` and `text-label-md`) across major components (`Resort.tsx`, `Stay.tsx`, `Trust.tsx`, `Wellness.tsx`) back to `text-accent-gold` from `text-forest-deep` to restore the previous highlighting style.

### Changed
- Refactored UI consistency: updated floating info badges in `Dining.tsx` and `Location.tsx` to match the solid `bg-forest-deep` visual style from `Resort.tsx`.
- Removed `italic` typography treatments from the `Hero.tsx` main heading and testimonial quotes in `Trust.tsx` for cleaner readability.
- Removed the "Home" link from the main `Navigation.tsx` menu.

### Changed (design consistency pass)
- Icon boxes that used `rounded-full` (12px in this theme) now use `rounded-lg` to match the rest: Dining pillars, Contact quick-links, Wellness dimensions, Stay amenities, `/contact` icon and the mobile nav button.
- Overlay cards on the Resort, Location map and Dining image are now aligned bottom-left with reduced inner padding.
- "Our Approach" on `/wellness` is now a compact 4-column landscape grid (4 + 3 centred) instead of tall 3-column portraits.
- Stay room photos use `rounded-xl`, matching the home page images.
- Replaced pale `text-gold-light` text with `text-accent-gold` site-wide, including the Wellness "Ayurveda" label and the Experiences/Contact/Hero accents.
- Removed the unconfigured `font-serif` fallback; only Outfit (headings, labels) and Inter (body) remain.
- Cards on About, Contact, Ayurveda and Wellness pages use `rounded-xl`; secondary buttons use `rounded-lg`; WhatsApp CTAs are now pill-shaped with a WhatsApp glyph.
- Stay page CTA order swapped: Email first, WhatsApp second.
- Footer brand now shows the logo on an ivory tile instead of text; Location "Book Transfer" button restyled to solid forest green.
- Added a themed scrollbar (dark green track, gold thumb) in `globals.css`.

### Fixed
- Corrected `docs/status.md` room prices (Deluxe 3,099 / Suite 4,099 / Family 7,999) and the `/stay` header meal-plan text (Deluxe and Suite include breakfast and lunch; Family Suite includes all meals).

### Changed (address and map)
- Replaced the address everywhere with the client-confirmed one: Gold Mountain Wellness Resort, Kottangal, Girivalam Path, Thiruvannamalai 606604 (`/contact` Location block, Footer, Location map overlay, `docs/Requirements/Contact.txt`). The three copies previously disagreed (606603 vs 606604).
- Standardised the spelling to "Thiruvannamalai" in all page text (Footer, Navigation, Location, Journal).
- `/contact` map embed now points at the real resort pin (12.2428722, 79.0256161, from the client's Google Maps link) instead of a placeholder place ID; Location GPS caption updated to 12.2429 N, 79.0256 E.
- `/contact` page layout reworked: form and details side by side, full-width map below, bordered rounded inputs, WhatsApp CTA labels shortened to "WhatsApp Now".

### Added
- `docs/section_bg_audit_2026-10-02.md`: audit of adjacent sections sharing a background colour (not yet fixed).

### Known issues
- The logo image (`public/images/logo.png`) still reads "Tiruvannamalai".
- The Location section background is a static map image of the old area; the GPS caption and overlay now use the new coordinates.
- The Location map overlay covers about 48% of the map on mobile.

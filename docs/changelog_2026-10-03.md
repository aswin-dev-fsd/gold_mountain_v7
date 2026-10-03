## [2026-10-03] - Journal articles, page tweaks and heading spacing

### Added
- Journal article pages at `/journal/<slug>` (`src/app/journal/[slug]/page.tsx`): image header with category and read time, lead paragraph, headed sections, "More from the Journal" and an Enquire banner. Unknown slugs return the 404 page.
- `src/data/journal.ts`: single data source for the three journal articles (slug, category, read time, excerpt, image, body). The article copy is draft text for client review.

### Changed
- Home Journal cards now read from `src/data/journal.ts`; "Read Article" is a solid forest-green CTA button linking to the article page, matching the other CTAs.
- Heading spacing standardised to 4px: eyebrow label to heading and heading to gold subtitle on all home sections (Wellness, Stay, Dining, Experiences, Location, Trust, Journal, Contact; subtitle margin `mt-space-sm` to `mt-space-xs`) and eyebrow label to heading on About, Wellness, Ayurveda and Stay pages (`mb-2/4/6` to `mb-1`). Heading to body paragraph spacing on inner pages is unchanged.
- Heading line heights tightened to 1.05 (`display-lg`, `display-lg-mobile`, `headline-lg`) in `tailwind.config.ts`; removed the hero `leading-[1.15]` override in `Hero.tsx`.
- Wellness page: removed "The Dimensions of Healing"; "Programmes & Packages" now follows "Our Philosophy".
- Stay page: hero text shortened to two lines and the semicolon removed; "Longer Retreats & Monthly Sadhana Stays" card moved below the hero; room text aligned to the top of the room image; room prices enlarged to 25px.
- Removed the "Stay a little longer." section and its CTA from the Stay page.
- Ayurveda and Wellness/Stay WhatsApp CTAs: WhatsApp button on the right, "WhatsApp Now" label, reduced horizontal padding, pill shape.
- `/contact`: phone, email and location now share one card with dividers; enquiry fields use soft boxed styling; both columns equal height; map spans the full width below.
- Home page: Dining ("Conscious Nourishment") now sits above Location ("Sacred Geography").

### Known issues
- Journal article text and card images are placeholders pending client content.
- "Read All Journal Entries" still points to the home Journal section (no article index page).

### Changed (design consistency pass)
- Eyebrow labels on About, Ayurveda, Stay and Wellness pages now use the home style (`label-md`: 12px, weight 600, gold, wide tracking) instead of 14px / weight 400.
- CTA buttons unified to the "Request Long Stay Rates" style: 12px, weight 600, 24px horizontal / 10px vertical padding, 42px min height, 4px corners. Applied to inner-page CTAs (Enquire, Email, Send Enquiry, Explore the Resort, package Enquire), Journal buttons, and home Enquire (rooms), Explore All Experiences, Explore Wellness Programs, Explore Farm to Table, Book Transfer, Discover Dining, Explore the Resort. WhatsApp keeps its pill shape. Hero CTAs, the enquiry form submit and the nav Book button are unchanged.
- Section backgrounds now alternate ivory / cream between hero and footer on every page with no neighbours sharing a colour:
  - Home: Trust is cream (cards switched to ivory) and Journal is ivory (cards switched to cream).
  - About, Ayurveda, Stay and Wellness: closing CTA bands changed from charcoal to ivory/cream with dark text; the outline Email button now uses forest green; the Ayurveda band on Wellness is cream; Wellness "Our Approach" is ivory; Stay rooms alternate cream / ivory.
  - Footer is `forest-charcoal` again (same dark green as the Contact section above it), per client preference.
- Heading sizes unified to the home scale: section headings 40px; in-layout titles (Stay room names, "Send an Enquiry", "Thank you.", package names, Journal article subheads) 28px, both at 1.05 line height.
- Section header rows on home (Wellness, Stay, Journal) are top-aligned (`md:items-start`) so the eyebrow lines up with the right-hand column.

### Known issues
- Hero CTAs (14px), the enquiry form submit and the nav Book button are intentionally larger and were not changed.
- Gold small text on ivory/cream is about 2.2:1 contrast; consider a darker gold token for text.
- The Journal article page title stays at 48px (the home 56px would wrap to 4-5 lines).

### Changed (CTA style)
- All CTAs now follow the "View Treatment Rituals" pattern: 12px / weight 600 label, `rounded-lg`, 24px x 10px padding, 42px min height, and a trailing `arrow_forward` icon that nudges right on hover.
  - Light sections: solid forest-green button with a gold arrow (home Wellness, Resort, Stay Enquire / Request Long Stay Rates, Dining, Location Book Transfer, Journal; About / Wellness / Ayurveda / Stay / Contact pages; package Enquire buttons are now solid instead of outlined).
  - Dark sections (Experiences, Contact form, Journal article banner): gold fill with a dark arrow, same size and shape.
  - Secondary Email buttons stay outlined but gain the same arrow; WhatsApp buttons keep the brand-green pill and logo.
  - Hero buttons now use the standard size and arrow (previously 14px, rounded-xl, different icons). The nav Book button is unchanged.
- Arrow icons only appear on CTAs that had an arrow before (View Treatment Rituals, Explore the Resort, Discover Dining, Explore Farm to Table, Read All Journal Entries, Read Article, Explore Wellness / Ayurveda, Book Transfer, Enquire Now); the other arrow variants (outward, east) were unified to `arrow_forward`.
- CTAs that never had an arrow (room and package Enquire, Request Long Stay Rates, Send Email, Send Enquiry, Email) are text only again; Plan Your Stay, Explore Wellness Programs, Explore All Experiences and Send Sanctuary Enquiry kept their original calendar / compass / send icons.
- Book Transfer is set to `whitespace-nowrap shrink-0` so it stays on one line next to "Chauffeur Service Available".

### Changed (hero and spacing follow-ups)
- Home hero: removed the "Rooted in Nature · Inspired by Arunachala" pill and its entrance animation step.
- Home hero: headline, copy and CTAs are now vertically centred between the nav and the bottom of the screen. The scroll chevron is positioned absolutely at the bottom edge (outside the content block) and the content padding is `pt-32 pb-12` (difference equals the 80px nav).
- Inner pages: gap between a heading and its intro paragraph is 4px (`mb-1`) on Wellness (Our Philosophy, Ayurveda band), Ayurveda (The Science of Life, Therapies & Treatments) and Stay (room names), matching the label-to-heading gap. Headings above grids, forms and buttons are unchanged.
- Inner-page section headings use the home heading style (`font-headline-lg`, 40px, tight tracking); the Journal article hero uses the standard display size.
- Stay page: "Longer Retreats & Monthly Sadhana Stays" card now has equal space above and below (`py-16`).

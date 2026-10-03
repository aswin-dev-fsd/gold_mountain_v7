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

# Changelog 2026-10-17

## Added

- Added the supplied final SEO content PDF, technical SEO DOCX, and six-URL sitemap XML to `docs/`.
- Added the five final SEO routes while reusing the existing page components and designs.
- Added a Next.js sitemap endpoint with the six URLs and October 8 `lastmod` values from the supplied XML.
- Added production-only Google Search Console verification, Google Analytics, and Microsoft Clarity using the IDs in the technical SEO DOCX.
- Added a robots endpoint and metadata that keep non-live environments out of search indexing.

## Changed

- Updated navigation, calls to action, and footer links to the final URLs; added anchors for rooms, wellness programs, and the estate.
- Added permanent redirects from the five former staging routes and the known misspelled Ayurveda URL.
- Added page titles, descriptions, canonical URLs, and basic Open Graph metadata for the six sitemap pages.
- Corrected footer room names and copyright year.

## Decisions and remaining work

- The technical SEO DOCX contains the new authoritative Search Console verification token, superseding the older token in the content PDF. All three technical tags run only when `NEXT_PUBLIC_SITE_ENV=live`.
- Journal pages remain accessible, as requested while those pages are unfinished. The final content PDF calls for Journal material to live within the six main pages, so this is a temporary difference from the final site plan.
- The full page copy, page-specific JSON-LD, supplied image alt text, and social sharing images from the content PDF are not implemented yet. Several stock images, sample reviews, strong health claims, and price/content placeholders remain.
- The supplied sitemap is represented by `src/app/sitemap.ts`; `docs/sitemap.xml` remains the source reference. The generated output contains the same six locations and dates, though its XML formatting and date serialization may differ.
- Only the five staging-route redirects and the known misspelled Ayurveda redirect are implemented. The old WordPress sitemap is needed to map every other live URL before DNS cutover.
- The client confirmed that the site's existing factual details are correct. Any conflicting `[CONFIRM]` notes in the PDF should be reconciled against those site values when the final copy is applied.
- The home and contact enquiry forms now construct a WhatsApp message from the entered fields and open the resort's chat for the visitor to review and send. They no longer claim an enquiry was received before the visitor sends it.
- Removed the footer's Privacy Policy and Terms links because they only pointed to `#`. Real policy pages or approved destinations can be added later.

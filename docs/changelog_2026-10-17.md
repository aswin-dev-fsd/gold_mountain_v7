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
- About and Contact now have their content and page-specific JSON-LD updates described below. The other four main pages still need their final copy and structured data. Client photography, corresponding image alt text, and social sharing images remain pending. Stock images, sample reviews, strong health claims, and price/content placeholders remain elsewhere.
- The supplied sitemap is represented by `src/app/sitemap.ts`; `docs/sitemap.xml` remains the source reference. The generated output contains the same six locations and dates, though its XML formatting and date serialization may differ.
- Only the five staging-route redirects and the known misspelled Ayurveda redirect are implemented. The old WordPress sitemap is needed to map every other live URL before DNS cutover.
- The client confirmed that the site's existing factual details are correct. Any conflicting `[CONFIRM]` notes in the PDF should be reconciled against those site values when the final copy is applied.
- The home and contact enquiry forms now construct a WhatsApp message from the entered fields and open the resort's chat for the visitor to review and send. They no longer claim an enquiry was received before the visitor sends it.
- Removed the footer's Privacy Policy and Terms links because they only pointed to `#`. Real policy pages or approved destinations can be added later.

## About and Contact content update

### Implemented

- Applied the final PDF's About and Contact hero headings, keeping the existing short headlines as supporting lines. Hero sections now have a minimum height and vertical padding so longer copy can expand on short screens.
- Updated About story, founder and philosophy copy; added Ayurveda, Wellness, Rooms and Contact links; added the location section and nearby distances.
- Preserved About's two-card Estate/Nourishment layout. Each card now has its own H2, with the longer descriptive portion on a smaller second line. Kept the `estate` anchor and added clearance below the fixed navigation.
- Added the client-confirmed promise that a retreat advisor replies within 12 hours.
- Added Instagram, check-in/check-out times, callable phone and email links, semantic headings and a descriptive map title to Contact.
- Added a responsive travel section below the existing map with Chennai airport, Bengaluru airport and Katpadi Junction, plus airport transfer assistance and pre-booked cabs.
- Added a Book Transfer link to `#enquiry` that selects Stay even if the visitor previously selected another enquiry type. Existing form values are retained and submission still opens the constructed WhatsApp draft for the visitor to send.
- Added server-rendered AboutPage, Person, ContactPage and BreadcrumbList JSON-LD. Each page includes a minimal Resort entity using the existing `#resort` identifier so its references resolve before the Home schema work is done. Used `about` to relate each page to the resort.
- Completed page-specific Open Graph and Twitter title/description metadata. Used the existing confirmed Kottangal/Girivalam Path address in structured data; aligned the Contact description with that address and normalized Tiruvannamalai spelling in the footer.
- Retained Outfit/Inter fonts, forest green/gold colours, ivory/cream backgrounds, existing card and button styles, GSAP reveals and photo slots.

### Deferred assets and copy differences

- The user will supply photography later. Existing photos remain; the stock founder/landscape accent images are decorative (`alt=""`) rather than being labelled as real photographs of the founder or Arunachala. Actual-image alt descriptions and `/og/about.jpg` / `/og/contact.jpg` previews will be added with the real assets.
- The user confirmed the 12-hour reply promise on 2026-10-17.
- The PDF's automatic thank-you message remains replaced by the previously approved WhatsApp draft flow, which explicitly asks the visitor to review and send the enquiry.
- Travel routes and transfer enquiries are implemented, but the PDF's approximate airport/railway distances and travel times were not published. They require route-specific confirmation from the resort. Public official references give differing city-level airport distances and do not establish the journeys from the resort: [district travel information](https://tiruvannamalai.nic.in/how-to-reach/) and [municipal travel information](https://www.tnurbantree.tn.gov.in/tiruvannamalai/how-to-reach/). Copy currently directs guests to request transfer planning and journey-time confirmation.

### Verification

- Production build and TypeScript check passed.
- Both final routes return 200; each has one H1, parseable page/breadcrumb/resort JSON-LD, canonical URL and page-specific social descriptions in server HTML. Former About/Contact routes still return permanent 308 redirects.
- Browser layout checks at 320, 390, 768, 1024 and 1440 pixels found no horizontal overflow in the updated pages. Inspected mobile heroes, enquiry form, About cards/location section and desktop travel cards.
- Tested changing the enquiry type to Ayurveda, clicking Book Transfer and confirming it changes to Stay while retaining entered values. Submitted synthetic test values and verified the WhatsApp draft contains the name, email, guests, Stay selection and message. No WhatsApp message was sent.
- No browser console errors were captured on the inspected local pages. Preview screenshots are saved locally under `screenshots/2026-10-17-about-contact/` (ignored by Git).

### Delivery notes

- Included the approved implementation plan and completed task checklist with this update.
- Deferred photography/social preview images and travel estimates remain recorded above for the next content pass.
- Checked the final diff for whitespace errors before committing the About/Contact update.

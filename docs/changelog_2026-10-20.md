# Changelog 2026-10-20

## Ayurveda content and SEO update

- Applied the final Ayurveda H1 and supporting line. Kept the hero concise, with the longer PDF introduction immediately below it so the existing image and buttons retain space on small screens.
- Updated the Science of Life introduction and Panchakarma explanation. Kept the current forest green, gold, ivory and cream palette, Outfit/Inter typography, treatment accordion and two-card package layout.
- Replaced the five treatment placeholders with the PDF's Abhyanga, Shirodhara, Udvartana, Pizhichil and Swedana descriptions, and removed stronger treatment claims from the package copy.
- Updated Panchakarma and Rasayana durations, descriptions and included items. The PDF does not provide confirmed rates, so the cards say to enquire for rates instead of displaying placeholders.
- Added the package inclusions, extra-charge services, stay-with-treatment section and six visible FAQs. Shared FAQ data also drives the server-rendered FAQPage schema.
- Added a WebPage, Service, BreadcrumbList, FAQPage and minimal Resort entity to the canonical Ayurveda page. Completed page-specific Open Graph and Twitter descriptions without adding an unprovided social image.
- Changed Ayurveda enquiry actions to preselect Ayurveda in the Contact form. The email button opens email, and WhatsApp buttons open the resort's chat with the existing pill styling.
- Used inline SVGs for the updated treatment, package and FAQ icons so they remain legible if the external icon font is unavailable.

## Deferred client details and assets

- The PDF marks the six focused wellness programs, Kizhi, eye therapies, single-therapy booking, and Panchakarma stages/supervision for confirmation. These were not added to the visible page without confirmation. The previously supplied meta description still mentions Kizhi; confirm that service before launch.
- Ayurveda package prices are still needed for numeric price display. The current page invites rate enquiries instead.
- Client treatment photography and `/og/ayurveda.jpg` are pending, so the existing hero image remains and no photo-specific alt text was invented.

## Verification

- Production build and TypeScript check passed.
- Browser checks at 320, 390, 768, 1024 and 1440 pixels found one H1, six FAQs, no published content or price placeholders, no horizontal overflow or clipped hero heading, and no browser page errors.
- Inspected mobile and desktop screenshots for the hero, package cards and FAQs; server JSON-LD contains Resort, WebPage, Service, BreadcrumbList and six FAQ entries.
- Tested treatment accordion toggling, FAQ keyboard expansion and collapse, and the Ayurveda booking link's enquiry type selection on mobile and desktop.

## Wellness content and SEO update

- Applied the final Wellness H1, supporting line, introduction, philosophy, approach, programs, Ayurveda cross-link, spiritual retreat content and four FAQs.
- Added canonical metadata, page-specific Open Graph and Twitter data, and server-rendered Resort, WebPage, BreadcrumbList, TouristTrip and FAQPage JSON-LD for the canonical Wellness route.
- Replaced program price placeholders with rate-enquiry copy where final numeric rates are unavailable. Retained the supplied retreat offers and directed booking actions to the existing enquiry flow.
- Added shared Wellness FAQ content and switched the approach cards to existing local site images.

## Contact and Rooms hero refinement

- Simplified the Contact and Rooms heroes so each image carries only its H1 and ivory supporting line.
- Moved the longer final-copy introductions directly below each hero. The opening sentence is larger; the supporting detail is smaller and lighter for a clearer reading order.
- Contact recognises `?enquiry=Ayurveda` and preselects Ayurveda in the existing enquiry form, allowing Ayurveda booking links to land on the appropriate selection.

## Combined verification

- Production build and TypeScript check passed after the Ayurveda, Wellness, Contact and Rooms updates.
- Visually inspected the updated Contact and Rooms heroes at desktop and mobile sizes. Their new introductory copy remains readable and no content was clipped.

# About and Contact SEO update

Approved by the user on 2026-10-17 after the page-by-page comparison.
RequestFeedback: false (implementation explicitly authorized).

## Problem

The final SEO PDF adds page headings, internal links, About location copy, Contact travel details and structured data that are missing from the existing pages.

## Solution

Reuse Outfit/Inter typography, forest/gold palette, ivory/cream sections, card borders, buttons and GSAP reveals. Apply the supplied copy, maintain the WhatsApp enquiry flow, include the confirmed 12-hour reply promise, and defer replacement photography and photo-based social previews until client assets arrive. Use the existing confirmed address. Keep page schema self-contained until Home's Resort schema is implemented.

## Files

- src/app/about/page.tsx: copy, semantic headings, internal links and location section.
- src/app/contact/page.tsx: copy, contact details, map accessibility, travel section and transfer action.
- src/app/about-us/page.tsx and src/app/contact-us/page.tsx: page metadata and JSON-LD.
- src/components/Footer.tsx: consistent Tiruvannamalai address spelling.
- docs/changelog_2026-10-17.md: implementation, decisions and verification.
- task.md: implementation checklist.

## Verification

Run production build; inspect server HTML, metadata and JSON-LD; check desktop/mobile layouts and the transfer-to-WhatsApp interaction in a browser. Record deferred assets and any factual discrepancy in travel estimates.

---

# Stay page SEO update

Approved by the user on 2026-10-17 after the Stay page comparison.
RequestFeedback: false (the user explicitly authorized implementation and browser checks).

## Problem and solution

The Stay page needs the final PDF's longer hero, location and festival sections, enquiry link, FAQs and room schema. Reuse the established Outfit/Inter typography, forest/gold palette, ivory/cream sections, alternating room blocks and GSAP reveals. WhatsApp buttons retain their green pill shape; other buttons retain the existing small corner radius. Allow the hero and banner to expand on narrow screens. Share room and FAQ content between visible copy and JSON-LD.

## Files

- src/app/stay/page.tsx: responsive copy, actions, location/festival sections and accessible FAQ.
- src/content/stay.ts: shared confirmed room and FAQ content.
- src/app/rooms-in-tiruvannamalai/page.tsx: metadata and server-rendered JSON-LD.
- docs/changelog_2026-10-17.md and task.md: changes, verification and deferred items.

## Decisions and verification

Keep the existing photos and defer photo-specific alt text and /og/rooms.jpg until client photographs arrive, consistent with the previous approval. Publish the general festival enquiry wording without unknown dates, tariffs, minimum nights or room sizes. Link the guided retreat to the existing Home #retreat-package section until that content is moved to Wellness. The /stay permanent redirect is already configured; verify it instead of adding a second rule. Run the production build, verify metadata/schema and links, then inspect desktop/mobile UI, FAQ keyboard interaction, room anchors and currency changes.

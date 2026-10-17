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

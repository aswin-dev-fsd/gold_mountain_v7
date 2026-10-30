# Changelog 2026-10-30

## Continuous Highlights Marquee, Contact Page Polish & Package Typography

### Added
- **Continuous Highlights Marquee (`src/components/HomeSections.tsx`, `src/app/globals.css`)**:
  - Converted the static resort highlights grid into an infinite continuous marquee ticker with soft edge gradients on desktop and mobile.
  - Added CSS `@keyframes marquee` and `.animate-marquee` utility with hardware-accelerated transforms (`translate3d`), pause-on-hover/focus accessibility, and `@media (prefers-reduced-motion: reduce)` support.
  - Implemented dual-track looping (`Primary` + `aria-hidden` secondary) to prevent gaps or visual stuttering.
- **Policy Reference Documents (`temp_privacy.txt`, `temp_terms.txt`)**:
  - Added live site reference content for Privacy Policy and Terms and Conditions to inform upcoming policy pages.

### Changed
- **Contact Details Card Layout (`src/app/contact/page.tsx`)**:
  - Reordered the contact information section to place "Our Location" (resort address) directly alongside check-in/check-out timings.
  - Elevated the Instagram contact link into its own dedicated bottom card featuring an inline SVG Instagram icon, hover scaling, and external link attributes (`target="_blank" rel="noopener noreferrer"`).
- **Wellness Packages Typographic Balance (`src/app/wellness/page.tsx`)**:
  - Added deliberate line-break (`"Inner Silence\nRetreat"`) and enabled `whitespace-pre-line` on package titles to ensure balanced two-line card headers across screen sizes.

### Verification
- Production build (`npm run build`) passed with 0 errors across all 19 statically generated routes.


---

## Privacy Policy & Terms and Conditions Pages Integration

### Added
- **Privacy Policy Page (`src/app/privacy-policy/page.tsx`)**:
  - Created complete, responsive legal Privacy Policy page tailored for Gold Mountain Wellness Resort, detailing personal data collection, enquiry and booking communication, guest privacy rights, and contact information.
- **Terms and Conditions Page (`src/app/terms-and-conditions/page.tsx`)**:
  - Created comprehensive Terms and Conditions page covering reservations, payments, cancellations, check-in/check-out guidelines, code of conduct, quiet hours, and facility usage policies.

### Changed
- **Footer Links (`src/components/Footer.tsx`)**:
  - Linked bottom bar legal items directly to `/privacy-policy` and `/terms-and-conditions`.
- **Sitemap (`src/app/sitemap.ts`)**:
  - Registered `/privacy-policy` and `/terms-and-conditions` with canonical routes and updated `lastModified` to `2026-10-30`.
- **Contact Details Header (`src/app/contact/page.tsx`)**:
  - Refined the Instagram section header with an inline brand SVG icon next to the section label.
- **Temporary Reference Cleanup**:
  - Removed `temp_privacy.txt` and `temp_terms.txt` after converting them into official Next.js pages.

### Verification
- Production build (`npm run build`) succeeded with 0 errors across 21 statically generated routes.

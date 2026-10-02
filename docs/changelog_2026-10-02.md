
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

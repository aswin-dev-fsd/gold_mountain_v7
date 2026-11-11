# Changelog 2026-11-11

## Real Resort Photography, WebP Optimisation & Temporary Image Badges

### Added
- **Client Resort Photography (`docs/Assets/`)**:
  - Renamed the client's Google Drive and WhatsApp photo batch by content (e.g. `deluxe-bedroom-balcony-door.png`, `aerial-drone-room-blocks-dusk.jpeg`, `suite-living-room-arunachala-view-01.png`).
  - Covers deluxe rooms, suites, exteriors (sunset, night, drone), dining terrace, idli breakfast thali, Buddha meditation corner and garden.
  - Byte-identical duplicates (`gm full image_.png`, `suite_(7).png`) kept out of the repo in a local `docs/Assets/_duplicates/` folder.
- **Optimised Web Images (`public/images/*.webp`)**:
  - 15 photos converted to WebP with `sharp` at native resolution (quality 90 for PNG masters, 94 for already-compressed WhatsApp JPEGs to avoid generational loss).
  - Roughly 80–90% smaller than the 2–3 MB source files (now ~140–430 KB each).
- **Temporary Image Badge (`src/components/TempImageBadge.tsx`)**:
  - Small corner review label marking images that are not final resort photos, with three explicit variants:
    - `ai` — "AI-generated image · Temporary · to be replaced with a real photo"
    - `stock` — "Stock image from internet · Temporary · to be replaced with a real photo"
    - `original` — "Original photo · temporary" with a custom note (e.g. "Suite photo shown · Family Suite photo needed")
  - Global kill switch `SHOW_TEMP_IMAGE_BADGES` to hide every badge before launch.
  - Optional `imageSource` field added to journal articles (`src/data/journal.ts`), stay rooms (`src/content/stay.ts`) and wellness approach items so badges disappear when the field is removed.

### Changed
- **Home Page Imagery**:
  - Hero (`src/components/Hero.tsx`): drone shot of the room blocks at dusk.
  - Resort section (`src/components/Resort.tsx`): sunset reception cottage; image parallax softened from `scale 1.2 / ±8%` to `scale 1.08 / ±4%` to reduce upscaling blur.
  - Stay cards (`src/components/Stay.tsx`): real Deluxe and Suite photos; Family Suite uses a Suite photo as a flagged stand-in.
  - Dining (`src/components/Dining.tsx`): bamboo dining terrace at sunset.
  - Location (`src/components/Location.tsx`): balcony view of Arunachala.
- **Inner Pages**:
  - Rooms (`src/app/stay/page.tsx`, `src/content/stay.ts`): real hero and room photos.
  - Wellness (`src/app/wellness/page.tsx`): real photos for Meditation, Healthy Food and Nature cards.
  - About (`src/app/about/page.tsx`): drone top view hero and garden path accent image.
  - Contact (`src/app/contact/page.tsx`): night exterior hero.
  - Journal (`src/data/journal.ts`): "Soil to Plate" article uses the real idli thali photo.
- **Badges Applied** to all remaining non-client images: home Wellness section, Wellness hero and Ayurveda/Yoga/Lifestyle cards, two journal articles (cards, heroes, related cards), Ayurveda hero (stock), About founder portrait (stock) and the Family Suite stand-in (home card + rooms page).

### Still Needed From Client
- Family Suite, founder portrait (Preethi Parangusam), Ayurveda treatment room, yoga session, lifestyle consultation, Arunachala hill/temple, Ayurveda daily routine, organic farm/goshala.
- Full-resolution originals of the 4 WhatsApp photos (current copies are ~1600 px wide).

### Verification
- Production build (`npm run build`) passed with 0 errors across all 21 statically generated routes.
- All 15 new WebP assets return 200 on every page that references them; badge counts verified per page in the browser.

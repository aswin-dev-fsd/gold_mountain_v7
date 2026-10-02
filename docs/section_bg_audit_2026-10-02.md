# Section Background Audit

**Date:** 2026-10-02
**Scope:** All six routes (`/`, `/wellness`, `/ayurveda`, `/stay`, `/about`, `/contact`)
**Method:** Computed background colour of every section measured in the browser at runtime. No files were changed.
**Reason:** Removing and swapping sections broke the ivory / cream alternation, leaving neighbouring sections with the same background.

## Colour key

| Name | Token | Hex |
|---|---|---|
| ivory | `canvas-ivory` | #F7F3EA |
| cream | `surface-cream` | #EFE9DC |
| charcoal | `forest-charcoal` | #1B3224 |
| deep | `forest-deep` | #214D33 |

## Home (`/`)

Order: Hero (charcoal), Wellness (ivory), Resort (cream), Stay (ivory), Experiences (deep), Dining (cream), Location (ivory), **Trust (ivory)**, Journal (cream), Contact (charcoal), Footer (charcoal).

| # | Sequential pair | Colour |
|---|---|---|
| 1 | Location -> Trust | both ivory |
| 2 | Contact -> Footer | both charcoal |

## `/wellness`

Order: Hero (charcoal), Intro (ivory), **Programmes & Packages (cream)**, **Our Approach (cream)**, **Ayurveda band (charcoal)**, **Final CTA (charcoal)**, Footer (charcoal).

| # | Sequential pair | Colour |
|---|---|---|
| 3 | Programmes & Packages -> Our Approach | both cream |
| 4 | Ayurveda band -> "Find the kind of wellness..." CTA | both charcoal |
| 5 | Final CTA -> Footer | both charcoal (three dark blocks in a row) |

## `/stay`

Order: Hero, Intro (ivory), **Deluxe, Suite, Family (transparent, so ivory)**, **Resort Amenities (ivory)**, CTA (charcoal), Footer.

| # | Sequential pair | Colour |
|---|---|---|
| 6 | Intro -> Deluxe -> Suite -> Family -> Amenities | all ivory, separated only by thin border lines |
| 7 | CTA -> Footer | both charcoal |

Cause: the "Stay a little longer." section (cream) was removed, which broke the alternation.

## `/ayurveda`

Order: Hero, Intro (ivory), Therapies (cream), Programmes (ivory), CTA (charcoal), Footer (charcoal).

| # | Sequential pair | Colour |
|---|---|---|
| 8 | CTA -> Footer | both charcoal |

## `/about`

Order: Hero, Story (ivory), Founder (cream), Philosophy (ivory), Grounds (cream), CTA (charcoal), Footer (charcoal).

| # | Sequential pair | Colour |
|---|---|---|
| 9 | CTA -> Footer | both charcoal |

## `/contact`

Ivory header, cream form, then the footer. No clash.

## Summary

- **Content clashes (4 spots):** Trust after Location (home), Packages with Approach and the two charcoal bands (`/wellness`), and five ivory sections on `/stay`.
- **CTA directly above the footer (5 spots):** `/`, `/wellness`, `/stay`, `/ayurveda` and `/about` all end with a charcoal CTA band against a charcoal footer. The pattern is consistent, so it may be intentional, but the two blocks run together.

## Suggested fixes (not applied)

| Page | Change |
|---|---|
| Home | Trust -> cream, Journal -> ivory (keeps alternating up to Contact) |
| `/wellness` | Our Approach -> ivory; make the final CTA cream or `forest-deep` so the three dark blocks do not merge |
| `/stay` | Deluxe -> cream, Suite -> ivory, Family -> cream, Amenities -> ivory |
| CTA above footer | Option 1: make CTA bands `forest-deep`. Option 2: add a gold top border to the footer. |

## Open question

For the CTA and footer clash, use `forest-deep` for the CTA bands, or a gold line on the footer?

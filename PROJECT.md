# Learning Makers — Project Reference

## The business

Learning Makers is a boutique accessibility consultancy operated by Martin Brown
and Kirsty Brown from Melbourne, Australia. Martin holds the IAAP CPACC credential
and is a professional member of IAAP. The business runs on a semi-retirement model —
sustainable, low-overhead income, not scale.

**Target market:** Australian for-purpose sector; NDIS providers (roughly 15–150 staff)
as the beachhead market.

**Identity:** An accessibility specialist practice that audits, guides, and trains.
Not a generalist ID consultancy that also does accessibility.

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) |
| Hosting | Vercel |
| Repo | GitHub |
| DNS | Cloudflare |
| Email marketing | MailerLite |
| Payments | Stripe (with Stripe Tax for GST) |
| Course delivery | Moodle (courses.learningmakers.com) |
| Analytics | Vercel Analytics |
| Font | Atkinson Hyperlegible |
| Content | HTML files in `content/[guideSlug]/`; hardcoded in page files elsewhere |

## Site structure

/                          Homepage
/services                  Services (Accessibility audit, Co-design, Capacity building)
/tools                     Tools index (card-based)
/tools/cpacc-quick-guide   CPACC Quick Guide landing page (placeholder for AAG — not linked from Tools index)
/courses                   Courses index
/courses/[guideSlug]       Reader — dynamic route serving all guides
/about                     About (Martin and Kirsty bios)
/contact                   Contact
/privacy                   Privacy statement
/accessibility             Accessibility statement

## Navigation

Main nav and footer nav row: Home · Services · Tools · Courses · About · Contact

Footer also includes: Privacy statement · Accessibility statement · IAAP credential badges

## Services

Three services:
1. Accessibility audit (leads — primary revenue offer)
2. Co-design
3. Capacity building

Note: Accessibility and inclusion service retired from the site.

## Tools

Card-based index at `/tools`. Each card shows: thumbnail image | title | subtitle.
Coming-soon cards are non-clickable and display a "Coming soon" badge.

**Coming soon:**
- Australian Accessibility Guide
  - Image: `/public/images/cpacc-guide.png`
  - Subtitle: A structured reference for Australian accessibility professionals
- Accessibility Testing Guide
  - Image: `/public/images/testing-guide.png`
  - Subtitle: A practical guide to accessibility testing and auditing methods

Note: `/tools/cpacc-quick-guide` route remains live as a placeholder for the AAG.
It is not linked from the Tools index or navigation.

Newsletter sign-up on Tools page only (not site-wide).

## Courses

Card-based index at `/courses`. Newsletter sign-up renders on this page.

**Coming soon:**
- Accessibility Testing and Auditing Course

## Key components

- `NewsletterSignup` — MailerLite embed; included explicitly in Tools and Courses
  pages only. Removed from site-wide layout.
- Tool card component — shared card showing thumbnail | title | subtitle;
  coming-soon cards are non-clickable with badge.

## Brand

**Colours:**
- Teal dark: `#0D5C54`
- Teal mid: `#86ADA9`
- Crimson: `#7A0039`
- Near black: `#2A2A2A`

**Font:** Atkinson Hyperlegible (400, 700)

**Logo files:** `fulllogo.png` (nav), `logomark.png` (favicon)

## Content rules

All copy follows the Learning Makers Style Guide (based on the Australian Government
Style Manual). Key rules:
- Australian English throughout (Macquarie Dictionary, first listed spelling)
- Sentence case for all headings
- No serial comma except where omitting it creates ambiguity
- Spaced en dash ( – ) not em dash
- Numerals for 2 and above; "zero" and "one" in words
- Person-first disability language as default

## CSS conventions

- Global `a` rule is scoped to `p a` and `li a` only — components manage their
  own link and text colours.
- Body base font size is `1rem` in globals.css — pending CSS session to update
  to `1.125rem` as the standard body size.
- Do not add overrides in component CSS to fight inherited link colours —
  fix at the globals level.

## Compliance

- Australian Privacy Act compliant
- GST registered — Stripe Tax handles digital goods compliance
- WCAG compliance by construction — known MailerLite embed limitation documented
  in Accessibility Statement

## Development workflow

Claude Code (via VS Code terminal on Windows/PowerShell) handles layout, components,
new features, and structural changes. Martin handles text edits directly in page
files, image placement in `public/images/`, and Git commits via VS Code Source Control.
Claude Code prompts should be comprehensive and batched where possible.

**WAVE triple zero** is the accessibility baseline on the live site. Never regress from it.

## Reader (Includl)

The Includl Reader is embedded in this repo at `/courses/[guideSlug]/`. It is a
static, database-free guide reader — content lives as HTML files in
`content/[guideSlug]/`, structure and routing are defined in `lib/guide.ts`.

**Current state:** CPACC Quick Guide live at `/courses/cpacc-quick-guide`. Dynamic
route is now the only route — hardcoded `cpacc-quick-guide/` folder has been deleted.
Multi-guide publishing is fully operational.

**Content pipeline:** Word `.docx` → `import-word.js` (in `includl` repo) →
HTML files + `_chapters.json` + `_guide.json` → copied to `content/[guide-slug]/`
and auto-appended to `lib/guide.ts` via `publish-guide.js`. One `reader.css` file
at `app/(reader)/courses/[guideSlug]/reader.css`.

**Known debt:**
- `app/api/export/route.ts` — `getGuide('cpacc-quick-guide')` is hardcoded;
  must be made dynamic before a second guide is published.
- `lib/constants.ts` — `GUIDE_PATH` exported but only used by one marketing page;
  low priority cleanup.

**Do not:** add a database, CMS, or CSS framework to the Reader. Plain CSS only.
WAVE triple zero is the accessibility baseline — never regress from it.
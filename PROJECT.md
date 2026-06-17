# Learning Makers — Project Reference

## The business

Learning Makers is a boutique instructional design and accessibility consultancy operated by Martin Brown and Kirsty Brown from Melbourne, Australia. Martin holds the IAAP CPACC credential and is a professional member of IAAP. The business is on a semi-retirement trajectory — the goal is sustainable, low-overhead income, not scale.

**Target sectors:** government, education and training, and not-for-profit organisations

**Two audiences served from one website:**
- Consulting clients — organisations needing instructional design expertise with an accessibility focus
- Accessibility practitioners — professionals building or certifying their accessibility knowledge

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
| Content | Markdown files / hardcoded in page files |

## Site structure

```
/                          Homepage
/services                  Services (Co-design, Capacity building, Accessibility and inclusion)
/tools                     Tools index (card-based, repurposed from /articles)
/tools/cpacc-quick-guide   CPACC Quick Guide landing page
/courses                   Courses index
/about                     About (Martin and Kirsty bios)
/contact                   Contact
/privacy                   Privacy statement
/accessibility             Accessibility statement
```

## Navigation

Main nav and footer nav row: Home · Services · Tools · Courses · About · Contact

Footer also includes: Privacy statement · Accessibility statement · IAAP credential badges

## Services

Three services (Learning Technology was retired):
1. Co-design
2. Capacity building
3. Accessibility and inclusion

## Tools

Card-based index at `/tools`. Each card shows: thumbnail image | title | subtitle.
Coming-soon cards are non-clickable and display a "Coming soon" badge.

**Published:**
- CPACC Quick Guide — `/tools/cpacc-quick-guide` → internal reader at `/courses/cpacc-quick-guide`
  - Image: `/public/images/cpacc-guide.png`
  - Subtitle: A structured reference covering the full IAAP Body of Knowledge

**Coming soon:**
- Accessibility Testing Guide
  - Image: `/public/images/testing-guide.png`
  - Subtitle: A practical guide to accessibility testing and auditing methods

Newsletter sign-up anchor on Tools page: `/tools#subscribe`
(Previously `/a11y-courses#subscribe` — update any external references, including the CPACC Quick Guide footer)

## Courses

Card-based index at `/courses`.

**Coming soon:**
- Accessibility Testing and Auditing Course

## Key components

- `NewsletterSignup` — MailerLite embed, renders automatically site-wide via layout
- Tool card component — shared card showing thumbnail | title | subtitle; coming-soon cards are non-clickable with badge

## Brand

**Colours:**
- Teal dark: `#0D5C54`
- Teal mid: `#86ADA9`
- Crimson: `#7A0039`
- Near black: `#2A2A2A`

**Font:** Atkinson Hyperlegible (400, 700)

**Logo files:** `fulllogo.png` (nav), `logomark.png` (favicon)

## Content rules

All copy follows the Learning Makers Style Guide (based on the Australian Government Style Manual). Key rules:
- Australian English throughout (Macquarie Dictionary, first listed spelling)
- Sentence case for all headings
- No serial comma except where omitting it creates ambiguity
- Spaced en dash ( – ) not em dash
- Numerals for 2 and above; "zero" and "one" in words
- Person-first disability language as default

## Compliance

- Australian Privacy Act compliant
- GST registered — Stripe Tax handles digital goods compliance
- WCAG compliance by construction — known MailerLite embed limitation documented in Accessibility Statement

## Development workflow

Claude Code (via VS Code terminal on Windows/PowerShell) handles layout, components, new features, and image placement. Martin handles text edits directly in page files, image drops into `public/images/`, and manual Git commits via VS Code Source Control. Claude Code prompts should be comprehensive and batched where possible.

## Reader (Includl)

The Includl Reader is embedded in this repo at `/courses/[guideSlug]/`. It is a static, database-free guide reader — content lives as HTML files in `content/`, structure and routing are defined in `lib/guide.ts`.

**Current state:** CPACC Quick Guide live at `/courses/cpacc-quick-guide`. Multi-guide dynamic route built but not yet active — live site still served from hardcoded `app/(reader)/courses/cpacc-quick-guide/` folder.

**Content pipeline:** Word `.docx` → `import-word.js` (in `includl` repo) → HTML files → copied to `content/[guide-slug]/` here via `publish-guide.js`.

**Key constraint:** Any CSS changes to the Reader must be made in both `reader.css` files until the hardcoded route is removed.

**Do not:** add a database, CMS, or CSS framework to the Reader. Plain CSS only. WAVE triple zero is the accessibility baseline — never regress from it.

# Learning Makers — Backlog

## In progress

_Nothing currently active._

## Reader / Includl technical debt

### ⚠️ Duplicate CPACC reader route
Two parallel route folders exist in `app/(reader)/courses/`:
- `cpacc-quick-guide/` — hardcoded legacy route, currently serving the live site (Next.js prefers this over the dynamic route)
- `[guideSlug]/` — new multi-guide dynamic route, fully built but not yet active

The live site is still running from the hardcoded folder. Before publishing a second guide, the hardcoded route must be removed and the dynamic route must take over.

Do not delete `cpacc-quick-guide/` until the dynamic route is confirmed working end-to-end.

### Two reader.css files
`app/(reader)/courses/cpacc-quick-guide/reader.css` and `app/(reader)/courses/[guideSlug]/reader.css` must be kept in sync until the hardcoded route is removed. Any CSS changes must be made in both files.

## Up next

## Backlog — website

- Review and update sitemap / robots.txt if needed following Articles → Tools restructure

## Backlog — content and product

- Rework and reposition the CPACC Quick Guide as "The Australian L&D Accessibility Guide"
  - Broaden audience: higher education, VET, corporate L&D
  - Add Australian compliance domain: DDA, Disability Standards for Education, RTO Standards, ASQA guidance, AS EN 301 549
  - Work in progress in dedicated Claude project
- Build Accessibility Testing and Auditing Course (first paid course)
  - Build for Martin's own learning first
  - List at `/courses` as coming soon (already in place)
- Pursue IAAP Approved Provider status
  - Deferred pending guide rework completion
  - Live guide is proof of expertise for the application

## Backlog — consulting

- Send client outreach emails to rekindle existing consulting relationships
  - Template drafted — ready to personalise and send
- Upskill Kirsty in accessibility auditing (longer-term)

## Deferred indefinitely

- IAAP Organisational Membership (AUD ~$2,500 pa)
- Downloadable version of the CPACC Quick Guide

## Done

- [x] Homepage — copy, hero image, CTAs
- [x] Services page — 3 services (Co-design, Capacity building, Accessibility and inclusion)
- [x] About page — Martin and Kirsty bios
- [x] Courses page — Accessibility Testing and Auditing Course (coming soon)
- [x] Tools page — repurposed from Articles; CPACC Quick Guide card + coming-soon Accessibility Testing Guide card
- [x] CPACC Quick Guide landing page at `/tools/cpacc-quick-guide`
- [x] Contact page
- [x] Privacy statement
- [x] Accessibility statement (with known MailerLite limitation documented)
- [x] Newsletter sign-up component (MailerLite, site-wide)
- [x] IAAP credential badges in footer
- [x] Full navigation in footer
- [x] Vercel Analytics (replaced Google Analytics)
- [x] DNS and email authentication via Cloudflare
- [x] Stripe donation flow on Tools page
- [x] CPACC Quick Guide live on Moodle (open access, accordion structure, ~10,000 words)
- [x] LinkedIn first post live
- [x] IAAP provider enquiry sent
- [x] x-card cleanup — all `<x-card>` custom elements replaced with `<div class="card card-N">` structure across 65 content files. WAVE triple zero confirmed.
- [x] Deleted one-use `replace-x-cards.js` script from root.
- [x] Multi-guide readiness — search scoping, nav debt, blockquote styling, duplicate title fix. buildNavOrder and SearchClient now guide-scoped. Search index rebuilt (82 entries).
- [x] Replace `/public/articles.png` hero icon with a purpose-built tools icon on the Tools page
- [x] Update the CPACC Quick Guide footer link from `/a11y-courses#subscribe` to `/tools#subscribe`
- [x] Conduct accessibility audit of Tools section (WAVE) following restructure
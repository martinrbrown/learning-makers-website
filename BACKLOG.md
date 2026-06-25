# Learning Makers — Backlog

## In progress

_Nothing currently active._

## Ready — do next session

### Update repo docs to reflect current state
Update `BACKLOG.md` and `PROJECT.md` (this file and the project reference) to reflect
all changes made in the 25 June 2026 session. See roadmap settled decisions for the
full list. (CC session — batch with other pending work.)

### Pass 2 — Homepage hero and metadata
Rewrite homepage hero copy and update page metadata. Both still reference old
positioning (instructional design, not accessibility). Agree copy in Claude.ai
first, then implement via CC.

### Auto-copy images in publish-guide.js
`publish-guide.js` prints a manual image checklist but does not copy files.
Add an automatic copy step: after HTML files are copied, copy all files from
`word-imports/media/` to `learning-makers-website/public/images/[guideSlug]/`.
Print confirmation of each file copied. Skip silently if media folder is empty.
(Tracked in includl backlog — implement there, no changes needed here.)

### Fix hardcoded guide in export route
`app/api/export/route.ts` calls `getGuide('cpacc-quick-guide')` — hardcoded.
Must be made dynamic before a second guide is published.

### CSS baseline session
Set `1.125rem` as body base font size in `styles/globals.css`. Audit for remaining
inherited size inconsistencies across components. Low risk but do as a dedicated
pass to avoid regressions.

### Dead code cleanup — lib/constants.ts
`GUIDE_PATH` is still exported but only consumed by one marketing page link.
Low priority — remove when convenient.

## Backlog — website

- Review and update sitemap / robots.txt if needed following structural changes

## Backlog — content and product

- Draft AAG structure — chapter/section architecture based on LIFTERS +
  expanded WCAG/UD/UDL
- Begin Word rework of CPACC guide toward AAG
- Develop light-touch assessment report template
- Build Accessibility Testing and Auditing Course (first paid course)
  - Build for Martin's own learning first
  - List at `/courses` as coming soon (already in place)
- Pursue IAAP Approved Provider status
  - Deferred pending AAG completion
  - Live guide is proof of expertise for the application

## Backlog — consulting

- Begin warm network mapping for NDIS provider outreach (Victorian NDIS provider dataset)
- Identify first pro bono audit target from Victorian NDIS provider dataset
- Build light-touch assessment workflow and checklist (LIFTERS-aligned)
- Send client outreach emails to rekindle existing consulting relationships
  - Template drafted — ready to personalise and send
- Upskill Kirsty in accessibility auditing (longer-term)

## Deferred indefinitely

- IAAP Organisational Membership (AUD ~$2,500 pa)
- Downloadable version of the CPACC Quick Guide

## Done

- [x] Services page restructured — accessibility audit leads as primary offer;
      co-design and capacity building retained; accessibility and inclusion retired.
      Price and timeframe published (A$1,200 fixed, 2–3 business days, A$150/hr follow-on).
      CTA strip removed.
- [x] Homepage services section updated — "What we do" heading, audit card leads,
      CPACC band removed. Services: Accessibility audit, Co-design, Capacity building.
- [x] Newsletter signup scoped to Tools and Courses pages only —
      removed from site-wide layout in `app/(site)/layout.tsx`.
- [x] Tools page — CPACC Quick Guide card replaced with Australian Accessibility Guide
      (coming soon). Route `/tools/cpacc-quick-guide` left live as placeholder for AAG.
- [x] Global CSS `a` rule scoped to `p a` and `li a` — structural fix so components
      manage their own link colours. Verified clean across all pages.
- [x] Typography standardised — body and service content text set to 1.125rem;
      nav link font size updated to match.
- [x] Dynamic route switchover — hardcoded `cpacc-quick-guide/` folder deleted,
      `[guideSlug]/` is now the only route. Search moved to `[guideSlug]/search/`
      and made fully dynamic. Single `reader.css` — duplicate removed.
      WAVE triple zero confirmed, deployed to production.
- [x] `GUIDE_TITLE` constant removed from `lib/sections.ts`
- [x] Homepage — copy, hero image, CTAs
- [x] About page — Martin and Kirsty bios
- [x] Courses page — Accessibility Testing and Auditing Course (coming soon)
- [x] Tools page — repurposed from Articles; cards structure in place
- [x] Contact page
- [x] Privacy statement
- [x] Accessibility statement (with known MailerLite limitation documented)
- [x] IAAP credential badges in footer
- [x] Full navigation in footer
- [x] Vercel Analytics (replaced Google Analytics)
- [x] DNS and email authentication via Cloudflare
- [x] Stripe donation flow on Tools page
- [x] CPACC Quick Guide live on Moodle (open access, accordion structure, ~10,000 words)
- [x] LinkedIn first post live
- [x] IAAP provider enquiry sent
- [x] x-card cleanup — all `<x-card>` custom elements replaced with
      `<div class="card card-N">` structure across 65 content files.
      WAVE triple zero confirmed.
- [x] Deleted one-use `replace-x-cards.js` script from root.
- [x] Multi-guide readiness — search scoping, nav debt, blockquote styling,
      duplicate title fix. buildNavOrder and SearchClient now guide-scoped.
      Search index rebuilt (82 entries).
- [x] Replace `/public/articles.png` hero icon with purpose-built tools icon
- [x] Update CPACC Quick Guide footer link to `/tools#subscribe`
- [x] Conduct accessibility audit of Tools section (WAVE) following restructure
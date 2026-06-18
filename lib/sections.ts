import { load } from 'cheerio';
import type { Chapter } from './guide';

interface NavItem {
  href: string;
  title: string;
}

// Remove Moodle title artifacts: <h1>, <h2>, back-link <p>, empty <p>
export function stripMoodleArtifacts(html: string): string {
  return html
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')
    .replace(/<h2[^>]*>[\s\S]*?<\/h2>/gi, '')
    .replace(/<p>\s*<a[^>]*?class="lm-back-link"[^>]*>[\s\S]*?<\/a>\s*<\/p>/gi, '')
    .replace(/<p>\s*<\/p>/g, '')
    .trim();
}

// Build the flat sequential navigation order for all depths, sorted by order field
export function buildNavOrder(chapters: Chapter[], guideSlug: string): NavItem[] {
  const guide = chapters.filter(c => c.guideSlug === guideSlug);
  const items: NavItem[] = [];
  const roots = guide.filter(c => c.depth === 0).sort((a, b) => a.order - b.order);
  for (const root of roots) {
    items.push({ href: `/courses/${guideSlug}/${root.slug}`, title: root.title });
    const topics = guide
      .filter(c => c.depth === 1 && c.parentSlug === root.slug)
      .sort((a, b) => a.order - b.order);
    for (const topic of topics) {
      items.push({ href: `/courses/${guideSlug}/${topic.slug}`, title: topic.title });
      const sections = guide
        .filter(c => c.depth === 2 && c.parentSlug === topic.slug)
        .sort((a, b) => a.order - b.order);
      for (const section of sections) {
        items.push({ href: `/courses/${guideSlug}/${topic.slug}/${section.slug}`, title: section.title });
      }
    }
  }
  return items;
}

// Computed once at module load (server-side only)
export const GUIDE_TITLE = 'CPACC Quick Guide';


const CARD_DEFAULTS: Record<string, string> = {
  '1': 'Example',
  '2': 'Key point',
  '3': 'Insight',
  '4': 'Tip',
};

// Append visible "(opens in new window)" to every target="_blank" link.
// Removes aria-label so the accessible name matches the visible text exactly.
export function labelExternalLinks(html: string): string {
  if (!html.includes('target="_blank"')) return html;
  const $ = load(html);
  $('a[target="_blank"]').each((_, el) => {
    const $el = $(el);
    $el.removeAttr('aria-label');
    $el.append('<span class="new-window-label"> (opens in new window)</span>');
  });
  return $('body').html() ?? html;
}

// Transform <x-card variant="N" header="..."> elements into accessible card markup.
// Must run server-side so no <x-card> elements reach the browser DOM.
export function transformCards(html: string): string {
  if (!html.includes('<x-card')) return html;
  const $ = load(html);
  $('x-card').each((_, el) => {
    const $el = $(el);
    const variant = $el.attr('variant') ?? '1';
    const header = $el.attr('header') ?? CARD_DEFAULTS[variant] ?? 'Note';
    const inner = $el.html() ?? '';
    $el.replaceWith(
      `<div role="note" class="card card-${variant}"><p class="card-header">${header}</p><div class="card-body">${inner}</div></div>`,
    );
  });
  return $('body').html() ?? html;
}

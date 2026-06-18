import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { chapters, getChapter, getSection, getGuide } from '@/lib/guide';
import BodyContent from '../../BodyContent';
import {
  buildNavOrder,
  stripMoodleArtifacts,
  labelExternalLinks,
  transformCards,
} from '@/lib/sections';

export const dynamicParams = false;

export function generateStaticParams() {
  return chapters
    .filter(c => c.depth >= 1 && c.parentSlug)
    .map(c => ({ guideSlug: c.guideSlug, slug: c.parentSlug!, subSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guideSlug: string; slug: string; subSlug: string }>;
}): Promise<Metadata> {
  const { guideSlug, slug, subSlug } = await params;
  const guideTitle = getGuide(guideSlug)?.title ?? guideSlug;
  const chapter = getChapter(slug, guideSlug);
  const section = getSection(slug, subSlug, guideSlug);
  return {
    title: section && chapter
      ? `${section.title} — ${chapter.title} — ${guideTitle}`
      : guideTitle,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ guideSlug: string; slug: string; subSlug: string }>;
}) {
  const { guideSlug, slug, subSlug } = await params;
  const chapter = getChapter(slug, guideSlug);
  if (!chapter) notFound();

  const section = getSection(slug, subSlug, guideSlug);
  if (!section) notFound();

  const contentPath = path.join(process.cwd(), 'content', `${section.file}.html`);
  const rawHtml = fs.readFileSync(contentPath, 'utf-8');

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

  bodyContent = transformCards(bodyContent);
  const promotedHtml = labelExternalLinks(stripMoodleArtifacts(bodyContent));

  const navOrder = buildNavOrder(chapters, guideSlug);
  const navHref = `/courses/${guideSlug}/${slug}/${subSlug}`;
  const idx = navOrder.findIndex(n => n.href === navHref);
  const prev = idx > 0 ? navOrder[idx - 1] : null;
  const next = idx < navOrder.length - 1 ? navOrder[idx + 1] : null;

  const parentGroup = chapter.parentSlug ? getChapter(chapter.parentSlug, guideSlug) : null;

  return (
    <article>
      <nav className="guide-breadcrumb" aria-label="Breadcrumb">
        <ol>
          {parentGroup && (
            <li>
              <Link href={`/courses/${guideSlug}/${parentGroup.slug}`}>{parentGroup.title}</Link>
            </li>
          )}
          <li>
            <Link href={`/courses/${guideSlug}/${slug}`}>{chapter.title}</Link>
          </li>
          <li aria-current="page">{section.title}</li>
        </ol>
      </nav>

      <h2 className="guide-chapter-title">{section.title}</h2>

      <BodyContent html={promotedHtml} />

      <nav aria-label="Chapter navigation" className="chapter-nav">
        {prev ? (
          <Link href={prev.href} rel="prev">← {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} rel="next">{next.title} →</Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

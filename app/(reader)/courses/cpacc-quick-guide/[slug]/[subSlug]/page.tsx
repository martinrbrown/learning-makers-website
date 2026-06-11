import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { chapters, getChapter, getSection } from '@/lib/guide';
import {
  buildNavOrder,
  stripMoodleArtifacts,
  labelExternalLinks,
  transformCards,
  GUIDE_TITLE,
} from '@/lib/sections';

export const dynamicParams = false;

const navOrder = buildNavOrder(chapters);

export function generateStaticParams() {
  return chapters
    .filter(c => c.depth === 2)
    .map(c => ({ slug: c.parentSlug!, subSlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const chapter = getChapter(slug);
  const section = getSection(slug, subSlug);
  return {
    title: section && chapter
      ? `${section.title} — ${chapter.title} — ${GUIDE_TITLE}`
      : GUIDE_TITLE,
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const section = getSection(slug, subSlug);
  if (!section) notFound();

  const contentPath = path.join(process.cwd(), 'content', `${section.file}.html`);
  const rawHtml = fs.readFileSync(contentPath, 'utf-8');

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

  // Rewrite relative image src using parent chapter's folder
  bodyContent = bodyContent.replace(
    /src="(?!https?:\/\/)([^"]+)"/g,
    `src="/guide-content/${chapter.folder}/$1"`,
  );

  bodyContent = transformCards(bodyContent);
  const promotedHtml = labelExternalLinks(stripMoodleArtifacts(bodyContent));

  const navHref = `/courses/cpacc-quick-guide/${slug}/${subSlug}`;
  const idx = navOrder.findIndex(n => n.href === navHref);
  const prev = idx > 0 ? navOrder[idx - 1] : null;
  const next = idx < navOrder.length - 1 ? navOrder[idx + 1] : null;

  const parentGroup = chapter.parentSlug ? getChapter(chapter.parentSlug) : null;

  return (
    <article>
      <nav className="guide-breadcrumb" aria-label="Breadcrumb">
        <ol>
          {parentGroup && (
            <li>
              <Link href={`/courses/cpacc-quick-guide/${parentGroup.slug}`}>{parentGroup.title}</Link>
            </li>
          )}
          <li>
            <Link href={`/courses/cpacc-quick-guide/${slug}`}>{chapter.title}</Link>
          </li>
          <li aria-current="page">{section.title}</li>
        </ol>
      </nav>

      <h2 className="guide-chapter-title">{section.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: promotedHtml }} />

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

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { chapters, getChapter } from '@/lib/guide';
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
  return chapters.filter(c => c.depth < 2).map(c => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter ? `${chapter.title} — ${GUIDE_TITLE}` : GUIDE_TITLE };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const contentPath = path.join(process.cwd(), 'content', `${chapter.file}.html`);
  const rawHtml = fs.readFileSync(contentPath, 'utf-8');

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

  // Extract the SVG icon from the Moodle H2 before it is stripped
  const iconMatch = bodyContent.match(/<h2[^>]*>[\s\S]*?<img[^>]+src="([^"]+\.svg)"[^>]*>/i);
  const iconSrc = iconMatch ? `/icons/${iconMatch[1]}` : null;

  // Rewrite relative image src to served path
  bodyContent = bodyContent.replace(
    /src="(?!https?:\/\/)([^"]+)"/g,
    `src="/guide-content/${chapter.folder}/$1"`,
  );

  bodyContent = transformCards(bodyContent);
  const intro = labelExternalLinks(stripMoodleArtifacts(bodyContent));

  // Depth-2 sections for this topic page
  const sections = chapters
    .filter(c => c.depth === 2 && c.parentSlug === slug)
    .sort((a, b) => a.order - b.order);

  // Depth-1 children for group pages
  const childChapters = chapters
    .filter(c => c.depth === 1 && c.parentSlug === slug)
    .sort((a, b) => a.order - b.order);

  const navHref = `/courses/cpacc-quick-guide/${slug}`;
  const idx = navOrder.findIndex(n => n.href === navHref);
  const prev = idx > 0 ? navOrder[idx - 1] : null;
  const next = idx < navOrder.length - 1 ? navOrder[idx + 1] : null;

  const parentGroup = chapter.parentSlug ? getChapter(chapter.parentSlug) : null;

  return (
    <article>
      {chapter.depth === 1 && (
        <nav className="guide-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {parentGroup && (
              <li>
                <Link href={`/courses/cpacc-quick-guide/${parentGroup.slug}`}>{parentGroup.title}</Link>
              </li>
            )}
            <li aria-current="page">{chapter.title}</li>
          </ol>
        </nav>
      )}

      <h2 className="guide-chapter-title">
        {iconSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={iconSrc} alt="" aria-hidden="true" className="chapter-icon" />
        )}
        {chapter.title}
      </h2>

      {intro && <div dangerouslySetInnerHTML={{ __html: intro }} />}

      {childChapters.length > 0 && (
        <ul className="section-index">
          {childChapters.map(c => (
            <li key={c.slug}>
              <Link href={`/courses/cpacc-quick-guide/${c.slug}`}>{c.title}</Link>
            </li>
          ))}
        </ul>
      )}

      {sections.length > 0 && (
        <ul className="section-index">
          {sections.map(s => (
            <li key={s.file}>
              <Link href={`/courses/cpacc-quick-guide/${slug}/${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      )}

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

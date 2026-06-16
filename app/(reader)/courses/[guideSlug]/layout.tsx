import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { chapters, getGuide } from '@/lib/guide';
import GuideReader from './GuideReader';
import ReaderFooter from './ReaderFooter';
import './reader.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guideSlug: string }>;
}): Promise<Metadata> {
  const { guideSlug } = await params;
  const guide = getGuide(guideSlug);
  return {
    title: guide?.title ?? guideSlug,
    description: 'A quick reference guide for the IAAP CPACC Body of Knowledge.',
  };
}

export default async function GuideLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ guideSlug: string }>;
}) {
  const { guideSlug } = await params;
  const guide = getGuide(guideSlug);
  if (!guide) notFound();

  const guideChapters = chapters.filter(c => c.guideSlug === guideSlug);
  const firstPageHref = `/courses/${guideSlug}/${guide.firstTopicSlug}`;

  return (
    <>
      <GuideReader
        chapters={guideChapters}
        guideSlug={guideSlug}
        guidePath={`/courses/${guideSlug}`}
        firstPageHref={firstPageHref}
      >
        {children}
      </GuideReader>
      <ReaderFooter />
    </>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { chapters } from '@/lib/guide';
import { GUIDE_TITLE } from '@/lib/sections';
import GuideReader from './GuideReader';
import ReaderFooter from './ReaderFooter';
import './reader.css';

export const metadata: Metadata = {
  title: 'CPACC Quick Guide',
  description: 'A quick reference guide for the IAAP CPACC Body of Knowledge.',
};

// First page is the first depth-0 chapter without children (About / home)
const firstPageSlug =
  chapters.find(c => !(c.depth === 0 && chapters.some(p => p.parentSlug === c.slug)))?.slug ??
  'about';

export default function GuideLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GuideReader
        chapters={chapters}
        guideTitle={GUIDE_TITLE}
        firstPageHref={`/courses/cpacc-quick-guide/${firstPageSlug}`}
      >
        {children}
      </GuideReader>
      <ReaderFooter />
    </>
  );
}

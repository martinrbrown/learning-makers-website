'use client'

import { useRef, Suspense } from 'react'
import SearchHighlight from '@/components/SearchHighlight'

export default function BodyContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <div ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />
      <Suspense fallback={null}>
        <SearchHighlight containerRef={contentRef as React.RefObject<HTMLElement | null>} />
      </Suspense>
    </>
  )
}

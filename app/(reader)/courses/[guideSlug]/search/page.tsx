import type { Metadata } from 'next'
import { getGuide } from '@/lib/guide'
import SearchClient from './SearchClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guideSlug: string }>
}): Promise<Metadata> {
  const { guideSlug } = await params
  const guideTitle = getGuide(guideSlug)?.title ?? guideSlug
  return { title: `Search — ${guideTitle}` }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const initialQuery = q?.trim() ?? ''

  return (
    <article className="search-page">
      <h1>Search</h1>
      <SearchClient initialQuery={initialQuery} />
    </article>
  )
}

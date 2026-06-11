import type { Metadata } from 'next'
import { GUIDE_TITLE } from '@/lib/sections'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: `Search — ${GUIDE_TITLE}`,
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

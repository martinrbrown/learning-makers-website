'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { GUIDE_PATH } from '@/lib/constants'

interface SearchEntry {
  slug: string
  title: string
  url: string
  breadcrumb: string
  body: string
}

interface SearchResult {
  entry: SearchEntry
  score: number
  excerpt: string
}

function parseQuery(raw: string): { terms: string[]; phrase: string | null } {
  const trimmed = raw.trim()
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 2) {
    return { terms: [], phrase: trimmed.slice(1, -1).toLowerCase() }
  }
  return { terms: trimmed.toLowerCase().split(/\s+/).filter(Boolean), phrase: null }
}

function scoreEntry(
  entry: SearchEntry,
  terms: string[],
  phrase: string | null,
): number {
  const titleLower = entry.title.toLowerCase()
  const bodyLower = entry.body.toLowerCase()
  let score = 0
  if (phrase) {
    if (titleLower.includes(phrase)) score += 20
    if (bodyLower.includes(phrase)) score += 5
  } else {
    for (const term of terms) {
      if (titleLower.includes(term)) score += 10
      if (bodyLower.includes(term)) score += 1
    }
  }
  return score
}

function buildExcerpt(
  body: string,
  terms: string[],
  phrase: string | null,
  maxLen = 150,
): string {
  const bodyLower = body.toLowerCase()
  const searchTerms = phrase ? [phrase] : terms

  let anchorPos = -1
  for (const term of searchTerms) {
    const p = bodyLower.indexOf(term)
    if (p !== -1 && (anchorPos === -1 || p < anchorPos)) anchorPos = p
  }

  const start = anchorPos === -1 ? 0 : Math.max(0, anchorPos - 60)
  const end = Math.min(body.length, start + maxLen)
  const raw = body.slice(start, end)

  // HTML-escape the plain-text slice before injecting <mark>
  const escaped = raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  let result = escaped
  for (const term of searchTerms) {
    const escapedTerm = term
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    result = result.replace(
      new RegExp(escapedTerm, 'gi'),
      match => `<mark>${match}</mark>`,
    )
  }

  return (start > 0 ? '…' : '') + result + (end < body.length ? '…' : '')
}

function runSearch(
  rawQuery: string,
  index: SearchEntry[],
): SearchResult[] {
  const { terms, phrase } = parseQuery(rawQuery)
  if (!terms.length && !phrase) return []

  return index
    .map(entry => ({ entry, score: scoreEntry(entry, terms, phrase), excerpt: '' }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => ({ ...r, excerpt: buildExcerpt(r.entry.body, terms, phrase) }))
}

export default function SearchClient({ initialQuery }: { initialQuery: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlQuery = searchParams.get('q')?.trim() ?? ''
  const [query, setQuery] = useState(initialQuery)
  const [index, setIndex] = useState<SearchEntry[] | null>(null)
  const [results, setResults] = useState<SearchResult[] | null>(null)

  useEffect(() => {
    fetch('/search-index.json')
      .then(r => r.json())
      .then((data: SearchEntry[]) => setIndex(data))
      .catch(() => setIndex([]))
  }, [])

  // Re-run search whenever the URL's q param changes (covers both initial load
  // and header-form navigation while already on this page)
  useEffect(() => {
    if (index === null) return
    if (!urlQuery) { setResults(null); return }
    setQuery(urlQuery)
    setResults(runSearch(urlQuery, index))
  }, [urlQuery, index])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    router.replace(`${GUIDE_PATH}/search?q=${encodeURIComponent(q)}`, { scroll: false })
  }

  return (
    <>
      <form role="search" className="search-form" onSubmit={handleSubmit}>
        <label htmlFor="search-input" className="search-label">
          Search the guide
        </label>
        <div className="search-input-row">
          <input
            id="search-input"
            type="search"
            name="q"
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Enter search terms…"
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <p className="search-hint">Wrap a phrase in "double quotes" for exact match.</p>
      </form>

      {results !== null && (
        <section aria-label="Search results" className="search-results-section">
          {results.length === 0 ? (
            <p className="search-no-results">
              No results for <strong>{query}</strong>.
            </p>
          ) : (
            <>
              <p className="search-result-count">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              <ul className="search-results">
                {results.map(r => (
                  <li key={`${r.entry.url}-${r.entry.slug}`} className="search-result">
                    <Link href={`${r.entry.url}?q=${encodeURIComponent(query)}`} className="search-result-title">
                      {r.entry.title}
                    </Link>
                    {r.entry.breadcrumb && (
                      <p className="search-result-breadcrumb">{r.entry.breadcrumb}</p>
                    )}
                    <p
                      className="search-result-excerpt"
                      dangerouslySetInnerHTML={{ __html: r.excerpt }}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}
    </>
  )
}

import fs from 'fs'
import path from 'path'
import { chapters } from '../lib/guide'
import { stripMoodleArtifacts } from '../lib/sections'
import { GUIDE_PATH } from '../lib/constants'

interface SearchEntry {
  slug: string
  title: string
  url: string
  breadcrumb: string
  body: string
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

function buildUrl(chapter: typeof chapters[number]): string {
  if (chapter.depth === 2) {
    return `${GUIDE_PATH}/${chapter.parentSlug}/${chapter.slug}`
  }
  return `${GUIDE_PATH}/${chapter.slug}`
}

function buildBreadcrumb(chapter: typeof chapters[number]): string {
  if (chapter.depth === 0) return ''
  if (chapter.depth === 1) {
    const parent = chapters.find(c => c.slug === chapter.parentSlug)
    return parent?.title ?? ''
  }
  // depth 2
  const parent = chapters.find(c => c.slug === chapter.parentSlug)
  const grandparent = parent ? chapters.find(c => c.slug === parent.parentSlug) : null
  const parts: string[] = []
  if (grandparent) parts.push(grandparent.title)
  if (parent) parts.push(parent.title)
  return parts.join(' › ')
}

const entries: SearchEntry[] = []

for (const chapter of chapters) {
  const filePath = path.join(process.cwd(), 'content', `${chapter.file}.html`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : raw
  const plain = stripTags(stripMoodleArtifacts(body))

  entries.push({
    slug: chapter.slug,
    title: chapter.title,
    url: buildUrl(chapter),
    breadcrumb: buildBreadcrumb(chapter),
    body: plain,
  })
}

const outPath = path.join(process.cwd(), 'public', 'search-index.json')
fs.writeFileSync(outPath, JSON.stringify(entries), 'utf-8')
console.log(`✓ Search index: ${entries.length} entries → ${outPath}`)

import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { chapters } from '@/lib/guide'
import type { Chapter } from '@/lib/guide'
import {
  stripMoodleArtifacts,
  transformCards,
  labelExternalLinks,
  GUIDE_TITLE,
} from '@/lib/sections'

function buildReadingOrder(chaps: Chapter[]): Chapter[] {
  const result: Chapter[] = []
  const roots = chaps.filter(c => c.depth === 0).sort((a, b) => a.order - b.order)
  for (const root of roots) {
    result.push(root)
    const topics = chaps
      .filter(c => c.depth === 1 && c.parentSlug === root.slug)
      .sort((a, b) => a.order - b.order)
    for (const topic of topics) {
      result.push(topic)
      const sections = chaps
        .filter(c => c.depth === 2 && c.parentSlug === topic.slug)
        .sort((a, b) => a.order - b.order)
      result.push(...sections)
    }
  }
  return result
}

function readContent(chapter: Chapter): string {
  const filePath = path.join(process.cwd(), 'content', `${chapter.file}.html`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : raw
  // Mirror the exact transformation order used in the reader pages
  let html = transformCards(body)
  html = labelExternalLinks(stripMoodleArtifacts(html))
  return html.trim()
}

// Shift all heading levels so the first heading in the content sits one step
// below the section heading (sectionLevel). Single-pass regex avoids double-shifting.
function adjustHeadings(html: string, sectionLevel: number): string {
  const firstMatch = html.match(/<h([1-6])[\s>]/i)
  if (!firstMatch) return html
  const shift = (sectionLevel + 1) - parseInt(firstMatch[1])
  if (shift === 0) return html
  return html.replace(/<(\/?)h([1-6])([\s>])/gi, (_, slash, level, after) => {
    const newLevel = Math.max(1, Math.min(6, parseInt(level) + shift))
    return `<${slash}h${newLevel}${after}`
  })
}

export async function GET() {
  const ordered = buildReadingOrder(chapters)
  const sections: string[] = []

  for (const chapter of ordered) {
    const sectionLevel = chapter.depth === 2 ? 3 : 2
    const tag = `h${sectionLevel}`
    const content = readContent(chapter)
    const adjusted = adjustHeadings(content, sectionLevel)
    sections.push(`<section>\n<${tag}>${chapter.title}</${tag}>\n${adjusted}\n</section>`)
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${GUIDE_TITLE}</title>
  <style>
    /* minimal print-friendly styles */
    body { font-family: Georgia, serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; color: #1a1a1a; }
    h1, h2, h3, h4 { font-family: Arial, sans-serif; }
    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    h2 { font-size: 1.5rem; margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1rem; }
    h3 { font-size: 1.2rem; margin-top: 1.5rem; }
    p { line-height: 1.6; }
    a { color: #0d5c54; }
  </style>
</head>
<body>
  <h1>${GUIDE_TITLE}</h1>
  ${sections.join('\n')}
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Content-Disposition': 'attachment; filename="manual-export.html"',
    },
  })
}

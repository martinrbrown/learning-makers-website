'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

interface Props {
  containerRef: React.RefObject<HTMLElement | null>
}

function parseQuery(q: string): string[] {
  const trimmed = q.trim()
  if (!trimmed) return []
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length > 2) {
    const phrase = trimmed.slice(1, -1).trim()
    return phrase ? [phrase] : []
  }
  return trimmed.split(/\s+/).filter(Boolean)
}

export default function SearchHighlight({ containerRef }: Props) {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')?.trim() ?? ''

  useEffect(() => {
    const container = containerRef.current
    if (!container || !q) return

    const terms = parseQuery(q)
    if (!terms.length) return

    const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    const pattern = new RegExp(`(${escaped.join('|')})`, 'gi')

    // Collect all text nodes before touching the DOM — modifying during walk is unsafe
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT)
    const textNodes: Text[] = []
    let node: Node | null
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text)
    }

    const injectedMarks: HTMLElement[] = []

    for (const textNode of textNodes) {
      // Don't double-highlight inside an existing <mark>
      if (textNode.parentElement?.closest('mark')) continue

      const text = textNode.nodeValue ?? ''
      if (!text) continue

      pattern.lastIndex = 0
      if (!pattern.test(text)) continue
      pattern.lastIndex = 0

      const parent = textNode.parentNode
      if (!parent) continue

      const frag = document.createDocumentFragment()
      let last = 0
      let m: RegExpExecArray | null

      while ((m = pattern.exec(text)) !== null) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)))
        const mark = document.createElement('mark')
        mark.textContent = m[0]
        injectedMarks.push(mark)
        frag.appendChild(mark)
        last = m.index + m[0].length
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)))

      parent.replaceChild(frag, textNode)
    }

    return () => {
      for (const mark of injectedMarks) {
        const parent = mark.parentNode
        if (!parent) continue
        parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark)
        parent.normalize()
      }
    }
  }, [q, containerRef])

  return null
}

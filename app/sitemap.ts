import type { MetadataRoute } from 'next'
import { chapters } from '@/lib/guide'

const BASE_URL = 'https://learningmakers.com'
const TODAY = new Date('2026-06-11')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: TODAY, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/courses/cpacc-quick-guide`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/courses`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools/cpacc-companion-guide`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/accessibility`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const guidePages: MetadataRoute.Sitemap = chapters.map((chapter) => {
    const url = chapter.depth === 2
      ? `${BASE_URL}/courses/cpacc-quick-guide/${chapter.parentSlug}/${chapter.slug}`
      : `${BASE_URL}/courses/cpacc-quick-guide/${chapter.slug}`
    return {
      url,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: chapter.depth === 0 ? 0.8 : chapter.depth === 1 ? 0.7 : 0.6,
    }
  })

  return [...staticPages, ...guidePages]
}

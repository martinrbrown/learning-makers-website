import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Practical writing on accessibility, instructional design and inclusive learning.',
}

const articles = [
  {
    title: 'Why I think every instructional designer should consider CPACC',
    author: 'Martin Brown',
    date: '3 June 2026',
    href: '/articles/why-every-instructional-designer-should-consider-cpacc',
  },
]

export default function ArticlesPage() {
  return (
    <>
      <HeroSection
        h1="Articles"
        subheading="Practical writing on accessibility, instructional design and inclusive learning."
      />

      <section className={styles.articles} aria-label="Articles list">
        <div className="container">
          <ul className={styles.articleList} role="list">
            {articles.map((article) => (
              <li key={article.href}>
                <article className={styles.card}>
                  <h2 className={styles.cardTitle}>
                    <Link href={article.href}>{article.title}</Link>
                  </h2>
                  <p className={styles.cardMeta}>
                    {article.author} · {article.date}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

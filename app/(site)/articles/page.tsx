import type { Metadata } from 'next'
import Image from 'next/image'
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
    image: '/cpacc-article-image-800x800.jpg',
  },
]

export default function ArticlesPage() {
  return (
    <>
      <HeroSection
        h1="Articles"
        subheading="Practical writing on accessibility, instructional design and inclusive learning."
        imageSrc="/articles.png"
        imageAlt=""
        imageSize="icon"
      />

      <section className={styles.articles} aria-label="Articles list">
        <div className="container">
          <ul className={styles.articleList} role="list">
            {articles.map((article) => (
              <li key={article.href}>
                <article className={styles.card}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>
                      <Link href={article.href} className={styles.cardTitleLink}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className={styles.cardMeta}>
                      {article.author} · {article.date}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

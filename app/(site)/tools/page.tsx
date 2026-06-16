import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Practical, openly accessible resources to support your accessibility work. No login required.',
}

const tools = [
  {
    title: 'CPACC Companion Guide',
    subtitle: 'A structured reference covering the full IAAP Body of Knowledge',
    href: '/tools/cpacc-companion-guide',
    image: '/images/cpacc-guide.png',
    comingSoon: false,
  },
  {
    title: 'Accessibility Testing Guide',
    subtitle: 'Coming soon',
    image: '/images/testing-guide.png',
    comingSoon: true,
  },
]

export default function ToolsPage() {
  return (
    <>
      <HeroSection
        h1="Tools for accessibility practitioners"
        subheading="Practical, openly accessible resources to support your accessibility work. No login required."
        imageSrc="/tools.png"
        imageAlt=""
        imageSize="icon"
      />

      <section className={styles.tools} aria-label="Tools list">
        <div className="container">
          <ul className={styles.toolList} role="list">
            {tools.map((tool) => (
              <li key={tool.title}>
                <article className={`${styles.card} ${tool.comingSoon ? styles.cardDisabled : ''}`}>
                  {tool.comingSoon && (
                    <span className={styles.comingSoonBadge}>Coming soon</span>
                  )}
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={tool.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>
                      {tool.comingSoon ? (
                        tool.title
                      ) : (
                        <Link href={tool.href} className={styles.cardTitleLink}>
                          {tool.title}
                        </Link>
                      )}
                    </h2>
                    <p className={styles.cardSubtitle}>{tool.subtitle}</p>
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

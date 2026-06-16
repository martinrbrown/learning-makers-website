import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackToTop from '@/components/BackToTop'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CPACC Companion Guide',
  description:
    'The CPACC Companion Guide covers the full IAAP Body of Knowledge in plain language — a free resource for CPACC candidates and anyone building foundational accessibility knowledge.',
}

export default function CPACCCompanionGuidePage() {
  return (
    <article>
      <div className={styles.pageHero}>
        <div className="container">
          <div className={styles.pageHeroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Tool</p>
              <h1 className={styles.title}>CPACC Companion Guide</h1>
            </div>
            <Image
              src="/images/cpacc-guide.png"
              alt=""
              width={320}
              height={320}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.prose}>

            <p>
              The CPACC Companion Guide covers the full IAAP Body of Knowledge in plain language.
              It&rsquo;s designed for candidates preparing for the CPACC exam — but it&rsquo;s also
              a useful reference for anyone who wants a structured introduction to accessibility
              concepts, international standards and disability models.
            </p>

            <h2>What the guide covers</h2>
            <ul>
              <li>Theoretical models of disability</li>
              <li>International accessibility standards and legislation</li>
              <li>Accessibility and universal design principles</li>
              <li>The built environment, ICT, and communication and information</li>
              <li>Management and organisational strategies</li>
            </ul>

            <h2>Who it&rsquo;s for</h2>
            <p>
              The guide is written for instructional designers, L&amp;D professionals and educators
              who are either preparing for the CPACC exam or building their foundational
              accessibility knowledge.
            </p>

            <div className={styles.cta}>
              <Link href="/courses/cpacc-quick-guide" className="btn">
                Open the CPACC Companion Guide
              </Link>
              <p className={styles.ctaNote}>Free and openly accessible — no account required.</p>
            </div>

          </div>
        </div>
      </div>

      <BackToTop />
    </article>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learning Makers is a small consultancy focused on one key idea: accessibility should be central to learning design, not an afterthought.',
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        h1="About Learning Makers"
        subheading="A small consultancy focused on one key idea: accessibility should be central to learning design, not an afterthought."
        imageSrc="/about.png"
        imageAlt=""
        imageSize="icon"
      />

      <section className={styles.intro} aria-label="About Learning Makers">
        <div className="container">
          <div className={styles.introContent}>
            <p>
              Martin brings the technical depth. Kirsty brings the rigour and quality discipline.
              Both share a genuine interest in diversity, equity and inclusion. Learning Makers works
              with government, not-for-profit, and community organisations to create inclusive
              learning.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team} aria-label="The team">
        <div className="container">
          <div className={styles.bios}>

            <article aria-labelledby="martin-heading">
              <div className={styles.photoWrap}>
                <Image
                  src="/martin.png"
                  alt="Martin Brown"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.photo}
                  priority
                />
              </div>
              <h2 id="martin-heading" className={styles.bioName}>
                Martin Brown
              </h2>
              <p className={styles.role}>Instructional Designer &amp; Accessibility Specialist</p>
              <div className={styles.bioBody}>
                <p>
                  Martin has spent decades building digital learning for government, not-for-profit,
                  and community organisations. Accessibility has been at the centre of that work. He
                  sees accessibility not as a compliance requirement but as a design discipline.
                </p>
                <p>
                  He is a Certified Professional in Accessibility Core Competencies (CPACC) and a
                  member of the International Association of Accessibility Professionals (IAAP). This
                  expertise forms the foundation of everything Learning Makers builds and teaches.
                </p>
              </div>
            </article>

            <article aria-labelledby="kirsty-heading">
              <div className={styles.photoWrap}>
                <Image
                  src="/kirsty.jpg"
                  alt="Kirsty Brown"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.photo}
                />
              </div>
              <h2 id="kirsty-heading" className={styles.bioName}>
                Kirsty Brown
              </h2>
              <p className={styles.role}>
                Teaching &amp; Learning Quality Assurance Specialist
              </p>
              <div className={styles.bioBody}>
                <p>
                  Kirsty holds a Master of Education (Adult Education) and has built her career in
                  vocational education. She handles compliance, leads curriculum development, and
                  gets organisations ready for registration.
                </p>
                <p>
                  At Learning Makers, she brings that rigour to every project with sound
                  instructional design, quality assessment, and the discipline that keeps the work
                  grounded.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className={styles.ctaStrip} aria-labelledby="about-cta-heading">
        <div className="container">
          <h2 id="about-cta-heading" className={styles.ctaHeading}>
            Ready to work together?
          </h2>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Structured learning programs for accessibility practitioners. Our first course is in development.',
}

export default function CoursesPage() {
  return (
    <>
      <HeroSection
        h1="Courses"
        subheading="Structured learning programs for accessibility practitioners. Our first course is in development — register your interest below to be notified at launch."
        imageSrc="/courses.png"
        imageAlt=""
        imageSize="icon"
      />

      <section id="support" className={styles.comingSoon} aria-labelledby="course-heading">
        <div className="container">
          <p className={styles.comingSoonBadge}>Coming soon</p>
          <h2 id="course-heading" className={styles.courseHeading}>
            Accessibility Testing and Auditing Course
          </h2>
          <p className={styles.body}>
            A practical course for L&amp;D professionals who want to test and audit learning
            experiences for accessibility. Learn how to identify issues, interpret standards and make
            informed decisions about remediation.
          </p>
        </div>
      </section>
      <NewsletterSignup />
    </>
  )
}

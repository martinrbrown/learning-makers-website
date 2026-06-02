import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Free accessibility resources and upcoming courses from Learning Makers — including the free Accessibility Quick Guide for CPACC exam preparation.',
}

export default function CoursesPage() {
  return (
    <>
      <HeroSection
        h1="Courses"
        subheading="Resources and courses for accessibility practitioners and learning professionals."
        imageSrc="/courses.png"
        imageAlt=""
      />

      <section className={styles.freeResource} aria-labelledby="guide-heading">
        <div className="container">
          <p className={styles.eyebrow}>Free resource</p>
          <h2 id="guide-heading" className={styles.sectionHeading}>
            Preparing for the CPACC exam?
          </h2>
          <p className={styles.body}>
            Our free Accessibility Quick Guide is now available. Use it as a companion to the IAAP
            CPACC Body of Knowledge when preparing for your exam, or as a quick reference to refresh
            your accessibility knowledge as you apply it to your work.
          </p>
          <Link
            href="https://courses.learningmakers.com/mod/book/view.php?id=929"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Access the guide
          </Link>
        </div>
      </section>

      <section id="support" className={styles.comingSoon} aria-labelledby="course-heading">
        <div className="container">
          <p className={styles.comingSoonBadge}>Coming soon</p>
          <h2 id="course-heading" className={styles.courseHeading}>
            CPACC Exam Preparation Course
          </h2>
          <p className={styles.body}>
            A full exam preparation course built around the CPACC Body of Knowledge. Purpose-built
            interactive activities, structured learning, and an in-house exam simulator.
          </p>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './services.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'We work with education, health, and not-for-profit organisations to design learning that is accessible, effective, and built to last.',
}

const services = [
  {
    id: 'co-design',
    title: 'Co-design',
    intro:
      'Good learning starts with the right people in the room. We plan and design alongside subject matter experts, stakeholders, and people with lived experience, aligning learning solutions with your organisational goals and the real needs of your learners.',
    bullets: [
      'Learning needs analysis and audience profiling',
      'Learning architecture and course structure',
      'Co-design workshops with subject matter experts',
      'Content development and storyboarding',
      'Review and iteration cycles are built into the process',
    ],
  },
  {
    id: 'capacity-building',
    title: 'Capacity building',
    intro:
      "We build your organisation's capability in digital learning and accessibility, not just deliver a product and leave. Through training, coaching, and mentoring, we help your team develop the skills and confidence to independently create and maintain accessible, effective learning content.",
    bullets: [
      'Accessibility awareness training for L&D teams and content authors',
      'Moodle and LMS platform training for administrators and course builders',
      'H5P content development workshops',
      'One-on-one coaching and mentoring for learning designers',
      'Structured capability uplift programmes for teams new to digital learning',
    ],
  },
  {
    id: 'accessibility-inclusion',
    title: 'Accessibility and inclusion',
    intro:
      'We specialise in accessible and inclusive learning design for WCAG compliance, mobile-first delivery, and low-tech environments. Accessibility is not a feature we add at the end; it is the lens through which we approach every design decision.',
    bullets: [
      'Accessibility audits of existing eLearning content, Moodle courses, and H5P activities',
      'Remediation of inaccessible content, including documents, videos and interactive activities',
      'WCAG 2.x AA(A) compliance review and reporting',
      'Accessible document design (Word, PDF, PowerPoint)',
      'Accessibility statement development',
      'Inclusive design consultation for new learning projects',
    ],
  },
  {
    id: 'learning-technology',
    title: 'Learning technology',
    intro:
      'We help organisations get more from their learning platforms and tools — from initial configuration through to ongoing optimisation and integration. We bring both the technical capability and the instructional design judgement to make learning technology work as it should.',
    bullets: [
      'Moodle configuration, customisation, and theme development',
      'LMS selection and implementation advice',
      'H5P content development and accessibility review',
      'Learning technology strategy and platform audits',
      'Custom HTML and CSS development for Moodle Book and course content',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        h1="Services"
        subheading="We work with education, health, and not-for-profit organisations to design learning that is accessible, effective, and built to last."
      />

      <div>
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`${styles.serviceSection} ${index % 2 === 1 ? styles.alt : ''}`}
            aria-labelledby={`${service.id}-heading`}
          >
            <div className="container">
              <div className={styles.serviceContent}>
                <h2 id={`${service.id}-heading`} className={styles.serviceTitle}>
                  {service.title}
                </h2>
                <p className={styles.serviceIntro}>{service.intro}</p>
                <h3 className={styles.practiceLabel}>What this looks like in practice:</h3>
                <ul className={styles.bullets}>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.ctaStrip} aria-labelledby="services-cta-heading">
        <div className="container">
          <h2 id="services-cta-heading" className={styles.ctaHeading}>
            Ready to talk about your project?
          </h2>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

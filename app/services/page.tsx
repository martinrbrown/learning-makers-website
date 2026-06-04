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
      'Good learning starts with the right people in the room. We plan and design alongside subject matter experts, stakeholders and people with lived experience. This approach aligns learning solutions with your organisational goals and the real needs of your learners.',
    bullets: [
      'Learning needs analysis and audience profiling',
      'Learning architecture and course structure',
      'Co-design workshops with subject matter experts',
      'Content development and storyboarding',
      'Review and iteration cycles built into the process',
    ],
  },
  {
    id: 'capacity-building',
    title: 'Capacity building',
    intro:
      "We build your organisation's accessibility capability so your team can create and maintain inclusive learning independently. We don't simply deliver a product and leave. Through training, coaching and mentoring, we help your people develop the confidence and skills to make accessibility part of how they work.",
    bullets: [
      'Accessibility awareness training for L&D teams and content authors',
      'Training for learning designers on accessible content design principles',
      'One-on-one coaching and mentoring for learning designers',
      'Structured capability uplift programs for teams new to accessible design',
    ],
  },
  {
    id: 'accessibility-inclusion',
    title: 'Accessibility and inclusion',
    intro:
      'We specialise in accessible and inclusive learning design for government, education and training, and not-for-profit organisations. Accessibility is not a feature we add at the end. It is the lens through which we approach every design decision — and the standard we apply when reviewing or auditing what already exists.',
    bullets: [
      'Accessibility reviews and audits of existing eLearning content and documents',
      'Remediation of inaccessible content, including documents and interactive activities',
      'WCAG 2.x AA(A) compliance review and reporting',
      'Accessible document design (Word, PDF, PowerPoint)',
      'Accessibility statement development',
      'Inclusive design consultation for new learning projects',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        h1="Services"
        subheading="We work with government, education and training, and not-for-profit organisations to design learning that is accessible, effective and built to last."
        imageSrc="/services.png"
        imageAlt=""
        imageSize="icon"
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

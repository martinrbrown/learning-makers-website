import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import styles from './page.module.css'

const services = [
  {
    title: 'Co-design',
    description:
      'We plan and design alongside subject matter experts and people with lived experience, aligning with your goals and objectives.',
  },
  {
    title: 'Capacity building',
    description:
      "We build your organisation's capability in digital learning and accessibility through training, coaching and mentoring.",
  },
  {
    title: 'Accessibility & inclusion',
    description:
      'We specialise in accessible and inclusive learning design for WCAG compliance, mobile-first and low-tech environments.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Instructional design & accessibility consulting"
        h1="Accessibility skills for learning professionals"
        subheading="Practical, evidence-based courses for instructional designers and L&D teams who want to build genuinely inclusive learning experiences."
      >
        <Link href="/contact" className="btn">
          Get in touch
        </Link>
      </HeroSection>

      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
          <p className={styles.sectionLabel}>What we do</p>
          <h2 id="services-heading" className={styles.sectionHeading}>
            Our services
          </h2>
          <p className={styles.sectionIntro}>
            End-to-end instructional design with accessibility at the centre — not added at the end.
          </p>
          <div className={styles.cardsGrid}>
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className={styles.servicesAction}>
            <Link href="/services" className="btn">
              See our services
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cpaccBand} aria-labelledby="cpacc-heading">
        <div className="container">
          <p className={styles.cpaccBadge}>Free resource — launching GAAD 21 May 2026</p>
          <h3 id="cpacc-heading" className={styles.cpaccHeading}>
            Preparing for the CPACC exam?
          </h3>
          <p className={styles.cpaccBody}>
            Our free Companion Guide covers the full IAAP CPACC Body of Knowledge — structured,
            searchable, and built for how you actually study. Launching on Global Accessibility
            Awareness Day, 21 May 2026.
          </p>
          <span className={styles.cpaccBtn} aria-disabled="true" title="Coming soon">
            Explore CPACC prep
          </span>
        </div>
      </section>
    </>
  )
}

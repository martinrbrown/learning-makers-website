import Image from 'next/image'
import Link from 'next/link'
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
      <section className={styles.homeHero}>
        <div className={`container ${styles.heroInner}`}>
          <Image
            src="/home-page-image-800x800-squooshed.jpg"
            alt="A wheelchair user sits on a bench in a park, looking at her phone."
            width={800}
            height={800}
            className={styles.heroImage}
            priority
          />
          <div>
            <h1 className={styles.heroH1}>
              Learning design that works for everyone
            </h1>
            <p className={styles.heroSubheading}>
              Practical, evidence-based courses and consulting for instructional designers and L&D
              teams. We help you build genuinely inclusive learning experiences.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
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
          <h3 id="cpacc-heading" className={styles.cpaccHeading}>
            Preparing for the CPACC exam?
          </h3>
          <p className={styles.cpaccBody}>
            Our free CPACC Quick Guide covers the full IAAP Body of Knowledge (BoK). Use it to
            prepare for your exam or as a quick reference as you apply accessibility in your work.
          </p>
          <Link href="/a11y-courses" className="btn">
            Explore our courses
          </Link>
        </div>
      </section>
    </>
  )
}

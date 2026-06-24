import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import styles from './services.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Learning Makers helps Australian for-purpose organisations make their digital presence accessible. We audit websites, build internal capability and provide practical guidance.',
}

const audit = {
  id: 'accessibility-audit',
  title: 'Accessibility audit',
  intro: 'The fastest way to know where your website stands. We assess your homepage and 2 key user flows or pages and deliver a plain English report with prioritised, actionable recommendations.',
  body: 'The report is written to share with your web team, a contractor or your board without us in the room.',
  bullets: [
    'Assessment of your homepage and 2 key pages or user flows',
    'Plain English report identifying your top accessibility issues',
    'Prioritised recommendations you, or your web team, can act on',
    'Coverage of the issues automated tools miss: caption quality, plain language, focus management and mobile usability',
  ],
  timeframe: '2–3 business days',
  price: 'A$1,200 fixed',
  followOn: 'Need help acting on the report? Follow-on support is available at A$150/hr.',
}

const services = [
  {
    id: 'co-design',
    title: 'Co-design',
    intro:
      'We work with organisations to design learning experiences and digital content that are accessible by intent, not as an afterthought. If your team is building something new, we can help you get the foundations right.',
  },
  {
    id: 'capacity-building',
    title: 'Capacity building',
    intro:
      "Accessibility knowledge shouldn't sit with one person. We help teams build shared understanding through workshops, internal guides and practical frameworks. So, accessibility becomes a standing practice, not a project task.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        h1="Accessibility services"
        subheading="Learning Makers helps Australian for-purpose organisations make their digital presence accessible. We audit websites, build internal capability and provide practical guidance. We are grounded in sector knowledge and hands-on accessibility expertise."
        imageSrc="/services.png"
        imageAlt=""
        imageSize="icon"
      />

      <div>
        {/* Audit section */}
        <section
          id={audit.id}
          className={styles.serviceSection}
          aria-labelledby="accessibility-audit-heading"
        >
          <div className="container">
            <div className={styles.serviceContent}>
              <h2 id="accessibility-audit-heading" className={styles.serviceTitle}>
                {audit.title}
              </h2>
              <p className={styles.serviceIntro}>{audit.intro}</p>
              <p>{audit.body}</p>
              <h3 className={styles.practiceLabel}>What&apos;s included:</h3>
              <ul className={styles.bullets}>
                {audit.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p><strong>Timeframe:</strong> {audit.timeframe}</p>
              <p><strong>Price:</strong> {audit.price}</p>
              <p>{audit.followOn}</p>
              <Link href="/contact" className={`btn ${styles.auditCta}`}>
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        {/* Co-design and Capacity building */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`${styles.serviceSection} ${index % 2 === 0 ? styles.alt : ''}`}
            aria-labelledby={`${service.id}-heading`}
          >
            <div className="container">
              <div className={styles.serviceContent}>
                <h2 id={`${service.id}-heading`} className={styles.serviceTitle}>
                  {service.title}
                </h2>
                <p className={styles.serviceIntro}>{service.intro}</p>
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
            Contact us to discuss your needs
          </Link>
        </div>
      </section>
    </>
  )
}

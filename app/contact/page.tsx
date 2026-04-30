import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Get in touch',
  description:
    'Contact Learning Makers. We work with education, health, and not-for-profit organisations.',
}

export default function ContactPage() {
  return (
    <>
      <HeroSection
        h1="Get in touch"
        subheading="We work with education, health, and not-for-profit organisations. Tell us about your project and we'll be in touch shortly."
      />

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.formCard}>
            <ContactForm />
          </div>
          <div className={styles.directContact}>
            <p>
              Or email us directly:{' '}
              <a href="mailto:info@learningmakers.com">info@learningmakers.com</a>
            </p>
            <p className={styles.location}>Melbourne, Australia</p>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Accessibility statement',
  description: 'Accessibility statement for Learning Makers.',
}

export default function AccessibilityPage() {
  return (
    <>
      <HeroSection
        h1="Accessibility statement"
        subheading="Last updated: June 2026"
      />

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>

            <h2>Our commitment</h2>
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These
              guidelines explain how to make web content more accessible to people with disability.
              Accessibility is central to how we work — it is a design principle, not a compliance
              exercise.
            </p>

            <h2>What we have done</h2>
            <p>
              This website has been designed and built with accessibility in mind from the outset.
              Measures include:
            </p>
            <ul>
              <li>Atkinson Hyperlegible font, designed specifically for low-vision readers</li>
              <li>Sufficient colour contrast across all text and interface elements</li>
              <li>Keyboard-navigable interface</li>
              <li>Descriptive link text throughout</li>
              <li>Alt text on all meaningful images</li>
              <li>Responsive design for mobile and low-bandwidth access</li>
              <li>No reliance on colour alone to convey information</li>
            </ul>

            <h2>Known limitations</h2>
            <p>
              The newsletter sign-up form on this site uses a third-party embed (MailerLite). This
              embed contains an unlabelled honeypot field used for spam prevention, 2 orphaned form
              labels and a skipped heading level in the confirmation message. These elements are not
              visible to human users and do not affect form usability. They have been reported to
              MailerLite as accessibility issues.
            </p>

            <h2>Feedback and contact</h2>
            <p>
              If you experience any difficulty accessing content on this website, or if you find
              something that does not meet accessibility standards, please contact us at{' '}
              <a href="mailto:info@learningmakers.com">info@learningmakers.com</a>. We will respond
              within 5 business days and work to address the issue.
            </p>

            <h2>Scope</h2>
            <p>
              This statement covers learningmakers.com. The CPACC Quick Guide hosted at
              courses.learningmakers.com is subject to a separate accessibility review.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

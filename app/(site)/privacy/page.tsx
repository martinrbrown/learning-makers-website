import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy statement',
  description: 'Privacy statement for Learning Makers.',
}

export default function PrivacyPage() {
  return (
    <>
      <HeroSection
        h1="Privacy statement"
        subheading="Last updated: June 2026"
      />

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>

            <h2>Who we are</h2>
            <p>
              Learning Makers is an instructional design and accessibility consulting business
              operated by Martin and Kirsty Brown, Melbourne, Australia. You can contact us at{' '}
              <a href="mailto:info@learningmakers.com">info@learningmakers.com</a>.
            </p>

            <h2>What information we collect</h2>
            <p>
              We collect personal information only when you choose to provide it. This occurs in
              2 ways:
            </p>
            <ul>
              <li>
                <strong>Contact form:</strong> when you submit an enquiry, we collect your name,
                email address and the content of your message. This information is transmitted via
                Resend and delivered to our inbox. We do not store it in any third-party system
                beyond our Google Workspace email account.
              </li>
              <li>
                <strong>Newsletter sign-up:</strong> when you subscribe to our mailing list, we
                collect your name and email address. This information is stored and managed in
                MailerLite. We use it only to send you occasional updates about our resources,
                courses and accessibility insights. You can unsubscribe at any time using the link
                in any email we send.
              </li>
            </ul>

            <h2>Website analytics</h2>
            <p>
              This website uses Vercel Analytics to understand how visitors use the site. Vercel
              Analytics does not use cookies and does not collect any personally identifiable
              information. No data is shared with third parties for advertising purposes.
            </p>

            <h2>How we use your information</h2>
            <p>
              We use the information you provide only for the purpose for which it was given — to
              respond to your enquiry or to send you the newsletter you signed up for. We do not
              sell, rent or share your personal information with third parties except where required
              by law.
            </p>

            <h2>Data storage and security</h2>
            <p>Your information is held within the following services:</p>
            <ul>
              <li>Google Workspace (email enquiries)</li>
              <li>MailerLite (newsletter subscribers)</li>
            </ul>
            <p>
              Both services maintain appropriate technical and organisational security measures.
              MailerLite stores data in the European Union and operates under GDPR-compliant data
              processing agreements.
            </p>

            <h2>Your rights</h2>
            <p>
              You have the right to access the personal information we hold about you and to request
              a correction if it is inaccurate. To make a request, contact us at{' '}
              <a href="mailto:info@learningmakers.com">info@learningmakers.com</a>.
            </p>
            <p>
              If you believe we have handled your personal information in a way that does not comply
              with the Privacy Act 1988, you may make a complaint to the Office of the Australian
              Information Commissioner (OAIC) at{' '}
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                oaic.gov.au
              </a>
              .
            </p>

            <h2>Changes to this statement</h2>
            <p>
              We may update this statement from time to time. The date at the top of this page
              reflects the most recent revision.
            </p>

          </div>
        </div>
      </section>
    </>
  )
}

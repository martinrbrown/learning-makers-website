import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'
import '../styles/globals.css'

const atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-atkinson',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Learning Makers',
    default: 'Learning Makers — Instructional Design & Accessibility Consulting',
  },
  description:
    'Practical, evidence-based courses for instructional designers and L&D teams who want to build genuinely inclusive learning experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={atkinson.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <NewsletterSignup />
        <Footer />
        <Analytics />
      </body>
      <Script
        id="mailerlite-universal"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
  .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
  n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
  (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
  ml('account', '2396216');`,
        }}
      />
    </html>
  )
}

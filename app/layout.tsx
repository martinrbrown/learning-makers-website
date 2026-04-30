import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
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
        <Footer />
      </body>
    </html>
  )
}

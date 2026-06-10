import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">{children}</main>
      <NewsletterSignup />
      <Footer />
    </>
  )
}

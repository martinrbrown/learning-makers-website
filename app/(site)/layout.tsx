import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
      <Footer />
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Courses', href: '/a11y-courses' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.logoWrap}>
          <Image
            src="/logomark.png"
            alt="Learning Makers"
            width={40}
            height={40}
            className={styles.logo}
          />
        </div>

        <div className={styles.badges}>
          <Image
            src="/iaap-badge.png"
            alt="IAAP Professional Member"
            width={160}
            height={80}
            style={{ height: '80px', width: 'auto' }}
          />
          <Image
            src="/cpacc-badge.png"
            alt="IAAP Certified CPACC"
            width={160}
            height={80}
            style={{ height: '80px', width: 'auto' }}
          />
        </div>

        <nav aria-label="Footer navigation">
          <ul className={styles.navLinks} role="list">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className={styles.copyright}>
          © 2026 Learning Makers. Melbourne, Australia.
        </p>

        <nav aria-label="Legal navigation">
          <ul className={styles.links} role="list">
            <li>
              <Link href="/accessibility">Accessibility statement</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy statement</Link>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  )
}

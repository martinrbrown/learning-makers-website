import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

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
        <p className={styles.copyright}>
          © 2026 Learning Makers. Martin &amp; Kirsty Brown, Melbourne, Australia.
        </p>
        <nav aria-label="Footer navigation">
          <ul className={styles.links} role="list">
            <li>
              <Link href="#">Accessibility statement</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

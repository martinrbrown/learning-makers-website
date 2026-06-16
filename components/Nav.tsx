'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Courses', href: '/courses' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="Learning Makers — return to home page">
          <Image
            src="/fulllogo.png"
            alt="Learning Makers"
            width={180}
            height={40}
            priority
            style={{ height: '40px', width: 'auto' }}
          />
        </Link>

        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
        >
          <ul className={styles.navList} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.hamburger}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line1Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line2Open : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.line3Open : ''}`} />
        </button>
      </div>
    </header>
  )
}

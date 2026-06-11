import styles from './ReaderFooter.module.css'

export default function ReaderFooter() {
  return (
    <footer className={styles.footer}>
      <p>This guide is free. Your support keeps it that way.</p>
      <p>
        <a
          href="https://buy.stripe.com/eVqaEX8UO8MS86V0Zv6c001"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support
        </a>
        {' or subscribe at '}
        <a
          href="https://www.learningmakers.com/a11y-courses#subscribe"
          target="_blank"
          rel="noopener noreferrer"
        >
          LearningMakers
        </a>
      </p>
      <p>
        <a href="/api/export" download="manual-export.html">Download manual (HTML)</a>
      </p>
      <p className={styles.copyright}>&copy; Learning Makers Pty Ltd 2026</p>
    </footer>
  )
}

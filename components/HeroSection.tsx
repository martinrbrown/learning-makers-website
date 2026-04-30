import styles from './HeroSection.module.css'

interface HeroSectionProps {
  eyebrow?: string
  h1: string
  subheading: string
  children?: React.ReactNode
  variant?: 'teal' | 'neutral'
}

export default function HeroSection({
  eyebrow,
  h1,
  subheading,
  children,
  variant = 'teal',
}: HeroSectionProps) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.h1}>{h1}</h1>
        <p className={styles.subheading}>{subheading}</p>
        {children && <div className={styles.ctas}>{children}</div>}
      </div>
    </section>
  )
}

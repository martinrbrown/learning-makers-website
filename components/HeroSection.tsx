import Image from 'next/image'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  eyebrow?: string
  h1: string
  subheading: string
  children?: React.ReactNode
  variant?: 'teal' | 'neutral'
  imageSrc?: string
  imageAlt?: string
}

export default function HeroSection({
  eyebrow,
  h1,
  subheading,
  children,
  variant = 'teal',
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={`container ${imageSrc ? styles.innerWithImage : styles.inner}`}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ''}
            width={800}
            height={800}
            className={styles.heroImage}
            priority
          />
        )}
        <div>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.h1}>{h1}</h1>
          <p className={styles.subheading}>{subheading}</p>
          {children && <div className={styles.ctas}>{children}</div>}
        </div>
      </div>
    </section>
  )
}

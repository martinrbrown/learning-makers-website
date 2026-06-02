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
  imageSize?: 'large' | 'icon'
}

export default function HeroSection({
  eyebrow,
  h1,
  subheading,
  children,
  variant = 'teal',
  imageSrc,
  imageAlt,
  imageSize = 'large',
}: HeroSectionProps) {
  const innerClass = !imageSrc
    ? styles.inner
    : imageSize === 'icon'
      ? styles.innerWithIcon
      : styles.innerWithImage

  return (
    <section className={`${styles.hero} ${styles[variant]}`}>
      <div className={`container ${innerClass}`}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt ?? ''}
            width={imageSize === 'icon' ? 80 : 800}
            height={imageSize === 'icon' ? 80 : 800}
            className={imageSize === 'icon' ? styles.iconImage : styles.heroImage}
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

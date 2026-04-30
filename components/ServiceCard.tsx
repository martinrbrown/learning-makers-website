import Link from 'next/link'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={href} className={styles.link} aria-label={`Learn more about ${title}`}>
        Learn more →
      </Link>
    </article>
  )
}

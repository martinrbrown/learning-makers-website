import Image from 'next/image'
import styles from './NewsletterSignup.module.css'

export default function NewsletterSignup() {
  return (
    <section id="subscribe" className={styles.newsletter} aria-labelledby="newsletter-heading">
      <div className={`container ${styles.inner}`}>
        <div className={styles.imageCol}>
          <Image
            src="/newsletter-image.png"
            alt="A hand-drawn illustration of a document in brand crimson."
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 id="newsletter-heading">Stay in the loop</h2>
          <p className={styles.body}>
            New resources, upcoming courses and accessibility insights – a few times a year, no
            noise.
          </p>
          <div className="ml-embedded" data-form="ivibjd"></div>
        </div>
      </div>
    </section>
  )
}

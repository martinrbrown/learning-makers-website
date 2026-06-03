import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BackToTop from '@/components/BackToTop'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Why I think every instructional designer should consider CPACC',
  description:
    'Accessibility has been part of my practice for a long time. Then I started studying for CPACC, and I realised how much I had been working from instinct rather than foundations.',
}

export default function CPACCArticlePage() {
  return (
    <article>
      <div className={styles.articleHero}>
        <div className="container">
          <div className={styles.articleHeroInner}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>Article</p>
              <h1 className={styles.title}>
                Why I think every instructional designer should consider CPACC
              </h1>
              <p className={styles.meta}>Martin Brown · 3 June 2026</p>
            </div>
            <Image
              src="/cpacc-article-image-800x800.jpg"
              alt="A person holds a smartphone in a café, suggesting studying on the go."
              width={320}
              height={320}
              className={styles.articleImage}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className="container">
          <div className={styles.prose}>

            <p>
              Accessibility has been part of my practice for a long time. I thought I understood
              it reasonably well. Then I started studying for the Certified Professional in
              Accessibility Core Competencies (CPACC) exam, and I realised how much I had been
              working from instinct rather than foundations.
            </p>
            <p>
              This article is for instructional designers, and other content creators, who are
              curious about CPACC but haven't yet committed. I'm not here to sell you the
              credential. I want to share what it actually gave me, because it gave me more than I
              expected.
            </p>

            <h2>It started with a LinkedIn post</h2>

            <p>
              Partway through my study, I came across a LinkedIn post by{' '}
              <a
                href="https://habengirma.com/book/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Haben Girma
              </a>{' '}
              that made me laugh. I followed the thread and read her book,{' '}
              <em>Haben: The Deafblind Woman Who Conquered Harvard Law</em>. I found myself
              genuinely absorbed by Deafblindness in a way I hadn't anticipated.
            </p>
            <p>
              I know how that sounds. &ldquo;Deafblindness is my favourite disability&rdquo; is a
              ridiculous thing to say. But I say it anyway, because it gets at something true. When
              you sit with the question &ldquo;is this content accessible to someone who is both
              deaf and blind?&rdquo;, every assumption you've ever made about accessible design
              gets stress-tested at once. It's clarifying in a way that no checklist ever is.
            </p>
            <p>
              That experience came directly from studying the CPACC Body of Knowledge (BoK).
              Specifically, from a section I had mentally filed as background reading.
            </p>

            <h2>The section I almost skimmed</h2>

            <p>
              The categories and models of disability sit early in the BoK. I expected it to be
              theoretical, interesting enough, but not the practical core of what I needed to know.
            </p>
            <p>I was wrong. It turned out to be the lens through which everything else made sense.</p>
            <p>
              Understanding how disability is conceptualised through models changes how you ask
              questions in a design brief. Oh, and I have a favourite disability model too. The
              biopsychosocial model, of course. I always try to talk about it at dinner parties.
            </p>
            <p>
              In practice, knowing these theories and how professionals apply them, changes what
              you notice in a client's assumptions. It changes how you talk about accessibility
              with stakeholders who think of it as a compliance exercise.
            </p>
            <p>
              I didn't just learn frameworks. I started seeking out more. I now take every
              opportunity to read and listen to people with lived experience of disability. That
              habit started with CPACC study and hasn't stopped.
            </p>

            <h2>What changed in my practice</h2>

            <p>
              Before CPACC, I thought about accessibility at the point where it became visible,
              like captions, alt text and colour contrast. After CPACC, I think about it from
              concept to delivery. I'm actually doing the &ldquo;shift left&rdquo; thing now.
            </p>
            <p>
              The credential didn't give me a checklist. It gave me a way of thinking. And as many
              of my peers will tell you, accessible design is good design. It's not a constraint on
              the creative process, but a discipline that makes the work better for everyone.
            </p>
            <p>
              My confidence changed too. I no longer wait to be asked about accessibility. I open
              the conversation. I advocate earlier and more directly. That shift is harder to
              measure than a credential, but it may be the most valuable thing I took from the
              process.
            </p>

            <h2>On the investment</h2>

            <p>
              Pursuing CPACC requires time and money. I studied for more than 2 months before
              sitting the exam. The exam fee is modest compared to a conference registration, or
              even some webinars and a fraction of a postgraduate unit. The credential is awarded
              and internationally recognised by the International Association of Accessibility
              Professionals (IAAP). You don't need to be a member of the IAAP, but I choose to
              maintain membership.
            </p>
            <p>
              You need to recertify every 3 years, which keeps the learning current. There are
              many professional development opportunities through the IAAP and externally to keep
              that learning going and earn points towards recertification.
            </p>
            <p>
              For instructional designers working in education, government or the not-for-profit
              sector, where accessibility obligations are real and growing, I think that investment
              stacks up.
            </p>

            <h2>Where to start</h2>

            <p>
              If you're considering CPACC, the IAAP Body of Knowledge is your map. It's
              substantial but navigable. I built the CPACC Quick Guide as a free companion
              resource, designed to be used in the gaps of a busy schedule, on any device, without
              needing to sit down with a textbook.
            </p>
            <p>
              You can find it on the{' '}
              <Link href="/a11y-courses">courses</Link> page.
            </p>
            <p>
              If you have questions about the exam or the study process, I'm happy to talk. Reach
              out via the <Link href="/contact">contact page</Link> or find me on LinkedIn.
            </p>

          </div>
        </div>
      </div>

      <BackToTop />
    </article>
  )
}

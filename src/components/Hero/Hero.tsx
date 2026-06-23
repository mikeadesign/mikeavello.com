import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatarRing}>
            <img
              src="/avatar.png"
              alt="Mike Avello"
              className={styles.avatar}
              width="340"
              height="340"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.greeting}>Hello, I'm</p>
          <h1 className={styles.name}>Mike Avello</h1>
          <p className={styles.title}>Engineering Leader &amp; Team Builder</p>
          <p className={styles.tagline}>
            18+ years turning ideas into digital products —<br className={styles.br} />
            and building the teams that make it happen.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--primary">Get in Touch</a>
            <a
              href="https://www.linkedin.com/in/mikeavello/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-light"
            >
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
          <a
            href="/Mike-Avello-Resume.pdf"
            download
            className={styles.resumeLink}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}

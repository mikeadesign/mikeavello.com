import { useInView } from '../../hooks/useInView'
import styles from './Contact.module.scss'

export default function Contact() {
  const { ref, inView } = useInView(0.2)

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact}${inView ? ' is-visible' : ''}`}
    >
      <div className={`${styles.inner} reveal`}>
        <p className={`section-label ${styles.label}`}>Let's Connect</p>
        <h2 className={styles.title}>Open to New Opportunities</h2>
        <p className={styles.body}>
          Whether you're building an engineering organization, working through a digital product challenge, or just want to connect — I'd love to hear from you.
        </p>
        <div className={styles.links}>
          <a href="mailto:info@mikeavello.com" className={`btn btn--primary ${styles.btnEmail}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            info@mikeavello.com
          </a>
          <a
            href="https://www.linkedin.com/in/mikeavello/"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--outline-light ${styles.btnLinkedIn}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            linkedin.com/in/mikeavello
          </a>
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
    </section>
  )
}

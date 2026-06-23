import { useInView } from '../../hooks/useInView'
import styles from './Expertise.module.scss'

const areas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Engineering Leadership',
    body: 'Driving team performance, roadmap execution, and cross-functional alignment across distributed engineering organizations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Frontend Architecture',
    body: 'Defining scalable, maintainable frontend systems using modern JavaScript frameworks and development standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
        <path d="M12 6v6l4 2"/>
        <path d="M8 12H4M20 12h-4M12 4V2M12 22v-2"/>
      </svg>
    ),
    title: 'AI-Augmented Development',
    body: 'Integrating tools like Claude Code, Microsoft Copilot, and ChatGPT into practical engineering workflows that genuinely improve delivery.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
      </svg>
    ),
    title: 'Team Mentorship',
    body: 'Developing engineers through structured feedback, growth planning, and collaborative coaching focused on long-term career success.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: 'Web Accessibility',
    body: 'Advocating for and implementing ADA/WCAG compliant digital experiences — built into process, not bolted on after.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
      </svg>
    ),
    title: 'Developer Experience',
    body: 'Improving workflows, tooling, onboarding, and documentation so engineers can focus on work that matters.',
  },
]

export default function Expertise() {
  const { ref, inView } = useInView()

  return (
    <section
      id="expertise"
      ref={ref}
      className={`${styles.expertise}${inView ? ' is-visible' : ''}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Specialties</p>
          <h2 className="section-title">What I Bring</h2>
        </div>

        <div className={styles.grid}>
          {areas.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
            >
              <div className={styles.cardIcon}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

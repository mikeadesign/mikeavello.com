import { useInView } from '../../hooks/useInView'
import styles from './About.module.scss'

const stats = [
  { value: '18+', label: 'Years in Web Engineering' },
  { value: '4', label: 'Engineering Leadership Roles' },
  { value: 'US & LATAM', label: 'Distributed Teams Led' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about}${inView ? ' is-visible' : ''}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.textCol} reveal`}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Craft, Leadership,<br />and Building Great Teams
          </h2>
          <div className={styles.body}>
            <p>
              I build things — and I build the teams that build things. My career has been shaped by a conviction that great engineering is as much about people and process as it is about code. The most impactful work happens when developers are supported, empowered, and pointed in the right direction.
            </p>
            <p>
              Over the past several years I've been a practical advocate for integrating AI into real engineering workflows — not as hype, but as a genuine force multiplier. I've helped teams adopt tools like Claude Code, Microsoft Copilot, and ChatGPT in ways that improve productivity, documentation, and onboarding without losing the critical thinking and context that only experienced engineers bring.
            </p>
            <p>
              I'm drawn to organizations where technical execution and people strategy are treated as equally important. I believe the next generation of engineering leaders will be defined by how thoughtfully they bring these two things together.
            </p>
          </div>
        </div>

        <div className={`${styles.statCol} reveal`} style={{ transitionDelay: '0.15s' }}>
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
          <div className={styles.location}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Illinois
          </div>
        </div>
      </div>
    </section>
  )
}

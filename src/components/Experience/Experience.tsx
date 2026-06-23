import { useInView } from '../../hooks/useInView'
import styles from './Experience.module.scss'

const roles = [
  {
    title: 'Engineering Manager',
    company: 'Adage Technologies',
    location: 'Chicago, IL',
    period: '2017 – 2026',
    highlights: [
      'Led distributed frontend engineering teams across the US and Latin America on ecommerce, CMS, and custom digital platform engagements.',
      'Championed practical AI adoption — integrating Claude Code, Microsoft Copilot, and ChatGPT to improve productivity, onboarding, and documentation.',
      'Drove modernization of CI/CD pipelines, peer review standards, branching strategies, and cross-functional delivery workflows.',
      'Provided frontend architecture guidance and technical leadership across multiple concurrent client initiatives.',
    ],
  },
  {
    title: 'Director of Front-End Development',
    company: 'ROCCommerce',
    location: 'Naperville, IL',
    period: '2014 – 2017',
    highlights: [
      'Led frontend strategy and framework architecture for a modern ecommerce platform supporting B2B and B2C storefronts.',
      'Established reusable accelerators, style guides, and documentation frameworks to improve consistency and scalability.',
      'Managed remote contributors and defined frontend delivery standards across teams and client implementations.',
    ],
  },
  {
    title: 'Director of Front-End Development',
    company: 'AmericanEagle.com',
    location: 'Des Plaines, IL',
    period: '2012 – 2014',
    highlights: [
      'Led frontend strategy and standards across multiple departments and client initiatives at a leading digital agency.',
      'Managed and mentored frontend developers, scaling team capabilities and development processes.',
      'Directed implementation of responsive frameworks and modern web standards across projects.',
    ],
  },
  {
    title: 'Lead Front-End Developer — Ecommerce',
    company: 'AmericanEagle.com',
    location: 'Park Ridge, IL',
    period: '2007 – 2012',
    highlights: [
      'Built reusable ecommerce components, templates, and frontend standards for scalable client implementations.',
      'Standardized JavaScript and AJAX development practices to improve user experience and code maintainability.',
      'Provided onboarding, mentorship, and technical guidance for developers across teams.',
    ],
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.experience}${inView ? ' is-visible' : ''}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className={styles.timeline}>
          {roles.map((role, i) => (
            <article
              key={i}
              className={`${styles.role} reveal`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className={styles.roleMeta}>
                <span className={styles.period}>{role.period}</span>
                <span className={styles.dot} aria-hidden="true" />
              </div>
              <div className={styles.roleBody}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.company}>
                  {role.company}
                  <span className={styles.locationBadge}>{role.location}</span>
                </p>
                <ul className={styles.highlights}>
                  {role.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.edu} reveal`} style={{ transitionDelay: '0.5s' }}>
          <p className={styles.eduLabel}>Education</p>
          <p className={styles.eduText}>
            Bachelor of Fine Arts in Interactive Media Design (Web Design &amp; Development)<br />
            <span>Illinois Institute of Art — Schaumburg</span>
          </p>
        </div>
      </div>
    </section>
  )
}

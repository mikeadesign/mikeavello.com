import { useState, useEffect } from 'react'
import styles from './Nav.module.scss'

const links = [
  { label: 'About',      href: '#about',      id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Expertise',  href: '#expertise',  id: 'expertise' },
  { label: 'Contact',    href: '#contact',    id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [heroGone, setHeroGone]           = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -65% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Show avatar when hero scrolls out of view
  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <span
            className={`${styles.navAvatarWrap} ${heroGone ? styles.navAvatarVisible : ''}`}
            aria-hidden="true"
          >
            <img src="/avatar.png" className={styles.navAvatar} alt="" />
          </span>
          Mike Avello
        </a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`} aria-label="Main navigation">
          {links.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
              onClick={close}
            >
              {label}
            </a>
          ))}
          <a
            href="/Mike-Avello-Resume.pdf"
            download
            className={styles.resumeLink}
            onClick={close}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'

export default function Nav({ config }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  const links = ['about', 'projects', 'skills', 'experience', 'contact']

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const scrollY = window.scrollY + 120
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-bracket">[</span>
          {config.personal.name.split(' ').map(w => w[0]).join('')}
          <span className="nav__logo-bracket">]</span>
        </a>

        <div className={`nav__links${mobileOpen ? ' open' : ''}`}>
          {links.map(id => (
            <button
              key={id}
              className={`nav__link${active === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {id}
            </button>
          ))}
        </div>

        <button
          className={`nav__toggle${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

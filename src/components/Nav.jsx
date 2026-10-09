import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Nav({ config }) {
  const { personal } = config
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 md:px-8 transition-transform duration-300">
      <div 
        className={`max-w-[1380px] mx-auto rounded-[18px] transition-all duration-300 ${
          scrolled ? 'glass-panel py-3 px-6' : 'bg-transparent py-4 px-6 md:px-0'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo - Stacked */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <img src="/logo.png" alt="CG Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tight text-[0.95rem] md:text-[1.1rem]">
              <span className="text-text-primary uppercase group-hover:text-accent-blue transition-colors">{personal.firstName}</span>
              <span className="text-accent-blue uppercase group-hover:text-text-primary transition-colors">{personal.lastName}</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 bg-surface-muted/50 rounded-pill px-6 py-2 border border-border">
            <a href="#projects" className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-accent-blue transition-colors">
              PROJECTS
            </a>
            <a href="#about" className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-text-secondary hover:text-accent-blue transition-colors">
              ABOUT
            </a>
            <a href="#experience" className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-text-secondary hover:text-accent-blue transition-colors">
              EXPERIENCE
            </a>
            <a href="#skills" className="font-mono text-[11px] font-medium tracking-[0.22em] uppercase text-text-secondary hover:text-accent-blue transition-colors">
              SKILLS
            </a>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-accent-blue text-surface font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-pill shadow-[0_4px_14px_rgba(36,122,154,0.3)] hover:bg-accent-blue-dark transition-all duration-300"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 bg-surface border border-border rounded-[12px] flex flex-col items-center justify-center gap-[4px] shadow-sm"
          >
            <span className={`w-5 h-[2px] bg-text-primary rounded-full transition-transform ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-text-primary rounded-full transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-text-primary rounded-full transition-transform ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass-panel rounded-[18px] p-6 flex flex-col gap-6 shadow-soft animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a href="#projects" className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-accent-blue">PROJECTS</a>
            <a href="#about" className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-text-secondary">ABOUT</a>
            <a href="#experience" className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-text-secondary">EXPERIENCE</a>
            <a href="#skills" className="font-mono text-[12px] font-medium tracking-[0.2em] uppercase text-text-secondary">SKILLS</a>
          </div>
          <div className="border-t border-border pt-4">
            <a 
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-full bg-accent-blue text-surface font-mono text-[12px] font-semibold tracking-[0.2em] uppercase px-6 py-3.5 rounded-pill shadow-[0_4px_14px_rgba(36,122,154,0.3)]"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

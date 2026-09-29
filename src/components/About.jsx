import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function About({ config }) {
  const { personal, stats } = config
  const sectionRef = useReveal()
  const statsRef = useRef(null)

  // Counter animation
  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('[data-count]').forEach(counter => {
            const target = parseInt(counter.dataset.count)
            const duration = 1200
            const start = performance.now()
            const animate = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const ease = 1 - Math.pow(1 - progress, 3)
              counter.textContent = Math.round(ease * target)
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">// about</span>
          <h2 className="section__title">whoami</h2>
        </div>
        <div className="about__grid">
          <div className="about__text">
            {personal.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="about__stats" ref={statsRef}>
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                {s.isStatus ? (
                  <span className="stat-card__icon">{s.value}</span>
                ) : s.isCounter ? (
                  <span className="stat-card__value" data-count={s.value}>0</span>
                ) : (
                  <span className="stat-card__value">{s.value}</span>
                )}
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

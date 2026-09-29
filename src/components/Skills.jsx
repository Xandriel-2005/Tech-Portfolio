import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Skills({ config }) {
  const sectionRef = useReveal()
  const gridRef = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.skill-item__fill').forEach((fill, i) => {
            setTimeout(() => {
              fill.style.width = fill.dataset.level + '%'
            }, i * 80)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">// skills</span>
          <h2 className="section__title">cat ~/.skills</h2>
        </div>
        <div className="skills__grid" ref={gridRef}>
          {config.skills.map(group => (
            <div className="skill-group" key={group.category}>
              <h3 className="skill-group__title">
                <span className="skill-group__icon">▸</span> {group.category}
              </h3>
              <div className="skill-group__items">
                {group.items.map(skill => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-item__name">{skill.name}</span>
                    <div className="skill-item__bar">
                      <div className="skill-item__fill" data-level={skill.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

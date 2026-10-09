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
          el.querySelectorAll('.skill-fill').forEach((fill, i) => {
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
    <section
      id="skills"
      className="section-reveal py-16 md:py-24"
      ref={sectionRef}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <span className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-2">
            TECHNICAL SKILLS
          </span>
          <h2 className="font-sans text-[2rem] font-bold tracking-tight leading-tight">
            Stack
          </h2>
        </div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          ref={gridRef}
        >
          {config.skills.map(group => (
            <div
              key={group.category}
              className="border border-border bg-surface p-6"
            >
              <h3 className="font-sans text-base font-bold mb-5 flex items-center gap-2">
                <span className="text-blue font-mono text-sm">▸</span>
                {group.category}
              </h3>
              <div className="flex flex-col gap-3.5">
                {group.items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center gap-4 mb-1.5">
                      <span className="font-mono text-[0.75rem] text-muted min-w-[140px] md:min-w-[160px]">
                        {skill.name}
                      </span>
                    </div>
                    <div className="h-1 bg-gray overflow-hidden">
                      <div
                        className="skill-fill h-full bg-blue"
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        {config.learning && config.learning.length > 0 && (
          <div className="mt-10 md:mt-14">
            <span className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-4">
              CURRENTLY LEARNING
            </span>
            <div className="flex flex-wrap gap-3">
              {config.learning.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-text border border-border bg-transparent px-4 py-2.5 hover:border-blue transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Section rule */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="border-t border-border" />
      </div>
    </section>
  )
}

import useReveal from '../hooks/useReveal'

function ExperienceCard({ item }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline dot (Mobile only) */}
      <div className="md:hidden absolute left-0 top-2 w-3 h-3 bg-accent-blue rounded-full border-[3px] border-surface shadow-[0_0_0_1px_rgba(36,122,154,0.3)] z-10" />
      {/* Timeline line (Mobile only) */}
      <div className="md:hidden absolute left-[5px] top-4 bottom-[-32px] w-px bg-border -z-10" />

      <div className="bg-surface border border-border rounded-[24px] p-6 md:p-8 hover:shadow-[0_12px_30px_rgba(36,122,154,0.1)] transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-text-primary tracking-tight mb-1">
              {item.role}
            </h3>
            <span className="font-sans text-[15px] text-accent-blue font-medium">
              {item.company}
            </span>
          </div>
          <span className="bg-surface-muted text-text-secondary font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-pill border border-border md:flex-shrink-0">
            {item.date}
          </span>
        </div>
        <p className="font-sans text-[15px] leading-relaxed text-text-secondary">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function Experience({ config }) {
  const sectionRef = useReveal()

  return (
    <section id="experience" className="section-reveal py-16 md:py-24 px-6 md:px-8 max-w-[1380px] mx-auto" ref={sectionRef}>
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
        <div>
          <span className="block font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-3">
            JOURNEY
          </span>
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-text-primary tracking-tight leading-none">
            Experience & Education
          </h2>
        </div>
      </div>

      {/* Experience Container */}
      <div className="relative bg-surface-muted/50 border border-border rounded-[32px] p-6 md:p-12">
        <div className="flex flex-col gap-6 md:gap-8">
          {config.experience.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
      
    </section>
  )
}

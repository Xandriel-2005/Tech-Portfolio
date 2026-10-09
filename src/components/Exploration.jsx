import useReveal from '../hooks/useReveal'

export default function Exploration({ config }) {
  const sectionRef = useReveal()

  return (
    <section id="skills" className="section-reveal py-16 md:py-24 px-6 md:px-8 max-w-[1380px] mx-auto" ref={sectionRef}>
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
        <div>
          <span className="block font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-3">
            CAPABILITIES
          </span>
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-text-primary tracking-tight leading-none">
            Skills & Exploration
          </h2>
        </div>
      </div>

      <div className="bg-surface-muted/30 border border-border rounded-[32px] p-8 md:p-12 shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          {config.skills.map((group) => (
            <div key={group.category} className="flex flex-col">
              <h3 className="font-sans font-bold text-[18px] text-accent-blue-dark tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-blue/30 block" />
                {group.category}
              </h3>
              
              <div className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <div 
                    key={skill}
                    className="group bg-surface border border-border/60 hover:border-accent-blue/40 px-5 py-3 rounded-[14px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-text-secondary group-hover:text-accent-blue transition-colors">
                      {skill}
                    </span>
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

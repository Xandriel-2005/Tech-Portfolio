import useReveal from '../hooks/useReveal'

function ProjectCard({ project, index }) {
  return (
    <a 
      href={project.github || project.live || '#'} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block bg-surface border border-border rounded-[17px] p-6 hover:shadow-[0_12px_30px_rgba(36,122,154,0.15)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Top Header: Number and Category Pill */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[12px] font-semibold text-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="bg-surface-muted text-accent-blue-dark font-sans text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-pill border border-border">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-sans font-bold text-[24px] md:text-[28px] text-text-primary tracking-tight mb-4 group-hover:text-accent-blue transition-colors">
          {project.name}
        </h3>
        
        {/* Description */}
        <p className="font-sans text-[15px] leading-relaxed text-text-secondary mb-8 flex-grow">
          {project.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-4" />

        {/* Metric */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[12px] font-bold tracking-[0.15em] uppercase text-accent-blue">
            {project.metric}
          </span>
          <span className="text-border group-hover:text-accent-blue transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export default function Projects({ config }) {
  const sectionRef = useReveal()

  return (
    <section id="projects" className="section-reveal py-16 md:py-24 px-6 md:px-8 max-w-[1380px] mx-auto" ref={sectionRef}>
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
        <div>
          <span className="block font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-text-muted mb-3">
            FEATURED PROJECTS
          </span>
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-text-primary tracking-tight leading-none">
            Project Matrix
          </h2>
        </div>
        <span className="font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-lavender px-4 py-2 rounded-pill hidden md:block">
          {String(config.projects.length).padStart(2, '0')} / PROJECTS
        </span>
      </div>

      {/* Project Matrix Container */}
      <div className="bg-surface-muted border border-border rounded-[24px] p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {config.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
      
    </section>
  )
}

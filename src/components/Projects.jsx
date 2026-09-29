import useReveal from '../hooks/useReveal'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const STATUS_MAP = {
  deployed:  { icon: '●', label: 'deployed' },
  active:    { icon: '●', label: 'active' },
  building:  { icon: '◌', label: 'building' },
  hackathon: { icon: '●', label: 'hackathon' },
  private:   { icon: '●', label: 'private' },
  archived:  { icon: '○', label: 'archived' },
}

function ProjectCard({ project }) {
  const status = STATUS_MAP[project.status] || STATUS_MAP.active

  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__header">
        <div className="project-card__title-row">
          <h3 className="project-card__name">{project.name}</h3>
          <span className={`project-card__status project-card__status--${project.status}`}>
            {status.icon} {status.label}
          </span>
        </div>
        <span className="project-card__meta">
          {project.tech[0] && project.tech[0] !== 'TBD' ? `${project.tech[0]} · ` : ''}{project.date}
        </span>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tech">
        {project.tech.map(t => <span className="chip" key={t}>{t}</span>)}
      </div>

      <div className="project-card__links">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <GithubIcon /> source
          </a>
        ) : (
          <span className="project-card__link project-card__link--disabled">
            {project.status === 'building' ? 'in progress' : 'private repo'}
          </span>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <ExternalIcon /> live demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects({ config }) {
  const sectionRef = useReveal()

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">// projects</span>
          <h2 className="section__title">ls ~/projects</h2>
        </div>
        <div className="projects__grid">
          {config.projects.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  )
}

import useReveal from '../hooks/useReveal'

export default function Experience({ config }) {
  const sectionRef = useReveal()

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">// experience</span>
          <h2 className="section__title">git log --oneline</h2>
        </div>
        <div className="timeline">
          {config.experience.map((item, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__marker">
                <span className="timeline__dot" />
              </div>
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__date">{item.date}</span>
                </div>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__desc">{item.description}</p>
                <div className="timeline__tags">
                  {item.tags.map(t => <span className="chip chip--small" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

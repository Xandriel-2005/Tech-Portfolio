import useReveal from '../hooks/useReveal'

export default function About({ config }) {
  const { personal } = config
  const sectionRef = useReveal()

  return (
    <section id="about" className="section-reveal py-16 md:py-24 px-6 md:px-8 max-w-[1380px] mx-auto" ref={sectionRef}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        {/* Left: Glass Block */}
        <div className="w-full md:w-5/12 relative">
          <div className="absolute inset-0 bg-accent-lavender rounded-full blur-[80px] opacity-40 -z-10 translate-x-4 translate-y-4" />
          <div className="bg-surface/60 border border-border rounded-[32px] p-8 md:p-12 shadow-soft backdrop-blur-xl">
            <span className="font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-accent-blue mb-6 block">
              THE MISSION
            </span>
            <p className="font-sans text-[20px] md:text-[24px] font-medium leading-[1.4] text-text-primary tracking-tight">
              {personal.bio}
            </p>
          </div>
        </div>

        {/* Right: Text Details */}
        <div className="w-full md:w-7/12 flex flex-col gap-6">
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-text-primary tracking-tight leading-none mb-2">
            Engineering with Intent.
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
            My journey in software engineering is driven by a fascination with both the structural elegance of backend systems and the tactile experience of front-end interfaces.
          </p>
          <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-text-secondary">
            Currently pursuing my B.Tech in Computer Science, I spend my time building platforms like VisionOps and TerraVision—exploring the intersections of MLOps, full-stack architecture, and computer vision. I am passionate about continuously learning new technologies and engineering scalable, user-centric systems.
          </p>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="w-12 h-px bg-border" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-text-muted uppercase">
              Current Focus: Distributed Systems & MLOps
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

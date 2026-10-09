import useReveal from '../hooks/useReveal'

export default function Contact({ config }) {
  const { personal } = config
  const sectionRef = useReveal()

  return (
    <section id="contact" className="section-reveal py-16 md:py-24 px-6 md:px-8 max-w-[1380px] mx-auto" ref={sectionRef}>
      
      <div className="relative bg-surface border border-border rounded-[32px] p-6 md:p-16 shadow-soft overflow-hidden">
        {/* Decorative ambient background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-lavender rounded-full blur-[80px] opacity-60 -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[80px] opacity-60 -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
          
          {/* Left: Text */}
          <div className="max-w-xl">
            <span className="block font-mono text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase text-accent-blue mb-4">
              OPEN FOR OPPORTUNITIES
            </span>
            <h2 className="font-sans font-bold text-[32px] sm:text-[40px] md:text-[56px] text-text-primary tracking-tight leading-[1.05] mb-6">
              Let's build something better.
            </h2>
            <p className="font-sans text-[16px] md:text-[19px] leading-relaxed text-text-secondary">
              I'm always open to discussing new projects, internship opportunities, or just having a good technical conversation. My inbox is open.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 md:min-w-[280px]">
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center justify-center gap-3 w-full bg-accent-blue text-surface font-sans text-[14px] font-bold tracking-[0.05em] uppercase px-8 py-5 rounded-[18px] shadow-[0_8px_20px_rgba(36,122,154,0.25)] hover:bg-accent-blue-dark hover:shadow-[0_12px_24px_rgba(36,122,154,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Me
            </a>
            
            <a 
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-surface-muted text-accent-blue-dark font-sans text-[14px] font-bold tracking-[0.05em] uppercase px-8 py-5 rounded-[18px] border border-border shadow-sm hover:bg-white hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            
            {personal.github && (
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-surface-muted text-accent-blue-dark font-sans text-[14px] font-bold tracking-[0.05em] uppercase px-8 py-5 rounded-[18px] border border-border shadow-sm hover:bg-white hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

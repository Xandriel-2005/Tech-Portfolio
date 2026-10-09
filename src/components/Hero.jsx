import Logo from './Logo'

export default function Hero({ config }) {
  const { personal } = config

  return (
    <section id="hero" className="relative pt-[140px] md:pt-[180px] pb-16 md:pb-24 px-6 md:px-8 max-w-[1380px] mx-auto min-h-[90vh] flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-accent-lavender/40 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[500px] h-[500px] bg-surface-muted rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col items-start z-10">
          {/* Eyebrow */}
          <div className="font-mono text-[11px] md:text-[12px] font-semibold tracking-[0.25em] uppercase text-accent-blue mb-6">
            {personal.eyebrow}
          </div>

          {/* Headline */}
          <h1 className="font-sans font-bold text-text-primary leading-[1.05] tracking-[-0.03em] mb-6 md:mb-8 text-[44px] md:text-[64px] lg:text-[76px]">
            <span className="block">{personal.headline[0]}</span>
            <span className="block">
              {personal.headline[1].includes(personal.headlineHighlight) ? (
                <>
                  <span>{personal.headline[1].split(personal.headlineHighlight)[0]}</span>
                  <span className="text-accent-blue">{personal.headlineHighlight}</span>
                  <span>{personal.headline[1].split(personal.headlineHighlight)[1]}</span>
                </>
              ) : (
                <span>{personal.headline[1]}</span>
              )}
            </span>
            <span className="block">{personal.headline[2]}</span>
          </h1>

          {/* Description */}
          <p className="font-sans text-[17px] md:text-[19px] leading-relaxed text-text-secondary max-w-[580px] mb-10">
            {personal.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#skills"
              className="w-full sm:w-auto text-center bg-accent-blue text-surface font-sans text-[13px] font-semibold tracking-[0.05em] uppercase px-8 py-4 rounded-pill shadow-[0_8px_20px_rgba(36,122,154,0.25)] hover:bg-accent-blue-dark hover:shadow-[0_12px_24px_rgba(36,122,154,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              EXPLORE SKILLS
            </a>
            {personal.resumeLink && (
              <a
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-surface-muted text-accent-blue-dark font-sans text-[13px] font-semibold tracking-[0.05em] uppercase px-8 py-4 rounded-pill border border-border shadow-sm hover:bg-white hover:border-accent-blue/30 transition-all duration-300"
              >
                DOWNLOAD RESUME
              </a>
            )}
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 bg-[#EEF2F6] border border-[#D5E1EA] px-5 py-2.5 rounded-pill">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full w-2 h-2 bg-accent-blue"></span>
            </span>
            <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-accent-blue">
              {personal.availability}
            </span>
          </div>
        </div>

        {/* Right: Portrait Panel */}
        <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0">
          <div className="bg-surface rounded-[28px] p-2 md:p-3 border border-border shadow-soft relative z-10 group">
            {/* Inner image container */}
            <div className="bg-surface-muted rounded-[20px] overflow-hidden relative aspect-[4/5] w-full flex items-center justify-center border border-border">
              {/* Massive background blur of the logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <img src="/logo.png" alt="" className="w-full h-full object-cover scale-150 blur-xl" />
              </div>
              <div className="relative z-10 drop-shadow-[0_0_30px_rgba(0,102,255,0.3)]">
                <img src="/logo.png" alt="CG Logo" className="w-48 h-48 md:w-72 md:h-72 object-contain" />
              </div>
            </div>

            {/* Caption Panel */}
            <div className="absolute -left-4 -bottom-4 md:left-6 md:-bottom-6 bg-surface-muted border border-border rounded-[14px] px-5 py-3 shadow-md">
              <span className="font-mono text-[11px] font-bold tracking-[0.15em] text-accent-blue-dark">
                {personal.photoCaption}
              </span>
            </div>
          </div>

          {/* Decorative background element behind portrait */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-surface-muted rounded-[28px] -z-10" />
        </div>
      </div>
    </section>
  )
}

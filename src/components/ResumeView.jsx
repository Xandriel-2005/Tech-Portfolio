import { useEffect } from 'react'

export default function ResumeView() {
  // Ensure we scroll to top when mounting
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePrint = () => {
    const frame = document.getElementById('resume-frame')
    if (frame && frame.contentWindow) {
      frame.contentWindow.print()
    }
  }

  return (
    <div className="h-screen w-full flex flex-col bg-background relative overflow-hidden">
      {/* Floating Toolbar */}
      <div className="absolute top-4 left-4 right-4 z-50 pointer-events-none flex justify-center">
        <div className="glass-panel rounded-pill px-4 py-3 flex items-center justify-between w-full max-w-[800px] shadow-soft pointer-events-auto border border-border">
          
          <a 
            href="#"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-blue font-mono text-[11px] font-bold tracking-[0.1em] uppercase transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </a>

          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-surface text-text-primary hover:text-accent-blue font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-pill border border-border shadow-sm hover:-translate-y-0.5 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print
            </button>
            <a 
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-accent-blue text-surface font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-5 py-2 rounded-pill shadow-sm hover:bg-accent-blue-dark hover:-translate-y-0.5 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF
            </a>
          </div>

        </div>
      </div>

      {/* Embedded Resume */}
      <div className="flex-1 w-full bg-[#E5E5E5] pt-[80px]">
        <iframe 
          id="resume-frame"
          src="/cv.html" 
          title="Resume"
          className="w-full h-full border-none shadow-inner"
        />
      </div>
    </div>
  )
}

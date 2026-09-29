import { useEffect, useRef, useState, useCallback } from 'react'

export default function Hero({ config }) {
  const { personal, terminal } = config
  const [typed, setTyped] = useState('')
  const [showOutput, setShowOutput] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  // ── Typing effect ──
  useEffect(() => {
    const cmd = terminal.command
    let i = 0
    const timer = setInterval(() => {
      if (i < cmd.length) {
        setTyped(cmd.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setCursorVisible(false)
          setShowOutput(true)
        }, 400)
      }
    }, 70)
    return () => clearInterval(timer)
  }, [terminal.command])

  // ── Particle canvas ──
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }

    const create = () => {
      particles = []
      const count = Math.min(Math.floor(canvas.width / 15), 80)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(16,185,129,${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(16,185,129,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    create()
    draw()

    const onResize = () => { resize(); create() }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      const cleanup = initParticles()
      return cleanup
    }
  }, [initParticles])

  return (
    <section id="hero" className="hero">
      <div className="hero__terminal">
        <div className="terminal__bar">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
          <span className="terminal__bar-title">{terminal.user}@{terminal.host}:~</span>
        </div>
        <div className="terminal__body">
          <div className="terminal__line">
            <span className="terminal__path">{terminal.path}</span>
            <span className="terminal__branch">({terminal.branch})</span>
            <span className="terminal__prompt">$</span>
            <span className="terminal__command">{typed}</span>
            {cursorVisible && <span className="terminal__cursor">█</span>}
          </div>
          <div className={`terminal__output${showOutput ? ' visible' : ''}`}>
            <div className="hero__intro">
              <p className="hero__greeting">Hey, I'm</p>
              <h1 className="hero__name">{personal.name}</h1>
              <p className="hero__tagline">{personal.tagline}</p>
              <p className="hero__sub">{personal.roles.join(' · ')}</p>
            </div>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                <span className="btn__glyph">$</span> view_projects
              </a>
              <a href="#contact" className="btn btn--ghost">
                <span className="btn__glyph">&gt;</span> get_in_touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__grid" aria-hidden="true" />
      <canvas ref={canvasRef} className="hero__particles" aria-hidden="true" />
    </section>
  )
}

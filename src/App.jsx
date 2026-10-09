import { useState, useEffect } from 'react'
import config from './siteConfig'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Exploration from './components/Exploration'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeView from './components/ResumeView'

export default function App() {
  const [currentView, setCurrentView] = useState('portfolio')

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#resume') {
        setCurrentView('resume')
      } else {
        setCurrentView('portfolio')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentView === 'resume') {
    return <ResumeView />
  }

  return (
    <div className="bg-background text-text-primary min-h-screen font-sans selection:bg-accent-blue selection:text-surface">
      <Nav config={config} />
      <Hero config={config} />
      <About config={config} />
      <Experience config={config} />
      <Projects config={config} />
      <Exploration config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </div>
  )
}

import config from './siteConfig'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav config={config} />
      <Hero config={config} />
      <About config={config} />
      <Projects config={config} />
      <Skills config={config} />
      <Experience config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </>
  )
}

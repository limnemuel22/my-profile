import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Seo from './components/Seo'
import Skills from './components/Skills'

export default function App() {
  return (
    <div id="profile-capture" className="relative min-h-svh bg-ink">
      <Seo />
      <div className="stage pdf-hide" aria-hidden="true" />
      <div className="scanlines pdf-hide" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

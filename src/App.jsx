import './App.css'
import SiteHeader from './components/SiteHeader.jsx'
import Ticker from './components/Ticker.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Work from './sections/Work.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Ticker />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

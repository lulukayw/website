import Arrow from '../components/Arrow.jsx'
import HeroPortrait from '../components/HeroPortrait.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-shade" />
      <div className="hero-content page-gutter">
        <div className="hero-main">
          <h1 id="hero-title">HELLO, I'M<br /><em>LULU WILSON</em>.</h1>
          <HeroPortrait />
        </div>
        <div className="hero-bottom">
          <p>Computer science & mathematics student exploring how thoughtful software can make an impact.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><Arrow /></a>
        </div>
      </div>
      <span className="hero-side-note">PORTFOLIO / 2026</span>
    </section>
  )
}

import Arrow from '../components/Arrow.jsx'

export default function About() {
  return (
    <section className="intro section-pad" id="about" aria-labelledby="about-title">
      <div className="intro-grid">
        <h2 id="about-title">A little about <em>me.</em></h2>
        <div className="intro-copy">
          <p className="lead">I like problems that invite both logical thinking and a little imagination.</p>
          <p>I'm a fourth-year student at the University of Virginia pursuing a B.S. in Computer Science and a B.A. in Mathematics. I'm also taking graduate-level coursework through UVA's Accelerate program, with plans to complete an M.S. in Computer Science in the 2027–2028 academic year.</p>
          <p>I'm especially interested in full-stack development and cybersecurity. Systems, algorithms, and cryptographic protocols have taught me to think carefully about reliability and security. Outside of class, you'll find me in nature, crocheting, or participating in theatre with UVA's First Year Players.</p>
          <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Read my résumé <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  )
}

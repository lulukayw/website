import Arrow from '../components/Arrow.jsx'

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
      <div className="contact-bottom">
        <p>I'd love to hear about an idea, opportunity, or interesting problem.</p>
        <a href="mailto:rjb7gs@virginia.edu" className="contact-link">Say hello <Arrow diagonal /></a>
      </div>
    </section>
  )
}

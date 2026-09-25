import Arrow from './Arrow.jsx'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top">Lulu Wilson<span>.</span></a>
      <p>Made with curiosity in Charlottesville, VA.</p>
      <div className="footer-links">
        <a href="https://github.com/lulukayw" target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
        <a href="https://www.linkedin.com/in/lulu-wilson/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
        <a href="mailto:rjb7gs@virginia.edu">Email <Arrow diagonal /></a>
      </div>
      <span className="footer-copy">© {new Date().getFullYear()} Lulu Wilson</span>
    </footer>
  )
}

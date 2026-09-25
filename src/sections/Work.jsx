import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Work() {
  return (
    <section className="work section-pad" id="work" aria-labelledby="work-title">
      <div className="section-heading-row">
        <h2 id="work-title">Selected <em>work.</em></h2>
        {/* <p>A few things I've made.</p> */}
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  )
}

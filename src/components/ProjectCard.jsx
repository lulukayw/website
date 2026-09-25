import Arrow from './Arrow.jsx'

export default function ProjectCard({ project }) {
  const linkText = project.linkText ?? 'VIEW ON GITHUB'
  const linkLabel = project.linkText ? `Visit the ${project.title} site` : `View ${project.title} on GitHub`

  return (
    <article className="project-card">
      <div className="project-meta">
        <span>{project.number} / {project.category}</span>
        <span>{linkText}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3>
        <a className="project-arrow" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={linkLabel}>
          <Arrow diagonal />
        </a>
      </div>
      <p className="project-summary">{project.summary}</p>
      <p className="project-detail">{project.detail}</p>
    </article>
  )
}

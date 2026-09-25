import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
      <div className="experience-grid">
        <h2 id="experience-title">Where I've <em>worked.</em></h2>
        <div className="experience-list">
          {experience.map((job) => (
            <div key={job.org}>
              <h3>{job.org}</h3>
              <div className="experience-role"><span>{job.role}</span><span>{job.dates}</span></div>
              <p>{job.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

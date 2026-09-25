import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="skills section-pad" id="skills" aria-labelledby="skills-title">
      <div className="skills-grid">
        <h2 id="skills-title">What I work <em>with.</em></h2>
        <div className="skill-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={group.label}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.label}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

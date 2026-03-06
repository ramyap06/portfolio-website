const projects = [
  { icon: '🍹', title: 'BarBabes', desc: 'Won 1st Place Overall + Best Use of AI powered by Reach Capital at InnovateHer 2026. An app that makes college nightlife and drinking safer.', link: 'https://github.com/Azeemme/BarBabes' },
  { icon: '💪', title: 'Boiler Gains', desc: 'A MyFitnessPal-styled nutrition app helping students maximize nutrition goals at Purdue Dining Halls.', link: 'https://github.com/ramyap06/boiler-gains' },
  { icon: '🧬', title: 'Immune ML Research', desc: 'Combining a multi-model ML framework to construct a robust immune signature to predict breast cancer recurrence.', link: 'https://github.com/ramyap06/kong-lab-ml-project' },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <a className="project-card" key={p.title} href={p.link} target="_blank" rel="noreferrer">
            <span className="project-icon">{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
      <div className="projects-footer">
        <a href="https://github.com/ramyap06" className="btn btn--projects">View All Projects →</a>
      </div>
    </section>
  )
}
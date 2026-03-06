const projects = [
  { icon: '🌸', title: 'Bloom Journal', desc: 'A beautiful journaling app with kawaii vibes and mindful prompts.' },
  { icon: '☁️', title: 'CloudByte', desc: 'Cloud storage made simple, fast, and delightful to use.' },
  { icon: '🎨', title: 'Palette Studio', desc: 'Color palette generator designed for creative minds everywhere.' },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <span className="project-icon">{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
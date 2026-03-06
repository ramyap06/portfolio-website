const skillCols = [
  { heading: 'Frontend', tags: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'] },
  { heading: 'Backend', tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
  { heading: 'Tools & Others', tags: ['Git', 'Docker', 'Figma', 'Jest', 'AWS', 'CI/CD'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCols.map((col) => (
          <div className="skill-col" key={col.heading}>
            <h3>{col.heading}</h3>
            <div className="tags">
              {col.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
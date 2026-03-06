const skillCols = [
  { heading: 'Languages', tags: ['Python', 'C++/C', 'Java', 'TypeScript/JavaScript', 'SQL', 'R', 'HTML/CSS', 'Bash'] },
  { heading: 'AI & ML', tags: ['TensorFlow', 'scikit-learn', 'OpenCV', 'MediaPipe', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'polars', 'scanpy'] },
  { heading: 'Frontend', tags: ['React.js', 'TailwindCSS'] },
  { heading: 'Backend', tags: ['FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker'] },
  { heading: 'Developer Tools', tags: ['Linux', 'CI/CD', 'Arduino', 'Jira', 'Cursor', 'Claude', 'JUnit', 'Pytest'] },
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
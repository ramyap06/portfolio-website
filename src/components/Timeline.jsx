// TODO: confirm exact dates — years are placeholders spread across the college timeline.
// TODO: add links/repos for entries below that don't have one yet, and a real description for PWSense.
const timelineItems = [
  {
    type: 'milestone',
    date: '2022',
    title: 'Admitted to Purdue University',
    subtitle: 'Computer Science',
    desc: 'Got admitted to Purdue for Computer Science — the start of it all.',
  },
  {
    type: 'milestone',
    date: '2022',
    title: 'Java Prep',
    subtitle: 'Getting ready for CS 180',
    desc: 'Practiced basic Java problems to get ready for my first CS class.',
    skills: ['Java'],
  },
  {
    type: 'project',
    date: '2022',
    title: 'Swap It',
    subtitle: 'CS 180 group project',
    desc: 'My first full-stack app, built with Java and Java Swing/FX — a social media app with a newsfeed feature, a real-time server built on TCP/IP principles, and a user-friendly, seamless GUI.',
    skills: ['Java', 'Java Swing/FX', 'TCP/IP'],
  },
  {
    type: 'project',
    date: '2022',
    title: 'DNA Sequence Analyzer',
    subtitle: 'First personal project',
    desc: 'The first time I took what I’d learned in class and applied it to a project of my own interest.',
    skills: ['Java'],
  },
  {
    type: 'project',
    date: '2023',
    title: 'Custom Memory Allocator',
    subtitle: 'First attempt',
    desc: 'Started building a custom memory allocator from scratch.',
    skills: ['C'],
  },
  {
    type: 'project',
    date: '2023',
    title: 'Dino Game',
    subtitle: 'Recreating a childhood favorite',
    desc: 'Rebuilt the offline dino game to prove to myself I could create fun things — taught me a bit about game-making and visuals in programming.',
  },
  {
    type: 'project',
    date: '2023',
    title: 'Tic-Tac-Toe',
    subtitle: 'From scratch',
    desc: 'The first time properly learning HTML, CSS, and JavaScript since middle school — built a tic-tac-toe board from scratch to show my skills.',
    skills: ['HTML/CSS', 'JavaScript'],
  },
  {
    type: 'milestone',
    date: '2023',
    title: 'Foundation for React',
    desc: 'This gave me a good foundation from which I learned React and used my skills on personal projects and hackathons.',
    skills: ['React.js'],
  },
  {
    type: 'project',
    date: '2023',
    title: 'Stanford Open Policing Data Analysis',
    subtitle: 'EDA deep dive',
    desc: 'My first real introduction to exploratory data analysis, in prep for the BoilerExams data analyst role.',
    skills: ['polars', 'matplotlib'],
  },
  {
    type: 'experience',
    date: '2023',
    title: 'BoilerExams',
    subtitle: 'Data Analyst',
    desc: 'Worked as a data analyst using polars and seaborn.',
    skills: ['polars', 'seaborn'],
  },
  {
    type: 'project',
    date: '2023',
    title: 'Purdue Mind',
    subtitle: 'Open source & computer vision',
    desc: 'Worked with OpenCV and contributed to open source project usage.',
    skills: ['OpenCV'],
  },
  {
    type: 'project',
    date: '2024',
    title: 'Data Mine Backend SPAC Package',
    desc: 'My introduction to working within a developer’s past codebase, and using Git properly — PRs, code reviews, and merging branches.',
    skills: ['Git'],
  },
  {
    type: 'experience',
    date: '2024',
    title: 'AidenAI',
    subtitle: 'Internship',
    desc: 'Software engineering internship at AidenAI.',
  },
  {
    type: 'project',
    date: '2024',
    title: 'Sleep Pod',
    subtitle: 'Hack the Future',
    desc: 'Built at the Hack the Future hackathon.',
  },
  {
    type: 'project',
    date: '2024',
    title: 'Custom Malloc',
    subtitle: 'Systems Programming class project',
    desc: 'Finished building a custom malloc from scratch as my systems programming class project.',
    skills: ['C'],
  },
  {
    type: 'experience',
    date: '2025',
    title: 'Kong Lab',
    subtitle: 'Immune Survival Analysis',
    desc: 'Proposed and started an immune survival analysis research project.',
    link: 'https://github.com/ramyap06/kong-lab-ml-project',
  },
  {
    type: 'project',
    date: '2026',
    title: 'BarBabes',
    subtitle: '🏆 1st Place Overall + Best Use of AI, InnovateHer 2026',
    desc: 'An app that makes college nightlife and drinking safer, powered by Reach Capital.',
    skills: ['React.js', 'MongoDB', 'CI/CD'],
    link: 'https://github.com/Azeemme/BarBabes',
  },
  {
    type: 'project',
    date: '2026',
    title: 'PWSense',
    desc: 'TODO: add a description for PWSense.',
  },
  {
    type: 'project',
    date: '2026',
    title: 'Shell Project',
    subtitle: 'From scratch',
    desc: 'Finished building a shell from scratch.',
  },
  {
    type: 'project',
    date: '2026',
    title: 'HTTP Server',
    subtitle: 'From scratch',
    desc: 'Finished building an HTTP server from scratch.',
  },
  {
    type: 'experience',
    date: '2026',
    title: 'Manaaki Tech',
    subtitle: 'Internship',
    desc: 'TODO: add a description for the Manaaki Tech internship.',
  },
]

const typeIcon = { experience: '💼', project: '🚀', milestone: '🎓' }

export default function Timeline() {
  return (
    <>
      <blockquote className="journey-quote">
        <p>"All big things come from small beginnings."</p>
        <cite>— James Clear, Atomic Habits</cite>
      </blockquote>
      <section id="journey" className="journey">
        <h2 className="section-title">My Journey</h2>
        <div className="journey-track">
          {timelineItems.map((item, i) => (
            <div
              className={`journey-item ${i % 2 === 0 ? 'journey-item--left' : 'journey-item--right'}`}
              key={item.title}
            >
              <div className="journey-card">
                <span className="journey-date">{typeIcon[item.type]} {item.date}</span>
                <h3>{item.title}</h3>
                {item.subtitle && <p className="journey-subtitle">{item.subtitle}</p>}
                <p>{item.desc}</p>
                {item.skills && (
                  <div className="tags journey-skills">
                    {item.skills.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="journey-link">View →</a>
                )}
              </div>
              <span className="journey-dot" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

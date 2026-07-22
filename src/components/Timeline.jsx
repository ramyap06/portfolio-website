const timelineItems = [
  {
    type: 'milestone',
    date: 'August 2024',
    title: 'Admitted to Purdue University',
    subtitle: 'Computer Science',
    desc: 'With no real experience or understanding of computer science and all that I was about to explore, I took a leap of faith and committed to Purdue for CS.',
  },
  {
    type: 'milestone',
    date: 'August 2024',
    title: 'Java Prep',
    subtitle: 'Getting ready for CS 180',
    desc: 'In preparation for my first CS class, CS 180 Object Oriented Programming in Java, I learned the basics of Java syntax and practiced simple algorithmic problems, hoping it would prepare me for what I was about to endure.',
    skills: ['Java', 'Algorithms'],
    link: 'https://github.com/ramyap06/Java-Practice',
  },
  {
    type: 'project',
    date: 'November 2024',
    title: 'Swap It',
    subtitle: 'CS 180 group project',
    desc: "This CS 180 group project, implemented using Java's TCP/IP socket and server packages along with Java Swing and JavaFX for the GUI, was the first full stack app I ever made. This class and project gave me a hands on understanding of larger software concepts such as networking systems, separating a client and server, and persistence of data.",
    skills: ['Java Swing', 'JavaFX', 'TCP/IP', 'Database Persistence'],
    link: 'https://github.com/ramyap06/Swap-It',
  },
  {
    type: 'project',
    date: 'December 2024',
    title: 'DNA Sequence Analyzer',
    subtitle: 'First personal project',
    desc: 'Using skills learned from CS 180, this was also built with Java, Java Swing, and JavaFX. Though it was fairly simple to make, its functions included taking in a DNA string input and outputting the alternate sequence, the count of each letter, and the corresponding RNA sequence. It represents my first venture toward taking the skills I had learned and applying them to a project idea I came up with and found interesting.',
    skills: ['Java Swing', 'JavaFX'],
    link: 'https://github.com/ramyap06/dna-seq-analyzer',
  },
  {
    type: 'project',
    date: 'March 2025 - February 2026',
    title: 'Custom Memory Allocator',
    subtitle: 'Revived and completed as part of CS 252 Systems Programming',
    desc: 'Freshman year I took a keen interest in C as I learned about pointers and memory allocation in CS 240 Programming in C. That led me to try implementing a memory allocator from scratch before I had even learned what a memory allocator was. With the knowledge, ability, and time I had as a freshman, I made something that closely threaded the path toward a custom memory allocator. In sophomore year, my systems programming class gave me the same project, finally letting me come full circle and complete what my eager younger self had once started.',
    skills: ['C', 'Low-Level Programming'],
    link: 'https://github.com/ramyap06/custom-memory-allocator',
  },
  {
    type: 'experience',
    date: 'August 2024 - May 2025',
    title: 'Purdue MIND',
    subtitle: 'fNIR TBI Prediction',
    desc: 'A biomedical engineering club I joined as a freshman, working on a project involving a neurological device that scans blood oxygen levels in the brain and uses classical machine learning models to predict traumatic brain injury. This project gave me a broader look into the use of computer science in fields other than software engineering and the various areas of computer science I could explore.',
    skills: ['Python', 'Machine Learning', 'pandas', 'numpy', 'matplotlib', 'scikit-learn', 'mne'],
    link: 'https://github.com/khushichoksi05/neurotech_fnir_mind',
  },
  {
    type: 'project',
    date: 'May 2025',
    title: 'Dino Game',
    subtitle: 'Recreating a childhood favorite',
    desc: 'With the motivation to explore my interests in software, I tried recreating a nostalgic game to dip my hands into game development. Using pygame, I implemented the Chrome dino game, using screenshots of icons from the game itself to make the dino character and obstacles. This even taught me a little about the physics behind game dev and realistic movement, which I found interesting.',
    skills: ['Python', 'Game Development', 'pygame'],
    link: 'https://github.com/ramyap06/dino-game',
  },
  {
    type: 'project',
    date: 'June 2025',
    title: 'Tic Tac Toe',
    subtitle: 'From scratch',
    desc: "This was my first time properly learning HTML, CSS, and JavaScript since middle school. Making a tic tac toe board from scratch using the legacy system of HTML, CSS, and JS gave me a good foundation, one that has upheld me as new frameworks popularize and new platforms vary between companies. In fact, learning React a month after this project was much smoother than jumping straight into what was trending. This project represents the philosophy I still stick by: reinventing the wheel for the purpose of learning and building a solid base to ground you.",
    skills: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/ramyap06/tic-tac-toe',
  },
  {
    type: 'project',
    date: 'August 2025',
    title: 'Stanford Open Policing Data Analysis',
    subtitle: 'EDA deep dive',
    desc: 'Using polars, numpy, and matplotlib, this project served as my first real introduction to exploratory data analysis. It was intended as a preliminary test of my abilities while applying to the data analytics team of a popular Purdue-based exam prep website called BoilerExams. Among the many struggles I overcame here was pushing through the fear of not knowing or having enough experience, and on the technical side, finding optimized ways to view information about the data, since the dataset was so large it couldn’t be viewed on its own.',
    skills: ['Python', 'EDA', 'polars', 'numpy', 'matplotlib'],
    link: 'https://github.com/ramyap06/stanford-open-policing-data-analysis',
  },
  {
    type: 'experience',
    date: 'August 2025 - December 2025',
    title: 'BoilerExams',
    subtitle: 'Data Analyst',
    desc: 'Using mainly Python data libraries including polars, numpy, matplotlib, and seaborn, I got to work with real data, build out a study, and answer my own questions using data. My work focused on finding whether there was an optimal time window in which students on average achieve the best performance on math exams. This experience exposed me to the messy and chaotic nature of data analysis that’s commonly talked about but rarely seen in neatly packaged Kaggle datasets and solutions.',
    skills: ['Python', 'EDA', 'polars', 'numpy', 'matplotlib', 'seaborn'],
  },
  {
    type: 'experience',
    date: 'August 2025 - May 2026',
    title: 'Purdue MIND',
    subtitle: 'Flexor CTS Glove App',
    desc: 'Yet again, this club gave me a perspective into the world of software separate from traditional software engineering, as I dabbled in using OpenCV and Google Mediapipe for a real, solvable problem: creating a rehabilitation app for patients with Carpal Tunnel Syndrome. Here I really honed the confidence, problem solving, and quick learning skills I had built over the past smaller projects to collaborate with my teammates and make this product into a real possibility.',
    skills: ['Python', 'OpenCV', 'Google Mediapipe'],
    link: 'https://github.com/esmyla/MIND-CTS-Software',
  },
]

const typeIcon = { experience: '💼', project: '🚀', milestone: '🎓' }

export default function Timeline() {
  return (
    <>
      <blockquote className="journey-quote">
        <p>"All big things come from small beginnings."</p>
        <cite>James Clear, Atomic Habits</cite>
      </blockquote>
      <section id="journey" className="journey">
        <h2 className="section-title">My Journey</h2>
        <div className="journey-track">
          {timelineItems.map((item, i) => (
            <div
              className={`journey-item ${i % 2 === 0 ? 'journey-item--left' : 'journey-item--right'}`}
              key={item.title + item.date}
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

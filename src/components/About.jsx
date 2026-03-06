import me from '../assets/me.jpeg'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-photo">
        <div className="polaroid">
          <img src={me} alt="me" className="polaroid-img polaroid-img--sm" />
          <p className="polaroid-caption">that's me! ♡</p>
        </div>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a full-stack developer who enjoys building clean, intuitive applications. I'm particularly interested in technology that intersects with biology and healthcare, where good software can have real-world impact. I also spend a lot of time thinking about design and how thoughtful aesthetics can make complex tools easier and more enjoyable to use. 💖
        </p>
      </div>
    </section>
  )
}

export default About

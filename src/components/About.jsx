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
          I'm a full-stack developer with a passion for creating beautiful,
          user-friendly applications. When I'm not coding, you'll find me
          exploring new design trends, sipping matcha lattes, and bringing
          kawaii aesthetics into the tech world. I believe technology should
          be both powerful and delightful! 💖
        </p>
      </div>
    </section>
  )
}

export default About

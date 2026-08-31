
import profileImage from './assets/Kajen.jpeg';

function AboutMe() {
  return (
    <>


      <section className="hero-section" id="home">
        <div className="container">
          <img src={profileImage} alt="Kajen Gnani" className="profile-img" />
          <h1>Kajen Gnani</h1>
          <p className="hero-kicker">Web developer in the making</p>
          <p className="hero-intro">I build thoughtful digital experiences with curiosity, clarity, and a little bit of creative energy.</p>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p>
              Hello! I'm Kajen Gnani, a passionate young web developer with a keen
              interest in creating dynamic and user-friendly web applications. I
              have a strong foundation in HTML, CSS, JavaScript, and various modern
              frameworks. My goal is to build engaging digital experiences that make
              a difference.
            </p>
            <p>
              I am a motivated high school student seeking future opportunities in
              software development. I enjoy solving problems, learning new
              programming skills, and working with others to create useful
              technology. My goal is to become a Software Developer who builds
              innovative applications that improve people's lives.
            </p>
            <p>
              I also have a strong interest in soccer and enjoy playing the sport in
              my free time. I believe that teamwork, discipline, and perseverance
              learned from sports can be applied to my work in technology and
              development.
            </p>
            <p>
              Feel free to explore and learn more about me through the navigation
              menu above.
            </p>
          </div>
          <div className="skill-row">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Problem solving</span>
          </div>
          <p className="contact-note" id="contact">Open to learning, collaborating, and building something useful.</p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
    
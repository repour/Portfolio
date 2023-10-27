import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>+50 Completed</small>
            </article>
          </div>
          <p>
          Over the past 5 years, building upon my educational background, I have been working in content creation. However, my personal interest in programming compelled me to learn and advance in this field. I have been diligently trying and practicing daily to upgrade my knowledge in this field. And now, after more than one year, I can say that I'm on the right path, and my life is just now beginning.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
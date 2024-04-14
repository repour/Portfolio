import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
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
          As a front-end developer with more than two years of experience, I specialize in crafting dynamic user interfaces using React.js, along with Tailwind CSS, Styled Components, and Sass. Passionate about delivering seamless experiences, I combine creativity with technical expertise to produce innovative solutions. Collaborative and adaptable, I thrive in team environments and am committed to continual learning to stay at the forefront of web development trends.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

import './services.css'
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container__service">

        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Development Frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Version Control By Github</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Animation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Article Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Copywriting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Scriptwriting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Translation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
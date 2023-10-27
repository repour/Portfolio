import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const frontSkills = [
  { 'name': "HTML", "level": "Experienced" },
  { 'name': "CSS", "level": "intermediate" },
  { 'name': "JavaScript", "level": "Experienced" },
  { 'name': "SASS", "level": "Experienced" },
  { 'name': "Tailwind", "level": "basic" },
  { 'name': "React", "level": "Experienced" },
];
const generalSkills = [
  { 'name': "CopyWriter", "level": "Experienced" },
  { 'name': "Creative writing", "level": "Experienced" },
  { 'name': "Photoshop", "level": "intermediate" },
  { 'name': "Problem-Solving", "level": "Experienced" },
  { 'name': "Management", "level": "Experienced" },
]


const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontSkills.map((skill) => {
                return (
                  <article key={skill.name} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="experience__general">
          <h3>Soft And Other Skills</h3>
          <div className="experience__content">
            {
              generalSkills.map((skill) => {
                return (
                  <article key={skill.name} className="experience__details">
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{skill.name}</h4>
                      <small className="text-light">{skill.level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
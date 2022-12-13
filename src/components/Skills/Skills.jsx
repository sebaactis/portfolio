import { skillsObj } from "./SkillsObj"

const Skills = () => {
  return (
    <div>
      <h1 className="skillTitle" id="skills"> SKILLS </h1>
      <div className="skillsContainer">

        {
          skillsObj.map((skill) => {
            return (
              <div className="cards" key={skill.id} >
                <img src={skill.icon} className="skillImg" />
                <h1 className="skillName">{skill.nombre}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
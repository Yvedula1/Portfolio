import React from "react";
//import "./Skills.css"; // Import styles

const skills = [
  { name: "React", img: "/images/react.png" },
  { name: "JavaScript", img: "/images/javascript.png" },
  { name: "Java", img: "/images/java.png" },
  { name: "Python", img: "/images/python.png" },
  //{ name: "Node.js", img: "/images/nodejs.png" },
  { name: "AWS", img: "/images/aws.png" },
 // { name: "Spring Boot", img: "/images/springboot.png" },
  { name: "SQL", img: "/images/sql.png" }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              <img src={skill.img} alt={skill.name} />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

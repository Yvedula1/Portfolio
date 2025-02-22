import React from "react";
//import "./Education.css"; // Import styles

const educationData = [
  {
    university: "George Mason University",
    degree: "Master of Science in Computer Science",
    duration: "2023 — 2024",
    logo: "/images/gmu.png"
  },
  {
    university: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Electronics & Communications",
    duration: "2016 — 2020",
    logo: "/images/jntu.png"
  }
];

const Education = () => {
  return (
    <section id="education" className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <img src={edu.logo} alt={edu.university} />
            </div>
            <h3 className="education-university">{edu.university}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

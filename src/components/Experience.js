import React from "react";
//import "./Experience.css";

const experiences = [
  {
    company: "Syndex.ai",
    role: "Frontend Developer (Intern)",
    duration: "2023 — Present",
    description: [
      "Led the development of Syndex.ai, a media platform utilizing ReactJS and Tailwind.",
      "Implemented user authentication and integrated social sign-ups.",
      "Optimized page load times by 15% through scalable solutions.",
      "Developed authentication and content-fetching APIs using .NET.",
      "Implemented Jest & React Testing Library for UI reliability."
    ],
    //logo: "/images/syndex.png"
  },
  {
    company: "Infosys",
    role: "Senior Systems Engineer",
    duration: "2022 — 2023",
    description: [
      "Developed a full-stack dashboard for server monitoring using React, Spring Boot, and PostgreSQL.",
      "Designed reusable React components, reducing development time by 20%."
    ],
    //logo: "/images/infosys.png"
  },
  {
    company: "Infosys",
    role: "Systems Engineer",
    duration: "2021 — 2022",
    description: [
      "Developed and customized ABAP programs and interfaces aligning with SAP modules.",
      "Optimized database structures, improving system performance by 20%.",
      "Automated key business processes, reducing manual intervention by 30%."
    ],
    //logo: "/images/infosys.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2 className="experience-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            {/* Date */}
           

            {/* Center timeline dot */}
            
             
            

            {/* Experience Card */}
            <div className="timeline-content">
              <div className="experience-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <h5>{exp.duration}</h5>
                <ul className="experience-description">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

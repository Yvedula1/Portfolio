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
      "Developed and architected a Supplier & Parts Management Portal using Angular, TypeScript, and SQL, allowing real-time tracking of supplier performance and order processing, improving procurement efficiency by 29%.",
      "Optimized search and filtering for supplier records, reducing query response time from 6.4s to 2.2s for 500K+ supplier and parts entries, ensuring faster data retrieval.",
      "Created interactive dashboards with bar charts for order status, line graphs for supplier delivery performance, and heatmaps for issue tracking, reducing manual reporting efforts by 58%"
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

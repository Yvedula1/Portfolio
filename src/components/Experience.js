import React from "react";
//import "./Experience.css";

const experiences = [
  {
    company: "Tantv Studios",
    role: "Software Engineer",
    duration: "2024-2025",
    Location: "Maryland, USA",
    description: [
      "Engineered a scalable microservices-based media platform connecting creators and publishers, using Next.js, Bootstrap, and .NET APIs, improving UI responsiveness and backend efficiency.",
      "Applied design patterns and architectural principles to optimize system reliability, resulting in a 19% reduction in backend response times through caching and API refactoring.",
      "Integrated a chatbot using OpenAI API, enabling real-time user interaction and reducing manual searches by 63% for content and improving accessibility.",
      "Led secure system design by implementing OAuth 2.0 and JWT for role-based access and API protection."
      
    ],
    //logo: "/images/syndex.png"
  },
  {
    company: "Infosys",
    role: "Senior Systems Engineer",
    duration: "2022 — 2023",
    Location: "Hyderabad, India",
    description: [
      "Designed and coded a real-time server monitoring and alerting system using React and Spring Boot, enabling early detection of system failures and reducing incident response time",
      "Built interactive dashboards with real-time system metrics and integrated logging tools to monitor CPU usage, memory consumption",
      "Optimized PostgreSQL database queries with indexing and partitioning, reducing query latency by 30% for high-volume analytics dashboards."
    ],
    //logo: "/images/infosys.png"
  },
  {
    company: "Infosys",
    role: "Systems Engineer",
    duration: "2021 — 2022",
    Location: "Hyderabad, India",
    description: [
      "Developed and tailored 15+ ABAP programs, reports, and interfaces to align with business requirements, ensuring integration with SAP modules.",
      "Restructured database designs, improving system performance and data retrieval efficiency by 20%.",
      "Improved SAP transactions using BADI and BAPI within the Enhancement Framework, boosting efficiency by 15%."
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

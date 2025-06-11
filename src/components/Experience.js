import React from "react";
//import "./Experience.css";

const experiences = [
  {
    company: "Tantv Studios",
    role: "Software Engineer",
    duration: "2024-2025",
    Location: "Maryland, USA",
    description: [
      "Engineered a scalable, microservices-based media platform using Next.js and .NET Core REST APIs, improving UI responsiveness and backend throughput.",
      "Constructed 20+ modular and reusable frontend components in Next.js using HTML5, CSS3, and JavaScript (ES6+) with cross-device compatibility which reduced page bounce rate by 28%. ",
      "Deployed an AI-driven chatbot leveraging OpenAI API, achieving a 63% increase in user session duration through personalized content recommendations and prompt-based content generation.",
      "Managed content workflows via WordPress CMS, automating updates and reducing editorial effort by 40%.",
      "Developed 25+ secure, scalable .NET Core backend APIs enhanced with JWT-based authentication middleware and facilitated comprehensive documentation and testing using Swagger."
      
    ],
    //logo: "/images/syndex.png"
  },
  {
    company: "Infosys",
    role: "Senior Systems Engineer",
    duration: "2021 — 2023",
    Location: "Hyderabad, India",
    description: [
      "Designed a real-time telemetry dashboard using React (Hooks + Context API) and Spring Boot, enabling live monitoring of vehicle health, location, and alerts for 10,000+ global fleet units.",
      "Orchestrated Spring Boot microservices to capture and process engine diagnostics (RPM, oil temp, battery voltage), and integrated Kafka for real-time alert streaming.",
      "Implemented smart fault detection and alerting mechanisms, reducing unplanned maintenance by 20% through early detection of critical issues.",
      "Optimized PostgreSQL queries using indexing, partitioning, and async logic, cutting dashboard latency by 30% across 100K+ data records.",
      "Containerized backend services using Docker and automated CI/CD pipelines with Jenkins, streamlining delivery to QA and staging environments.",
      "Deployed services on AWS (EC2, Lambda, RDS, S3) with built-in monitoring and alerting to ensure observability, scalability, and system uptime."
    ],
    //logo: "/images/infosys.png"
  },
  
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

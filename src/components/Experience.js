import React from "react";
//import "./Experience.css";

const experiences = [
  {
    company: "Bank of America",
    role: "Software Developer",
    duration: "2024-Present",
    Location: "VA, USA",
    description: [
      "Designed and implemented a dynamic onboarding dashboard using React.js (Hooks, Context API) and Tailwind CSS, enabling multi-step verification flows and improving UI rendering speed across 1,200+ daily user sessions. a scalable, microservices-based media platform using Next.js and .NET Core REST APIs, improving UI responsiveness and backend throughput.",
      "Developed RESTful microservices with Spring Boot, integrating real-time biometric and address validation APIs and establishing secure data pipelines for KYC and AML workflows with J2EE-compliant authorization layers.  20+ modular and reusable frontend components in Next.js using HTML5, CSS3, and JavaScript (ES6+) with cross-device compatibility which reduced page bounce rate by 28%. ",
      "Developed event-driven services using Apache Kafka and Spring AOP to decouple fraud detection and client verification, enabling high-throughput and seamless service communication. an AI-driven chatbot leveraging OpenAI API, achieving a 63% increase in user session duration through personalized content recommendations and prompt-based content generation.",
      "Enabled secure cross-platform API communication through AWS Lambda, integrating with internal systems and RDS clusters, contributing to a 19% reduction in inter-service latency during critical data handoffs.  workflows via WordPress CMS, automating updates and reducing editorial effort by 40%.",
      "Engineered MongoDB backend workflows, optimizing indexing and reducing query latency by 40ms, resulting in a 22% boost in identity resolution performance. .NET Core backend APIs enhanced with JWT-based authentication middleware and facilitated comprehensive documentation and testing using Swagger."
      
    ],
    //logo: "/images/BOFA.png"
  },
  {
    company: "Accenture",
    role: "Full Stack Developer",
    duration: "2020-2022",
    Location: "Hyderabad, India",
    description: [
      "Developed responsive loan application workflows using Angular 12 and styled interfaces with Bootstrap and SASS, supporting 3 regional languages, and enhancing accessibility for 5,000+ users across regions a real-time telemetry dashboard using React (Hooks + Context API) and Spring Boot, enabling live monitoring of vehicle health, location, and alerts for 10,000+ global fleet units.",
      "Built approval logic layers using Spring MVC and Hibernate, orchestrating business rules for mortgage underwriting while ensuring object-relational mapping efficiency for complex relational datasets. ",
     "Integrated real-time credit scoring APIs using RESTful API and transformed data using Jackson (JSON/XML), reducing data fetch time by over 280ms per request and aligning with third-party SLA requirements.",
     "Optimized stored procedures in Oracle SQL using PL/SQL, resulting in a 17% decrease in query response time and improved batch processing throughput in high-volume banking transactions. ",
    "Designed and consumed document upload modules via Servlets and JSP, leveraging JSTL for dynamic rendering and enabling digital documentation support across 14 different loan types. "

    ],
    //logo: "/images/accenture.png"
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

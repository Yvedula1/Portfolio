import React from "react";
//import "./Projects.css"; // Import styles

const projectsData = [
  {
    title: "Student Feedback Management System",
    duration: "Jan 2024-May 2024",
    techStack: ["React.js", "RESTful API", ".JavaScript", "JSON", "[AWS S3 & EC2"],
    description: [
      "Architected robust web applications using React, Angular and Spring Boot, hosted on AWS (Amazon S3 and EC2).",
      "Devised reusable components and RESTful APIs for CRUD operations",
      "Combined MySQL with JPA and JDBC for secure and efficient database management.",
      "Orchestrated interactive survey forms using JavaScript, AJAX and JSON."

    ],
    image: "/images/syndex.png",
    github: "https://github.com/Yvedula1/Projects/tree/main/Full-stack%20Web%20Application%20for%20Student%20Feedback%20Management%20System-React",
    color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
  },
  {
    title: "Airline Management System",
    duration: "2022 - 2023",
    techStack: ["Java", "Spring Boot", "Oracle DB", "JSP"],
    description: [
      "Implemented real-time flight tracking and booking system.",
      "Used Java Spring Boot with Oracle DB.",
      "Designed an intuitive user interface with JSP.",
      "Ensured system security and reliability."
    ],
    image: "/images/airline.png",
    github: "https://github.com/Yvedula1/Projects/tree/main/Airline%20Management%20System",
    color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
  },
  {
    title: "E-commerce with AI Recommendations",
    duration: "Aug 2023 – Dec 2023",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow.js"],
    description: [
      "Built an AI-powered recommendation system using TensorFlow.js.",
      "Developed a responsive UI using React & Node.js.",
      "Implemented secure payment processing.",
      "Designed an interactive shopping experience."
    ],
    image: "/images/ecommerce.png",
    github: "https://github.com/YOUR_GITHUB/EcommerceAI",
    color: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-inner">
              {/* Front Side */}
              <div className="project-front" style={{ background: project.color }}>
            
                <h3 className="project-title">{project.title}</h3>
                <p className="project-duration">{project.duration}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Back Side */}
              <div className="project-back">
                <ul className="project-description">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

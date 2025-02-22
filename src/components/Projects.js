import React from "react";
//import "./Projects.css"; // Import styles

const projectsData = [
  {
    title: "Syndex.ai Media Platform",
    duration: "2023 - Present",
    techStack: ["React.js", "Tailwind CSS", ".NET", "Azure"],
    description: [
      "Developed an interactive media platform using React.js and Tailwind.",
      "Integrated authentication and user analytics.",
      "Optimized performance to reduce load times by 15%.",
      "Built scalable APIs using .NET."
    ],
    image: "/images/syndex.png",
    github: "https://github.com/YOUR_GITHUB/Syndex",
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
    github: "https://github.com/YOUR_GITHUB/AirlineManagement",
    color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
  },
  {
    title: "E-commerce with AI Recommendations",
    duration: "2021 - 2022",
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

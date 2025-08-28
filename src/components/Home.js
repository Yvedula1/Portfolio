import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Left Section - Text and Buttons */}
      <div className="left-section">
        <h1>Hi, I'm <span className="name-highlight">Yasaswini V</span></h1>
        <p>
Full Stack Developer with 4+ years of experience building scalable enterprise applications. Skilled in developing ADA-compliant, modular UIs using React.js (Hooks, Context API) and Tailwind CSS. Proficient in designing RESTful microservices with Spring Boot, applying domain-driven design and dependency injection for scalable, interoperable systems. Experienced in handling high-volume transactions with PostgreSQL, MongoDB, and Hibernate, optimizing performance with caching and indexing. Skilled in cloud-native deployments using AWS, Docker, and Kubernetes, with CI/CD pipelines built via GitHub Actions and SonarQube. Collaborative team player, contributing to sprint delivery through Agile workflows using Jira and Confluence.        </p>

        <div className="buttons">
          <a href="#contact" className="contact-button">Contact Me</a>
          
        </div>
      </div>

      {/* Right Section - Profile Image */}
     
    </section>
  );
};

export default Home;

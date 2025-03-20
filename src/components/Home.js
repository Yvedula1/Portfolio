import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Left Section - Text and Buttons */}
      <div className="left-section">
        <h1>Hi, I'm <span className="name-highlight">Yasaswini Vedula</span></h1>
        <p>
        Full-stack developer with 3+ years of experience in building and implementing interactive platforms using React, Next.js, .NET, Spring Boot, and AWS. Proficient in designing microservices, developing REST APIs, database optimization, cloud deployments, and CI/CD automation. Experienced in developing secure, high-performance applications and collaborating with cross-functional teams and working in agile environments.
        </p>

        <div className="buttons">
          <a href="#contact" className="contact-button">Contact Me</a>
          <a href="/Yasaswini.Resume.pdf" download className="resume-button">Download My Resume</a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="right-section">
        <img src="/images/Profile.jpg" alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;

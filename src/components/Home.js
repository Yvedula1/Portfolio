import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Left Section - Text and Buttons */}
      <div className="left-section">
        <h1>Hi, I'm <span className="name-highlight">Yasaswini Vedula</span></h1>
        <p>
        Full Stack Developer with 3+ years of experience building scalable, cloud-native web applications with expertise in React, Next.js, .NET, and Spring Boot. Proven ability to design robust systems, integrate AI-driven features using OpenAI API, and develop reusable front-end components for cross-device compatibility. Skilled in streamlining CI/CD pipelines with GitHub Actions and deploying high-performance services on AWS and Azure. Strong background in Agile development, secure coding practices, and delivering solutions that improve user engagement and system reliability.
        </p>

        <div className="buttons">
          <a href="#contact" className="contact-button">Contact Me</a>
          
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

import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Left Section - Text and Buttons */}
      <div className="left-section">
        <h1>Hi, I'm <span className="name-highlight">Yasaswini Vedula</span></h1>
        <p>
        Full-stack developer with over 4 years of experience designing and developing scalable web applications. Proficient in both front-end and back-end technologies, with expertise in building responsive and distributed user interfaces. Skilled in RESTful API development, database management, and integrating with backend services. Experienced in collaborating with cross-functional teams to deliver reliable, maintainable, and secure applications.
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

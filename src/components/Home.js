import React from "react";

const Home = () => {
  return (
    <section className="home-container">
      {/* Left Section - Text and Buttons */}
      <div className="left-section">
        <h1>Hi, I'm <span className="name-highlight">Yasaswini Vedula</span></h1>
        <p>
          I am a skilled Full Stack Software Developer with expertise in 
          JavaScript, React, Java, Python, and AWS. I specialize in 
          building scalable web applications and solving complex 
          technical challenges. Passionate about innovation, I deliver 
          high-performance solutions that drive business success. 
          Reach out if you would like to know more!
        </p>

        <div className="buttons">
          <a href="#contact" className="contact-button">Contact Me</a>
          <a href="/Yasaswini.Resume.pdf" download className="resume-button">Download My Resume</a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="right-section">
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;

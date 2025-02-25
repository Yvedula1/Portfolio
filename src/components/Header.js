import React, { useState } from "react";
//import "./styles.css"; // Ensure your CSS file is imported

const Header = () => {
 
  return (
    <nav className="navbar">
      {/* Left - Portfolio Title */}
      <div className="nav-left">Portfolio</div>

     

      {/* Right - Navigation Links */}
      <ul className={`nav-right ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;

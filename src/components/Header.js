import React from "react";


const Header = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Portfolio Text */}
      <div className="nav-left">Portfolio</div>

      {/* Right Side - Navigation Links */}
      <ul className="nav-right">
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
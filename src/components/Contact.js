import React from "react";
//import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact-container">
      <div className="contact-content">
        <h2>Reach Me At</h2>

        {/* Social Icons */}
        <div className="contact-icons">
         
          
          <a href="https://github.com/Yvedula1" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yasaswini-vedula-068606171/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="contact-icon" />
          </a>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
        <h3><strong>Email:</strong> <a href="mailto:vedulayasaswini8@gmail.com">vedulayasaswini99@gmail.com</a></h3>
          <h3><strong>Phone:</strong> <a href="tel:+14709308117">+1 (201) 377-1643</a></h3>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

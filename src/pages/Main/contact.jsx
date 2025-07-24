import React from "react";
import "./contact.css";

function Contact() {
  const phoneNumber = "0123456789";
  const email = "sondosamr.cse@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/sondos-amr";
  const githubUrl = "https://github.com/sondosamr";

  return (
    <div className="contact-section">
      <h2>Contact ME</h2>
      <div className="phone-number" title="Click to copy">
            +20 100 381 9418
        </div>
      <div className="contact-buttons">
        <a href={`mailto:${email}`} className="contact-btn">Email</a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
        <a href="/Sondos_Amr_s_CV.pdf" target="_blank" rel="noopener noreferrer" className="contact-btn">CV</a>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import './Skills.css';

const skillSections = [
  {
    title: "Programming & Development",
    skills: [
      "Python", "C++", "Java", "JavaScript",
      "Git", "GitHub", "OOP", "Data Structures", "Problem Solving"
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "TensorFlow", "PyTorch", "Keras", "Scikit-Learn",
      "Pandas", "NumPy", "CNN", "LSTM", "GAN", "Transformers", "ViTs",
      "Computer Vision", "Object Detection", "Image Processing",
      "Linear Algebra", "Analytical Statistics"
    ],
  },
  {
    title: "Data Analytics & Visualization",
    skills: [
      "Excel", "Power BI", "Looker Studio",
      "MySQL", "Databases", "Reports", "Dashboards", "Data Visualization"
    ],
  },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      {skillSections.map((section) => (
        <div key={section.title} className="skill-section">
          <h3 className="section-title">{section.title}</h3>
          <ul className="skills-list">
            {section.skills.map((skill) => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;

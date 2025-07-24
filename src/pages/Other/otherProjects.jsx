import React from 'react';
import './otherProjects.css';

const otherProjects = [
    {
        title: "Social Media Web App",
        subtitle: "Front-End for full-stack project",
        description: [
        "Used Angular services, components, and routing to build dynamic, responsive pages and connect seamlessly with backend APIs."
        ],
        tools: " Angular, JavaScript, HTML, CSS, Git, GitHub, API Integration, Component-Based Development",
        repoLink: "https://github.com/sondosamr/SocialMediaApp.git",
        KaggleLink: "",   
        DriveLink: "",
        demoLink: "/SocialApp_Angular.mp4",
        LookerLink: "",
        PowerLink: ""    
    }
]


function OtherProjects () {
    return (
        <div className="otherprojects-container">
      <h2>Projects</h2>
      {otherProjects.map(({ title, subtitle, description, tools, repoLink, KaggleLink, DriveLink, demoLink, LookerLink, PowerLink }, index) => (
        <div key={index} className="otherproject-item">
          <h3>{title}</h3>
          {subtitle && <h4 style={{ fontWeight: 'normal', color: '#555', marginTop: 0 }}>{subtitle}</h4>}
          <ul>
            {description.map((para, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                {para}
                </li>
            ))}
            </ul>
          {tools && (
            <div className="tool-grid">
                {tools.split(',').map((tool, index) => (
                <div key={index} className="tool-item" title={tool.trim()}>
                    {'#' + tool.trim()}
                </div>
                ))}
            </div>
            )}

          <div className="otherproject-links">
            {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                Repo
                </a>
            )}
            {KaggleLink && (
                <a href={KaggleLink} target="_blank" rel="noopener noreferrer">
                Kaggle Notebook
                </a>
            )}
            {DriveLink && (
                <a href={DriveLink} target="_blank" rel="noopener noreferrer">
                Drive
                </a>
            )}
            {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                Demo
                </a>
            )}
            {LookerLink && (
              <a href = {LookerLink} target="_blank" rel="noopener noreferrer">
                Looker Studio Dashboard
              </a>
            )}
            {PowerLink && (
              <a href = {PowerLink} target="_blank" rel="noopener noreferrer">
                Power BI Dashboard
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OtherProjects;



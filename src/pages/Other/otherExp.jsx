import React from 'react';
import './otherExp.css';

const otherWork = [
    {
        title: "Educational Content Developer – Children’s Programming",
        subtitle: "Self-initiated project",
        date: "Mar 2025 – Apr 2025",
        description: [
            "Created engaging programming tutorials and materials for kids using Scratch, mBlock, Python, HTML, and CSS.",
            "Developed interactive examples, animations, and simple games to enhance learning.",
            "Designed content for both classroom and self-study, focusing on clarity and engagement."
        ],
        tools: "Canva, PowerPoint, Microsoft Word, Mblock, Scratch, Edublocks, Trinket",
        repo: "",
        Kaggle : "",
        Drive : "",
        demo : "",
        Looker: "",
        Power: ""
    }
]

function OtherExp () {
    return (
        <div className="OtherWork-container">
            <h2>Work Experience</h2>
            {otherWork.map(({ title, subtitle, date, description, tools, repo, Kaggle, Drive, demo, Looker, Power }, index) => (
                <div key={index} className="OtherWork-item">
                    <h3>{title}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 0 }}>
                        {subtitle && <h4 style={{ fontWeight: 'normal', color: '#555', margin: 0, fontStyle: 'italic' }}>{subtitle}</h4>}
                        {date && <span style={{ fontWeight: 'normal', color: '#555', fontSize: '0.9rem', fontStyle: 'italic'}}>{date}</span>}
                    </div>
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

                    <div className="OtherWork-links">
                        {repo && (
                            <a href={repo} target="_blank" rel="noopener noreferrer">
                            Repo
                            </a>
                        )}
                        {Kaggle && (
                            <a href={Kaggle} target="_blank" rel="noopener noreferrer">
                            Kaggle Notebook
                            </a>
                        )}
                        {Drive && (
                            <a href={Drive} target="_blank" rel="noopener noreferrer">
                            Drive
                            </a>
                        )}
                        {demo && (
                            <a href={demo} target="_blank" rel="noopener noreferrer">
                            Demo
                            </a>
                        )}
                        {Looker && (
                        <a href = {Looker} target="_blank" rel="noopener noreferrer">
                            Looker Studio Dashboard
                        </a>
                        )}
                        {Power && (
                        <a href = {Power} target="_blank" rel="noopener noreferrer">
                            Power BI Dashboard
                        </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OtherExp;
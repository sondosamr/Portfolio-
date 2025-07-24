import React from 'react';
import './work.css';

const works = [
    {
        title: "Arabic System Management App",
        subtitle: "Personal Project | Python Desktop App",
        date: "Mar 2025 - May 2025",
        description: [
            "Developed a desktop application to fully automate the creation and delivery of personalized educational booklets for a teacher.",
            "The app provides a multi-tab interface allowing the user to upload an Excel sheet with student-specific data, select a folder containing Arabic Word templates for the booklets, and with a single click, automatically fill in the templates using Excel data, close each file, convert it to high-resolution images and a password-protected PDF, upload it to Google Drive, and collect shareable links — all without manual intervention.",
            "Designed a separate tab to automate WhatsApp messaging, where the user can upload a recipient list via Excel and auto-launch WhatsApp Desktop to sequentially send each student a personalized message containing the Drive link and password.",
            "Implemented multithreading to process multiple booklets in parallel, significantly reducing total processing time."
        ],
        tools: "Python, Tkinter (GUI) , Pandas, Python-docx, img2pdf, PyMuPDF or reportlab, Google Drive API, Pyautogui / pywhatkit, MultiThreading ",
        repo: "",
        Kaggle : "",
        Drive : "",
        demo : "",
        Looker: "",
        Power: ""
    }
]


function Work() {
    return (
        <div className="work-container">
            <h2>Work Experience</h2>
            {works.map(({ title, subtitle, date, description, tools, repo, Kaggle, Drive, demo, Looker, Power }, index) => (
                <div key={index} className="work-item">
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

                    <div className="work-links">
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

export default Work;
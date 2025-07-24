import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "BEAR – Bone Estimation and Age Reporting",
    subtitle: "Graduation Project – Deep Learning for Medical Imaging",
    description: [
      "Developed an AI system to predict pediatric bone age from hand X-ray images and generate automatic diagnostic reports, implemented as a mobile-friendly application.",
      "Led the deep learning pipeline by experimenting with various CNN architectures and approaches (VGG19, ResNet, ViT, Transfer Learning), achieving the highest accuracy using a combination of YOLO and Xception models on medical datasets."
    ],
    tools: "Python, TensorFlow, Keras, OpenCV, Google Colab, Firebase.",
    repoLink: "https://github.com/Mohamed-AbdElrhman49/B.E.A.R-AI-Module/tree/main",
    KaggleLink: "",   
    DriveLink: "https://drive.google.com/drive/folders/1XWckYRSRW4e1z_GmqWAr2xUJu61ACqgV?usp=sharing",
    demoLink: "/B.E.A.R. Demo.mp4",
    LookerLink: "",
    PowerLink: ""    
  },
  {
    title: "Skin Care AI Melanoma Detection using Deep Learning",
    description: [
      "Built and trained deep learning models to classify skin lesions and detect melanoma from dermoscopic images, applying techniques such as image preprocessing (e.g., hair removal), augmentation, and ensemble modeling.",
      "Addressed dataset imbalance by merging sources and applying advanced augmentation. Compared the performance of CNNs including ResNet and EfficientNet, and evaluated models on Kaggle benchmarks."
    ],
    tools: "Python, EDA, TensorFlow, Keras, XGBoost, ResNet, EfficientNet, Git, Google Colab, Kaggle, Google Drive",
    repoLink: "",
    KaggleLink: "",   
    DriveLink: "",
    demoLink: "/SkinCare Demo .mp4",
    LookerLink: "",
    PowerLink: ""
  },
  {
    title: "Loan Approval Prediction using Machine Learning",
    description: [
      "Built interactive dashboards in Looker Studio and Power BI to analyze loan approval patterns, extract applicant insights, and support data-driven decisions.",
      "Developed a predictive model using preprocessing, feature engineering, and ensemble methods (Random Forest, XGBoost), achieving high accuracy and interpreting results through feature importance."
    ],
    tools: "Python, Pandas, NumPy, Matplotlib, Seaborn, EDA, Logistic Regression, Random Forest, XGBoost, Jupyter Notebook, Google Colab, Kaggle, Looker Studio, Power BI",
    repoLink: "",
    KaggleLink : "https://www.kaggle.com/code/sondosamromahmod/loan-machine-learning-project",
    DriveLink : "",
    demoLink : "",
    LookerLink: "https://lookerstudio.google.com/reporting/b68bd9df-6cb8-4495-b11a-490835c8865d/page/fmqBES",
    PowerLink: "/power bi loan.PNG"
  },
  {
    title: "Employees Insights Dashboard",
    description: [
      "Built an interactive dashboard using Looker Studio to analyze employee data, uncover patterns in department distribution, salary trends, and employee relationships with the company (e.g., tenure, satisfaction, and turnover). Delivered actionable insights to support HR decision-making."
    ],
    tools: "Looker Studio, Google Sheets, Data Visualization",
    repoLink: "",
    KaggleLink : "",
    DriveLink : "",
    demoLink : "",
    LookerLink: "https://lookerstudio.google.com/reporting/edcd9eb1-2f92-4f94-8999-049839d42087",
    PowerLink: ""
  },
  {
    title: "Airline Passenger Satisfaction Using Machine Learning",
    description: [
      "Performed extensive data analysis and visualization to identify key drivers of passenger satisfaction, including inflight services, seat comfort, and delays.",
      "Built classification models (Random Forest, XGBoost) and achieved 98% accuracy, highlighting the most influential features using feature importance plots.",
      "Designed clear visual dashboards using Seaborn and Matplotlib to effectively communicate trends and insights."
    ],
    tools: "Python, Pandas, NumPy, Seaborn, Matplotlib, Scikit-learn, XGBoost, Random Forest, Jupyter Notebook, Google Colab, Exploratory Data Analysis (EDA), Data Visualization, Classification Models",
    repoLink: "",
    KaggleLink : "https://www.kaggle.com/code/sondosamromahmod/airline-passenger-satisfaction",
    DriveLink : "",
    demoLink : "",
    LookerLink: "",
    PowerLink: ""
  },
  {
    title: "CPU Scheduling Algorithms Simulation",
    description: [
      "Simulated five CPU scheduling algorithms (FCFS, SJF, Priority, Round Robin, etc.) using Python and OOP concepts, with visual outputs of waiting and turnaround times.",
      "Built a command-line interface to compare algorithm performance and export the results to structured external tables for analysis."
    ],
    tools: "Python, OOP, Hardware Threads, Git, GitHub.",
    repoLink: "https://github.com/sondosamr/Scheduling_Simulater_Python",
    KaggleLink : "",
    DriveLink : "",
    demoLink : "",
    LookerLink: "",
    PowerLink: ""
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {projects.map(({ title, subtitle, description, tools, repoLink, KaggleLink, DriveLink, demoLink, LookerLink, PowerLink }, index) => (
        <div key={index} className="project-item">
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

          <div className="project-links">
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

export default Projects;

import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <div className="training-container">
        <h2>Training</h2>
        <div className="training-item">
            <h3>Samsung Innovation Campus – AI Internship</h3>
            <p className="date-location">Jul 2024 – Oct 2024 · Cairo, Egypt</p>
            <ul>
            <li>Hands-on experience with machine learning, deep learning, and Python libraries (NumPy, Pandas, TensorFlow). </li>
            <li>Developed Power BI dashboards and worked on data preprocessing and model projects.</li>
            </ul>
        </div>

        <div className="training-item">
            <h3>DataCamp – Data Science Course</h3>
            <p className="date-location">Aug 2022 – Oct 2022 · Online</p>
            <ul>
            <li>Learned Python, Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn.</li>
            <li>Built a data analysis project on Google Play Store dataset.</li>
            </ul>
        </div>
    </div>


    );
}

export default Training;

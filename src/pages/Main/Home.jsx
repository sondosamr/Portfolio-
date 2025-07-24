import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
// import profileImg from '/';

const Home = () => {
    const sentence = "Computer and Systems Engineering graduate with experience in AI and data science. Skilled in deep learning and data analysis. Passionate about applying AI to real-world problems.";
    const words = sentence.split(" ");
    return (
        <div className="home-container">
        <img src="/WhatsApp Image 2025-07-24 at 00.13.15_0100e64e.jpg" alt="Profile" className="profile-img" />
        <h1 className="name-title">Sondos Amr</h1>
        <p className="job-title">Data Scientist & Data Analyst</p>
        <p className="about-me">
            {words.map((word, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: index * 0.25, duration: 0.8, ease: "easeOut" }}
                className="animated-word"
            >
                {word}
            </motion.span>
            ))}
        </p>
        </div>
    );
    };

export default Home;
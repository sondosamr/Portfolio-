import React from 'react';
import './Main.css'

import Home from './Home';
import Education from './Education';
import Training from './Training';
import Skills from './Skills';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';

import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    return (
        <>
        <Home />
        <Education />
        <Training />
        <Skills />
        <Work />
        <Projects />
        <Contact />

        <div className="other-button-container" style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
            <button className="other-button"
            onClick={() => navigate('/Other')}
            >
            More Experience & Projects beyond Data Science →
            </button>
        </div>
        </>
    );
}

export default Main;

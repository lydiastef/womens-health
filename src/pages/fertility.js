import React from 'react';
import { Link } from 'react-router-dom';
import './health.css';
import Image from '../images/pregnantwomen.avif';

function HealthTopics() {
    return (
        <div className="health-topics">
            <div className="hero-section">
                <div className="image-container">
                    <img src={Image} alt="Pregnant women" className="main-image" />
                </div>
                <div className="welcome-text">
                    <h1>Fertility & Pregnancy</h1>
                    <p>Welcome to the Fertility Topics page. Here you can find a variety of articles and resources about women's fertility and pregnancy.</p>
                </div>
            </div>
            
                <div className="topics-list">
                    <div className="topic">
                    <img src={Image} alt="Pregnant women" className="page-image" />
                        <h3>Infertility and Diet</h3>
                        <p>The Impact of Diet on Fertility: Insights from Recent Research</p>
                        <Link to="/fertilitydiet" className='btn'>Read more</Link>
                    </div>
                    <div className="topic">
                    <img src={Image} alt="Pregnant women" className="page-image" />
                        <h3>Fitness</h3>
                        <p>Discover effective fitness routines and exercises for women.</p>
                        <Link to="/female-training" className='btn'>Read more</Link>
                    </div>
                    <div className="topic">
                    <img src={Image} alt="Pregnant women" className="page-image" />
                        <h3>Mental Health</h3>
                        <p>Find tips and advice on maintaining good mental health.</p>
                        <Link to="/loneliness" className='btn'>Read more</Link>
                    </div>
                </div>
            </div>
    );
}

export default HealthTopics;
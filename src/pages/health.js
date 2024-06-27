import React from 'react';
import { Link } from 'react-router-dom';
import './health.css';
import Strength from '../images/strength.avif'

function HealthTopics() {
    return (
        <div className="health-topics">
            <h1>Health Topics</h1>
            <p>Welcome to the Health Topics page. Here you can find a variety of articles and resources about women's health.</p>
            <div className="topics-list">
                <div className="topic">
                <img src={Strength} alt="strong woman" className="page-image" />
                <h3>Nutrition</h3>
                    <p>Learn about the best nutrition practices for a healthy lifestyle.</p>
                    <Link to="/pots" className="btn"> Read more</Link>
                </div>
                <div className="topic">
                <img src={Strength} alt="strong woman" className="page-image" />
                    <h3>Fitness</h3>
                    <p>Discover effective fitness routines and exercises.</p>
                    <Link to="/female-training" className="btn">Read more</Link>
                    </div>
                <div className="topic">
                <img src={Strength} alt="strong woman" className="page-image" />
                    <h3>Mental Health</h3>
                    <p>Find tips and advice on maintaining good mental health.</p>
                    <Link to="/loneliness" className='btn' >Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default HealthTopics;

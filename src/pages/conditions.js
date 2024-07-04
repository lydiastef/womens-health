import React from 'react';
import { Link } from 'react-router-dom';
import './health.css';
import PMDD1 from '../images/pmdd1.avif'

function HealthTopics() {
    return (
        <div className="health-topics">
            <h1>Conditions and Diseases</h1>
            <p>Welcome to the conditions and diseases page. Here you can find a variety of articles and resources about women's health problems.</p>
            <div className="topics-list">
                <div className="topic">
                <img src={PMDD1} alt="sad woman" className="page-image" />
                    <h3>PMDD</h3>
                    <p>Understanding PMDD: The Silent Struggle of Hormonal Mood Disorders</p>
                    <Link to="/pmdd">Read more</Link>
                </div>
                <div className="topic">
                    <h3>Fitness</h3>
                    <p>Discover effective fitness routines and exercises for women.</p>
                    <Link to="/female-training">Read more</Link>
                </div>
                <div className="topic">
                    <h3>Mental Health</h3>
                    <p>Find tips and advice on maintaining good mental health.</p>
                    <Link to="/loneliness">Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default HealthTopics;
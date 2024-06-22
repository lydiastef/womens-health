import React from 'react';
import { Link } from 'react-router-dom';
import './health.css';

function HealthTopics() {
    return (
        <div className="health-topics">
            <h1>Health Topics</h1>
            <p>Welcome to the Health Topics page. Here you can find a variety of articles and resources about women's health.</p>
            <div className="topics-list">
                <div className="topic">
                    <h3>Nutrition</h3>
                    <p>Learn about the best nutrition practices for a healthy lifestyle.</p>
                    <Link to="/pots">Read more</Link>
                </div>
                <div className="topic">
                    <h3>Fitness</h3>
                    <p>Discover effective fitness routines and exercises.</p>
                    <Link to="/pots">Read more</Link>
                </div>
                <div className="topic">
                    <h3>Mental Health</h3>
                    <p>Find tips and advice on maintaining good mental health.</p>
                    <Link to="/pots">Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default HealthTopics;

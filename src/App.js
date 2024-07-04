import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HealthTopics from './pages/health';
import Fitness from './pages/fitness';
import Fertility from './pages/fertility';
import Conditions from './pages/conditions';
import Pots from './posts/pots';
import FemaleTraining from './posts/female-training';
import Mediterranean from './posts/mediterranean';
import Loneliness from './posts/loneliness';
import FertilityDiet from './posts/fertilitydiet';
import PMDD from './posts/pmdd';
import './App.css';
import mainImage from './images/women2.avif';
import Strength from './images/strength.avif';
import { Link } from 'react-router-dom';

function App() {
    return (
    <Router>
        <div className="App">
        <Navbar />
            <main className="main-content">
            <Routes>
                <Route path="/" element={
                <>
                    <div className="hero-section">
                        <div className="image-container">
                            <img src={mainImage} alt="Main" className="main-image" />
                        </div>
                        <div className="welcome-text">
                            <h1>Welcome to All About Women</h1>
                        </div>
                        </div>
                        <section className="content-section">
                            <h2>About Us</h2>
                            <p>Welcome to FeminaFocus, where our commitment is to deliver top-notch health and wellness information for women, backed by the latest research. Our mission is to empower you to live a healthier, happier life.</p> 
                            <h1>Recent Posts</h1>
                            <div className="features">
                                <div className="topics-list">
                                    <div className="topic">
                                        <img src={Strength} alt="strong woman" className="page-image" />
                                        <h3>Pots</h3>
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
                <button className="cta-button">Get Started</button>
                    </section>
                    </>
                    } />
                    <Route path="/health" element={<HealthTopics />} />
                    <Route path="/fitness" element={<Fitness />} />
                    <Route path="/fertility" element={<Fertility />} />
                    <Route path="/conditions" element={<Conditions />} />

                    <Route path="/pots" element={<Pots />} />
                    <Route path="/female-training" element={<FemaleTraining />} />
                    <Route path="/mediterranean" element={<Mediterranean />} />
                    <Route path="/loneliness" element={<Loneliness />} />
                    <Route path="/fertilitydiet" element={<FertilityDiet />} />
                    <Route path="/pmdd" element={<PMDD />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

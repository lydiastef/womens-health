import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HealthTopics from './pages/health';
import Fitness from './pages/fitness';
import Pots from './posts/pots';
import FemaleTraining from './posts/female-training';
import Mediterranean from './posts/mediterranean';
import Loneliness from './posts/loneliness';
import './App.css';
import mainImage from './images/women2.avif';

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
                                        <h1>Welcome to MyApp</h1>
                                        <p>This is a sample welcome text that accompanies the main image. Customize this as needed to fit your content.</p>
                                    </div>
                                </div>
                                <section className="content-section">
                                    <h2>About Us</h2>
                                    <p>At MyApp, we are dedicated to providing the best health and wellness services for women. Our mission is to empower women to live healthier, happier lives.</p>
                                    <div className="features">
                                        <div className="feature">
                                            <h3>Personalized Care</h3>
                                            <p>We offer personalized health plans tailored to meet your unique needs.</p>
                                        </div>
                                        <div className="feature">
                                            <h3>Expert Advice</h3>
                                            <p>Our team of experts is here to provide you with the best advice and support.</p>
                                        </div>
                                        <div className="feature">
                                            <h3>Community Support</h3>
                                            <p>Join our community and connect with others who share your health goals.</p>
                                        </div>
                                    </div>
                                    <button className="cta-button">Get Started</button>
                                </section>
                            </>
                        } />
                        <Route path="/health" element={<HealthTopics />} />
                        <Route path="/fitness" element={<Fitness />} />

                        <Route path="/pots" element={<Pots />} />
                        <Route path="/female-training" element={<FemaleTraining />} />
                        <Route path="/mediterranean" element={<Mediterranean />} />
                        <Route path="/loneliness" element={<Loneliness />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

import React, { useState } from 'react';
import Logo from '../images/logo1.avif';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
            <Link to="/">
                    <img src={Logo} alt="Logo" className="logo-image" />
                </Link>                </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <div className="navbar-item">
                    <Link to="/health">Health Topics</Link>
                </div>
                <div className="navbar-item">
                    <a href="#wellness">Fitness & Nutrition</a>
                </div>
                <div className="navbar-item">
                    <a href="#conditions">Conditions & Diseases</a>
                </div>
                <div className="navbar-item">
                    <a href="#prevention">Prevention & Screening</a>
                </div>
                <div className="navbar-item">
                    <a href="#about">About</a>
                </div>
            </div>
            <div className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;

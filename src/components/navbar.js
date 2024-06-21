// src/components/Navbar.js

import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">MyApp</div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <a href="#home" className="navbar-item">Home</a>
                <a href="#about" className="navbar-item">About</a>
                <a href="#services" className="navbar-item">Services</a>
                <a href="#contact" className="navbar-item">Contact</a>
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

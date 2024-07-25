import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../images/logo1.avif';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const navItems = document.querySelectorAll(".navbar-item a");

        navItems.forEach(item => {
            if (item.getAttribute("href") === location.pathname) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }, [location]);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-item">
                    <Link to="/health">Health Topics</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/fitness">Fitness & Nutrition</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/fertility">Fertility & Pregnancy</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/conditions">Conditions & Diseases</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/prevention">Prevention & Screening</Link>
                </div>
                <div className="navbar-item">
                    <Link to="/about">About</Link>
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


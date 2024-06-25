import React, { useEffect } from 'react';
import './footer.css';

const Footer = () => {
    useEffect(() => {
        const yearElement = document.getElementById('current-year');
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }, []);

    return (
        <footer>
            <p>&copy; <span id="current-year"></span> Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;


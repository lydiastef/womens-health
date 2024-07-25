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
            <div className='footer-container'>
                <div className='footer-items'>
                    <p className='disclaimerp'><strong>Disclaimer:</strong> The information provided on this website is for general informational 
                    purposes only and not medical advice. Always consult your physician or a qualified healthcare provider with any medical questions.<br></br> 
                    Read our full <a href="/disclaimer">disclaimer</a>.</p>
                </div>
                <div className='footer-items'>
                    <p>&copy; <span id="current-year"></span> Femina Focus. All rights reserved.</p>
                </div>
                <div className='footer-items'>
                <a href="/privacypolicy">Privacy Policy</a> | <a href="/termsofuse">Terms of Use</a>
                </div>
            </div>  
        </footer>
    );
};

export default Footer;


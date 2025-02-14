
/** src/components/Footer.jsx */
/** @author: Brendan Dileo, 2025-02-11 **/

import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="footer-content">
                <h3 className="footer-heading">Contact Me</h3>
                <div className="footer-links">
                    <a href="#home" className="footer-link">Home</a>
                    <a href="#about" className="footer-link">About Us</a>
                    <a href="#contact" className="footer-link">Contact Us</a>
                </div>
                <p className="footer-copy">Built & Developed by Brendan Dileo. Powered by Vite.</p>
            </div>
        </footer>
    );
};

export default Footer;
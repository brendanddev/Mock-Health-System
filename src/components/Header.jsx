
/** src/components/Header.jsx */
/** @author: Brendan Dileo, 2025-02-11 **/

import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Hamilton Health Sciences</h1>
            {/* These links dont actually go anywhere just for display */}
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
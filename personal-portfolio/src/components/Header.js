import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
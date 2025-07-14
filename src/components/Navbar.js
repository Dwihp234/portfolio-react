import React, { useState } from "react";
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <button onClick={() => scrollToSection('#home')}>DHP</button>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('#home')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('#about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('#skills')} className="nav-link">Skills</button></li>
          <li><button onClick={() => scrollToSection('#projects')} className="nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('#gallery')} className="nav-link">Gallery</button></li>
          <li><button onClick={() => scrollToSection('#youtube')} className="nav-link">YouTube</button></li>
          <li><button onClick={() => scrollToSection('#contact')} className="nav-link">Contact</button></li>
          <li><button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? '☀️' : '🌙'}
          </button></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Dwi Hery Prasetiyo</h3>
            <p>
              Full Stack Developer passionate about creating innovative 
              web solutions and bringing ideas to life through code.
            </p>
            <div className="footer-social">
              <a href="https://github.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="mailto:your.email@example.com">Web Development</a></li>
              <li><a href="mailto:your.email@example.com">Frontend Development</a></li>
              <li><a href="mailto:your.email@example.com">Backend Development</a></li>
              <li><a href="mailto:your.email@example.com">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 your.email@example.com</p>
              <p>📱 +62 xxx xxxx xxxx</p>
              <p>📍 Indonesia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Dwi Hery Prasetiyo. All rights reserved.</p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop}>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
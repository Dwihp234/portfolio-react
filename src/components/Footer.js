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
            <h3>Dwi Hery Purnomo, M.M</h3>
            <p>
              Data Analytics Expert | Supply Chain Management Specialist | Repair & Maintenance Expert 
              with 25+ years of experience in transforming data into actionable business insights.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/dwi-hery-purnomo" className="footer-social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@dwihpjavas" className="footer-social-link" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://wa.me/6281385639122" className="footer-social-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="mailto:dwihplanner@gmail.com" className="footer-social-link" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#youtube">YouTube</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Expertise</h4>
            <ul className="footer-links">
              <li><a href="#gallery">R Programming Analytics</a></li>
              <li><a href="#gallery">Supply Chain Management</a></li>
              <li><a href="#gallery">Heavy Equipment Maintenance</a></li>
              <li><a href="#gallery">Data Analytics & BI</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 dwihplanner@gmail.com</p>
              <p>📱 +6281385639122</p>
              <p>📍 Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Dwi Hery Purnomo, M.M. All rights reserved.</p>
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
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-quote">
        <blockquote>
          <i className="fas fa-quote-left quote-icon"></i>
          <p className="quote-text">
            "We are drowning in data but starving for wisdom / Kita tenggelam akan data tapi haus akan kebijaksanaan"
          </p>
          <cite className="quote-author">— John Naisbitt</cite>
        </blockquote>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Dwi Hery Purnomo</span>
          </h1>
          
          <h2 className="hero-subtitle">
            M.M - Magister Manajemen | Repair & Maintenance Expert | Supply Chain Management Expert
          </h2>
          
          <p className="hero-description">
            Outbound Expeditors Inter Island and Country | Inventory & Purchased Cost Control | 
            Data Advanced Integrated Reporting & Sr.Analyst | Import Handling | RKAB ESDM Annual 
            Budgeting & Quarterly Reporting (Belanja Barang & Jasa - TKDN) | YouTube Content Creator 
            with 3,200+ subscribers sharing maintenance management expertise.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3,200+</span>
              <span className="stat-label">YouTube Subscribers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Import Operations</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => {
              window.open('/CV_Dwi_Hery_Purnomo.html', '_blank');
            }}>
              <i className="fas fa-download"></i>
              Download CV
            </button>
            <button className="btn-secondary" onClick={() => {
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}>
              <i className="fas fa-user"></i>
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-image">
              <img src="pictures/profile-photo.jpg" alt="Dwi Hery Purnomo" />
            </div>
            <div className="profile-badge">
              <i className="fas fa-award"></i>
              <span>S.M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

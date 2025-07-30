import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content about-content-2col">
          {/* Kiri: Teks dan statistik */}
          <div className="about-left">
            <h3>Hi, I'm <span className="highlight">Dwi Hery Purnomo</span></h3>
            <h4 className="about-subtitle">M.M - Magister Manajemen | Repair & Maintenance Expert | Supply Chain Management Expert</h4>
            <p className="about-desc">
              With a Master's degree in Management and extensive expertise in repair maintenance and supply chain management, I am committed to delivering strategic solutions that enhance operational efficiency and drive sustainable business growth across various industries. My strong proficiency in data analysis enables me to integrate and consolidate raw data from multiple departments, transforming it into actionable insights that support top management in making informed, data-driven strategic decisions. In addition, my long-standing experience as a planner has honed my ability to develop comprehensive plans and ensure effective execution in every project I undertake.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>25+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>10+</h4>
                <p>Companies Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <h4>4,500+</h4>
                <p>YouTube Subscribers</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <h4>$2M+</h4>
                <p>Smelter Import Investment</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-ship"></i>
                </div>
                <h4>100+</h4>
                <p>Dealing Import</p>
              </div>
            </div>
          </div>
          {/* Kanan: Foto dan quote */}
          <div className="about-right">
            <div className="about-photo-card">
              {/* Ganti src sesuai path foto Anda */}
              <img className="about-photo" src="/pictures/profile-photo.jpg" alt="Profile" />
              <span className="about-badge">M.M</span>
            </div>
            <div className="about-quote">
              <span className="quote-icon">&#10077;</span>
              <p className="quote-text">
                "We are drowning in data but starving for wisdom / Kita tenggelam akan data tapi haus akan kebijaksanaan"
              </p>
              <span className="quote-author">— John Naisbitt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

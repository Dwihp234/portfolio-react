import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      {/* Animated Background Icons */}
      <div className="animated-background">
        <div className="floating-icons">
          <div className="icon-wrapper icon-1"><i className="fab fa-microsoft"></i></div>
          <div className="icon-wrapper icon-2"><i className="fas fa-chart-bar"></i></div>
          <div className="icon-wrapper icon-3"><i className="fab fa-r-project"></i></div>
          <div className="icon-wrapper icon-4"><i className="fas fa-database"></i></div>
          <div className="icon-wrapper icon-5"><i className="fas fa-file-excel"></i></div>
          <div className="icon-wrapper icon-6"><i className="fas fa-chart-line"></i></div>
          <div className="icon-wrapper icon-7"><i className="fas fa-brain"></i></div>
          <div className="icon-wrapper icon-8"><i className="fas fa-cogs"></i></div>
          <div className="icon-wrapper icon-9"><i className="fas fa-analytics"></i></div>
          <div className="icon-wrapper icon-10"><i className="fas fa-microscope"></i></div>
        </div>
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
           With a Master’s degree in Management and extensive expertise in repair maintenance and supply chain management, I am committed to delivering strategic solutions that enhance operational efficiency and drive sustainable business growth across various industries. My strong proficiency in data analysis enables me to integrate and consolidate raw data from multiple departments, transforming it into actionable insights that support top management in making informed, data-driven strategic decisions. In addition, my long-standing experience as a planner has honed my ability to develop comprehensive plans and ensure effective execution in every project I undertake.
          </p>
          
          {/* <div className="hero-stats about-horizontal-stats">
            <div className="about-stat-card">
              <div className="about-stat-icon"><i className="fas fa-briefcase"></i></div>
              <div className="about-stat-number">25+</div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><i className="fas fa-building"></i></div>
              <div className="about-stat-number">10+</div>
              <div className="about-stat-label">Companies Experience</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><i className="fab fa-youtube"></i></div>
              <div className="about-stat-number">4,500+</div>
              <div className="about-stat-label">YouTube Subscribers</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><i className="fas fa-dolly-flatbed"></i></div>
              <div className="about-stat-number">$2M+</div>
              <div className="about-stat-label">Smelter Import Investment</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-icon"><i className="fas fa-ship"></i></div>
              <div className="about-stat-number">100+</div>
              <div className="about-stat-label">Dealing Import</div>
            </div>
          </div> */}
          
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
            {/* Rotating Tech Icons Around Photo */}
            <div className="rotating-tech-orbit">
              <div className="orbit-item orbit-1" title="R Programming">
                <i className="fab fa-r-project"></i>
              </div>
              <div className="orbit-item orbit-2" title="Power BI">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="orbit-item orbit-3" title="Microsoft Office">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="orbit-item orbit-4" title="Excel Analytics">
                <i className="fas fa-file-excel"></i>
              </div>
              <div className="orbit-item orbit-5" title="Data Science">
                <i className="fas fa-brain"></i>
              </div>
              <div className="orbit-item orbit-6" title="Statistical Analysis">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="orbit-item orbit-7" title="Database">
                <i className="fas fa-database"></i>
              </div>
              <div className="orbit-item orbit-8" title="Analytics">
                <i className="fas fa-analytics"></i>
              </div>
            </div>

            {/* Animated Graphics Background */}
            <div className="graphics-animation">
              <div className="rotating-chart chart-1">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,107,107,0.3)" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(78,205,196,0.3)" strokeWidth="2"/>
                </svg>
              </div>
              <div className="rotating-chart chart-2">
                <svg viewBox="0 0 100 100" width="80" height="80">
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="rgba(255,215,0,0.2)" strokeWidth="1" transform="rotate(45 50 50)"/>
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="rgba(69,183,209,0.2)" strokeWidth="1" transform="rotate(45 50 50)"/>
                </svg>
              </div>
              <div className="rotating-chart chart-3">
                <svg viewBox="0 0 100 100" width="50" height="50">
                  <polygon points="50,10 90,90 10,90" fill="none" stroke="rgba(78,205,196,0.3)" strokeWidth="2"/>
                  <polygon points="50,25 75,75 25,75" fill="none" stroke="rgba(255,107,107,0.2)" strokeWidth="1"/>
                </svg>
              </div>
            </div>

            <div className="profile-image">
              <img src="pictures/profile-photo.jpg" alt="Dwi Hery Purnomo" />
            </div>
            <div className="profile-badge">
              <i className="fas fa-award"></i>
              <span>M.M</span>
            </div>
          </div>
          {/* Quote dipindah ke bawah profile-card */}
          <div className="hero-quote">
            <div className="quote-container">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">
                "We are drowning in data but starving for wisdom / Kita tenggelam akan data tapi haus akan kebijaksanaan"
              </p>
              <cite className="quote-author">— John Naisbitt</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

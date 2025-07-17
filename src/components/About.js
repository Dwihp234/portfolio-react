import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            {/* <p>
              Welcome! I am Dwi Hery Purnomo, Magister Management, a dedicated professional with over 20+ years
              of experience in Repair & Maintenance Management, Supply Chain Operations, and Import Handling.
              Currently pursuing my Master's degree (M.M) with a background in Economics Management from Universitas Terbuka,
              I'm a father of 4 children with a passion for operational excellence and data analytics.
            </p> */}
            <div className="about-stats one-row">
              <div className="stat-item">
                <span className="stat-icon"><i className="fas fa-briefcase"></i></span>
                <span className="stat-number">25+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon"><i className="fas fa-briefcase"></i></span>
                <span className="stat-number">10+</span>
                <span className="stat-label">Companies Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon"><i className="fab fa-youtube"></i></span>
                <span className="stat-number">4,500+</span>
                <span className="stat-label">YouTube Subscribers</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon"><i className="fas fa-dolly-flatbed"></i></span>
                <span className="stat-number">$2M+</span>
                <span className="stat-label">Smelter Import Investment</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon"><i className="fas fa-ship"></i></span>
                <span className="stat-number">100+</span>
                <span className="stat-label">Dealing Import</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
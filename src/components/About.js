
import "./About.css";
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
            {/* ...lanjutkan semua <p> lainnya... */}
            <div className="stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h3>10+</h3>
                <p>Companies Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <h3>4,500+</h3>
                <p>YouTube Subscribers</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-truck-loading"></i>
                </div>
                <h3>$2M+</h3>
                <p>Smelter Import Investment</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-ship"></i>
                </div>
                <h3>100+</h3>
                <p>Dealing Import</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
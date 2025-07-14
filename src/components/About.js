import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome! I am Dwi Hery Purnomo, Magister Management, a dedicated professional with over 20+ years
              of experience in Repair & Maintenance Management, Supply Chain Operations, and Import Handling.
              Currently pursuing my Master's degree (M.M) with a background in Economics Management from Universitas Terbuka,
              I'm a father of 4 children with a passion for operational excellence and data analytics.
            </p>
            {/* ...lanjutkan semua <p> lainnya... */}
            <div className="stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
              {/* ...stat-item lain... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
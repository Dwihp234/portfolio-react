import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome! I am Dwi Hery Purnomo MM, a dedicated professional with over 20+ years
              of experience in Repair & Maintenance Management, Supply Chain Operations, and Import Handling.
              With a Master of Management degree from Sekolah Tinggi Ilmu Ekonomi Harapan Bangsa,
              I'm a father of 4 children with a passion for operational excellence.
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

import React from 'react';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-highlights">
        <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>Career Progression Highlights</h3>
        <div className="experience-summary" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '4rem'}}>
          <div className="summary-item">
            <div className="summary-icon">
              <i className="fas fa-user-tie" style={{fontSize: '2rem', color: '#3b82f6'}}></i>
            </div>
            <div style={{width: '100%'}}>
              <div style={{fontWeight: 'bold', color: '#2563eb', fontSize: '1.15rem'}}>Leadership Development</div>
              <div style={{color: '#334155', fontSize: '1rem', marginBottom: '0.5rem'}}>Career Growth</div>
              <div style={{color: '#64748b', fontSize: '0.95rem'}}>Progressed from Port Clerk to Superintendent level, demonstrating consistent leadership growth and operational excellence.</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">
              <i className="fas fa-tools" style={{fontSize: '2rem', color: '#3b82f6'}}></i>
            </div>
            <div style={{width: '100%'}}>
              <div style={{fontWeight: 'bold', color: '#2563eb', fontSize: '1.15rem'}}>Technical Expertise</div>
              <div style={{color: '#334155', fontSize: '1rem', marginBottom: '0.5rem'}}>Heavy Equipment</div>
              <div style={{color: '#64748b', fontSize: '0.95rem'}}>Developed deep expertise in heavy equipment maintenance, predictive analytics, and supply chain optimization.</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">
              <i className="fas fa-chart-bar" style={{fontSize: '2rem', color: '#3b82f6'}}></i>
            </div>
            <div style={{width: '100%'}}>
              <div style={{fontWeight: 'bold', color: '#2563eb', fontSize: '1.15rem'}}>Data-Driven Decisions</div>
              <div style={{color: '#334155', fontSize: '1rem', marginBottom: '0.5rem'}}>Analytics</div>
              <div style={{color: '#64748b', fontSize: '0.95rem'}}>Implemented R Programming and Power Query analytics to transform raw data into actionable management insights.</div>
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-icon">
              <i className="fas fa-handshake" style={{fontSize: '2rem', color: '#3b82f6'}}></i>
            </div>
            <div style={{width: '100%'}}>
              <div style={{fontWeight: 'bold', color: '#2563eb', fontSize: '1.15rem'}}>Strategic Partnerships</div>
              <div style={{color: '#334155', fontSize: '1rem', marginBottom: '0.5rem'}}>Stakeholder Relations</div>
              <div style={{color: '#64748b', fontSize: '0.95rem'}}>Built strong relationships with international suppliers and stakeholders across diverse mining operations.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
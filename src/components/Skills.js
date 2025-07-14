import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Microsoft Excel', level: 95, category: 'Data Analysis' },
    { name: 'R Programming', level: 85, category: 'Data Analysis' },
    { name: 'Power Query', level: 90, category: 'Data Analysis' },
    { name: 'Supply Chain Management', level: 95, category: 'Operations' },
    { name: 'Procurement Strategy', level: 90, category: 'Operations' },
    { name: 'Logistics Coordination', level: 88, category: 'Operations' },
    { name: 'Equipment Maintenance', level: 92, category: 'Technical' },
    { name: 'Project Management', level: 85, category: 'Management' },
    { name: 'Team Leadership', level: 88, category: 'Management' },
    { name: 'Cost Optimization', level: 87, category: 'Management' }
  ];

  const certifications = [
    { name: 'Master of Management', issuer: 'University', year: '2019' },
    { name: 'Supply Chain Management', issuer: 'Professional Institute', year: '2018' },
    { name: 'Mining Operations Safety', issuer: 'Mining Institute', year: '2017' },
    { name: 'Heavy Equipment Management', issuer: 'Technical Institute', year: '2016' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-description">
          Technical skills and professional expertise developed through 25+ years in mining industry operations.
        </p>

        <div className="skills-grid">
          <div className="skills-column">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-category">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3>Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="cert-details">
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
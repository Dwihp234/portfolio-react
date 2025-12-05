import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Microsoft Excel', level: 95, category: 'Data Analysis', icon: 'fa-file-excel' },
  { name: 'R Programming', level: 85, category: 'Data Analysis', icon: 'fa-r-project' },
  { name: 'Power BI', level: 90, category: 'Data Visualization', icon: 'fa-chart-bar' },
  { name: 'Supply Chain Management', level: 88, category: 'Management', icon: 'fa-truck' },
  { name: 'Repair & Maintenance', level: 92, category: 'Technical', icon: 'fa-tools' },
  { name: 'Import Operations', level: 80, category: 'Logistics', icon: 'fa-ship' },
  { name: 'Web Development', level: 75, category: 'Programming', icon: 'fa-code' },
  { name: 'Data Analysis', level: 90, category: 'Analytics', icon: 'fa-chart-line' }
];

const SkillSection = () => (
  <section id="skills" className="skills">
    <div className="container">
      <h2 className="section-title">Skills & Expertise</h2>
      <div style={{textAlign: 'center', color: '#174ed8ff', fontWeight: 600, fontSize: '1.15em', marginBottom: '18px'}}>
        My Expertise Includes: Statistical Analysis & Modeling | Business Intelligence Solutions | Predictive Analytics | Data Visualization  | Supply Chain Optimization | Maintenance Planning | Import & Logistics Management
      </div>
      <div className="skills-list" style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', gap: '24px', justifyContent: 'center', alignItems: 'stretch', width: '100%', overflowX: 'auto'}}>
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card" style={{background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(30,60,114,0.08)', padding: '18px 16px', minWidth: 180, maxWidth: 240, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <div style={{fontSize: '2em', color: '#2563eb', marginBottom: 8}}>
              <i className={`fas ${skill.icon}`}></i>
            </div>
            <h4 style={{color: '#2563eb', fontWeight: 700, marginBottom: 8}}>{skill.name}</h4>
            <div style={{fontSize: '1.1em', color: '#374151', marginBottom: 6}}>{skill.category}</div>
            <div style={{fontWeight: 600, color: '#64748b'}}>Proficiency: {skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillSection;
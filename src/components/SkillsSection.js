import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Data Analysis",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "R", level: 90, icon: "📊" },
        { name: "SQL", level: 95, icon: "🗄️" },
        { name: "Excel", level: 90, icon: "📈" },
        { name: "Pandas", level: 95, icon: "🐼" }
      ]
    },
    {
      category: "Data Visualization", 
      skills: [
        { name: "Tableau", level: 90, icon: "📊" },
        { name: "Power BI", level: 85, icon: "📈" },
        { name: "Matplotlib", level: 85, icon: "�" },
        { name: "Seaborn", level: 80, icon: "🎨" },
        { name: "D3.js", level: 75, icon: "�" }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 85, icon: "🤖" },
        { name: "TensorFlow", level: 80, icon: "🧠" },
        { name: "Keras", level: 75, icon: "⚡" },
        { name: "Statistical Analysis", level: 90, icon: "�" },
        { name: "Predictive Modeling", level: 85, icon: "🔮" }
      ]
    },
    {
      category: "Big Data & Tools",
      skills: [
        { name: "Apache Spark", level: 80, icon: "⚡" },
        { name: "Hadoop", level: 75, icon: "�" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Google Analytics", level: 85, icon: "📊" },
        { name: "Jupyter", level: 90, icon: "�" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Advanced data analytics skills and tools for extracting meaningful insights from complex datasets
        </p>
        
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="tech-skills-stats">
          <div className="tech-skill-item">
            <span className="tech-skill-icon"><i className="fab fa-r-project"></i></span>
            <span className="tech-skill-number">8+</span>
            <span className="tech-skill-label">R Projects</span>
          </div>
          <div className="tech-skill-item">
            <span className="tech-skill-icon"><i className="fas fa-chart-bar"></i></span>
            <span className="tech-skill-number">15+</span>
            <span className="tech-skill-label">Power BI Dashboards</span>
          </div>
          <div className="tech-skill-item">
            <span className="tech-skill-icon"><i className="fab fa-microsoft"></i></span>
            <span className="tech-skill-number">20+</span>
            <span className="tech-skill-label">Excel Models</span>
          </div>
          <div className="tech-skill-item">
            <span className="tech-skill-icon"><i className="fas fa-database"></i></span>
            <span className="tech-skill-number">10+</span>
            <span className="tech-skill-label">Data Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

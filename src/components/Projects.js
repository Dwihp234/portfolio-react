import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 5,
      title: "Supply Chain Management Department",
      description: "Import Operations, Expedition Management, Procurement Analytics, and Multi-modal Transportation coordination for Sebuku Island operations using enterprise systems and business intelligence tools.",

      image: "/gallery/SCM/SCM-01.jpg", // path benar untuk public folder
      

      technologies: ["Power BI", "SAP", "Dynamics AX", "Excel", "RKAB System"],
      category: "analytics",
      githubLink: "#", // Update with actual GitHub link if available
      liveLink: "#", // Update with actual live demo link if available
      // extra: {
      //   keyOperations: [
      //     "Master List & Tax Exemption",
      //     "Sebuku Island Logistics",
      //     "LCT & Barge Operations",
      //     "Procurement KPI Management",
      //     "Import Documentation",
      //     "RKAB Budgeting & Reporting"
      //   ]
      // }
    },
    {
      id: 6,
      title: "Heavy Equipment Analytics Dashboard",
      description: "Real-time analytics dashboard for monitoring, analyzing, and optimizing heavy equipment operations to achieve significant cost reduction and efficiency improvement.",
      image: "/api/placeholder/400/250",

      image: "/gallery/SCM/RM-01.png", // path benar sesuai file di public


      technologies: ["R", "Shiny", "MySQL", "D3.js"],
      category: "visualization",
      githubLink: "#",
      liveLink: "#"
    }
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Data analytics projects showcasing my expertise in extracting insights from complex datasets
        </p>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterProjects('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'analytics' ? 'active' : ''}`}
            onClick={() => filterProjects('analytics')}
          >
            Analytics
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'visualization' ? 'active' : ''}`}
            onClick={() => filterProjects('visualization')}
          >
            Visualization
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
            onClick={() => filterProjects('research')}
          >
            Research
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'finance' ? 'active' : ''}`}
            onClick={() => filterProjects('finance')}
          >
            Finance
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link github">
                      <span>GitHub</span>
                    </a>
                    <a href={project.liveLink} className="project-link live">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {/* SCM Key Operations Section */}
                {project.extra && project.extra.keyOperations && (
                  <div className="scm-key-operations">
                    <h4>Key SCM Operations:</h4>
                    <div className="scm-operations-list">
                      {project.extra.keyOperations.map((op, idx) => (
                        <div key={idx} className="scm-operation-item">{op}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
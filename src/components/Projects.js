import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "Customer Segmentation Analysis",
      description: "Advanced customer segmentation using machine learning algorithms to identify distinct customer groups for targeted marketing strategies.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-learn", "Pandas", "Tableau"],
      category: "analytics",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Sales Forecasting Dashboard",
      description: "Interactive dashboard for sales forecasting using time series analysis and predictive modeling with real-time data visualization.",
      image: "/api/placeholder/400/250",
      technologies: ["Power BI", "Python", "SQL", "Azure"],
      category: "visualization",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Market Research Analytics",
      description: "Comprehensive market research analysis with sentiment analysis, trend identification, and competitive intelligence.",
      image: "/api/placeholder/400/250",
      technologies: ["R", "ggplot2", "Shiny", "NLP"],
      category: "research",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Financial Risk Assessment",
      description: "Risk assessment model for financial portfolios using statistical analysis and machine learning algorithms.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "TensorFlow", "Matplotlib", "SQL"],
      category: "finance",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Data-driven supply chain optimization analysis to reduce costs and improve efficiency using predictive analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Apache Spark", "Tableau", "SQL"],
      category: "analytics",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 6,
      title: "Heavy Equipment Analytics Dashboard",
      description: "Real-time analytics dashboard for monitoring, analyzing, and optimizing heavy equipment operations to achieve significant cost reduction and efficiency improvement.",
      image: "/api/placeholder/400/250",
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
                <div className="image-placeholder">
                  <span>Project Image</span>
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
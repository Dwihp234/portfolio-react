import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image, title) => {
    setSelectedImage({ src: image, title: title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Helper function to get image title from filename
  const getImageTitle = (imagePath) => {
    const filename = imagePath.split('/').pop().replace('.jpg', '').replace('.png', '');
    const titleMap = {
      'heatmap': 'Equipment Heatmap Analysis',
      'macost': 'Maintenance Cost Analysis',
      'bd1': 'Breakdown Analysis Dashboard',
      'heatmap1': 'Advanced Heatmap Visualization',
      'mab2': 'Maintenance Analytics Board 2',
      'mabd1': 'Maintenance Analytics Dashboard 1',
      'mabd2': 'Maintenance Analytics Dashboard 2',
      'macomp1': 'Component Analysis Dashboard',
      'macost1': 'Cost Analysis Visualization',
      'mayear': 'Yearly Maintenance Trends',
      'mayear1': 'Annual Performance Analysis',
      'equipment-failure-analysis': 'Equipment Failure Analysis (R)',
      'cost-optimization-model': 'Cost Optimization Model',
      'fuel-efficiency-analytics': 'Fuel Efficiency Analytics',
      'component-reliability-study': 'Component Reliability Study',
      'maintenance-scheduling-algorithm': 'Maintenance Scheduling Algorithm',
      'performance-metrics-visualization': 'Performance Metrics Visualization',
      'heavy-equipment-maintenance': 'Heavy Equipment Dashboard',
      'predictive-maintenance': 'Predictive Maintenance Analysis',
      'backlog-program': 'BACKLOG Optimization Program',
      'cost-control-analytics': 'Cost Control Analytics',
      'fuel-consumption-analysis': 'Fuel Consumption Analysis',
      'component-lifecycle': 'Component Lifecycle Management',
      'import-operations': 'Import Operations Dashboard',
      'expedition-management': 'Expedition Management',
      'procurement-analytics': 'Procurement Analytics',
      'sebuku-logistics': 'Sebuku Island Logistics',
      'customs-clearance': 'Customs Clearance Process',
      'kpi-reporting': 'KPI Reporting Dashboard',
      'channel-overview': 'YouTube Channel Overview',
      'maintenance-tutorials': 'Maintenance Tutorials',
      'heavy-equipment': 'Heavy Equipment Content',
      'predictive-maintenance-2': 'Predictive Maintenance Videos'
    };
    return titleMap[filename] || filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const galleryData = [
    {
      id: 1,
      title: "Repair & Maintenance Department",
      description: "Advanced R Programming analytics for Heavy Equipment Maintenance, Statistical Modeling for Predictive Maintenance, Cost Optimization Algorithms, and Performance Analytics using R, Power BI, and Power Query integration.",
      category: "repair-maintenance",
      folder: "rmR",
      images: [
        "/gallery/rmR/heatmap.jpg",
        "/gallery/rmR/macost.jpg",
        "/gallery/rmR/bd1.png",
        "/gallery/rmR/heatmap1.png",
        "/gallery/rmR/mab2.png",
        "/gallery/rmR/mabd1.png",
        "/gallery/rmR/mabd2.png",
        "/gallery/rmR/macomp1.png",
        "/gallery/rmR/macost1.png",
        "/gallery/rmR/mayear.png",
        "/gallery/rmR/mayear1.png"
      ],
      technologies: ["R Programming", "Power BI", "Power Query", "Power Pivot", "Statistical Analysis", "Machine Learning"],
      type: "Department Analytics",
      highlights: [
        "R Programming for Statistical Analysis",
        "Predictive Maintenance Models", 
        "Equipment Failure Prediction using R",
        "Cost Optimization Algorithms",
        "Fuel Efficiency Statistical Models",
        "Component Reliability Analysis",
        "Maintenance Scheduling Optimization",
        "Performance Metrics & Data Visualization"
      ]
    },
    {
      id: 2,
      title: "Supply Chain Management Department",
      description: "Import Operations, Expedition Management, Procurement Analytics, and Multi-modal Transportation coordination for Sebuku Island operations.",
      category: "scm",
      folder: "SCM",
      images: [
        "/gallery/SCM/import-operations.jpg",
        "/gallery/SCM/expedition-management.jpg",
        "/gallery/SCM/procurement-analytics.jpg",
        "/gallery/SCM/sebuku-logistics.jpg",
        "/gallery/SCM/customs-clearance.jpg",
        "/gallery/SCM/kpi-reporting.jpg"
      ],
      technologies: ["Power BI", "SAP", "Dynamics AX", "Excel", "RKAB System"],
      type: "Department Analytics",
      highlights: [
        "Master List & Tax Exemption",
        "Sebuku Island Logistics",
        "LCT & Barge Operations",
        "Procurement KPI Management",
        "Import Documentation",
        "RKAB Budgeting & Reporting"
      ]
    }
    // {
    //   id: 3,
    //   title: "YouTube Channel @dwihpjavas",
    //   description: "Educational content creation sharing 25+ years of Repair & Maintenance expertise with 3,200+ subscribers worldwide.",
    //   category: "content",
    //   folder: "YouTube",
    //   images: [
    //     "/gallery/YouTube/channel-overview.jpg",
    //     "/gallery/YouTube/maintenance-tutorials.jpg",
    //     "/gallery/YouTube/heavy-equipment.jpg",
    //     "/gallery/YouTube/predictive-maintenance.jpg"
    //   ],
    //   technologies: ["Video Production", "Educational Content", "YouTube Analytics"],
    //   type: "Knowledge Sharing",
    //   highlights: [
    //     "3,200+ Subscribers",
    //     "1M+ Views",
    //     "Heavy Equipment Tutorials",
    //     "Maintenance Best Practices",
    //     "Industry Knowledge Sharing",
    //     "COVID-19 WFH Content Creation"
    //   ]
    // }
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Department Analytics & Experience Gallery</h2>
        <p className="gallery-description">
          Explore my 25+ years of experience across different departments, each showcasing specialized analytics and operational excellence with distinct technologies and methodologies.
        </p>

        {/* Repair & Maintenance Department Section */}
        <div className="department-section rm-section">
          <div className="department-header">
            <div className="department-icon rm-icon">
              <i className="fas fa-tools"></i>
            </div>
            <div className="department-info">
              <h3>Repair & Maintenance Department</h3>
              <p>Advanced R Programming analytics for Heavy Equipment Maintenance, Statistical Modeling for Predictive Maintenance, Cost Optimization Algorithms, and Performance Analytics using R, Power BI, and Power Query integration.</p>
              <div className="tech-tags">
                {["R Programming", "Power BI", "Power Query", "Power Pivot", "Statistical Analysis", "Machine Learning"].map((tech, index) => (
                  <span key={index} className="tech-tag rm-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="department-highlights">
            <h4>Key R Programming Analytics:</h4>
            <div className="highlights-grid">
              {[
                "R Programming for Statistical Analysis",
                "Predictive Maintenance Models", 
                "Equipment Failure Prediction using R",
                "Cost Optimization Algorithms",
                "Fuel Efficiency Statistical Models",
                "Component Reliability Analysis",
                "Maintenance Scheduling Optimization",
                "Performance Metrics & Data Visualization"
              ].map((highlight, index) => (
                <div key={index} className="highlight-item rm-highlight">
                  <i className="fab fa-r-project"></i>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="images-grid rm-gallery">
            {galleryData[0].images.map((image, index) => (
              <div key={index} className="image-item rm-item">
                <div className="rm-image-container" onClick={() => openImageModal(image, getImageTitle(image))}>
                  <img 
                    src={image} 
                    alt={getImageTitle(image)}
                    onLoad={(e) => {
                      e.target.style.display = 'block';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer'}}
                  />
                  <div className="rm-placeholder" style={{display: 'none'}}>
                    <i className="fab fa-r-project"></i>
                    <h4>{getImageTitle(image)}</h4>
                    <p>R Programming Analytics</p>
                    <span className="file-path">rmR/{image.split('/').pop()}</span>
                  </div>
                  <div className="zoom-indicator">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
                <div className="image-overlay rm-overlay">
                  <h4>{getImageTitle(image)}</h4>
                  <span className="analytics-type">R Programming Analytics</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Chain Management Department Section */}
        <div className="department-section scm-section">
          <div className="department-header">
            <div className="department-icon scm-icon">
              <i className="fas fa-shipping-fast"></i>
            </div>
            <div className="department-info">
              <h3>Supply Chain Management Department</h3>
              <p>Import Operations, Expedition Management, Procurement Analytics, and Multi-modal Transportation coordination for Sebuku Island operations using enterprise systems and business intelligence tools.</p>
              <div className="tech-tags">
                {["Power BI", "SAP", "Dynamics AX", "Excel", "RKAB System"].map((tech, index) => (
                  <span key={index} className="tech-tag scm-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="department-highlights">
            <h4>Key SCM Operations:</h4>
            <div className="highlights-grid">
              {[
                "Master List & Tax Exemption",
                "Sebuku Island Logistics",
                "LCT & Barge Operations",
                "Procurement KPI Management",
                "Import Documentation",
                "RKAB Budgeting & Reporting"
              ].map((highlight, index) => (
                <div key={index} className="highlight-item scm-highlight">
                  <i className="fas fa-ship"></i>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="images-grid scm-gallery">
            {galleryData[1].images.map((image, index) => (
              <div key={index} className="image-item scm-item">
                <div className="scm-image-container" onClick={() => openImageModal(`/gallery${image}`, getImageTitle(image))}>
                  <img 
                    src={`/gallery${image}`} 
                    alt={getImageTitle(image)}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer'}}
                  />
                  <div className="scm-placeholder" style={{display: 'flex'}}>
                    <i className="fas fa-shipping-fast"></i>
                    <h4>{getImageTitle(image)}</h4>
                    <p>Upload SCM analytics here</p>
                    <span className="file-path">SCM/{image.split('/').pop()}</span>
                  </div>
                  <div className="zoom-indicator">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
                <div className="image-overlay scm-overlay">
                  <h4>{getImageTitle(image)}</h4>
                  <span className="analytics-type">SCM Operations</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div className="modal-overlay"></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal}>
                <i className="fas fa-times"></i>
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>Click outside or press ESC to close</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

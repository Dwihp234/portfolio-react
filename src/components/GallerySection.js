const scmImages = [
  {
    src: '/gallery/SCM/import-operations.jpg',
    alt: 'Import Operations Dashboard',
    desc: 'Import Operations Dashboard'
  },
  {
    src: '/gallery/SCM/expedition-management.jpg',
    alt: 'Expedition Management',
    desc: 'Expedition Management'
  },
  {
    src: '/gallery/SCM/procurement-analytics.jpg',
    alt: 'Procurement Analytics',
    desc: 'Procurement Analytics'
  },
  {
    src: '/gallery/SCM/sebuku-logistics.jpg',
    alt: 'Sebuku Island Logistics',
    desc: 'Sebuku Island Logistics'
  },
  {
    src: '/gallery/SCM/customs-clearance.jpg',
    alt: 'Customs Clearance Process',
    desc: 'Customs Clearance Process'
  },
  {
    src: '/gallery/SCM/kpi-reporting.jpg',
    alt: 'KPI Reporting Dashboard',
    desc: 'KPI Reporting Dashboard'
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="scm-gallery">
          <h3>Supply Chain Management Department</h3>
          <p>
            Import Operations, Expedition Management, Procurement Analytics, and Multi-modal Transportation coordination for Sebuku Island operations using enterprise systems and business intelligence tools.<br/>
            <b>Tools:</b> Power BI, SAP, Dynamics AX, Excel, RKAB System
          </p>
          <div className="scm-gallery-images">
            {scmImages.map((img, idx) => (
              <div className="scm-gallery-item" key={idx}>
                <div className="scm-image-container">
                  <img src={img.src} alt={img.alt} />
                </div>
                <div className="scm-gallery-desc">{img.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

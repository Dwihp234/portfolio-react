
const scmImages = [
  {
    src: '/gallery/SCM/cost-optimization.jpg',
    alt: 'Cost Optimization',
    desc: 'Cost Optimization in Supply Chain'
  },
  {
    src: '/gallery/SCM/inventory.jpg',
    alt: 'Inventory Management',
    desc: 'Inventory Management & Analytics'
  },
  {
    src: '/gallery/SCM/logistics-dashboard.jpg',
    alt: 'Logistics Dashboard',
    desc: 'Logistics Dashboard & Expedition'
  },
  {
    src: '/gallery/SCM/supplier-performance.jpg',
    alt: 'Supplier Performance',
    desc: 'Supplier Performance Monitoring'
  },
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
                <img src={img.src} alt={img.alt} />
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

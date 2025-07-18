import './AboutSection.css';
import ProductSection from './ProductSection';

const AboutSection = () => {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Hello! I'm Dwi Hery Purnomo</h3>
              <p>
                I'm a passionate <strong>Data Analytics Expert</strong> with over 20 years of experience in transforming raw data into actionable business insights. I specialize in statistical analysis, machine learning, and data visualization to help organizations make data-driven decisions.
              </p>
              <p>
                My expertise spans across multiple domains including business intelligence, predictive modeling, and advanced analytics. I've successfully completed over 500 projects with a 95% success rate, helping companies optimize their operations and drive growth through data-driven strategies.
              </p>
              
              <div className="about-details">
                <div className="detail-item">
                  <span className="label">Name:</span>
                  <span className="value">Dwi Hery Purnomo, M.M</span>
                </div>
                <div className="detail-item">
                  <span className="label">Education:</span>
                  <span className="value">Magister Management (M.M)</span>
                </div>
                <div className="detail-item">
                  <span className="label">Specialization:</span>
                  <span className="value">Data Analytics Expert</span>
                </div>
                <div className="detail-item">
                  <span className="label">Location:</span>
                  <span className="value">Jakarta, Indonesia</span>
                </div>
                <div className="detail-item">
                  <span className="label">Email:</span>
                  <span className="value">dwihplanner@gmail.com</span>
                </div>
                <div className="detail-item">
                  <span className="label">Phone:</span>
                  <span className="value">+6281385639122</span>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>20+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>95%</h4>
                <p>Success Rate</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Analytics Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSection />
    </>
  );
};

export default AboutSection;

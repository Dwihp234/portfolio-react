import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Discuss Your Data Analytics Needs</h3>
            <p>Ready to transform your data into actionable insights? I'm here to help you unlock the power of your data with advanced analytics solutions.</p>
            <div className="contact-details">
              <p><i className="fas fa-envelope"></i> dwihplanner@gmail.com</p>
              <p><i className="fas fa-phone"></i> +6281385639122</p>
              <p><i className="fas fa-map-marker-alt"></i> Jakarta, Indonesia</p>
              <p><i className="fas fa-linkedin"></i> linkedin.com/in/dwi-hery-purnomo</p>
              <p><i className="fab fa-youtube"></i> youtube.com/@dwihpjavas</p>
            </div>
            <div className="expertise-note">
              <h4>My Expertise Includes:</h4>
              <ul>
                <li>Statistical Analysis & Modeling</li>
                <li>Business Intelligence Solutions</li>
                <li>Predictive Analytics</li>
                <li>Data Visualization</li>
                <li>Machine Learning Implementation</li>
              </ul>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

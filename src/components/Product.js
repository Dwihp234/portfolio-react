import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <section id="product" className="product-section">
      <hr className="section-divider" />
      <div className="container">
        <h2 className="section-title">Product</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Consultant</h3>
            <p>
              Professional consulting services in supply chain, data analytics, and
              operational management for companies and individuals.
            </p>
          </div>
          <div className="product-card">
            <h3>Course</h3>
            <p>
              Online and offline courses to enhance your skills in data, supply
              chain, and business intelligence.
            </p>
          </div>
          <div className="product-card">
            <h3>Mini Bootcamp</h3>
            <p>
              Intensive short training programs to master specific topics in a
              practical and applicable way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
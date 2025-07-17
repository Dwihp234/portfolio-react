import React from "react";
import "./ProductDetail.css";

const CoursePage = () => (
  <div className="product-detail-page">
    <h1>Courses</h1>
    <p>
      <strong>Online and offline courses</strong> to boost your skills in data, supply chain, and business intelligence.
    </p>
    <div className="dummy-content">
      <h2>Popular Courses</h2>
      <ul>
        <li>Excel for Data Analysis</li>
        <li>Power BI Fundamentals</li>
        <li>Supply Chain Management 101</li>
      </ul>
      <p>
        <em>This is a demo page. Replace with your real content.</em>
      </p>
    </div>
  </div>
);

export default CoursePage;
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import "./SkillChart.css";
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: [
    "Power BI",
    "Excel",
    "Supply Chain",
    "Repair & Maintenance",
    "Import Operations",
    "Web Development",
    "Data analysis"
  ],
  datasets: [
    {
      label: "Skill Level (%)",
      data: [95, 90, 95, 92, 90, 70, 85],
      backgroundColor: [
        "#3b82f6",
        "#059669",
        "#f59e42",
        "#e11d48",
        "#6366f1",
        "#10b981",
        "#f43f5e"
      ],
      borderRadius: 10,
      borderSkipped: false,
    }
  ]
};

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true }
  },
  scales: {
    x: { min: 0, max: 100, ticks: { stepSize: 10 } },
    y: { ticks: { font: { size: 14 } } }
  }
};

const HorizontalBarChart = () => (
  <div className="chart-container">
    <h3 className="chart-title">Technical Skills Overview</h3>
    <Bar data={data} options={options} />
  </div>
);

export default HorizontalBarChart;
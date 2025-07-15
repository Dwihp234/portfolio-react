// import React from 'react';
// import './Experience.css';

// const Experience = () => {
//   const experiences = [
//     {
//       period: "Apr 2020 - Present",
//       position: "Procurement & Outbound Logistics Superintendent",
//       company: "PT. Sebuku Iron Lateritic Ores",
//       location: "Head Office, Jakarta",
//       type: "current",
//       description: "Leading procurement operations and outbound logistics coordination for iron lateritic ore mining operations with focus on strategic supply chain management and cost optimization.",
//       achievements: [
//         "Oversee procurement strategy and vendor management across multiple suppliers",
//         "Coordinate outbound logistics and shipment operations for iron ore exports",
//         "Implement cost optimization initiatives resulting in significant savings",
//         "Manage supply chain risk assessment and regulatory compliance",
//         "Lead cross-functional teams to ensure operational excellence"
//       ]
//     },
//     {
//       period: "Mar 2015 - Mar 2020",
//       position: "Expeditor/Supply Chain Management Engineer",
//       company: "PT. Sebuku Iron Lateritic Ores",
//       location: "Head Office, Jakarta",
//       type: "past",
//       description: "Managed comprehensive supply chain operations and expedition coordination for mining operations with focus on logistics optimization and inventory management.",
//       achievements: [
//         "Managed end-to-end supply chain operations for mining equipment and materials",
//         "Coordinated expedition and multi-modal transportation logistics",
//         "Optimized inventory management processes using advanced analytics",
//         "Implemented supply chain management best practices and procedures",
//         "Collaborated with international suppliers and logistics partners"
//       ]
//     },
//     {
//       period: "Mar 2011 - Feb 2015",
//       position: "Maintenance Planning Supervisor",
//       company: "PT. Sebuku Iron Lateritic Ores",
//       location: "Sebuku Island, South Kalimantan",
//       type: "past",
//       description: "Supervised maintenance planning operations and heavy equipment management with emphasis on predictive maintenance strategies and equipment reliability.",
//       achievements: [
//         "Supervised maintenance planning team for heavy mining equipment",
//         "Implemented predictive maintenance strategies using R Programming analytics",
//         "Managed equipment reliability programs and performance optimization",
//         "Developed comprehensive maintenance scheduling systems",
//         "Reduced equipment downtime by 25% through proactive maintenance planning"
//       ]
//     },
//     {
//       period: "Sep 2010 - Feb 2011",
//       position: "Maintenance Planning Foreman",
//       company: "PT. Sebuku Iron Lateritic Ores",
//       location: "Sebuku Island, South Kalimantan",
//       type: "past",
//       description: "Led maintenance planning operations and equipment reliability management with focus on operational efficiency and continuous improvement.",
//       achievements: [
//         "Developed and implemented maintenance planning procedures",
//         "Managed equipment reliability programs and performance metrics",
//         "Coordinated maintenance activities across multiple departments",
//         "Implemented preventive maintenance schedules and protocols",
//         "Mentored junior maintenance planners and technical staff"
//       ]
//     },
//     {
//       period: "Jun 2008 - Aug 2010",
//       position: "Senior Supervisor - Development Logistics & Maintenance",
//       company: "PT. Kemakmuran Pertiwi Tambang (Harita Group)",
//       location: "Ekor Site, East Halmahera",
//       type: "past",
//       description: "Led development of integrated logistics and maintenance systems for new mining operations with focus on operational setup and system implementation.",
//       achievements: [
//         "Developed comprehensive logistics and maintenance systems from ground up",
//         "Implemented operational procedures and safety protocols",
//         "Managed site development projects and infrastructure setup",
//         "Coordinated cross-functional teams during operational startup phase",
//         "Established vendor relationships and procurement procedures"
//       ]
//     },
//     {
//       period: "Feb 2008 - May 2008",
//       position: "Maintenance Planning Supervisor",
//       company: "PT. Kemakmuran Pertiwi Tambang (Harita Group)",
//       location: "Ekor Site, East Halmahera",
//       type: "past",
//       description: "Supervised maintenance planning activities for mining equipment with focus on reliability and operational efficiency.",
//       achievements: [
//         "Supervised maintenance planning activities for heavy mining equipment",
//         "Managed equipment maintenance schedules and resource allocation",
//         "Coordinated maintenance resources and spare parts inventory",
//         "Implemented maintenance best practices and standard procedures"
//       ]
//     },
//     {
//       period: "Jun 2007 - Jan 2008",
//       position: "Maintenance Planning Supervisor",
//       company: "PT. Tanjung Lingga (Citra Borneo Indah)",
//       location: "Pangkalanbun, Central Kalimantan",
//       type: "past",
//       description: "Managed maintenance planning for agricultural and processing equipment with focus on operational continuity and efficiency.",
//       achievements: [
//         "Managed maintenance planning for agricultural processing equipment",
//         "Implemented preventive maintenance programs and protocols",
//         "Coordinated maintenance activities and resource management",
//         "Optimized equipment utilization and operational efficiency"
//       ]
//     },
//     {
//       period: "Dec 2006 - Jun 2007",
//       position: "Maintenance Planning Supervisor",
//       company: "PT. Nipindo Prima Mesin",
//       location: "Head Office, Jakarta",
//       type: "past",
//       description: "Supervised maintenance planning operations for mining contractor services with focus on client satisfaction and operational excellence.",
//       achievements: [
//         "Developed maintenance planning strategies for mining contractor operations",
//         "Managed contractor maintenance operations and service delivery",
//         "Coordinated with mining clients and stakeholder management",
//         "Implemented maintenance cost control and optimization measures"
//       ]
//     },
//     {
//       period: "Jun 1999 - Feb 2000",
//       position: "Port Operations Clerk",
//       company: "PT. Citra Pola Niaga Nusantara",
//       location: "Tanjung Priok Port, Jakarta",
//       type: "past",
//       description: "Started career in port operations and logistics documentation, gaining foundational experience in supply chain and logistics management.",
//       achievements: [
//         "Managed port documentation and customs clearance procedures",
//         "Coordinated logistics operations and cargo handling",
//         "Handled shipping documentation and regulatory compliance",
//         "Maintained accurate shipping records and inventory tracking"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="experience">
//       <div className="container">
//         <h2 className="section-title">Work Experience</h2>
//         <p className="experience-description">
//           My professional journey and key achievements in mining industry operations, 
//           spanning 25+ years from Port Operations to Procurement & Outbound Logistics Superintendent.
//         </p>

//         <div className="experience-summary">
//           <div className="summary-item">
//             <div className="summary-icon">
//               <i className="fas fa-calendar-alt"></i>
//             </div>
//             <div className="summary-info">
//               <h4>25+ Years</h4>
//               <p>Mining Industry Experience</p>
//             </div>
//           </div>
//           <div className="summary-item">
//             <div className="summary-icon">
//               <i className="fas fa-building"></i>
//             </div>
//             <div className="summary-info">
//               <h4>12 Companies</h4>
//               <p>Diverse Industry Experience</p>
//             </div>
//           </div>
//           <div className="summary-item">
//             <div className="summary-icon">
//               <i className="fas fa-chart-line"></i>
//             </div>
//             <div className="summary-info">
//               <h4>Level II to V</h4>
//               <p>Progressive Career Growth</p>
//             </div>
//           </div>
//           <div className="summary-item">
//             <div className="summary-icon">
//               <i className="fas fa-map-marked-alt"></i>
//             </div>
//             <div className="summary-info">
//               <h4>Multiple Islands</h4>
//               <p>Jakarta, Kalimantan, Halmahera</p>
//             </div>
//           </div>
//         </div>

//         <div className="experience-timeline">
//           {experiences.map((exp, index) => (
//             <div key={index} className={`experience-item ${exp.type}`}>
//               <div className="experience-marker">
//                 <div className="marker-dot"></div>
//                 {index < experiences.length - 1 && <div className="marker-line"></div>}
//               </div>
//               <div className="experience-content">
//                 <div className="experience-header">
//                   <h3 className="experience-position">{exp.position}</h3>
//                   <span className="experience-period">{exp.period}</span>
//                 </div>
//                 <div className="experience-company">
//                   <i className="fas fa-building"></i>
//                   <span>{exp.company}</span>
//                 </div>
//                 <div className="experience-location">
//                   <i className="fas fa-map-marker-alt"></i>
//                   <span>{exp.location}</span>
//                 </div>
//                 <p className="experience-description">{exp.description}</p>
//                 <div className="experience-achievements">
//                   <h4>Key Achievements:</h4>
//                   <ul>
//                     {exp.achievements.map((achievement, i) => (
//                       <li key={i}>{achievement}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="experience-highlights">
//           <h3>Career Progression Highlights</h3>
//           <div className="highlights-grid">
//             <div className="highlight-item">
//               <div className="highlight-icon">
//                 <i className="fas fa-user-tie"></i>
//               </div>
//               <div className="highlight-content">
//                 <h4>Leadership Development</h4>
//                 <p>Progressed from Port Clerk to Superintendent level, demonstrating consistent leadership growth and operational excellence.</p>
//               </div>
//             </div>
//             <div className="highlight-item">
//               <div className="highlight-icon">
//                 <i className="fas fa-tools"></i>
//               </div>
//               <div className="highlight-content">
//                 <h4>Technical Expertise</h4>
//                 <p>Developed deep expertise in heavy equipment maintenance, predictive analytics, and supply chain optimization.</p>
//               </div>
//             </div>
//             <div className="highlight-item">
//               <div className="highlight-icon">
//                 <i className="fas fa-chart-bar"></i>
//               </div>
//               <div className="highlight-content">
//                 <h4>Data-Driven Decisions</h4>
//                 <p>Implemented R Programming and Power Query analytics to transform raw data into actionable management insights.</p>
//               </div>
//             </div>
//             <div className="highlight-item">
//               <div className="highlight-icon">
//                 <i className="fas fa-handshake"></i>
//               </div>
//               <div className="highlight-content">
//                 <h4>Strategic Partnerships</h4>
//                 <p>Built strong relationships with international suppliers and stakeholders across diverse mining operations.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
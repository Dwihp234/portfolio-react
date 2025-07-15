import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import YouTubeSection from "./components/YouTubeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

// // Temporary Experience component
// const Experience = () => {
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

//         <div className="experience-placeholder">
//           <h3>Procurement & Outbound Logistics Superintendent</h3>
//           <p><strong>PT. Sebuku Iron Lateritic Ores</strong> - Apr 2020 - Present</p>
//           <p>Leading procurement operations and outbound logistics coordination for iron lateritic ore mining operations with focus on strategic supply chain management and cost optimization.</p>
          
//           <h4>Key Achievements:</h4>
//           <ul>
//             <li>Oversee procurement strategy and vendor management across multiple suppliers</li>
//             <li>Coordinate outbound logistics and shipment operations for iron ore exports</li>
//             <li>Implement cost optimization initiatives resulting in significant savings</li>
//             <li>Manage supply chain risk assessment and regulatory compliance</li>
//             <li>Lead cross-functional teams to ensure operational excellence</li>
//           </ul>

//           <div style={{marginTop: '2rem'}}>
//             <h4>Previous Key Positions:</h4>
//             <p><strong>Expeditor/Supply Chain Management Engineer (2015-2020)</strong> - PT. Sebuku Iron Lateritic Ores</p>
//             <p><strong>Maintenance Planning Supervisor (2011-2015)</strong> - PT. Sebuku Iron Lateritic Ores</p>
//             <p><strong>Senior Supervisor Development Logistics (2008-2010)</strong> - PT. Kemakmuran Pertiwi Tambang</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      {/* <Experience />  // HAPUS BARIS INI */}
      <Projects />
      <Gallery />
      <YouTubeSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
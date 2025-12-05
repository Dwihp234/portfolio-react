import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
// import GallerySCM from "./components/GallerySCM";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import YouTubeSection from "./components/YouTubeSection";
import Experience from "./components/Experience";


import SkillChart from "./components/SkillChart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <SkillChart />
        <div id="experience">
          <Experience />
        </div>
        <Projects />
        <Gallery />
        {/* <GallerySCM /> */}
        <YouTubeSection />
        <Product />
        <ContactSection />
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
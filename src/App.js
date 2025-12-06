import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Projects from "./components/Projects";
import SCMGallery from "./components/SCMGallery";
import YouTubeSection from "./components/YouTubeSection";
import Experience from "./components/Experience";
import SkillSection from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <About />
        <SkillSection />
        <Experience />
        <Projects />
        <SCMGallery />
        <Gallery />
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
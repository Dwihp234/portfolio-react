import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import YouTubeSection from "./components/YouTubeSection";
import Product from "./components/Product";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
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
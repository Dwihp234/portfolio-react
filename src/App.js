import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import EducationSection from "./components/EducationSection";
import GallerySection from "./components/GallerySection";
import YouTubeSection from "./components/YouTubeSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <Projects />
      <Gallery />
      <EducationSection />
      <GallerySection />
      <YouTubeSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Leadership from "./pages/Leadership";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Industries from "./pages/Industries";
import WhyLegendaryOne from "./pages/WhyPrimetel";
import Contact from "./pages/Contact";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import Branding from "./pages/services/Branding";
import TechnicalSolutions from "./pages/services/TechnicalSolutions";
import CollegeProjects from "./pages/services/CollegeProjects";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import CloudDevOps from "./pages/services/CloudDevOps";
import "./App.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";
import AnnouncementBar from "./components/AnnouncementBar";
import LeadCapturePopup from "./components/LeadCapturePopup";
import FloatingCTA from "./components/FloatingCTA";
import SocialProofToast from "./components/SocialProofToast";
import StickyMobileCTA from "./components/StickyMobileCTA";

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(
    () => !sessionStorage.getItem("announcement_dismissed"),
  );

  const dismissAnnouncement = () => {
    sessionStorage.setItem("announcement_dismissed", "1");
    setShowAnnouncement(false);
  };

  return (
    <Router>
      {showAnnouncement && <AnnouncementBar onDismiss={dismissAnnouncement} />}
      <Navbar announcementVisible={showAnnouncement} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route
          path="/services/technical-solutions"
          element={<TechnicalSolutions />}
        />
        <Route
          path="/services/college-projects"
          element={<CollegeProjects />}
        />
        <Route
          path="/services/ecommerce-solutions"
          element={<EcommerceSolutions />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/cloud-devops" element={<CloudDevOps />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why" element={<WhyLegendaryOne />} />
        <Route path="/why-legendary" element={<WhyLegendaryOne />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <LeadCapturePopup />
      <FloatingCTA />
      <SocialProofToast />
      <StickyMobileCTA />
      <ChatBot />
      <WhatsAppButton />
    </Router>
  );
}

export default App;

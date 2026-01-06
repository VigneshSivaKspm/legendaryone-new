
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Industries from './pages/Industries';
import WhyPrimetel from './pages/WhyPrimetel';
import Contact from './pages/Contact';
import './App.css';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/why" element={<WhyPrimetel />} />
        <Route path="/why-legendary" element={<WhyPrimetel />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;

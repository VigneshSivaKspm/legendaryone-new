import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
// Import actual sections to show them on the Home page
import About from './About';
import Services from './Services';
import WhyPrimetel from './WhyPrimetel';
import Technologies from './Technologies';
import Industries from './Industries';
import Projects from './Projects';
import Leadership from './Leadership';
import Contact from './Contact';

const Home = () => {
  const heroRef = useRef(null);
  const [dynamicText, setDynamicText] = useState('');
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 80, easing: 'ease-in-out' });
  }, []);

  // Logo parts animation sequence for hero
  useEffect(() => {
    const container = heroRef.current;
    if (!container) return;

    const logoParts = container.querySelectorAll('.logo-part');
    const texts = ['Key', 'Infinite', 'Innovations'];
    const finalText = 'Legendary One';

    let delay = 0;
    const timers = [];

    // Animate the logo parts and text
    logoParts.forEach((part, index) => {
      // Animate logo part
      const t1 = setTimeout(() => {
        part.style.animation = 'logo-appear 1s ease forwards';
        
        // Show corresponding text
        if (index < texts.length) {
          setDynamicText(texts[index]);
          const textEl = container.querySelector('#dynamic-text');
          if (textEl) {
            textEl.classList.remove('text-fade-run');
            void textEl.offsetWidth; // Trigger reflow
            textEl.classList.add('text-fade-run');
          }
        }
      }, delay);
      timers.push(t1);
      
      // After the last logo part, show final text and subtitle
      if (index === logoParts.length - 1) {
        const t2 = setTimeout(() => {
          setDynamicText(finalText);
          const textEl = container.querySelector('#dynamic-text');
          if (textEl) {
            textEl.classList.add('final-text');
            textEl.classList.remove('text-fade-run');
            void textEl.offsetWidth; // Trigger reflow
            textEl.classList.add('text-fade-run');
          }
          
          // Show subtitle after a short delay
          const t3 = setTimeout(() => {
            setShowTagline(true);
          }, 500);
          timers.push(t3);
          
        }, delay + 1500); // Wait for logo animation to complete
        timers.push(t2);
      }
      
      delay += 1500; // Delay between animations
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/" />
      </Helmet>
      <main className="home-scroll-container" aria-label="Home Page">

        {/* Cosmic Hero Section */}
        <section className="night-sky-hero" data-aos="fade-in" aria-labelledby="home-hero-heading" ref={heroRef}>
          <div className="cosmic-overlay" role="presentation"></div>
          <div className="twinkling" role="presentation"></div>
          <div className="nebula" role="presentation"></div>
          <div className="floating-elements" role="presentation"></div>
          <div className="hero-content">
            <div className="hero-content-wrapper">
              {/* Logo Container */}
              <div className="logo-container">
                <div className="hero-logo" role="img" aria-label="Company Logo">
                  <img src="/logos/logopart1.webp" alt="Logo Part 1" className="logo-part part-1" />
                  <img src="/logos/logopart2.webp" alt="Logo Part 2" className="logo-part part-2" />
                  <img src="/logos/logopart3.webp" alt="Logo Part 3" className="logo-part part-3" />
                </div>
              </div>
              
              {/* Main Title */}
              <h1 id="dynamic-text" className="dynamic-text text-fade-run main-title" tabIndex={0}>
                {dynamicText}
              </h1>
              
              {/* Subtitle */}
              <p id="tagline" className={`subtitle ${showTagline ? 'show' : ''}`} tabIndex={0}>
                Where Innovation Meets Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections - render actual components */}
        <div className="content-sections" aria-label="Home Page Sections">
          <About />
          <Services />
          <WhyPrimetel />
          <Technologies />
          <Industries />
          <Projects />
          <Leadership />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
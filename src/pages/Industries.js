import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Industries.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Industries = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/industries" />
      </Helmet>
      <section className="section industries-section" id="industries" aria-labelledby="industries-heading">
        <div className="globe-container" data-aos="zoom-in" data-aos-delay="100" role="presentation">
          <div className="globe"></div>
        </div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="industries-heading" data-aos="fade-right" data-aos-delay="100">Dedication <span className="highlight">And Results</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">  As the sole creator and operator of <span className="gradient-text">Legendary One</span>, I specialize in delivering tailored digital solutions. My work spans across web development, software creation, Android app development, and branding services. Every project is crafted with meticulous attention to detail, ensuring that clients receive the highest level of quality and innovation. Here are some of my key achievements:
         </p>
          </header>
          

          <div className="industries-grid" role="list" aria-label="Key Achievements">
            <article className="industry-card" data-aos="flip-left" data-aos-delay="100" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="150">Proven<br></br>Reliability</h3>
              <p data-aos="fade-right" data-aos-delay="200">Through personalized web development, software, app solutions, and impactful branding.</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="250">
                  <span className="stat-number">46</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </article>
            <article className="industry-card" data-aos="flip-up" data-aos-delay="200" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="250">Unwavering<br></br>Commitment</h3>
              <p data-aos="fade-right" data-aos-delay="300">Dedicating countless hours to perfecting every detail and ensuring excellence in every project.</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="350">
                  <span className="stat-number">4660</span>
                  <span className="stat-label">Hours of Work</span>
                </div>
              </div>
            </article>
            <article className="industry-card" data-aos="flip-right" data-aos-delay="300" role="listitem">
              <h3 data-aos="fade-up" data-aos-delay="350">Relentless<br></br>Dedication</h3>
              <p data-aos="fade-right" data-aos-delay="400">Investing late nights to meet deadlines and achieve perfection in all aspects of the work.</p>
              <div className="stats">
                <div className="stat" data-aos="zoom-in" data-aos-delay="450">
                  <span className="stat-number">236</span>
                  <span className="stat-label">Sleepless Nights</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
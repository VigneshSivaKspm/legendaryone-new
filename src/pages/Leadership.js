import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Leadership.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Leadership = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/leadership" />
      </Helmet>
      <section className="section leadership-section" id="leadership" aria-labelledby="leadership-heading">
        <div className="section-content">
          <header className="section-header" data-aos="fade-down">
            <h1 className="section-heading" id="leadership-heading" data-aos="fade-up" data-aos-delay="100">Our <span className="highlight">Leadership</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Experienced team driving telecom innovation</p>
          </header>
          <div className="team-grid" role="list" aria-label="Leadership Team">
            <article className="team-card" data-aos="flip-left" data-aos-delay="100" role="listitem">
              <div className="card-image" data-aos="zoom-in" data-aos-delay="200" aria-hidden="true">
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 data-aos="fade-up" data-aos-delay="250">John Smith</h3>
                <p className="position" data-aos="fade-right" data-aos-delay="300">CEO & Founder</p>
                <p className="bio" data-aos="fade-left" data-aos-delay="350">20+ years in telecom software architecture and engineering</p>
              </div>
            </article>
            <article className="team-card" data-aos="flip-up" data-aos-delay="200" role="listitem">
              <div className="card-image" data-aos="zoom-in" data-aos-delay="300" aria-hidden="true">
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 data-aos="fade-up" data-aos-delay="350">Sarah Johnson</h3>
                <p className="position" data-aos="fade-right" data-aos-delay="400">CTO</p>
                <p className="bio" data-aos="fade-left" data-aos-delay="450">Data systems specialist with telco infrastructure expertise</p>
              </div>
            </article>
            <article className="team-card" data-aos="flip-right" data-aos-delay="300" role="listitem">
              <div className="card-image" data-aos="zoom-in" data-aos-delay="400" aria-hidden="true">
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3 data-aos="fade-up" data-aos-delay="450">Michael Chen</h3>
                <p className="position" data-aos="fade-right" data-aos-delay="500">Head of Engineering</p>
                <p className="bio" data-aos="fade-left" data-aos-delay="550">Cloud-native systems architect and DevOps expert</p>
              </div>
            </article>
          </div>
          <div className="location-info" role="region" aria-label="Company Location">
            <div className="location-card" data-aos="zoom-in-up" data-aos-delay="400" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <h3 data-aos="fade-up" data-aos-delay="450">Global Presence</h3>
              <p data-aos="fade-left" data-aos-delay="500">Headquartered in Sharjah, UAE with teams across Europe and Asia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
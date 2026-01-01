import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Leadership.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GOOGLE_PLACE_ID = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Example: Google Sydney
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

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
      <section className="section leadership-section" id="google-reviews" aria-labelledby="reviews-heading">
        <div className="section-content">
          <header className="section-header" data-aos="fade-down">
            <h1 className="section-heading" id="reviews-heading" data-aos="fade-up" data-aos-delay="100">
              What Our Clients Say
            </h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">
              Real Google reviews from our valued customers
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              style={{marginTop:'1.5rem', display:'inline-block', fontWeight:700, fontSize:'1.1rem'}}>
              Write a Review on Google
            </a>
          </header>
          <div className="reviews-grid" style={{marginTop:'2.5rem', display:'grid', gap:'2rem', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))'}}>
            {/* Reviews will be rendered here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
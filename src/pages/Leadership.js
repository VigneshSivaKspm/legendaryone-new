import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import './Section.css';
import './Leadership.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Direct Google Business review link (opens the review dialog/page)
const GOOGLE_REVIEW_URL = 'https://g.page/r/Cb2SDZGcOe-HEBM/review';

// For fetching/displaying previous reviews you need:
// - a Google Maps API key with the Places library enabled
// - the Place ID for your business
// Set these in your environment as REACT_APP_GOOGLE_API_KEY and REACT_APP_GOOGLE_PLACE_ID
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
// Load Place ID only from environment to avoid hardcoding
const GOOGLE_PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID || '';

const Leadership = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  // Load Google Maps JS API (Places library) then fetch place details
  useEffect(() => {
    if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) return;

    const loadScript = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        fetchReviews();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => fetchReviews();
      script.onerror = () => console.warn('Failed to load Google Maps script');
      document.head.appendChild(script);
    };

    const fetchReviews = () => {
      try {
        const div = document.createElement('div');
        const service = new window.google.maps.places.PlacesService(div);
        service.getDetails({ placeId: GOOGLE_PLACE_ID, fields: ['name', 'rating', 'user_ratings_total', 'reviews'] }, (place, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
            setReviews(place.reviews);
          } else {
            console.warn('PlacesService getDetails failed', status);
          }
        });
      } catch (err) {
        console.warn('Error fetching Google reviews', err);
      }
    };

    loadScript();
  }, []);

  const [reviews, setReviews] = useState([]);

  return (
    <>
      <SEO
        title="Leadership & Reviews — Legendary One"
        description="Read client reviews and learn about the leadership behind Legendary One's successful digital solutions."
        pathname="/leadership"
      />
      <section className="section leadership-section" id="google-reviews" aria-labelledby="reviews-heading">
        <div className="section-content">
          <header className="section-header" data-aos="fade-down">
            <h1 className="section-heading" id="reviews-heading" data-aos="fade-up" data-aos-delay="100">
              What Our Clients Say
            </h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">
              Hear from happy customers — we’d love your feedback too!
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button review-cta"
              style={{marginTop: '1.5rem'}}>
              Loved our work? Leave a Google review
            </a>
          </header>
          <div className="reviews-grid" style={{marginTop:'2.5rem', display:'grid', gap:'2rem', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))'}}>
            {/* Reviews will be rendered here */}
            {(!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) && (
              <div style={{padding: '1rem', background: '#fff7f0', borderRadius: 8}}>
                To display recent Google reviews, set `REACT_APP_GOOGLE_API_KEY` and `REACT_APP_GOOGLE_PLACE_ID` in your environment.
              </div>
            )}
            {reviews && reviews.length > 0 && reviews.map((r, idx) => (
              <article key={idx} style={{padding:'1.25rem', background:'linear-gradient(180deg, rgba(10,18,28,0.95), rgba(6,10,16,0.9))', color:'#e6f3f7', borderRadius:8, boxShadow:'0 8px 30px rgba(2,12,20,0.6)', border:'1px solid rgba(255,255,255,0.03)'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <strong style={{fontSize:'1rem', color: '#ffffff'}}>{r.author_name}</strong>
                  <span style={{color:'#ffd400', fontWeight:700}}>{r.rating}★</span>
                </div>
                <p style={{marginTop:'0.6rem', color:'#cfe8ef', lineHeight:1.6}}>{r.text}</p>
                <small style={{color:'#88a2b3'}}>{r.relative_time_description}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
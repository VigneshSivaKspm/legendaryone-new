import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './WhyPrimetel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyPrimetel = () => {
  const carouselRef = useRef(null);
  const [activeWhy, setActiveWhy] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/why" />
      </Helmet>
      <section className="section why-primetel-section" id="why-primetel" aria-labelledby="why-heading">
        <div className="floating-shapes" data-aos="zoom-in" data-aos-delay="100" role="presentation">
          <div className="shape triangle"></div>
          <div className="shape circle"></div>
          <div className="shape square"></div>
        </div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="why-heading" data-aos="fade-right" data-aos-delay="100">
              Why Choose <span className="highlight">Legendary One?</span>
            </h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">
              Reasons top teams trust us to build and scale their digital products
            </p>
          </header>

          <div className="why-carousel" role="list" aria-label="Why Choose Legendary One" ref={carouselRef}>
            {[ 
              { n: '01', t: 'Customer-Centric Approach', d: 'We place the customer at the heart of everything we do, tailoring solutions that drive growth and enhance user satisfaction.' },
              { n: '02', t: 'Professionalism and Expertise', d: 'Our team brings top-tier expertise to every project, maintaining the highest standards of quality and attention to detail.' },
              { n: '03', t: 'Affordable and Cost-Effective Solutions', d: 'We provide high-quality services at competitive prices, making technology accessible to businesses of all sizes.' },
              { n: '04', t: 'Ongoing Support and Maintenance', d: 'We offer continuous support, updates, and maintenance to ensure that your systems remain at peak performance.' },
              { n: '05', t: 'Secure and Reliable Solutions', d: 'Security is a priority in all our solutions, ensuring your data and business are protected with the highest standards.' },
              { n: '06', t: 'Innovative and Cutting-Edge Technologies', d: 'We use the latest technologies to build scalable, innovative solutions that help your business stay ahead of the curve.' },
              { n: '07', t: 'Transparent Communication', d: 'Clear timelines, proactive updates, and honest communication throughout the project.' },
              { n: '08', t: 'Performance & Scalability', d: 'Architectures designed to scale smoothly while delivering consistent high performance.' },
            ].map((item, idx) => (
              <article className="benefit-card" data-aos="fade-up" data-aos-delay={120 + idx * 60} role="listitem" key={item.n} onMouseEnter={() => setActiveWhy(idx)}>
                <div className="card-number" aria-hidden="true">{item.n}</div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>

          <div className="why-dots" aria-hidden="false">
            {[0,1,2,3,4,5,6,7].map((i) => (
              <button
                key={`why-dot-${i}`}
                className={`dot ${activeWhy === i ? 'active' : ''}`}
                onClick={() => {
                  setActiveWhy(i);
                  if (carouselRef.current && carouselRef.current.children[i]) {
                    carouselRef.current.children[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                  }
                }}
                aria-label={`Go to benefit ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPrimetel;
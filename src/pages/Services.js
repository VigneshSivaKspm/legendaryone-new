import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const carouselRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ 
      once: true,
      duration: 800,
      easing: 'ease-out-cubic'
    });
    AOS.refresh();
  }, []);

  const services = [
    { 
      title: 'Software Development', 
      desc: 'Custom software solutions engineered for performance, scalability, and business growth.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    },
    { 
      title: 'Web Development', 
      desc: 'Responsive, dynamic websites and web applications with cutting-edge technologies.',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-6h11v6zm0-7H4V6h11v5zm5 7h-4V6h4v12z'
    },
    { 
      title: 'Branding', 
      desc: 'Comprehensive branding solutions: identity systems, multimedia editing, and visual storytelling.',
      icon: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z'
    },
    { 
      title: 'Technical Solutions', 
      desc: 'Expert technical solutions to streamline operations and drive digital transformation.',
      icon: 'M19 13H5v-2h14v2zm-2-6H7V5h10v2zm0 10H7v-2h10v2z'
    },
    { 
      title: 'College Projects', 
      desc: 'Guidance and technical support for innovative student projects and academic excellence.',
      icon: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'
    },
    { 
      title: 'E-commerce Solutions', 
      desc: 'Scalable e-commerce platforms designed to maximize conversions and customer experience.',
      icon: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z'
    },
    { 
      title: 'Mobile App Development', 
      desc: 'High-performance iOS and Android applications built with modern cross-platform stacks.',
      icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z'
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Human-centered design that blends aesthetic appeal with exceptional usability.',
      icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
    },
    { 
      title: 'Cloud & DevOps', 
      desc: 'End-to-end DevOps solutions: CI/CD, infrastructure-as-code, and cloud optimization.',
      icon: 'M19.35 10.04C18.67 6.59 15.64 4 12 4c-3.72 0-6.86 2.51-7.77 6.04C2.82 10.74 2 11.83 2 13c0 2.21 1.79 4 4 4h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 15H6c-1.1 0-2-.9-2-2s.9-2 2-2h.42c.16-1.57 1.05-2.91 2.37-3.6C9.9 6.8 10.96 6.5 12 6.5c2.21 0 4 1.79 4 4h1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5z'
    },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/services" />
      </Helmet>
      <section 
        className="section services-section" 
        id="services" 
        aria-labelledby="services-heading"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="services-background" role="presentation">
          <div className="floating-shapes shape-1" data-aos="fade-down" data-aos-delay="200"></div>
          <div className="floating-shapes shape-2" data-aos="fade-up" data-aos-delay="400"></div>
          <div className="floating-shapes shape-3" data-aos="fade-right" data-aos-delay="600"></div>
          <div className="floating-shapes shape-4" data-aos="fade-left" data-aos-delay="800"></div>
        </div>
        
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="services-heading" data-aos="fade-up" data-aos-delay="100">
              Our <span className="highlight">SERVICES</span>
            </h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Ultra-modern solutions crafted for ambitious brands and fast-moving teams
            </p>
          </header>

          <div className="services-carousel-container">
            <div className="services-carousel" ref={carouselRef} role="list" aria-label="Service Offerings">
              {services.map((service, idx) => (
                <article 
                  className={`service-tile ${activeService === idx ? 'active' : ''}`} 
                  role="listitem" 
                  key={service.title}
                  onMouseEnter={() => setActiveService(idx)}
                >
                  <div className="service-icon-container" data-aos="zoom-in" data-aos-delay={150 + idx * 50}>
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path d={service.icon}/>
                      </svg>
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-hover-indicator"></div>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {services.map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${activeService === idx ? 'active' : ''}`}
                onClick={() => {
                  setActiveService(idx);
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: idx * 320, behavior: 'smooth' });
                  }
                }}
                aria-label={`Go to service ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
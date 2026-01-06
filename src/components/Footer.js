import React, { useState, useEffect } from 'react';
import SEO from './SEO';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const services = [
    { label: 'All Services', href: '/services' },
    { label: 'Web Development', href: '/services#web' },
    { label: 'Mobile Apps', href: '/services#mobile' },
    { label: 'UX & Design', href: '/services#ux' },
    { label: 'Digital Strategy', href: '/services#strategy' },
    { label: 'Cloud Solutions', href: '/services#cloud' }
  ];

  const pages = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Industries', href: '/industries' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Why Legendary', href: '/why-legendary' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <SEO
        title="Legendary One"
        description="Crafting legendary digital experiences that transform businesses."
        pathname="/"
      />
      <footer className="footer-section" id="footer" aria-label="Site footer">
        <div className="footer-shapes" data-aos="zoom-in" data-aos-delay="100" role="presentation">
          <div className="footer-shape triangle"></div>
          <div className="footer-shape circle"></div>
          <div className="footer-shape square"></div>
          <div className="footer-shape hexagon"></div>
        </div>

        <div className="footer-container" data-aos="fade-up" data-aos-delay="200">
          <div className="footer-inner">
            <div className="footer-column footer-about" data-aos="fade-right" data-aos-delay="300">
              <div className="footer-brand">
                <div className="brand-ornament"></div>
                <h4 className="footer-heading">
                  Legendary <span className="highlight">One</span>
                </h4>
                <p className="tagline" data-aos="fade-up" data-aos-delay="400">
                  Crafting legendary digital experiences that transform businesses.
                </p>
              </div>
              
              
            </div>

            <div className="footer-column footer-services" data-aos="fade-up" data-aos-delay="400">
              <h4 className="footer-heading">
                <span className="highlight">Services</span>
              </h4>
              <ul className="footer-nav" role="list" aria-label="Services">
                {services.map((service, idx) => (
                  <li key={service.label} data-aos="fade-up" data-aos-delay={500 + idx * 50}>
                    <a 
                      href={service.href} 
                      className="footer-link"
                      onMouseEnter={() => setActiveLink(`service-${idx}`)}
                      onMouseLeave={() => setActiveLink(null)}
                    >
                      <span className="link-ornament"></span>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-pages" data-aos="fade-left" data-aos-delay="500">
              <h4 className="footer-heading">
                <span className="highlight">Quick Links</span>
              </h4>
              <ul className="footer-nav" role="list" aria-label="Pages">
                {pages.map((page, idx) => (
                  <li key={page.label} data-aos="fade-up" data-aos-delay={600 + idx * 50}>
                    <a 
                      href={page.href} 
                      className="footer-link"
                      onMouseEnter={() => setActiveLink(`page-${idx}`)}
                      onMouseLeave={() => setActiveLink(null)}
                    >
                      <span className="link-ornament"></span>
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          
        </div>
        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="700">
          <div className="footer-bottom-inner">
            <p className="copyright">© 2026 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
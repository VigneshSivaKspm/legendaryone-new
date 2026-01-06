import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-column footer-about">
          <h4>Legendary one</h4>
          <p className="tagline">Building modern web experiences for businesses.</p>
          <ul className="contact-list">
            <li>Address: 123 Your Street, City, Country</li>
            <li>Email: <a href="mailto:info@legendaryone.in">info@legendaryone.in</a></li>
            <li>Phone: <a href="tel:+911234567890">+91 12345 67890</a></li>
          </ul>
        </div>

        <div className="footer-column footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">All Services</a></li>
            <li><a href="/services#web">Web Development</a></li>
            <li><a href="/services#mobile">Mobile Apps</a></li>
            <li><a href="/services#ux">UX &amp; Design</a></li>
          </ul>
        </div>

        <div className="footer-column footer-pages">
          <h4>Pages</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/technologies">Technologies</a></li>
            <li><a href="/why-primetel">Why Primetel</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {year} Legendary one | All rights reserved.</span>
        <span className="crafted">Crafted by <a href="https://legendaryone.in" target="_blank" rel="noopener noreferrer" className="legendary-link">Legendary one</a></span>
      </div>
    </footer>
  );
};

export default Footer;

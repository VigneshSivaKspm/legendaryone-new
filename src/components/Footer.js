import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <span>&copy; {new Date().getFullYear()} Legendary one | All rights reserved.</span>
      <span className="crafted">Crafted by <a href="https://legendaryone.in" target="_blank" rel="noopener noreferrer" className="legendary-link">Legendary one</a></span>
    </div>
  </footer>
);

export default Footer;

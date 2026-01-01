import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const dropdownRef = useRef(null);
  const location = useLocation();
  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Handlers for hover (desktop only)
  const handleDropdownMouseEnter = (menu) => {
    if (!isMobile) {
      setActiveDropdown(menu);
    }
  };
  const handleDropdownMouseLeave = (menu) => {
    if (!isMobile) {
      setActiveDropdown((current) => (current === menu ? null : current));
    }
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Legendary one Logo" style={{ height: 36, width: 36, borderRadius: 8 }} />
            <span className="logo-highlight logo-text-main">LEGENDARY</span> <span className="logo-text-main">ONE</span>
          </Link>
          
          <button 
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-lin"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <div className="navbar-center-flag">
          <img src={process.env.PUBLIC_URL + '/flg.png'} alt="Flag" style={{ height: 40, width: 'auto' }} />
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`} ref={dropdownRef}>
          <ul className="navbar-links">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li
              className="dropdown-container"
              onMouseEnter={() => handleDropdownMouseEnter('services')}
              onMouseLeave={() => handleDropdownMouseLeave('services')}
            >
              <button
                className={`dropdown-btn ${activeDropdown === 'services' ? 'active' : ''}`}
                onClick={() => toggleDropdown('services')}
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'services'}
              >
                SERVICES <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
                <li><NavLink to="/services">Software Development</NavLink></li>
                <li><NavLink to="/services">Web Development</NavLink></li>
                <li><NavLink to="/services">Branding</NavLink></li>
                <li><NavLink to="/services">Technical Solutions</NavLink></li>
                <li><NavLink to="/services">College Projects</NavLink></li>
                <li><NavLink to="/services">E-commerce Solutions</NavLink></li>
                <li><NavLink to="/services">Mobile App Development</NavLink></li>
                <li><NavLink to="/services">UI/UX Design</NavLink></li>
                <li><NavLink to="/services">Cloud & DevOps</NavLink></li>
              </ul>
            </li>
            <li
              className="dropdown-container"
              onMouseEnter={() => handleDropdownMouseEnter('more')}
              onMouseLeave={() => handleDropdownMouseLeave('more')}
            >
              <button
                className={`dropdown-btn ${activeDropdown === 'more' ? 'active' : ''}`}
                onClick={() => toggleDropdown('more')}
                type="button"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'more'}
              >
                MORE <span className="dropdown-arrow">▼</span>
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'more' ? 'active' : ''}`}>
                <li><NavLink to="/technologies">TECH STACK</NavLink></li>
                <li><NavLink to="/leadership">LEADERSHIP</NavLink></li>
                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                <li><NavLink to="/industries">INDUSTRIES</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/why">WHY LEGENDARY ONE</NavLink></li>
          </ul>

          <div className="navbar-cta">
            <Link to="/contact" className="cta-button">CONTACT</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Enhanced NavLink component with additional effects
const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
  >
    {children}
  </RouterNavLink>
);

export default Navbar;
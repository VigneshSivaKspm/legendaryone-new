import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const dropdownRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggle = (m) => setActiveDropdown(activeDropdown === m ? null : m);
  const enter = (m) => {
    if (!isMobile) {
      clearTimeout(leaveTimeoutRef.current);
      setActiveDropdown(m);
    }
  };
  const leave = (m) => {
    if (!isMobile) {
      leaveTimeoutRef.current = setTimeout(() => {
        setActiveDropdown((c) => (c === m ? null : c));
      }, 150);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[66px]">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Legendary One"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="font-black text-[13px] tracking-tight">
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              LEGENDARY
            </span>
            <span className="text-navy"> ONE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
          <NavItem to="/">Home</NavItem>

          {/* Portfolio nav link - Prominent */}
          <div
            className="relative"
            onMouseEnter={() => enter("portfolio")}
            onMouseLeave={() => leave("portfolio")}
          >
            <RouterNavLink
              to="/projects"
              className={({ isActive }) =>
                `flex flex-col items-center px-5 py-2.5 rounded-xl transition-all duration-200 border-2 bg-llime/35 border-llime/60 hover:bg-llime/45 ${
                  isActive
                    ? "shadow-[0_0_20px_rgba(200,240,120,0.3)]"
                    : "hover:shadow-[0_0_20px_rgba(200,240,120,0.3)]"
                }`
              }
            >
              <span className="text-[13px] font-bold text-navy hover:text-navy leading-tight">
                Our Portfolio
              </span>
              <span className="text-[9px] font-semibold text-navy/70 hover:text-navy/70 leading-tight">
                ✨ Work We're Proud Of
              </span>
            </RouterNavLink>
          </div>

          <NavItem to="/about">About</NavItem>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => enter("services")}
            onMouseLeave={() => leave("services")}
          >
            <button
              onClick={() => toggle("services")}
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold text-slate-600 hover:text-azure transition-colors rounded-lg hover:bg-blue-50/70"
            >
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-lift border border-gray-100/80 py-2 z-50">
                {[
                  "Software Development",
                  "Web Development",
                  "Branding",
                  "Technical Solutions",
                  "College Projects",
                  "E-commerce Solutions",
                  "Mobile App Development",
                  "UI/UX Design",
                  "Cloud & DevOps",
                ].map((s) => (
                  <Link
                    key={s}
                    to="/services"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-600 hover:text-azure hover:bg-blue-50/70 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-azure/30 flex-shrink-0"></span>
                    {s}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => enter("more")}
            onMouseLeave={() => leave("more")}
          >
            <button
              onClick={() => toggle("more")}
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold text-slate-600 hover:text-azure transition-colors rounded-lg hover:bg-blue-50/70"
            >
              More
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "more" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeDropdown === "more" && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-lift border border-gray-100/80 py-2 z-50">
                {[
                  ["technologies", "Tech Stack"],
                  ["leadership", "Reviews"],
                  ["industries", "Industries"],
                ].map(([path, label]) => (
                  <Link
                    key={path}
                    to={`/${path}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-600 hover:text-azure hover:bg-blue-50/70 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-azure/30 flex-shrink-0"></span>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavItem to="/why">Why Us</NavItem>

          <Link
            to="/contact"
            className="ml-3 px-5 py-2 bg-azure text-white text-[13px] font-bold rounded-full shadow-azure-sm hover:bg-azure-dark hover:shadow-azure-md hover:-translate-y-0.5 transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Our Portfolio"],
              ["/technologies", "Tech Stack"],
              ["/leadership", "Reviews"],
              ["/industries", "Industries"],
              ["/why", "Why Us"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-azure hover:bg-blue-50 rounded-xl transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 py-3 bg-azure text-white text-sm font-bold rounded-xl text-center shadow-azure-sm hover:bg-azure-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `relative px-3 py-2 text-[13px] font-semibold rounded-lg transition-colors ${
        isActive
          ? "text-azure bg-blue-50/70"
          : "text-slate-600 hover:text-azure hover:bg-blue-50/70"
      }`
    }
  >
    {children}
  </RouterNavLink>
);

export default Navbar;

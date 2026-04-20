import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const services = [
  {
    title: "Software Development",
    desc: "Custom software solutions engineered for performance, scalability, and business growth.",
    color: "from-azure to-llime",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    href: "/services/software-development",
  },
  {
    title: "Web Development",
    desc: "Responsive, dynamic websites and web applications with cutting-edge technologies.",
    color: "from-llime to-chart",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    href: "/services/web-development",
  },
  {
    title: "Branding",
    desc: "Comprehensive branding solutions: identity systems, multimedia editing, and visual storytelling.",
    color: "from-chart to-llime",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    href: "/services/branding",
  },
  {
    title: "Technical Solutions",
    desc: "Expert technical solutions to streamline operations and drive digital transformation.",
    color: "from-llime to-chart",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    href: "/services/technical-solutions",
  },
  {
    title: "College Projects",
    desc: "Guidance and technical support for innovative student projects and academic excellence.",
    color: "from-azure to-llime",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    href: "/services/college-projects",
  },
  {
    title: "E-commerce Solutions",
    desc: "Scalable e-commerce platforms designed to maximize conversions and customer experience.",
    color: "from-chart to-llime",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    href: "/services/ecommerce-solutions",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS and Android applications built with modern cross-platform stacks.",
    color: "from-mint to-llime",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    href: "/services/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    desc: "Human-centered design that blends aesthetic appeal with exceptional usability.",
    color: "from-llime to-chart",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
    href: "/services/ui-ux-design",
  },
  {
    title: "Cloud & DevOps",
    desc: "End-to-end DevOps solutions: CI/CD, infrastructure-as-code, and cloud optimization.",
    color: "from-azure to-mint",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    href: "/services/cloud-devops",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <SEO
        title="Services — Legendary One"
        description="Explore Legendary One's full suite of IT services."
        pathname="/services"
      />

      <section
        id="services"
        className="py-28 bg-white relative overflow-hidden"
      >
        {/* BG deco */}
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-llime/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              Our Services
            </span>
          </div>

          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-navy mb-5 leading-tight"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Solutions Built for{" "}
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p
            className="text-center text-slate-500 text-lg max-w-2xl mx-auto mb-14"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Ultra-modern solutions crafted for ambitious brands and fast-moving
            teams
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.href}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden block no-underline text-inherit"
                data-aos="fade-up"
                data-aos-delay={i * 55}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-azure-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={svc.icon}
                    />
                  </svg>
                </div>

                <h3 className="font-display font-bold text-[15px] text-navy mb-2.5 group-hover:text-azure transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>

                <div
                  className={`mt-5 w-8 h-0.5 bg-gradient-to-r ${svc.color} rounded-full group-hover:w-16 transition-all duration-300`}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

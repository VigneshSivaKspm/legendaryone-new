import React from "react";
import SEO from "../components/SEO";

const industries = [
  {
    title: "E-Commerce & Retail",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    desc: "Seamless shopping experiences, inventory management, and payment integrations that drive revenue.",
    color: "from-azure to-llime",
  },
  {
    title: "Healthcare & Wellness",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    desc: "Secure, HIPAA-aware platforms for clinics, wellness brands, and healthcare providers.",
    color: "from-llime to-chart",
  },
  {
    title: "Education & EdTech",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    desc: "LMS platforms, tutoring portals, and course management systems built for learners.",
    color: "from-azure to-mint",
  },
  {
    title: "Real Estate & Property",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    desc: "Property listing platforms, virtual tours, and CRM solutions for agents and developers.",
    color: "from-mint to-llime",
  },
  {
    title: "Manufacturing & Industry",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    desc: "ERP integrations, supply chain tools, and digital transformation for industrial operations.",
    color: "from-llime to-chart",
  },
  {
    title: "Hospitality & Tourism",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    desc: "Booking systems, hotel management platforms, and travel apps that delight guests.",
    color: "from-azure to-llime",
  },
  {
    title: "Finance & Fintech",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    desc: "Secure payment gateways, budgeting tools, and financial dashboards built for compliance.",
    color: "from-llime to-chart",
  },
  {
    title: "Media & Entertainment",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    desc: "Content platforms, streaming tools, and fan-engagement products for creators and studios.",
    color: "from-azure to-mint",
  },
];

const Industries = ({ hideSEO = false }) => (
  <>
    {!hideSEO && (
      <SEO
        title="Industries We Serve | E-commerce, Healthcare, Education & More — Legendary One"
        description="Legendary One delivers industry-specific digital solutions for e-commerce, healthcare, education, manufacturing, real estate, hospitality, finance, logistics & more. Domain expertise that maximizes your ROI and accelerates growth."
        pathname="/industries"
        keywords="IT solutions for e-commerce India, healthcare software development, education technology India, real estate web development, fintech solutions India, logistics software, hospitality digital solutions"
      />
    )}

    <section
      id="industries"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-azure/[0.05] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <div className="flex justify-center mb-4" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
            Industries We Serve
          </span>
        </div>

        <h2
          className="text-center font-display font-black text-4xl sm:text-5xl text-navy mb-5 leading-tight"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Built for Every{" "}
          <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
            Industry
          </span>
        </h2>
        <p
          className="text-center text-slate-500 text-lg max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          We bring deep domain knowledge and modern tech to solve real
          challenges across a wide range of sectors.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4 shadow-azure-sm group-hover:scale-110 transition-transform duration-300`}
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
                    d={ind.icon}
                  />
                </svg>
              </div>

              <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                {ind.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {ind.desc}
              </p>

              <div
                className={`mt-4 w-8 h-0.5 bg-gradient-to-r ${ind.color} rounded-full group-hover:w-14 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Industries;

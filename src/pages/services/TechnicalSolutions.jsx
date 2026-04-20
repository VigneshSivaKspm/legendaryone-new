import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const TechnicalSolutions = () => {
  const benefits = [
    {
      title: "System Integration",
      desc: "Seamless connection of legacy and modern systems",
    },
    {
      title: "Process Automation",
      desc: "Streamline operations and reduce manual work",
    },
    {
      title: "Data Analytics",
      desc: "Transform data into actionable insights",
    },
    {
      title: "Cloud Migration",
      desc: "Safe transition to cloud infrastructure",
    },
    { title: "Security Hardening", desc: "Protect your digital assets" },
    {
      title: "Performance Tuning",
      desc: "Maximize system efficiency and speed",
    },
  ];

  return (
    <>
      <SEO
        title="Technical Solutions & IT Consulting | Digital Transformation — Legendary One"
        description="Expert technical consulting & IT solutions to streamline your business. We offer digital transformation, system integration, API development, database optimization, performance audits & technical architecture consulting for SMEs and enterprises."
        pathname="/services/technical-solutions"
        keywords="IT consulting India, technical solutions agency, digital transformation India, system integration, API development, database optimization, performance audit, IT consulting Erode Tamil Nadu"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Technical Solutions",
            path: "/services/technical-solutions",
          },
        ]}
      />

      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-llime/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/services" className="hover:text-azure transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">Technical Solutions</span>
          </div>

          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-llime bg-llime/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse"></span>
              Enterprise Solutions
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              Technical Solutions for{" "}
              <span className="bg-gradient-to-r from-llime to-chart bg-clip-text text-transparent">
                Modern Enterprises
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Expert technical solutions to streamline operations, improve
              efficiency, and drive digital transformation across your
              organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Discuss Your Needs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <div className="mb-20">
            <h2 className="font-display font-black text-3xl text-navy mb-10">
              Our Technical Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-llime to-chart opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-gradient-to-br from-navy to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-llime/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-black text-3xl mb-10">
                Solutions We Deliver
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "System Architecture",
                    desc: "Designing robust technical infrastructure",
                  },
                  {
                    num: "02",
                    title: "Database Optimization",
                    desc: "Fast, reliable data management",
                  },
                  {
                    num: "03",
                    title: "API Development",
                    desc: "Powerful integrations and connections",
                  },
                  {
                    num: "04",
                    title: "Legacy Modernization",
                    desc: "Breathing new life into old systems",
                  },
                  {
                    num: "05",
                    title: "Performance Enhancement",
                    desc: "Making systems faster and more efficient",
                  },
                  {
                    num: "06",
                    title: "Technical Consulting",
                    desc: "Expert guidance for your tech stack",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-llime to-chart flex items-center justify-center font-bold text-lg">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display font-black text-3xl text-navy mb-4">
              Ready for Technical Excellence?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's solve your technical challenges with cutting-edge solutions
              tailored to your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSolutions;

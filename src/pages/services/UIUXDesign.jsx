import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const UIUXDesign = () => {
  const benefits = [
    { title: "User Research", desc: "Understand your users deeply" },
    {
      title: "Wireframing",
      desc: "Clear structure and information architecture",
    },
    { title: "Visual Design", desc: "Beautiful, on-brand interfaces" },
    { title: "Prototyping", desc: "Interactive mockups for testing" },
    { title: "Usability Testing", desc: "Validate designs with real users" },
    { title: "Design Systems", desc: "Scalable, consistent design frameworks" },
  ];

  return (
    <>
      <SEO
        title="UI/UX Design — Legendary One"
        description="Human-centered design that blends aesthetic appeal with exceptional usability."
        pathname="/services/ui-ux-design"
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
            <span className="text-navy font-semibold">UI/UX Design</span>
          </div>

          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-llime bg-llime/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse"></span>
              Design Excellence
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              UI/UX Design That{" "}
              <span className="bg-gradient-to-r from-llime to-chart bg-clip-text text-transparent">
                Delights
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Human-centered design that blends aesthetic appeal with
              exceptional usability. We create interfaces that users love and
              businesses adore.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Design Your Product
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
              Our Design Process
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
                Design Services We Offer
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Product Design",
                    desc: "Complete UX/UI for web and mobile apps",
                  },
                  {
                    num: "02",
                    title: "Redesign Services",
                    desc: "Modernizing and improving existing products",
                  },
                  {
                    num: "03",
                    title: "Web Design",
                    desc: "Beautiful, conversion-focused websites",
                  },
                  {
                    num: "04",
                    title: "Mobile Design",
                    desc: "iOS and Android interface design",
                  },
                  {
                    num: "05",
                    title: "Design Systems",
                    desc: "Component libraries for consistent design",
                  },
                  {
                    num: "06",
                    title: "UX Strategy",
                    desc: "Research-backed strategy and planning",
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
              Ready for Exceptional Design?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's create beautiful, intuitive interfaces that engage users and
              achieve your business objectives.
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

export default UIUXDesign;

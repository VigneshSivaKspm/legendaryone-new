import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const SoftwareDevelopment = () => {
  const benefits = [
    {
      title: "Custom Solutions",
      desc: "Tailored to your exact business needs",
    },
    { title: "Scalable Architecture", desc: "Grows with your business" },
    { title: "Performance Optimized", desc: "Lightning-fast execution" },
    { title: "Security First", desc: "Enterprise-grade protection" },
    { title: "Maintenance Support", desc: "Continuous updates & fixes" },
    { title: "Tech Flexibility", desc: "Choose the best stack for your needs" },
  ];

  return (
    <>
      <SEO
        title="Custom Software Development | Enterprise & SaaS Solutions — Legendary One"
        description="Custom software development services by Legendary One. We build scalable, secure enterprise applications, SaaS platforms, CRMs, ERPs & business automation tools. Trusted by 100+ businesses. Senior engineers, fixed pricing."
        pathname="/services/software-development"
        keywords="custom software development India, enterprise software development, SaaS development, CRM development, ERP development, business automation software India"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Software Development",
            path: "/services/software-development",
          },
        ]}
      />

      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/services" className="hover:text-azure transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">
              Software Development
            </span>
          </div>

          {/* Hero */}
          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              Custom Software Solutions
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              Software Development{" "}
              <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
                Done Right
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Custom software solutions engineered for performance, scalability,
              and business growth. We turn your vision into powerful, reliable
              applications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Your Project
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

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="font-display font-black text-3xl text-navy mb-10">
              Why Choose Our Software Development
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-azure to-llime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-20 bg-gradient-to-br from-navy to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-azure/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-black text-3xl mb-10">
                Our Development Process
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Discovery & Planning",
                    desc: "We understand your business, goals, and technical requirements",
                  },
                  {
                    num: "02",
                    title: "Design & Architecture",
                    desc: "Designing scalable solutions with best practices",
                  },
                  {
                    num: "03",
                    title: "Development",
                    desc: "Building with clean code and modern frameworks",
                  },
                  {
                    num: "04",
                    title: "Testing & QA",
                    desc: "Rigorous testing to ensure quality and performance",
                  },
                  {
                    num: "05",
                    title: "Deployment",
                    desc: "Seamless launch with zero downtime",
                  },
                  {
                    num: "06",
                    title: "Support & Maintenance",
                    desc: "Ongoing support and continuous improvements",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-llime flex items-center justify-center font-bold text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-display font-black text-3xl text-navy mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's discuss your software needs and create a solution that
              drives real business value.
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

export default SoftwareDevelopment;

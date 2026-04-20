import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const EcommerceSolutions = () => {
  const benefits = [
    {
      title: "Conversion Optimized",
      desc: "Built to maximize sales and reduce cart abandonment",
    },
    {
      title: "Payment Integration",
      desc: "Secure processing with all major payment gateways",
    },
    {
      title: "Inventory Management",
      desc: "Real-time stock tracking and automation",
    },
    { title: "Mobile Commerce", desc: "Seamless shopping on all devices" },
    { title: "SEO Ready", desc: "Optimized for search engines and visibility" },
    {
      title: "Analytics & Insights",
      desc: "Track performance and customer behavior",
    },
  ];

  return (
    <>
      <SEO
        title="E-commerce Development | Online Store Solutions — Legendary One"
        description="Custom e-commerce development by Legendary One: Shopify, WooCommerce & fully custom React stores built to maximize conversions. Payment integration, inventory management, mobile-first design & SEO-optimized. Launch your store today."
        pathname="/services/ecommerce-solutions"
        keywords="e-commerce development India, Shopify development, WooCommerce development, online store development India, custom e-commerce store, e-commerce website India, Shopify agency"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "E-commerce Solutions",
            path: "/services/ecommerce-solutions",
          },
        ]}
      />

      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-chart/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/services" className="hover:text-azure transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">
              E-commerce Solutions
            </span>
          </div>

          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-chart bg-chart/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-chart animate-pulse"></span>
              Online Store Excellence
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              E-commerce Solutions That{" "}
              <span className="bg-gradient-to-r from-chart to-llime bg-clip-text text-transparent">
                Sell
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Scalable e-commerce platforms designed to maximize conversions,
              streamline operations, and deliver exceptional customer
              experiences.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Launch Your Store
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
              Why Choose Our E-commerce Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-chart to-llime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-gradient-to-br from-navy to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-chart/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-black text-3xl mb-10">
                E-commerce Solutions We Build
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Shopify Stores",
                    desc: "Fast setup with powerful customization",
                  },
                  {
                    num: "02",
                    title: "Custom Platforms",
                    desc: "Tailored solutions for unique needs",
                  },
                  {
                    num: "03",
                    title: "Multi-vendor Marketplaces",
                    desc: "Complex platforms with multiple sellers",
                  },
                  {
                    num: "04",
                    title: "Digital Product Platforms",
                    desc: "Downloads, courses, and digital goods",
                  },
                  {
                    num: "05",
                    title: "B2B Ecommerce",
                    desc: "Wholesale and bulk ordering systems",
                  },
                  {
                    num: "06",
                    title: "Mobile Commerce",
                    desc: "App-based shopping experiences",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-chart to-llime flex items-center justify-center font-bold text-lg">
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
              Ready to Scale Your Online Sales?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's build an e-commerce platform that turns visitors into loyal
              customers and drives consistent revenue.
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

export default EcommerceSolutions;

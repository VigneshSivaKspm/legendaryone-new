import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const MobileAppDevelopment = () => {
  const benefits = [
    {
      title: "Native Performance",
      desc: "Fast, responsive apps that users love",
    },
    { title: "Cross-platform", desc: "iOS and Android from one codebase" },
    {
      title: "App Store Ready",
      desc: "Full deployment and submission support",
    },
    {
      title: "Offline Functionality",
      desc: "Works seamlessly with or without connection",
    },
    { title: "Push Notifications", desc: "Engage users with timely messages" },
    {
      title: "Analytics Integration",
      desc: "Track user behavior and app performance",
    },
  ];

  return (
    <>
      <SEO
        title="Mobile App Development — Legendary One"
        description="High-performance iOS and Android applications built with modern cross-platform stacks."
        pathname="/services/mobile-app-development"
      />

      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-mint/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/services" className="hover:text-azure transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">
              Mobile App Development
            </span>
          </div>

          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-mint bg-mint/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse"></span>
              Mobile Excellence
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              Mobile Apps Built to{" "}
              <span className="bg-gradient-to-r from-mint to-llime bg-clip-text text-transparent">
                Engage
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              High-performance iOS and Android applications built with modern
              cross-platform frameworks. We create mobile experiences that users
              can't put down.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Build Your App
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
              Why Choose Our Mobile Development
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-mint to-llime opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-gradient-to-br from-navy to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mint/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-black text-3xl mb-10">
                Technologies & Platforms
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "React Native",
                    desc: "Build for iOS and Android simultaneously",
                  },
                  {
                    num: "02",
                    title: "Flutter",
                    desc: "Beautiful, fast, natively compiled applications",
                  },
                  {
                    num: "03",
                    title: "Native iOS",
                    desc: "Swift apps optimized for Apple devices",
                  },
                  {
                    num: "04",
                    title: "Native Android",
                    desc: "Kotlin apps for the Android ecosystem",
                  },
                  {
                    num: "05",
                    title: "Wearables & IoT",
                    desc: "Watch apps and IoT device integration",
                  },
                  {
                    num: "06",
                    title: "Progressive Web Apps",
                    desc: "App-like experiences in the browser",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-mint to-llime flex items-center justify-center font-bold text-lg">
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
              Transform Your Idea Into an App
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's create a mobile app that delights users, drives engagement,
              and supports your business goals.
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

export default MobileAppDevelopment;

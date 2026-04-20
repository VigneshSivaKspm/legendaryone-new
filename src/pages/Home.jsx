import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Services from "./Services";
import WhyLegendaryOne from "./WhyPrimetel";
import Technologies from "./Technologies";
import Industries from "./Industries";
import Projects from "./Projects";
import Leadership from "./Leadership";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <SEO
        title="Legendary One — World-Class IT Solutions"
        description="Legendary One builds modern web and mobile applications, delivering scalable and secure digital experiences for businesses."
        pathname="/"
        image="/logos/logo512.png"
      />
      <main>
        {/* ─── Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-16">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-70"></div>
            <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-azure/[0.06] blur-[140px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-llime/[0.07] blur-[120px] translate-y-1/3"></div>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-azure/[0.04] blur-[100px] -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* Headline */}
            <h1
              className="font-display font-black text-5xl sm:text-6xl lg:text-[76px] text-navy leading-[1.04] tracking-tight mb-7"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We Build
              <span className="block bg-gradient-to-r from-azure via-llime to-chart bg-clip-text text-transparent pb-2">
                Legendary
              </span>
              <span className="text-navy/85">Digital Solutions</span>
            </h1>

            <p
              className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 leading-relaxed mb-10"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              From concept to launch — we craft world-class web &amp; mobile
              applications, brands, and custom software that help ambitious
              businesses scale and succeed.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 mb-14"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-azure-dark text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Start Your Project
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-navy font-bold rounded-full border-2 border-gray-200 hover:border-azure hover:text-azure hover:shadow-azure-sm transition-all duration-200 text-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center pt-2 hover:border-azure transition-colors cursor-pointer">
              <div className="w-1 h-2.5 bg-azure rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* ─── Sections ─────────────────────────────────────── */}

        {/* ── Social Proof Stats Bar ─────────────────────── */}
        <section className="py-10 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-azure/10 via-transparent to-llime/10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Projects Delivered", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { value: "100%", label: "Client Satisfaction", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { value: "5+", label: "Years of Excellence", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { value: "24h", label: "Response Guarantee", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1 group-hover:bg-llime/20 transition-colors">
                    <svg className="w-5 h-5 text-llime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-medium text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Projects />

        {/* ── Mid-Page Lead CTA ─────────────────────────── */}
        <section className="py-20 bg-gradient-to-br from-navy via-[#0f2a50] to-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-azure/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-llime/15 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-llime/20 text-llime text-xs font-bold rounded-full uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse" />
              Ready to Build Something Great?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Turn Your Idea Into Reality —{" "}
              <span className="bg-gradient-to-r from-llime to-chart bg-clip-text text-transparent">
                Start for Free
              </span>
            </h2>
            <p className="text-white/65 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Book a free discovery call with our experts. Get a custom roadmap and proposal — no commitment required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-llime text-navy font-black rounded-full hover:bg-chart hover:shadow-xl hover:shadow-llime/25 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+917339596165"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/50 text-xs font-medium">
              {["Free consultation", "No long-term contracts", "Response within 24 hours", "100% satisfaction guarantee"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-llime/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
        <Services />
        <WhyLegendaryOne />
        <Technologies />
        <Industries />
        <Leadership />
        <Contact />
      </main>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
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

const ROTATE_WORDS = [
  "Web Apps",
  "Mobile Apps",
  "E-commerce Stores",
  "SaaS Products",
  "Brand Identities",
  "UI/UX Experiences",
];

const RotatingText = () => {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((p) => (p + 1) % ROTATE_WORDS.length);
        setFading(false);
      }, 260);
    }, 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        opacity: fading ? 0 : 1,
        transform: fading ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {ROTATE_WORDS[idx]}
    </span>
  );
};

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
        title="Legendary One | #1 Web & Mobile App Development Agency in India"
        description="Legendary One is India's top-rated IT agency. We build custom websites, React apps, e-commerce stores, iOS & Android apps, SaaS products & iconic brand identities. 5+ years excellence, 100+ projects delivered, 100% client satisfaction. Get a FREE consultation today!"
        pathname="/"
        image="/logos/logo512.png"
        pageType="home"
        keywords="web development company India, mobile app development agency, React development India, custom software development, e-commerce development, UI UX design agency India, web design agency Tamil Nadu, Legendary One, IT company Erode, hire web developer India"
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
            {/* Rotating service badge */}
            <div
              className="flex justify-center mb-6"
              data-aos="fade-down"
              data-aos-delay="40"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-azure/10 border border-azure/20 text-sm font-semibold text-azure backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-azure animate-pulse flex-shrink-0" />
                We Build&nbsp;
                <RotatingText />
              </div>
            </div>

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
        </section>

        {/* ─── Sections ─────────────────────────────────────── */}

        {/* ── Social Proof Stats Bar ─────────────────────── */}
        <section className="py-10 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-azure/10 via-transparent to-llime/10 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  value: "100%",
                  label: "Client Satisfaction",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  noSpecial: true,
                },
                {
                  value: "5+",
                  label: "Years of Excellence",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  hasStarsAndAvatars: true,
                },
                {
                  value: "24h",
                  label: "Response Guarantee",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  noSpecial: true,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1 group-hover:bg-llime/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-llime"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d={stat.icon}
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  {stat.hasStarsAndAvatars && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex -space-x-2">
                        {["#2A7FFF", "#A5F04C", "#0F172A"].map((c, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border border-white flex items-center justify-center text-white text-[8px] font-black"
                            style={{ background: c, zIndex: 3 - i }}
                          >
                            {["A", "P", "R"][i]}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-0.5 text-amber-300 text-xs leading-none ml-1">
                        ★★★★★
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Marquee ────────────────────────────── */}
        <div className="py-6 overflow-hidden bg-white border-b border-gray-100/80">
          <p className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.25em] mb-5 px-4">
            Technologies &amp; Platforms We Master
          </p>
          <div className="flex overflow-hidden select-none">
            <div className="mq-track flex items-center whitespace-nowrap">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Flutter",
                "AWS",
                "Firebase",
                "MongoDB",
                "PostgreSQL",
                "Figma",
                "Docker",
                "TypeScript",
                "Shopify",
                "WordPress",
                "React Native",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Flutter",
                "AWS",
                "Firebase",
                "MongoDB",
                "PostgreSQL",
                "Figma",
                "Docker",
                "TypeScript",
                "Shopify",
                "WordPress",
                "React Native",
              ].map((tech, i) => (
                <span key={i} className="inline-flex items-center">
                  <span className="px-7 text-sm font-bold text-slate-400 hover:text-navy transition-colors cursor-default">
                    {tech}
                  </span>
                  <span className="text-slate-200 font-light">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <About hideSEO={true} />
        <Projects hideSEO={true} />

        {/* ── Legendary vs The Rest ──────────────────── */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-azure/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-llime/5 blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse" />
                Why Legendary One?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
                Not All Agencies Are{" "}
                <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
                  Created Equal
                </span>
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Most agencies overpromise and underdeliver. Here's how we're
                genuinely different — backed by results.
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 gap-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Others */}
              <div className="rounded-2xl border-2 border-gray-100 p-7 bg-gray-50/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h3 className="font-black text-lg text-slate-400">
                    Other Agencies
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {[
                    "3–6 month delivery timelines",
                    "Slow & unclear communication",
                    "Generic template-based designs",
                    "Hidden costs & surprise bills",
                    "No post-launch support",
                    "Junior devs, senior-level prices",
                    "You're just another invoice",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-2.5 h-2.5 text-red-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legendary One */}
              <div className="rounded-2xl border-2 border-azure/25 p-7 bg-gradient-to-br from-azure/5 via-white to-llime/5 shadow-lg shadow-azure/8 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-llime text-navy text-[10px] font-black rounded-full uppercase tracking-wider">
                  Best Choice
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-azure to-llime flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-black text-lg text-navy">
                    Legendary One
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {[
                    "2–6 week turnaround, guaranteed",
                    "Daily updates via WhatsApp & email",
                    "100% custom, conversion-first design",
                    "Transparent fixed pricing — always",
                    "30-day free post-launch support",
                    "Senior engineers on every project",
                    "You're our #1 priority, not a number",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-llime/25 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-2.5 h-2.5 text-azure"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <p className="text-sm text-navy/80 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="text-center mt-10"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-azure-dark text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Start Working with the Best
                <svg
                  className="w-4 h-4"
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
            </div>
          </div>
        </section>

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
              Book a free discovery call with our experts. Get a custom roadmap
              and proposal — no commitment required.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-llime text-navy font-black rounded-full hover:bg-chart hover:shadow-xl hover:shadow-llime/25 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Get Free Consultation
                <svg
                  className="w-4 h-4"
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
              <a
                href="tel:+917339596165"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/50 text-xs font-medium">
              {[
                "Free consultation",
                "No long-term contracts",
                "Response within 24 hours",
                "100% satisfaction guarantee",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-llime/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
        <Services hideSEO={true} />
        <WhyLegendaryOne hideSEO={true} />
        <Technologies hideSEO={true} />
        <Industries hideSEO={true} />
        <Leadership hideSEO={true} />

        {/* ── Pre-Footer Scarcity CTA ────────────────── */}
        <section className="py-24 bg-gradient-to-br from-[#060d1a] via-navy to-[#081228] relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-azure/15 blur-[160px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-llime/8 blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            {/* Scarcity badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-red-500/15 border border-red-500/25 rounded-full mb-8"
              data-aos="fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
              <span className="text-red-300 text-xs font-bold uppercase tracking-wider">
                Only 3 New Client Spots This Month — 2 Already Taken
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Your Competitors Are Already
              <span className="block bg-gradient-to-r from-llime to-chart bg-clip-text text-transparent mt-1">
                Moving Forward.
              </span>
            </h2>

            <p
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              Every day without a world-class digital presence is a day your
              competitors steal your customers. Let's fix that — starting today,
              absolutely free.
            </p>

            {/* Spots visual */}
            <div
              className="flex items-center justify-center gap-3 mb-10"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <div className="flex gap-2">
                <div className="w-12 h-3 rounded-full bg-red-500/70" />
                <div className="w-12 h-3 rounded-full bg-red-500/70" />
                <div className="w-12 h-3 rounded-full bg-llime animate-pulse" />
              </div>
              <span className="text-white/45 text-xs font-medium">
                1 spot left · 2 taken this month
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              data-aos="fade-up"
              data-aos-delay="220"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-gradient-to-r from-llime to-chart text-navy font-black rounded-full text-base shadow-2xl shadow-llime/20 hover:shadow-llime/40 hover:-translate-y-1 transition-all duration-300"
              >
                Claim My Free Spot
                <svg
                  className="w-5 h-5"
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
              <a
                href="https://wa.me/917339596165?text=Hi!%20I%20want%20to%20claim%20my%20free%20discovery%20call%20spot."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500/15 text-green-300 font-bold rounded-full border border-green-500/30 text-sm hover:bg-green-500/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>

            <p
              className="text-white/25 text-xs"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              No credit card · No contracts · 100% free discovery call ·
              Response within 24h guaranteed
            </p>
          </div>
        </section>

        <Contact hideSEO={true} />
      </main>
    </>
  );
};

export default Home;

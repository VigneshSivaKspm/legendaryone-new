import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const About = ({ hideSEO = false }) => {
  const cards = [
    {
      id: "who-we-are",
      label: "Who We Are",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      gradient: "from-azure to-llime",
      body: "Meet the squad that turns tech nightmares into digital daydreams. We're Legendary One — caffeinated code warriors, idea architects, and pixel perfectionists who believe the best solution makes you say, \"Why didn't I think of that?\"",
      bullets: [
        "We drink coffee like it's a programming language.",
        "We solve problems before you even know they exist.",
        "We're not just developers; we're digital wizards.",
      ],
    },
    {
      id: "what-we-do",
      label: "What We Do",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      gradient: "from-llime to-chart",
      body: 'We make tech look easy, fun, and way cooler than it actually is. From websites that make your customers say "Wow!" to apps that work faster than a caffeinated squirrel — we build things that work, look great, and drive results.',
      bullets: [
        "Websites that convert visitors into customers.",
        "Apps so fast and smooth your phone thinks it's flying.",
        "Brands so iconic your grandma wants the merch.",
      ],
    },
  ];

  return (
    <>
      {!hideSEO && (
        <SEO
          title="About Legendary One"
          description="Learn about Legendary One — our mission, values, and team."
          pathname="/about"
        />
      )}

      <section
        id="about"
        className="py-28 bg-slate-50 relative overflow-hidden"
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-mint/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section label */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-azure"></span>
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-navy leading-tight mb-5"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Making{" "}
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              Legends
            </span>{" "}
            Everyday!
          </h2>

          <p
            className="text-center text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed mb-16"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            The place where pixels meet perfection — no corporate nonsense, just
            passionate builders running on pure inspiration and keyboards that
            refuse to quit.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-azure-sm flex-shrink-0`}
                  >
                    {card.icon}
                  </div>
                  <h3
                    id={card.id}
                    className="font-display font-bold text-xl text-navy"
                  >
                    {card.label}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className={`h-px bg-gradient-to-r ${card.gradient} opacity-20 mb-5`}
                ></div>

                <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                  {card.body}
                </p>

                <ul className="space-y-2.5">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${card.gradient} flex-shrink-0`}
                      ></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="mt-16 rounded-2xl bg-gradient-to-br from-navy via-navy-800 to-navy px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-azure/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Ready to build something legendary?
              </h3>
              <p className="text-slate-400 text-sm">
                Let's turn your vision into a world-class digital product.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative flex-shrink-0 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap"
            >
              Let's Talk
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
    </>
  );
};

export default About;

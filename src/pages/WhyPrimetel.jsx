import React, { useEffect } from "react";
import SEO from "../components/SEO";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
  {
    n: "01",
    title: "Customer-Centric Approach",
    desc: "We place the customer at the heart of everything we do, tailoring solutions that drive growth and enhance user satisfaction.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "from-azure to-llime",
  },
  {
    n: "02",
    title: "Professionalism & Expertise",
    desc: "Our team brings top-tier expertise to every project, maintaining the highest standards of quality and attention to detail.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: "from-llime to-chart",
  },
  {
    n: "03",
    title: "Affordable Solutions",
    desc: "We provide high-quality services at competitive prices, making cutting-edge technology accessible to businesses of all sizes.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-mint to-llime",
  },
  {
    n: "04",
    title: "Ongoing Support",
    desc: "We offer continuous support, updates, and maintenance to ensure your systems remain at peak performance long after launch.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    color: "from-llime to-chart",
  },
  {
    n: "05",
    title: "Security First",
    desc: "Security is a priority across all our solutions, ensuring your data and business are protected with industry-leading standards.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "from-azure to-llime",
  },
  {
    n: "06",
    title: "Cutting-Edge Tech",
    desc: "We use the latest technologies to build scalable, innovative solutions that help your business stay ahead of the curve.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "from-llime to-chart",
  },
  {
    n: "07",
    title: "Transparent Communication",
    desc: "Clear timelines, proactive updates, and honest communication throughout every phase of your project.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    color: "from-mint to-llime",
  },
  {
    n: "08",
    title: "Performance & Scale",
    desc: "Architectures designed to scale smoothly while delivering consistent high performance under any load.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "from-llime to-chart",
  },
];

const WhyLegendaryOne = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <SEO
        title="Why Choose Legendary One"
        description="Discover why top teams choose Legendary One for secure, scalable and cost-effective digital solutions tailored to business needs."
        pathname="/why"
        image="/logos/logo512.png"
      />
      <section
        className="py-28 bg-slate-50 relative overflow-hidden"
        id="why-primetel"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-mint/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest mb-4"
              data-aos="fade-up"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-azure"></span>
              Why Us
            </span>
            <h2
              className="font-display font-black text-4xl sm:text-5xl text-navy leading-tight mb-6"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
                Legendary One?
              </span>
            </h2>
            <p
              className="text-center text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              Reasons top teams trust us to build and scale their digital
              products
            </p>
          </div>

          {/* Grid of reasons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.n}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                {/* Hover top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Number */}
                <div className="text-4xl font-display font-black bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent opacity-20 mb-3 leading-none">
                  {reason.n}
                </div>

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-azure-sm mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={reason.icon} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-[15px] text-navy mb-2.5 group-hover:text-azure transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyLegendaryOne;

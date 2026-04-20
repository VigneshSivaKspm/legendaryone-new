import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";

const projectsData = [
  {
    year: "2026",
    title: "Spark Writers Retreat",
    desc: "Premier Himalayan writers retreat offering 7-day immersive experience with award-winning mentors and manuscript development.",
    categories: ["Websites"],
    link: "https://www.sparkwritersretreat.com/",
    image: "/projects/sparkwriters.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Niklaus Solutions",
    desc: "Industry-oriented training platform offering 50+ workshops in ethical hacking, full-stack development, AI/ML, and cloud computing.",
    categories: ["Websites"],
    link: "https://www.theniklaus.com/",
    image: "/projects/theniklaus.png",
    tech: ["React", "Firebase", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Velvet Luxury Salon",
    desc: "Premium salon platform with online booking for hair services, facials, body treatments, and wellness therapies.",
    categories: ["Websites"],
    link: "https://www.velvetluxurysalon.in/",
    image: "/projects/velvetluxurysalon.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "KALI TRADERS",
    desc: "Professional website for a trusted tile solutions provider specializing in tile pastes, grout, epoxy, and beeding solutions.",
    categories: ["Websites"],
    link: "https://kalitraders.in/",
    image: "/projects/kalitraders.png",
    tech: ["React", "CSS", "JavaScript"],
    status: "Live",
  },
  {
    year: "2025",
    title: "TrainArch",
    desc: "Revolutionary AI-powered fitness platform connecting users with certified trainers, featuring AI nutrition tracking and gamified rewards.",
    categories: ["Websites"],
    link: "https://trainarch.in/",
    image: "/projects/trainarch.png",
    tech: ["React", "AI", "Node.js", "MongoDB"],
    status: "Live",
  },
  {
    year: "2025",
    title: "PaviiSunn",
    desc: "Leading solar power solutions provider with 15+ years of experience offering end-to-end EPC services for rooftop solar projects.",
    categories: ["Websites"],
    link: "https://paviisunn.in/",
    image: "/projects/paviisunn.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Shivaa Engineering Works",
    desc: "Manufacturer of high-quality solar structures for solar parks, on/off-grid systems, solar street lights, and solar pumping systems.",
    categories: ["Websites"],
    link: "https://shivaaengineering.com/",
    image: "/projects/shivaaeng.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Primetel Solutions",
    desc: "Telecom software specialists redefining infrastructure through custom OSS/BSS platforms, AI/ML automation, and cloud-native solutions.",
    categories: ["Websites"],
    link: "https://www.primetels.com/",
    image: "/projects/primetels.png",
    tech: ["Python", "Go", "Kubernetes", "AWS"],
    status: "Live",
  },
  {
    year: "2023",
    title: "Royal Photography",
    desc: "Professional photography studio specializing in wedding, events, fashion, and commercial photography with cinematic film services.",
    categories: ["Websites"],
    link: "https://www.royalphotography.org/",
    image: "/projects/royal.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Sri Amman Smart Store",
    desc: "Trusted destination for fresh, organic, and local products delivered right to your doorstep.",
    categories: ["Websites"],
    link: "https://www.sriammansmartstore.in/",
    image: "/projects/sriamman.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2025",
    title: "Spark Learning Hub",
    desc: "Expert tuition center offering personalized coaching for CBSE, ICSE, JEE, NEET, and CET exams with 95% success rate.",
    categories: ["Websites"],
    link: "https://www.sparktuitions.in/",
    image: "/projects/sparktuition.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2024",
    title: "The Spark Books",
    desc: "Literary platform showcasing award-winning author with 25+ published works spanning fiction, poetry, and philosophy.",
    categories: ["Websites"],
    link: "https://www.thesparkbooks.com/",
    image: "/projects/sparkbooks.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
  {
    year: "2026",
    title: "Blue Bell Gifts",
    desc: "Premier gift shop offering a curated selection of unique and personalized gifts for all occasions.",
    categories: ["Websites"],
    link: "https://www.bluebellgifts.in/",
    image: "/projects/bluebellgifts.png",
    tech: ["React", "HTML", "CSS"],
    status: "Live",
  },
];

const CATEGORIES = ["All", "Websites", "Softwares", "Android Apps"];

const statusColors = {
  Live: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Development": "bg-blue-50 text-azure border-blue-200",
  Completed: "bg-mint/10 text-teal-700 border-mint/30",
};

const Projects = ({ hideSEO = false }) => {
  const [cat, setCat] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered =
    cat === "All"
      ? projectsData
      : projectsData.filter((p) => p.categories.includes(cat));
  const shown = isMobile && !showAll ? filtered.slice(0, 3) : filtered;

  return (
    <>
      {!hideSEO && (
        <SEO
          title="Projects | Legendary One"
          description="Browse our portfolio of web, mobile, and software projects."
          pathname="/projects"
        />
      )}

      <section
        id="projects"
        className="py-28 bg-slate-50/60 relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 rounded-full bg-azure/4 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              Our Portfolio
            </span>
          </div>

          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-navy mb-5 leading-tight"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Work We're{" "}
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              Proud Of
            </span>
          </h2>
          <p
            className="text-center text-slate-500 text-lg max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Explore our portfolio of innovative solutions across web, mobile,
            and software development.
          </p>

          {/* Category filter */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-12"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCat(c);
                  setShowAll(false);
                }}
                className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                  cat === c
                    ? "bg-gradient-to-r from-azure to-llime text-white border-transparent shadow-azure-sm"
                    : "bg-white text-slate-600 border-gray-200 hover:border-azure hover:text-azure"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          {shown.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <div className="text-5xl mb-4">📂</div>
              <h3 className="font-bold text-lg text-navy mb-2">
                No Projects Found
              </h3>
              <p className="text-sm">
                We're working on something amazing for this category!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((p, i) => (
                <article
                  key={p.title + p.year}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  {/* Image */}
                  {p.image && (
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                      {/* Badges */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                        <span className="px-2.5 py-1 bg-gradient-to-r from-azure to-llime text-white text-xs font-bold rounded-full shadow">
                          {p.year}
                        </span>
                        <span
                          className={`px-2.5 py-1 text-xs font-bold rounded-full border ${statusColors[p.status] || statusColors.Live}`}
                        >
                          {p.status}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-display font-bold text-base text-navy mb-2 group-hover:text-azure transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {p.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-semibold bg-azure/8 text-azure rounded-md border border-azure/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-azure hover:text-azure-dark transition-colors group/link"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Mobile see-all toggle */}
          {isMobile && filtered.length > 3 && (
            <div className="flex justify-center mt-10" data-aos="fade-up">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="px-7 py-3 bg-white border border-gray-200 text-sm font-bold text-navy rounded-full hover:border-azure hover:text-azure transition-all duration-200 shadow-card"
              >
                {showAll ? "Show Less" : `See All ${filtered.length} Projects`}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;

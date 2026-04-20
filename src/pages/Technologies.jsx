import React, { useRef } from "react";
import SEO from "../components/SEO";

const cdn = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const si = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const iconMap = {
  React: `${cdn}/react/react-original.svg`,
  "Next.js": `${cdn}/nextjs/nextjs-original.svg`,
  Angular: `${cdn}/angularjs/angularjs-plain.svg`,
  Vue: `${cdn}/vuejs/vuejs-original.svg`,
  TypeScript: `${cdn}/typescript/typescript-original.svg`,
  JavaScript: `${cdn}/javascript/javascript-original.svg`,
  "Tailwind CSS": `${cdn}/tailwindcss/tailwindcss-original.svg`,
  Vite: `${cdn}/vitejs/vitejs-original.svg`,
  SCSS: `${cdn}/sass/sass-original.svg`,
  Redux: `${cdn}/redux/redux-original.svg`,
  "Node.js": `${cdn}/nodejs/nodejs-original.svg`,
  Express: `${cdn}/express/express-original-wordmark.svg`,
  NestJS: `${cdn}/nestjs/nestjs-plain.svg`,
  Python: `${cdn}/python/python-original.svg`,
  Django: `${cdn}/django/django-plain.svg`,
  FastAPI: `${si}/fastapi.svg`,
  Flask: `${cdn}/flask/flask-original.svg`,
  Java: `${cdn}/java/java-original.svg`,
  "Spring Boot": `${cdn}/spring/spring-original.svg`,
  Go: `${cdn}/go/go-original.svg`,
  GraphQL: `${cdn}/graphql/graphql-plain.svg`,
  "React Native": `${cdn}/react/react-original.svg`,
  Flutter: `${cdn}/flutter/flutter-original.svg`,
  "iOS (Swift)": `${cdn}/swift/swift-original.svg`,
  "Android (Kotlin)": `${cdn}/android/android-plain.svg`,
  Ionic: `${cdn}/ionic/ionic-original.svg`,
  PostgreSQL: `${cdn}/postgresql/postgresql-original.svg`,
  MySQL: `${cdn}/mysql/mysql-original.svg`,
  MongoDB: `${cdn}/mongodb/mongodb-original.svg`,
  Redis: `${cdn}/redis/redis-original.svg`,
  Firebase: `${cdn}/firebase/firebase-plain.svg`,
  Supabase: `${cdn}/supabase/supabase-original.svg`,
  Docker: `${cdn}/docker/docker-original.svg`,
  Kubernetes: `${cdn}/kubernetes/kubernetes-plain.svg`,
  "GitHub Actions": `${si}/githubactions.svg`,
  AWS: `${cdn}/amazonwebservices/amazonwebservices-original.svg`,
  Azure: `${cdn}/azure/azure-original.svg`,
  GCP: `${cdn}/googlecloud/googlecloud-original.svg`,
  Terraform: `${cdn}/terraform/terraform-original.svg`,
  Figma: `${cdn}/figma/figma-original.svg`,
  Git: `${cdn}/git/git-original.svg`,
  GitHub: `${cdn}/github/github-original.svg`,
  WordPress: `${cdn}/wordpress/wordpress-plain.svg`,
  Shopify: `${cdn}/shopify/shopify-original.svg`,
  Stripe: `${cdn}/stripe/stripe-original.svg`,
};

const categories = [
  {
    title: "Frontend",
    color: "from-azure to-llime",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "SCSS",
      "Redux",
    ],
  },
  {
    title: "Backend",
    color: "from-llime to-chart",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "Java",
      "Spring Boot",
      "Go",
      "GraphQL",
    ],
  },
  {
    title: "Mobile",
    color: "from-mint to-llime",
    items: [
      "React Native",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin)",
      "Ionic",
    ],
  },
  {
    title: "Databases",
    color: "from-llime to-chart",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "DevOps & Cloud",
    color: "from-azure to-mint",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
    ],
  },
  {
    title: "Design & Tools",
    color: "from-chart to-llime",
    items: ["Figma", "Git", "GitHub", "WordPress", "Shopify", "Stripe"],
  },
];

const Technologies = ({ hideSEO = false }) => {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (ref.current)
      ref.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <>
      {!hideSEO && (
        <SEO
          title="Technologies & Tech Stack | React, Node.js, Flutter, AWS & More — Legendary One"
          description="Legendary One masters 30+ modern technologies: React, Next.js, Node.js, Python, Flutter, React Native, AWS, Firebase, Docker, MongoDB, PostgreSQL, TypeScript, Shopify & more. We use the right tech for maximum performance."
          pathname="/technologies"
          keywords="React development, Next.js, Node.js, Flutter, React Native, AWS, Firebase, MongoDB, Python, TypeScript, Shopify, WordPress, Docker, Kubernetes, web technologies India"
        />
      )}

      <section
        id="technologies"
        className="py-28 bg-navy relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-azure/40 to-transparent"></div>
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-azure/[0.07] blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-llime/[0.05] blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-llime bg-llime/10 rounded-full uppercase tracking-widest border border-llime/20">
              <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse"></span>
              Tech Stack
            </span>
          </div>

          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-white mb-5 leading-tight"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-azure via-llime to-chart bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p
            className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-14"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Comprehensive, modern stack for full-spectrum software development
          </p>

          {/* Carousel */}
          <div className="relative">
            {/* Nav buttons */}
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-azure/50 transition-all duration-200 hidden md:flex"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-azure/50 transition-all duration-200 hidden md:flex"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div
              ref={ref}
              className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat, ci) => (
                <div
                  key={cat.title}
                  className="flex-shrink-0 w-72 bg-white/[0.06] rounded-2xl border border-white/10 hover:border-azure/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={ci * 60}
                >
                  {/* Card header */}
                  <div className={`h-1 bg-gradient-to-r ${cat.color}`}></div>
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-br ${cat.color}`}
                      ></div>
                      <h3 className="font-display font-bold text-sm text-white">
                        {cat.title}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 py-1 group/item hover:bg-white/[0.06] rounded-lg px-2 -mx-2 transition-colors"
                        >
                          {iconMap[item] ? (
                            <img
                              src={iconMap[item]}
                              alt={item}
                              className="w-5 h-5 object-contain flex-shrink-0"
                              loading="lazy"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          ) : (
                            <div
                              className={`w-5 h-5 rounded bg-gradient-to-br ${cat.color} flex-shrink-0 opacity-60`}
                            ></div>
                          )}
                          <span className="text-xs font-medium text-slate-300 group-hover/item:text-llime transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

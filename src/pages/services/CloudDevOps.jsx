import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const CloudDevOps = () => {
  const benefits = [
    { title: "CI/CD Pipelines", desc: "Automated testing and deployment" },
    {
      title: "Infrastructure as Code",
      desc: "Reproducible, version-controlled infrastructure",
    },
    { title: "Cloud Optimization", desc: "Cost-effective cloud architecture" },
    {
      title: "Monitoring & Alerts",
      desc: "Real-time system health visibility",
    },
    {
      title: "Security & Compliance",
      desc: "Enterprise-grade security practices",
    },
    {
      title: "Disaster Recovery",
      desc: "Backup and business continuity plans",
    },
  ];

  return (
    <>
      <SEO
        title="Cloud & DevOps Services | AWS, Docker, CI/CD Pipelines — Legendary One"
        description="End-to-end cloud & DevOps services: AWS setup & migration, Docker containerization, Kubernetes orchestration, CI/CD pipelines, infrastructure-as-code & cloud cost optimization. Modern DevOps for high-growth businesses."
        pathname="/services/cloud-devops"
        keywords="cloud services India, DevOps consulting, AWS deployment India, Docker Kubernetes, CI/CD pipeline setup, cloud infrastructure, cloud migration India, DevOps agency"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Cloud & DevOps", path: "/services/cloud-devops" },
        ]}
      />

      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid bg-dot-grid opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/services" className="hover:text-azure transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-navy font-semibold">Cloud & DevOps</span>
          </div>

          <div className="mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              DevOps Excellence
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy leading-tight mb-6">
              Cloud & DevOps{" "}
              <span className="bg-gradient-to-r from-azure to-mint bg-clip-text text-transparent">
                Simplified
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
              End-to-end DevOps solutions: CI/CD pipelines,
              infrastructure-as-code, and cloud optimization for scalable,
              reliable systems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Optimize Your Infrastructure
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
              Our DevOps Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-azure to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <h3 className="font-display font-bold text-[15px] text-navy mb-2 group-hover:text-azure transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-gradient-to-br from-navy to-navy-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-azure/10 blur-3xl pointer-events-none"></div>
            <div className="relative">
              <h2 className="font-display font-black text-3xl mb-10">
                Technology & Platforms
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "AWS, Azure & GCP",
                    desc: "Multi-cloud strategies and management",
                  },
                  {
                    num: "02",
                    title: "Kubernetes & Docker",
                    desc: "Containerization and orchestration",
                  },
                  {
                    num: "03",
                    title: "GitHub Actions & Jenkins",
                    desc: "Automated CI/CD pipelines",
                  },
                  {
                    num: "04",
                    title: "Terraform & CloudFormation",
                    desc: "Infrastructure as Code solutions",
                  },
                  {
                    num: "05",
                    title: "Monitoring & Logging",
                    desc: "Prometheus, ELK, Datadog setup",
                  },
                  {
                    num: "06",
                    title: "Database Management",
                    desc: "Migration, backup, and optimization",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-azure to-mint flex items-center justify-center font-bold text-lg">
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
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Let's build a robust, scalable DevOps infrastructure that supports
              your growth and ensures reliability.
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

export default CloudDevOps;

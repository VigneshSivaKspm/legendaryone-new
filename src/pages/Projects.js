import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import './Section.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All', 'Websites', 'Softwares', 'Android Apps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      year: '2025',
      title: 'KALI TRADERS',
      description: 'Professional website for a trusted tile solutions provider specializing in tile pastes, grout, epoxy, and beeding solutions with product showcase and contact features.',
      categories: ['Websites'],
      projectLink: 'https://kalitraders.in/',
      image: '/projects/kalitraders.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'TrainArch',
      description: 'Revolutionary AI-powered fitness platform connecting users with certified trainers. Features AI nutrition tracking, step monitoring, hydration reminders, personalized training, sleep tracking, and gamified rewards system.',
      categories: ['Websites'],
      projectLink: 'https://trainarch.in/',
      image: '/projects/trainarch.png',
      tech: ['React', 'AI', 'Node.js', 'MongoDB'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'PaviiSunn',
      description: 'Leading solar power solutions provider with 15+ years of experience. Offers end-to-end EPC services for rooftop solar photovoltaic projects with government subsidies, maintenance support, and international standards.',
      categories: ['Websites'],
      projectLink: 'https://paviisunn.in/',
      image: '/projects/paviisunn.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Shivaa Engineering Works',
      description: 'Manufacturer of high-quality solar structures for solar parks, on/off-grid systems, solar street lights, and solar pumping systems. Provides customized, ground-mounted, and rooftop solar structures with innovative designs.',
      categories: ['Websites'],
      projectLink: 'https://shivaaengineering.com/',
      image: '/projects/shivaaeng.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Primetel Solutions',
      description: 'Telecom software specialists redefining telecommunications infrastructure through custom OSS/BSS platforms, network monitoring, data analytics, AI/ML automation, and cloud-native solutions for MNOs, ISPs, and MVNOs.',
      categories: ['Websites'],
      projectLink: 'https://www.primetels.com/',
      image: '/projects/primetels.png',
      tech: ['Python', 'Go', 'Java', 'Kubernetes', 'AWS', 'Apache Kafka'],
      status: 'Live'
    },
    {
      year: '2023',
      title: 'Royal Photography',
      description: 'Professional photography studio specializing in wedding, pre-wedding, events, fashion, portrait, and commercial photography. Offers cinematic films, albums, and professional equipment services with multiple branches across Palakkad.',
      categories: ['Websites'],
      projectLink: 'https://www.royalphotography.org/',
      image: '/projects/royal.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Sri Amman Smart Store',
      description: 'Trusted destination for fresh, organic, and local products. Delivers quality groceries, dairy, and more right to your doorstep with a mission to make healthy living easy and accessible for everyone.',
      categories: ['Websites'],
      projectLink: 'https://www.sriammansmartstore.in/',
      image: '/projects/sriamman.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Spark Learning Hub',
      description: 'Expert tuition center offering personalized coaching for CBSE, ICSE, JEE, NEET, and CET exams. Features highly qualified faculty, small batch sizes, proven results with 95% success rate, and flexible scheduling options.',
      categories: ['Websites'],
      projectLink: 'https://www.sparktuitions.in/',
      image: '/projects/sparktuition.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2024',
      title: 'The Spark Books',
      description: 'Literary platform showcasing award-winning author with 25+ published works spanning fiction, poetry, and philosophy. Features book collections, writing workshops, manuscript consultations, book club visits, and literary mentorship programs with strong digital community engagement.',
      categories: ['Websites'],
      projectLink: 'https://www.thesparkbooks.com/',
      image: '/projects/sparkbooks.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2026',
      title: 'Spark Writers Retreat',
      description: 'Premier writers retreat in the Himalayas offering 7-day immersive experience with award-winning mentors. Provides manuscript development, publishing guidance, free ISBN, luxury accommodation, and personalized mentorship for aspiring and established authors.',
      categories: ['Websites'],
      projectLink: 'https://www.sparkwritersretreat.com/',
      image: '/projects/sparkwriters.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Niklaus Solutions',
      description: 'Industry-oriented training platform offering 50+ workshops in ethical hacking, full stack development, AI/ML, cybersecurity, and cloud computing. Features hands-on training, industry expert mentors, job placement assistance, guaranteed internships, and industry-recognized certifications.',
      categories: ['Websites'],
      projectLink: 'https://www.theniklaus.com/',
      image: '/projects/theniklaus.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      status: 'Live'
    },
    {
      year: '2025',
      title: 'Velvet Luxury Salon',
      description: 'Premium salon services platform offering online booking for hair services, facials, body treatments, grooming, and wellness therapies. Features expert stylists with 10+ years experience, premium international products, and exclusive membership offers.',
      categories: ['Websites'],
      projectLink: 'https://www.velvetluxurysalon.in/',
      image: '/projects/velvetluxurysalon.png',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      status: 'Live'
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(selectedCategory));

  return (
    <>
      <SEO
        title="Projects — Legendary One Portfolio"
        description="Browse Legendary One's portfolio showcasing web, mobile, and software projects delivered for clients across industries."
        pathname="/projects"
      />
      <section className="section projects-section" id="projects">
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading">
              Our <span className="highlight">Projects</span>
            </h1>
            <p className="section-subtitle">
              Explore our portfolio of innovative solutions across web, mobile, and software development.
            </p>
            
            <div className="project-categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          <div className="projects-grid">
            {filteredProjects.length === 0 ? (
              <div className="no-projects" data-aos="fade-up">
                <span className="no-projects-icon">📂</span>
                <h3>No Projects Found</h3>
                <p>We're working on something amazing for this category!</p>
              </div>
            ) : (
              // show only first 3 on mobile unless user toggles "See All"
              (() => {
                const shownProjects = (isMobile && !showAll) ? filteredProjects.slice(0, 3) : filteredProjects;
                return shownProjects.map((project, idx) => (
                <article
                  className="project-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                  key={project.title + project.year}
                >
                  <div className="card-header">
                    <span className="year-badge">{project.year}</span>
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {project.image && (
                    <img src={project.image} alt={project.title} className="project-image" />
                  )}
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {project.projectLink && (
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project <span className="arrow">→</span>
                    </a>
                  )}
                </article>
                ));
              })()
            )}
          </div>
          {/* See All / Show Less toggle for mobile */}
          {isMobile && filteredProjects.length > 3 && (
            <div className="projects-footer" data-aos="fade-up">
              <button
                className="see-all-btn"
                onClick={() => setShowAll(prev => !prev)}
              >
                {showAll ? 'Show Less' : `See All (${filteredProjects.length})`}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/projects" />
      </Helmet>
      <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
        <div className="diagonal-bg" data-aos="fade-in" data-aos-delay="100" role="presentation"></div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="projects-heading" data-aos="fade-right" data-aos-delay="100">Our <span className="highlight">Projects</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Innovative solutions transforming telecom operations</p>
          </header>
          <div className="timeline" role="list" aria-label="Project Timeline">
            <article className="timeline-item" data-aos="fade-up" data-aos-delay="100" role="listitem">
              <div className="timeline-content">
                <div className="timeline-date" data-aos="zoom-in" data-aos-delay="150" aria-hidden="true">2023</div>
                <h3 data-aos="fade-right" data-aos-delay="200">Real-time Call Quality Monitoring</h3>
                <p data-aos="fade-left" data-aos-delay="250">For a leading MNO in Central Europe, reducing complaints by 40% with AI-driven analysis of 2M+ calls daily.</p>
              </div>
            </article>
            <article className="timeline-item" data-aos="fade-up" data-aos-delay="200" role="listitem">
              <div className="timeline-content">
                <div className="timeline-date" data-aos="zoom-in" data-aos-delay="250" aria-hidden="true">2022</div>
                <h3 data-aos="fade-right" data-aos-delay="300">Churn Prediction Engine</h3>
                <p data-aos="fade-left" data-aos-delay="350">Machine learning solution for Tier-2 operator achieving 85% accuracy in identifying at-risk customers.</p>
              </div>
            </article>
            <article className="timeline-item" data-aos="fade-up" data-aos-delay="300" role="listitem">
              <div className="timeline-content">
                <div className="timeline-date" data-aos="zoom-in" data-aos-delay="350" aria-hidden="true">2021</div>
                <h3 data-aos="fade-right" data-aos-delay="400">Billing Fraud Detection</h3>
                <p data-aos="fade-left" data-aos-delay="450">Cloud-native system saving $2M annually by identifying fraudulent patterns in real-time.</p>
              </div>
            </article>
            <article className="timeline-item" data-aos="fade-up" data-aos-delay="400" role="listitem">
              <div className="timeline-content">
                <div className="timeline-date" data-aos="zoom-in" data-aos-delay="450" aria-hidden="true">2020</div>
                <h3 data-aos="fade-right" data-aos-delay="500">Network Congestion Heatmaps</h3>
                <p data-aos="fade-left" data-aos-delay="550">GIS-integrated system improving network efficiency by 30% through predictive modeling.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
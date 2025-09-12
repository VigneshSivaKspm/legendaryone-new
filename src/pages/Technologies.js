import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './Section.css';
import './Technologies.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/technologies" />
      </Helmet>
      <section className="section technologies-section" id="technologies" aria-labelledby="technologies-heading">
        <div className="particles-bg" id="particles-js" data-aos="fade-in" data-aos-delay="100" role="presentation"></div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="technologies-heading" data-aos="fade-right" data-aos-delay="100">Our <span className="tech-text">Tech Stack</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Cutting-edge tools powering telecom innovation</p>
          </header>
          <div className="tech-grid" role="list" aria-label="Tech Categories">
            <article className="tech-category" data-aos="flip-left" data-aos-delay="100" role="listitem">
              <div className="category-header" data-aos="zoom-in" data-aos-delay="150">
                <div className="pulse-dot" aria-hidden="true"></div>
                <h3 data-aos="fade-up" data-aos-delay="200">Languages</h3>
              </div>
              <ul>
                <li data-aos="fade-right" data-aos-delay="250">Python</li>
                <li data-aos="fade-right" data-aos-delay="300">Go</li>
                <li data-aos="fade-right" data-aos-delay="350">Java</li>
                <li data-aos="fade-right" data-aos-delay="400">TypeScript</li>
                <li data-aos="fade-right" data-aos-delay="450">Rust</li>
              </ul>
            </article>
            <article className="tech-category" data-aos="flip-up" data-aos-delay="200" role="listitem">
              <div className="category-header" data-aos="zoom-in" data-aos-delay="250">
                <div className="pulse-dot" aria-hidden="true"></div>
                <h3 data-aos="fade-up" data-aos-delay="300">Data Processing</h3>
              </div>
              <ul>
                <li data-aos="fade-right" data-aos-delay="350">Apache Kafka</li>
                <li data-aos="fade-right" data-aos-delay="400">Apache Flink</li>
                <li data-aos="fade-right" data-aos-delay="450">Spark</li>
                <li data-aos="fade-right" data-aos-delay="500">ClickHouse</li>
                <li data-aos="fade-right" data-aos-delay="550">TimescaleDB</li>
              </ul>
            </article>
            <article className="tech-category" data-aos="flip-right" data-aos-delay="300" role="listitem">
              <div className="category-header" data-aos="zoom-in" data-aos-delay="350">
                <div className="pulse-dot" aria-hidden="true"></div>
                <h3 data-aos="fade-up" data-aos-delay="400">Platforms</h3>
              </div>
              <ul>
                <li data-aos="fade-right" data-aos-delay="450">Kubernetes</li>
                <li data-aos="fade-right" data-aos-delay="500">Docker</li>
                <li data-aos="fade-right" data-aos-delay="550">AWS</li>
                <li data-aos="fade-right" data-aos-delay="600">GCP</li>
                <li data-aos="fade-right" data-aos-delay="650">Azure</li>
              </ul>
            </article>
            <article className="tech-category">
              <div className="category-header">
                <div className="pulse-dot" aria-hidden="true"></div>
                <h3>Analytics</h3>
              </div>
              <ul>
                <li>Grafana</li>
                <li>Tableau</li>
                <li>PowerBI</li>
                <li>Superset</li>
                <li>Custom BI</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
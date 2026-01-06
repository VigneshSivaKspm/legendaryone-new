import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import './Section.css';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <SEO
        title="About Legendary One"
        description="Learn about Legendary One — our mission, values, and the team behind our high-quality web, mobile and branding solutions."
        pathname="/about"
      />
      <section className="section about-section" id="about" aria-labelledby="about-heading">
        <div className="circles-bg" role="presentation">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="floating-circle"
              data-aos="zoom-in"
              data-aos-delay={i * 120 + 120}
            />
          ))}
        </div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-right" data-aos-duration="700">
            <h1
              className="section-heading"
              id="about-heading"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
            >
              MAKING <span className="highlight">LEGENDS</span> EVERYDAY!
            </h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="220" data-aos-duration="700">
              Welcome to <span className="gradient-text">LEGENDARY-ONE</span>, the place where pixels meet perfection and coffee never goes cold! No corporate nonsense—just a passionate team running on pure inspiration and a keyboard that refuses to quit. If you need something built?, we’ll create it faster than you can say "404 Error!".
            </p>
          </header>

          <div className="about-split" role="region" aria-label="About Split Sections" data-aos="fade-up" data-aos-delay="120" data-aos-duration="700">
            <section aria-labelledby="who-we-are" className="about-pane" data-aos="fade-right" data-aos-delay="160" data-aos-duration="650">
              <h2 id="who-we-are" className="pane-heading" data-aos="fade-right" data-aos-delay="180">Who We Are</h2>
              <p data-aos="fade-up" data-aos-delay="220">
                Meet the squad that turns tech nightmares into digital daydreams. We're <strong>Legendary One</strong> – a bunch of caffeinated code warriors, idea architects, and pixel perfectionists who believe the best solution is the one that makes you say, "Why didn’t I think of that?" We're the people who talk with Keyboard.
              </p>
              <ul className="mission-list">
                <li data-aos="fade-right" data-aos-delay="260">We drink coffee like it's a programming language.</li>
                <li data-aos="fade-right" data-aos-delay="300">We solve problems before you even know they exist, like superheroes but with laptops.</li>
                <li data-aos="fade-right" data-aos-delay="340">We're not just developers; we're digital wizards casting spells with code!</li>
              </ul>
            </section>

            <section aria-labelledby="what-we-do" className="about-pane" data-aos="fade-left" data-aos-delay="200" data-aos-duration="650">
              <h2 id="what-we-do" className="pane-heading" data-aos="fade-left" data-aos-delay="220">What We Do</h2>
              <p data-aos="fade-up" data-aos-delay="260">
                Let’s get down to business: what do we do? Well, we make tech look easy, fun, and way cooler than it actually is. From building websites that’ll make your customers go “Wow!” to crafting apps that work faster than a caffeinated squirrel, we’re all about making things that work, look good, and make you smile.
              </p>
              <ul className="mission-list">
                <li data-aos="fade-left" data-aos-delay="300">We create websites that are more addictive than your favorite social media app.</li>
                <li data-aos="fade-left" data-aos-delay="340">We build apps so fast and smooth, your phone might think it’s in a race.</li>
                <li data-aos="fade-left" data-aos-delay="380">We design brands that are so cool, even your grandma will want a T-shirt with your logo on it.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
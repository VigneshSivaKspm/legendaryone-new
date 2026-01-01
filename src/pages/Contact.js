import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Section.css';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  const [state, handleSubmit] = useForm("xnnzdkdg");
  const [fields, setFields] = React.useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    if (state.succeeded) {
      setFields({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  const handleFieldChange = e => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetalsolutionsfze.com/contact" />
      </Helmet>
      <section className="section contact-section" id="contact">
        <div className="contact-bg" data-aos="fade-in" data-aos-delay="100"></div>
        <div className="section-content">
          <div className="section-header" data-aos="fade-up">
            <h1 className="section-heading" data-aos="fade-right" data-aos-delay="100">Get In <span className="highlight">Touch</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Let's discuss how we can transform your telecom operations</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card" data-aos="flip-left" data-aos-delay="100">
                <div className="info-icon" data-aos="zoom-in" data-aos-delay="150">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 data-aos="fade-up" data-aos-delay="200">Email Us</h3>
                <a href="mailto:legendaryoneff@gmail.com" data-aos="fade-left" data-aos-delay="250">legendaryoneff@gmail.com</a>
              </div>
              <div className="info-card" data-aos="flip-up" data-aos-delay="200">
                <div className="info-icon" data-aos="zoom-in" data-aos-delay="250">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 data-aos="fade-up" data-aos-delay="300">Call Us</h3>
                <a href="tel:+917339596165" data-aos="fade-left" data-aos-delay="350">+91 733 959 6165</a>
              </div>
              <div className="info-card" data-aos="flip-right" data-aos-delay="300">
                <div className="info-icon" data-aos="zoom-in" data-aos-delay="350">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 data-aos="fade-up" data-aos-delay="400">Visit Us</h3>
                <p data-aos="fade-left" data-aos-delay="450">4, Eswaramoorthi Street, Kasipalayam<br/>Gobi, Erode</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  data-aos="fade-right"
                  data-aos-delay="150"
                  value={fields.name}
                  onChange={handleFieldChange}
                />
                <span className="input-border"></span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={fields.email}
                  onChange={handleFieldChange}
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <span className="input-border"></span>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={fields.message}
                  onChange={handleFieldChange}
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <span className="input-border"></span>
              </div>
              <button type="submit" className="submit-btn" disabled={state.submitting}>
                Send Message
                <span className="btn-border"></span>
              </button>
              {state.succeeded && (
                <div className="form-success">
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
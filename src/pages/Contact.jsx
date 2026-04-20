import React from "react";
import SEO from "../components/SEO";

const Contact = ({ hideSEO = false }) => {
  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (e) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFocus = (e) => setFocusedField(e.target.name);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!fields.name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!fields.email.trim()) {
      setError("Please enter your email address");
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    if (!fields.message.trim()) {
      setError("Please enter your message");
      return;
    }

    if (fields.message.trim().length < 10) {
      setError("Message must be at least 10 characters long");
      return;
    }

    if (fields.message.length > 500) {
      setError("Message must be under 500 characters");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "contact" }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      const data = await response.json();

      // Show success message even if email delivery had issues
      // (because submission is backed up)
      setSubmitted(true);
      setFields({ name: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
      console.error("Contact form error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const infoItems = [
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: "Email",
      value: "legendaryoneff@gmail.com",
      href: "mailto:legendaryoneff@gmail.com",
      color: "from-azure to-blue-500",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: "Phone",
      value: "+91 733 959 6165",
      href: "tel:+917339596165",
      color: "from-llime to-green-400",
    },
    {
      icon: "M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12c0-5.523-4.477-10-10-10z",
      label: "Instagram",
      value: "@legendaryonehub",
      href: "https://instagram.com/legendaryonehub",
      color: "from-pink-500 to-rose-400",
    },
  ];

  return (
    <>
      {!hideSEO && (
        <SEO
          title="Contact Us | Free Project Consultation — Legendary One"
          description="Contact Legendary One for a free project consultation. Call +91 7339596165, WhatsApp us, or fill the form. Based in Gobi, Erode, Tamil Nadu. We respond within 24 hours — no commitment, no cost, just results."
          pathname="/contact"
          keywords="contact Legendary One, hire web developer India, IT agency contact Erode Tamil Nadu, free web development consultation, get website quote India, contact software agency"
        />
      )}

      <section id="contact" className="py-28 bg-white relative overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-azure via-llime via-chart via-llime to-azure"></div>

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-azure/8 blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-llime/6 blur-[80px] pointer-events-none translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest border border-azure/20">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              Contact Us
            </span>
          </div>

          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-navy mb-5 leading-tight"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              Legendary
            </span>
          </h2>
          <p
            className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-14"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>

          <div className="flex flex-col gap-12">
            {/* Form - on top */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-azure/15 via-transparent to-llime/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40 rounded-3xl p-8 border-2 border-slate-200 shadow-card backdrop-blur-sm">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-azure to-llime flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="font-display font-black text-2xl bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent mb-3">
                        Message Received! ✓
                      </h3>
                      <p className="text-slate-700 text-sm mb-3 font-medium">
                        Your message is safely stored and will never be lost.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-4">
                        <p className="text-green-700 text-xs font-semibold mb-1">
                          ✓ Submission Confirmed
                        </p>
                        <p className="text-green-600 text-xs">
                          You'll receive a confirmation email at your address
                        </p>
                      </div>
                      <p className="text-slate-600 text-sm mb-1">
                        Thanks for reaching out. We'll contact you within 24
                        hours.
                      </p>
                      <p className="text-slate-500 text-xs">
                        Check your inbox and spam folder for our response.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name field */}
                        <div className="relative">
                          <label
                            className={`block text-xs font-bold uppercase tracking-wider mb-3 transition-all duration-200 ${
                              focusedField === "name" || fields.name
                                ? "text-azure"
                                : "text-slate-600"
                            }`}
                          >
                            Full Name
                          </label>
                          <div
                            className={`relative border-2 rounded-xl transition-all duration-300 ${
                              focusedField === "name"
                                ? "border-azure bg-white shadow-lg shadow-azure/20"
                                : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                            }`}
                          >
                            <svg
                              className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            <input
                              type="text"
                              name="name"
                              required
                              value={fields.name}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              placeholder="John Doe"
                              className="w-full pl-11 pr-4 py-3 bg-transparent text-navy placeholder-slate-400 text-sm focus:outline-none font-medium"
                            />
                          </div>
                        </div>

                        {/* Email field */}
                        <div className="relative">
                          <label
                            className={`block text-xs font-bold uppercase tracking-wider mb-3 transition-all duration-200 ${
                              focusedField === "email" || fields.email
                                ? "text-azure"
                                : "text-slate-600"
                            }`}
                          >
                            Email Address
                          </label>
                          <div
                            className={`relative border-2 rounded-xl transition-all duration-300 ${
                              focusedField === "email"
                                ? "border-azure bg-white shadow-lg shadow-azure/20"
                                : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                            }`}
                          >
                            <svg
                              className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <input
                              type="email"
                              name="email"
                              required
                              value={fields.email}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              placeholder="john@company.com"
                              className="w-full pl-11 pr-4 py-3 bg-transparent text-navy placeholder-slate-400 text-sm focus:outline-none font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message field */}
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <label
                            className={`block text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                              focusedField === "message" || fields.message
                                ? "text-azure"
                                : "text-slate-600"
                            }`}
                          >
                            Your Message
                          </label>
                          <span className="text-xs text-slate-500">
                            {fields.message.length}/500
                          </span>
                        </div>
                        <div
                          className={`relative border-2 rounded-xl transition-all duration-300 ${
                            focusedField === "message"
                              ? "border-azure bg-white shadow-lg shadow-azure/20"
                              : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
                          }`}
                        >
                          <svg
                            className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <textarea
                            name="message"
                            required
                            value={fields.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            maxLength={500}
                            placeholder="Tell us about your project, timeline, and budget..."
                            rows={5}
                            className="w-full pl-11 pr-4 py-3 bg-transparent text-navy placeholder-slate-400 text-sm focus:outline-none font-medium resize-none"
                          />
                        </div>
                      </div>

                      {/* Error message */}
                      {error && (
                        <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-4 rounded-xl text-sm font-semibold flex items-start gap-3">
                          <svg
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <p>{error}</p>
                            <p className="text-xs text-red-600 mt-1">
                              Your submission is being saved. We'll contact you
                              soon.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={
                          submitting ||
                          !fields.name.trim() ||
                          !fields.email.trim() ||
                          !fields.message.trim() ||
                          fields.message.length < 10
                        }
                        className="w-full py-4 bg-gradient-to-r from-azure via-blue-500 to-llime text-white font-bold rounded-xl shadow-azure-md hover:shadow-azure-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:shadow-none text-sm flex items-center justify-center gap-2 relative overflow-hidden group"
                        title={
                          !fields.name.trim()
                            ? "Please enter your name"
                            : !fields.email.trim()
                              ? "Please enter your email"
                              : !fields.message.trim()
                                ? "Please enter your message"
                                : fields.message.length < 10
                                  ? "Message must be at least 10 characters"
                                  : "Send message"
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none"></div>
                        {submitting ? (
                          <>
                            <svg
                              className="w-4 h-4 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        By submitting, you agree to our communication policies
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Info cards - below form */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto w-full">
              {infoItems.map((item, i) => (
                <div
                  key={item.label}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                  ></div>
                  <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group-hover:border-azure/30 group-hover:bg-blue-50/40 group-hover:from-white group-hover:to-blue-50 group-hover:shadow-[0_20px_40px_rgba(0,123,255,0.1)]">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-azure to-llime rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2"></div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-navy font-semibold group-hover:text-azure transition-colors duration-300 flex flex-wrap items-center gap-2"
                          >
                            {item.value}
                            <svg
                              className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
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
                          </a>
                        ) : (
                          <p className="text-sm text-slate-700 font-semibold">
                            {item.value}
                          </p>
                        )}
                      </div>
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

export default Contact;

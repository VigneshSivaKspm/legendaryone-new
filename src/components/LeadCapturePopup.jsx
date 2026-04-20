import React, { useState, useEffect, useCallback } from "react";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "E-commerce Solutions",
  "Branding",
  "Cloud & DevOps",
  "Technical Solutions",
  "College Projects",
  "Other",
];

const SPOTS_LEFT = 5;

const LeadCapturePopup = () => {
  const [visible, setVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const show = useCallback(() => {
    if (triggered) return;
    if (sessionStorage.getItem("lead_popup_shown")) return;
    setTriggered(true);
    sessionStorage.setItem("lead_popup_shown", "1");
    setVisible(true);
  }, [triggered]);

  useEffect(() => {
    // Exit-intent: mouse leaves viewport from top
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // Timed trigger: 40 seconds
    const timer = setTimeout(show, 40000);

    // Scroll trigger: 65% of page scrolled
    const handleScroll = () => {
      const scrollPct =
        (window.scrollY /
          Math.max(
            1,
            document.body.scrollHeight - window.innerHeight
          )) *
        100;
      if (scrollPct > 65) show();
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  const handleChange = (e) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!fields.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const messageBody = [
        "[POPUP LEAD — Free Consultation Request]",
        `Phone: ${fields.phone.trim() || "Not provided"}`,
        `Service Interest: ${fields.service || "Not specified"}`,
        "",
        `Notes: ${fields.message.trim() || "Requested free consultation via popup"}`,
      ].join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: messageBody,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.75)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Free consultation offer"
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        style={{ animation: "popupSlideIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        {/* Top gradient accent */}
        <div className="h-1.5 bg-gradient-to-r from-azure via-llime to-chart" />

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
          aria-label="Close popup"
        >
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-7">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-navy mb-2">You're All Set!</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                Our team will review your request and get back to you within{" "}
                <strong className="text-navy">24 hours</strong> with a custom plan.
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
                <span>✓ No spam</span>
                <span>✓ No obligations</span>
                <span>✓ Free forever</span>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="mt-6 px-8 py-2.5 bg-navy text-white rounded-full font-bold text-sm hover:bg-azure transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Urgency badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Only {SPOTS_LEFT} consultation spots left this month
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-2">
                Get Your{" "}
                <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
                  Free
                </span>{" "}
                Project Consultation
              </h2>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                Tell us what you're building. We'll respond within{" "}
                <strong className="text-navy">24 hours</strong> with a tailored
                strategy — <em>zero obligations, zero strings attached.</em>
              </p>

              {/* Trust bar */}
              <div className="flex items-center gap-4 mb-5 py-3 px-4 bg-slate-50 rounded-xl text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <span className="font-black text-navy">50+</span> Projects
                </span>
                <span className="w-px h-4 bg-slate-200" />
                <span className="flex items-center gap-1">
                  <span className="font-black text-navy">100%</span> Satisfaction
                </span>
                <span className="w-px h-4 bg-slate-200" />
                <span className="flex items-center gap-1">
                  <span className="font-black text-navy">24h</span> Response
                </span>
                <span className="w-px h-4 bg-slate-200" />
                <span className="flex items-center gap-1">
                  <span className="font-black text-navy">5+</span> Years Exp.
                </span>
              </div>

              {error && (
                <p className="mb-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                  {error}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={fields.name}
                    onChange={handleChange}
                    maxLength={100}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/40 focus:border-azure transition-all"
                    required
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={fields.email}
                    onChange={handleChange}
                    maxLength={200}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/40 focus:border-azure transition-all"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={fields.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/40 focus:border-azure transition-all"
                    autoComplete="tel"
                  />
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-azure/40 focus:border-azure transition-all bg-white"
                  >
                    <option value="">Service needed...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Briefly describe your project (optional)"
                  value={fields.message}
                  onChange={handleChange}
                  rows={2}
                  maxLength={500}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/40 focus:border-azure transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-gradient-to-r from-azure to-blue-700 text-white font-black rounded-xl text-sm tracking-wide hover:shadow-lg hover:shadow-azure/25 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Get My Free Consultation →"
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-slate-400 mt-3">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes popupSlideIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LeadCapturePopup;

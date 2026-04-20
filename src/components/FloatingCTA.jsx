import React, { useState } from "react";

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

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

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
      setError("Enter a valid email.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          service: fields.service,
          message: `Quick quote request via website sidebar.${fields.service ? ` Interested in: ${fields.service}.` : ""} Please get in touch to discuss details.`,
          source: "floating",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Vertical tab button on left side - hidden on mobile */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-[1100] items-center">
        <button
          onClick={() => setOpen((o) => !o)}
          className={`flex flex-col items-center gap-1.5 px-2 py-4 text-white font-black text-[10px] tracking-widest uppercase rounded-r-xl shadow-xl transition-all duration-200 ${
            open
              ? "bg-slate-700 hover:bg-slate-600"
              : "bg-gradient-to-b from-azure to-blue-700 hover:from-blue-500 hover:to-blue-800 hover:pl-3"
          }`}
          aria-label="Get a free quote"
        >
          {open ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          )}
          {/* Vertical text */}
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
            className="leading-none"
          >
            {open ? "Close" : "Free Quote"}
          </span>
        </button>

        {/* Slide-out panel */}
        <div
          className={`bg-white rounded-r-2xl shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden ${
            open
              ? "w-72 max-h-screen opacity-100"
              : "w-0 max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-72 p-5">
            {/* Header */}
            <div className="h-1 bg-gradient-to-r from-azure to-llime rounded-full mb-4" />

            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-500"
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
                <h3 className="text-base font-black text-navy mb-1">
                  Request Received!
                </h3>
                <p className="text-xs text-slate-500">
                  We'll contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setOpen(false);
                    setSubmitted(false);
                    setFields({ name: "", email: "", phone: "", service: "" });
                  }}
                  className="mt-4 px-4 py-1.5 bg-navy text-white rounded-full text-xs font-bold hover:bg-azure transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-base font-black text-navy mb-0.5">
                  Get a Free Quote
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Quick 2-min form. We'll get back to you today.
                </p>

                {error && (
                  <p className="mb-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-2.5"
                  noValidate
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={fields.name}
                    onChange={handleChange}
                    maxLength={100}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/30 focus:border-azure transition-all"
                    autoComplete="name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={fields.email}
                    onChange={handleChange}
                    maxLength={200}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/30 focus:border-azure transition-all"
                    autoComplete="email"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={fields.phone}
                    onChange={handleChange}
                    maxLength={20}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-azure/30 focus:border-azure transition-all"
                    autoComplete="tel"
                  />
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-azure/30 focus:border-azure transition-all bg-white"
                  >
                    <option value="">Service needed...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-gradient-to-r from-azure to-blue-700 text-white font-black text-sm rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Request →"}
                  </button>
                </form>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  🔒 No spam. 100% free.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;

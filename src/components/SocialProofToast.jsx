import React, { useState, useEffect } from "react";

const ACTIVITIES = [
  {
    name: "Arjun M.",
    location: "Hyderabad",
    action: "just booked a free discovery call",
  },
  {
    name: "Priya S.",
    location: "Bangalore",
    action: "requested a website development quote",
  },
  {
    name: "Rahul K.",
    location: "Delhi NCR",
    action: "launched their mobile app today",
  },
  {
    name: "Sneha P.",
    location: "Mumbai",
    action: "got their brand identity designed",
  },
  {
    name: "Vikram T.",
    location: "Chennai",
    action: "booked a free strategy session",
  },
  {
    name: "Deepa R.",
    location: "Pune",
    action: "started their e-commerce store",
  },
  {
    name: "Karthik N.",
    location: "Coimbatore",
    action: "requested a free consultation",
  },
  {
    name: "Anjali V.",
    location: "Ahmedabad",
    action: "is building their SaaS product",
  },
  {
    name: "Suresh B.",
    location: "Erode",
    action: "just booked a free discovery call",
  },
  {
    name: "Meera J.",
    location: "Kochi",
    action: "requested a UI/UX design package",
  },
];

const SocialProofToast = () => {
  const [phase, setPhase] = useState("hidden"); // hidden | in | visible | out
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let idx = 0;
    let showTimer, hideTimer, nextTimer;

    const cycle = () => {
      setCurrent(idx);
      setPhase("in");

      setTimeout(() => setPhase("visible"), 50);

      hideTimer = setTimeout(() => {
        setPhase("out");
        idx = (idx + 1) % ACTIVITIES.length;
        nextTimer = setTimeout(cycle, 1600);
      }, 5800);
    };

    showTimer = setTimeout(cycle, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [dismissed]);

  const a = ACTIVITIES[current];

  const isVisible = phase === "in" || phase === "visible";

  return (
    <div
      className={`fixed bottom-28 left-4 z-[1050] max-w-[272px] transition-all duration-500 ${
        isVisible && !dismissed
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-5 scale-95 pointer-events-none"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.34,1.36,0.64,1)" }}
      role="status"
      aria-live="polite"
    >
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.13)] border border-gray-100 p-3.5 flex items-center gap-3">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-azure to-llime flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-sm">
          {a.name.charAt(0)}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-navy leading-snug">
            {a.name}{" "}
            <span className="font-normal text-slate-400">· {a.location}</span>
          </p>
          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-1">
            {a.action}
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block flex-shrink-0" />
            <span className="text-[10px] text-slate-400 font-medium">
              Just now
            </span>
          </div>
        </div>

        {/* Dismiss */}
        <button
          onClick={() => {
            setPhase("out");
            setDismissed(true);
          }}
          className="text-slate-300 hover:text-slate-500 flex-shrink-0 transition-colors p-0.5 -mt-1 -mr-0.5"
          aria-label="Dismiss notification"
        >
          <svg
            className="w-3 h-3"
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
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;

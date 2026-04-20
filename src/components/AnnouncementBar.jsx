import React from "react";
import { Link } from "react-router-dom";

const AnnouncementBar = ({ onDismiss }) => (
  <div className="fixed top-0 left-0 right-0 z-[70] h-10 bg-gradient-to-r from-navy via-[#1a3a6e] to-navy flex items-center justify-center px-10 select-none">
    {/* Left pulse dot */}
    <span className="hidden sm:flex items-center gap-1.5 mr-3 flex-shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-llime animate-pulse" />
    </span>

    <div className="flex items-center gap-2 text-white text-xs font-medium flex-wrap justify-center">
      <span className="text-llime font-bold hidden sm:inline">🚀 Limited Offer:</span>
      <span>Free Discovery Call for New Projects —</span>
      <span className="font-bold text-white">Limited Spots Available This Month!</span>
      <Link
        to="/contact"
        onClick={onDismiss}
        className="inline-flex items-center gap-1 px-3 py-0.5 bg-llime text-navy font-black rounded-full text-[11px] hover:bg-chart transition-colors shrink-0 ml-1"
      >
        Book Now →
      </Link>
    </div>

    {/* Dismiss */}
    <button
      onClick={onDismiss}
      className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white flex items-center justify-center transition-colors"
      aria-label="Dismiss announcement"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default AnnouncementBar;

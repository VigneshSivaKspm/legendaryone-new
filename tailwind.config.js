/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azure: "#2A7FFF",
        "azure-dark": "#1a6fe0",
        lcyan: "#55E2FF",
        mint: "#84DCC6",
        llime: "#A5F04C",
        chart: "#D4FF00",
        navy: "#0F172A",
        "navy-800": "#1E293B",
        "navy-700": "#334155",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #2A7FFF 0%, #A5F04C 100%)",
        "grad-hero": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "dot-grid":
          "radial-gradient(rgba(42,127,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "28px 28px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 3s infinite linear",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        "azure-sm": "0 4px 14px rgba(42,127,255,0.18)",
        "azure-md": "0 8px 32px rgba(42,127,255,0.25)",
        "azure-lg": "0 16px 48px rgba(42,127,255,0.32)",
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)",
        "card-hover":
          "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.08)",
        lift: "0 20px 60px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

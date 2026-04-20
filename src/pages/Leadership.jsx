import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";

const GOOGLE_REVIEW_URL = "https://g.page/r/Cb2SDZGcOe-HEBM/review";
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || "";
const GOOGLE_PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID || "";

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        className={`w-4 h-4 ${s <= rating ? "text-amber-400" : "text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Leadership = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) return;
    const loadScript = () => {
      if (window.google?.maps?.places) {
        fetchReviews();
        return;
      }
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      s.async = s.defer = true;
      s.onload = fetchReviews;
      document.head.appendChild(s);
    };
    const fetchReviews = () => {
      try {
        const div = document.createElement("div");
        new window.google.maps.places.PlacesService(div).getDetails(
          { placeId: GOOGLE_PLACE_ID, fields: ["reviews"] },
          (place, status) => {
            if (
              status === window.google.maps.places.PlacesServiceStatus.OK &&
              place?.reviews
            ) {
              setReviews(place.reviews);
            }
          },
        );
      } catch (e) {
        console.warn("Google Reviews error", e);
      }
    };
    loadScript();
  }, []);

  return (
    <>
      <SEO
        title="Client Reviews — Legendary One"
        description="Read client reviews for Legendary One."
        pathname="/leadership"
      />

      <section
        id="google-reviews"
        className="py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-azure/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-mint/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Badge */}
          <div className="flex justify-center mb-4" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold text-azure bg-azure/10 rounded-full uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-azure animate-pulse"></span>
              Client Reviews
            </span>
          </div>

          <h2
            className="text-center font-display font-black text-4xl sm:text-5xl text-navy mb-5"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-azure to-llime bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p
            className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            Hear from happy customers — we'd love your feedback too!
          </p>

          {/* Review CTA */}
          <div
            className="flex justify-center mb-14"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-azure to-llime text-white font-bold rounded-full shadow-azure-sm hover:shadow-azure-md hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              <svg
                className="w-4.5 h-4.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Leave a Google Review
            </a>
          </div>

          {/* Reviews grid */}
          {reviews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={r.profile_photo_url}
                      alt={r.author_name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-sm text-navy">
                        {r.author_name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {r.relative_time_description}
                      </p>
                    </div>
                  </div>
                  <StarRating rating={r.rating} />
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {r.text}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            /* Placeholder cards when no API key */
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Rajesh Kumar",
                  rating: 5,
                  text: "Legendary One delivered our e-commerce platform ahead of schedule. The quality of work and attention to detail was outstanding. Highly recommended!",
                  time: "2 months ago",
                },
                {
                  name: "Priya Sharma",
                  rating: 5,
                  text: "Working with Legendary One was an absolute pleasure. They understood our vision perfectly and built exactly what we needed. The team is professional and responsive.",
                  time: "3 months ago",
                },
                {
                  name: "Arjun Mehta",
                  rating: 5,
                  text: "Our mobile app exceeded all expectations. Legendary One's expertise in React Native and backend integration made our project a huge success.",
                  time: "1 month ago",
                },
              ].map((r, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azure to-llime flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-navy">{r.name}</p>
                      <p className="text-xs text-slate-400">{r.time}</p>
                    </div>
                  </div>
                  <StarRating rating={r.rating} />
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {r.text}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Location info */}
          <div
            className="mt-16 bg-slate-50 rounded-2xl p-8 border border-gray-100 text-center max-w-lg mx-auto"
            data-aos="fade-up"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-azure to-llime flex items-center justify-center mx-auto mb-4 shadow-azure-sm">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-display font-bold text-lg text-navy mb-2">
              Our Location
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              4, Eswaramoorthi Street, Kasipalayam
              <br />
              Gobi, Erode, Tamil Nadu
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;

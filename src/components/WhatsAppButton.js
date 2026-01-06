import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phone = '917339596165'; // +91 733 959 6165
  const text = encodeURIComponent('Hello, I would like to enquire about your services.');
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path fill="#ffffff" d="M20.52 3.48A11.88 11.88 0 0012 .5C5.73.5.99 4.89.99 10.06c0 1.77.46 3.41 1.27 4.87L.5 23l8.4-2.21c1.39.38 2.85.59 4.3.59 6.27 0 11.01-4.39 11.01-9.56 0-2.55-1.09-4.93-3.7-6.83zM12 21.02c-1.32 0-2.62-.15-3.86-.45l-.28-.08-4.99 1.31 1.32-4.86-.09-.31A8.19 8.19 0 013 10.06c0-4.08 4.48-7.56 9-7.56 4.49 0 7.99 3.1 7.99 7.18 0 3.98-3.9 7.38-8 7.38z"/>
        <path fill="#ffffff" d="M17.57 14.13c-.29-.15-1.71-.84-1.98-.93-.27-.09-.47-.15-.67.15-.2.29-.76.93-.93 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.09-.2 0-.37-.04-.52-.04-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.02-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.21 3.05c.15.19 2.09 3.2 5.07 4.49 2.98 1.29 2.98.86 3.52.81.54-.04 1.72-.7 1.97-1.38.24-.69.24-1.28.17-1.38-.07-.09-.27-.15-.57-.3z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;

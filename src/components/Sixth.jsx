import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sixth = () => {
  AOS.init();

  const clientLogos = [
    '/logo1.jpg',
    '/logo2.jpg',
    '/logo3.jpg',
    '/logo4.jpg',
    '/logo5.jpg',
    '/logo6.jpg',
    '/logo7.jpg',
    '/logo8.jpg',
    '/logo9.jpg',
    '/logo10.png',
    '/logo12.jpeg',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Title */}
      <h1 data-aos="fade-up" className="text-5xl text-[#02294A] font-bold mb-8">Our Clients</h1>

      {/* Client Logos */}
      <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src={logo} alt={`Client Logo ${index + 1}`} className="max-h-24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sixth;

import React from 'react';
import Typical from 'react-typical';

const First = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Fixed Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent text-white p-4">
        <ul className="flex justify-around">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="/contactus" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-7xl p-4font-bold">Genix Constructions</h1>
        <h1 className="text-3xl p-4 font-bold">You dream it, We build it!</h1>
        <Typical
          steps={[
            'Design Consultancy', 2000,
            'Industrial', 2000,
            'Residential', 2000,
            'Office fitouts', 2000,
            'Hospitality', 2000,
            'MEP, Joinery', 2000,
            'Institutional Buildings', 2000,
          ]}
          loop={Infinity}
          wrapper="p"
          className="mt-4 text-2xl"
        />
      </div>
    </div>
  );
};

export default First;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fifth = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    { src: "ethics-cycle-r.png", text: "Ethical Business" },
    { src: "/manage.png", text: "Risk Management" },
    { src: "/decision.png", text: "Decision Making" },
    { src: "/therapy.png", text: "Health & Safety" },
    { src: "/rights.png", text: "Respect Human Rights" },
    { src: "/world.png", text: "Good Environment" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {/* Title */}
      <h1 data-aos="fade-up" className="text-5xl text-[#02294A] font-bold mb-8">
        Our Principles
      </h1>

      {/* Photo Containers */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-40 mx-auto rounded-lg overflow-hidden group"
          >
            <img
              src={image.src}
              alt={image.text}
              className="h-auto w-[16rem]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold text-center">
                {image.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fifth;

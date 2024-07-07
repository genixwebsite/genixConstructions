import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/fifth.css"; // Import CSS file for component-specific styles

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
    <div className=" bg-[#02294A] w-full py-14">
      <h1 data-aos="fade-up" className="text-5xl text-white font-bold mb-8 text-center">
        Our Principles
      </h1>
      <div className="card-container">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className="card-info">
              <div
                className="card-avatar"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="card-social">
                <div className="card-social__item">
                  <p>{image.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fifth;

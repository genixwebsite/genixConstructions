import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreValues = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const values = [
    { src: "/work-safety.png", text: "Work Safety" },
    { src: "/service.png", text: "Service Excellence" },
    { src: "/quality.png", text: "Quality Assurance" },
    { src: "/integrity.png", text: "Integrity"},
  ];

  return (
    <div className="flex flex-col bg-[#02294A] py-12 md:py-16 h-auto font-sans justify-center">
      {/* Core Values Heading */}
      <h1
        className="text-3xl md:text-5xl text-white font-semibold mb-10 md:mb-16 text-center"
        data-aos="zoom-in"
      >
        Our Core Values
      </h1>

      {/* Core Values Grid */}
      <div
        className="flex flex-col md:flex-row justify-center items-center md:justify-around flex-wrap px-4 md:px-10 space-y-8 md:space-y-0"
        data-aos="flip-down"
      >
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center group w-auto md:px-4"
          >
            <img
              src={value.src}
              alt={value.text}
              className={` h-[6rem]  md:h-[9rem] transform group-hover:scale-110 transition-transform duration-300`}
            />
            <span className="mt-4 text-lg md:text-xl font-semibold text-center font-sans text-white uppercase">
              {value.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreValues = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const values = [
    { src: "/work-safety.png", text: "Work Safety", height: "h-[10rem]" },
    { src: "/service.png", text: "Service Excellence", height: "h-[10rem]" },
    { src: "/quality.png", text: "Quality Assurance", height: "h-[10rem]" },
    { src: "/integrity.png", text: "Integrity", height: "h-[10rem]" },
  ];

  return (
    <div className="flex flex-col bg-[#02294A] py-16 h-auto font-sans justify-center">
      <div className="">
        {/* Core Values Heading */}
        <h1
          className="text-5xl text-white font-semibold mb-16 text-center"
          data-aos="zoom-in"
        >
          Our Core Values
        </h1>
        <div
          className="flex flex-row justify-around items-center px-10"
          data-aos="flip-down"
        >
          {values.map((value, index) => (
            <div key={index} className="flex flex-col group">
              <img
                src={value.src}
                alt={value.text}
                className={`${value.height} transform group-hover:scale-110 transition-transform duration-300`}
              />
              <span className="mt-4 text-xl font-semibold text-center font-sans text-white uppercase">
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

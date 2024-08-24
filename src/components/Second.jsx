import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <div className="bg-white h-1/2 md:h-screen md:w-2/5 flex flex-col justify-center items-center p-8 md:p-16">
          <div
            data-aos="flip-up"
            className="text-3xl md:text-6xl italic font-bold text-[#CFA35D] text-center mb-4"
          >
            Our Mission
          </div>
          <div
            data-aos="fade-up"
            className="text-base md:text-xl max-w-lg md:max-w-4xl text-justify text-[#02294A]"
          >
            Our Mission is to understand our client needs to deliver
            high-quality buildings on time and on budget. We will be recognised
            for being innovative and collaborative, developing our team, having
            longterm relationships with our clients.
          </div>
        </div>
        <div className="bg-[#CFA35D] h-1/2 md:h-screen md:w-3/5 flex flex-col justify-center items-center p-8 md:p-14">
          <div
            data-aos="flip-up"
            className="text-3xl md:text-6xl italic font-bold text-[#02294A] text-center mb-4"
          >
            Our Vision
          </div>
          <div
            data-aos="fade-up"
            className="text-base md:text-lg max-w-lg md:max-w-4xl text-justify text-[#02294A]"
          >
            Expertise in estimating, construction, and project management
            ensures quality and fair pricing. Selective use of responsible
            subcontractors and top-tier employees guarantees effective project
            execution. Commitment to open, honest communication with all
            stakeholders fosters successful project outcomes. Focus on
            relationship building results in 100% referable customers and high
            satisfaction. Dedicated to your success—contact us to enhance your
            next project.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

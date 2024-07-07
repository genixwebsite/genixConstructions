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
            className="text-3xl md:text-6xl italic font-bold text-[#02294A] text-center mb-4"
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
        <div className="bg-[#E30B21] h-1/2 md:h-screen md:w-3/5 flex flex-col justify-center items-center p-8 md:p-14">
          <div
            data-aos="flip-up"
            className="text-3xl md:text-6xl italic font-bold text-white text-center mb-4"
          >
            Our Vision
          </div>
          <div
            data-aos="fade-up"
            className="text-base md:text-lg max-w-lg md:max-w-4xl text-justify text-white"
          >
            Our expertise in estimating, construction, project management and
            pre-construction services ensures that our customers receive a
            quality product at a fair price and in a reasonable time frame. This
            is accomplished through the selective use of responsible
            subcontractors, hiring and retaining first class employees, and
            working for clients that share a belief in open, honest, and direct
            communication. Regardless of whether you are an owner, architect,
            designer, engineer, tenant, broker, subcontractor, or supplier, you
            are a respected member of our team and will be treated as such. This
            commitment to team and to open project leadership yields not only
            successful construction projects, but more importantly, satisfied
            customers. The end result of this style of relationship building is
            100% referable customers. We’re committed to your success. Contact
            us today and let us know how we can help your next project succeed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

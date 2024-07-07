import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Third = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-[#02294A] flex flex-col justify-center items-center p-8 md:w-2/5 md:h-screen">
        <div
          data-aos="fade-right"
          className="text-3xl md:text-6xl font-bold text-white text-center"
        >
          WHAT WE DO
        </div>
      </div>
      <div className="bg-white flex flex-col justify-center p-4 md:p-8 md:w-3/5 md:h-screen">
        <div
          data-aos="fade-up"
          className="text-sm md:text-md text-justify mb-4"
        >
          With every project, GENIX implements a series of procedures that
          provides critical guidelines by which each component of the project
          may be carefully and precisely monitored. GENIX actively participates
          with our clients and their design team during each stage of the
          project to ensure a project that produces the best value within the
          budget.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            data-aos="fade-up"
            className='h-64 w-full bg-[url("/image1.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center transition-opacity duration-500">
              <div className="text-lg md:text-4xl font-semibold text-white text-center group-hover:hidden">
                PreConstruction
              </div>
              <div className="flex flex-col text-sm md:text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>Value Engineering</div>
                <div>Site Assessment</div>
                <div>Material</div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className='h-64 w-full bg-[url("/image2.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-500">
              <div className="text-lg md:text-4xl font-semibold text-white text-center group-hover:hidden">
                Construction
              </div>
              <div className="flex flex-col text-sm md:text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>Quality Control</div>
                <div>Project Management</div>
                <div>Timely Completion</div>
                <div>Cost reduction</div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className='h-64 w-full bg-[url("/image3.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-500">
              <div className="text-lg md:text-4xl font-semibold text-white text-center group-hover:hidden">
                Commission
              </div>
              <div className="flex flex-col text-sm md:text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>Punch list</div>
                <div>Correction of points</div>
                <div>As built documents</div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className='h-64 w-full bg-[url("/image4.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-500">
              <div className="text-lg md:text-4xl font-semibold text-white text-center group-hover:hidden">
                PostConstruction
              </div>
              <div className="flex flex-col text-sm md:text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>Rectification of issues</div>
                <div>Service during DLP</div>
                <div>Ongoing assistance for as long as needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;

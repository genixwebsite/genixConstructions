import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Fourth = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto min-h-screen">
      <div className="bg-white h-auto md:h-screen w-full md:w-2/5 flex justify-center items-center p-8 md:p-16">
        <div
          data-aos="fade-right"
          className="text-3xl md:text-6xl font-bold text-[#CFA35D] text-center"
        >
          Our Services
        </div>
      </div>
      <div className="bg-[#CFA35D] h-full w-full md:w-3/5 flex flex-wrap justify-center items-center p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className='h-52 md:h-64 w-full bg-[url("/image6.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="text-lg md:text-2xl font-semibold text-white mt-12 md:mt-20 text-center transition-opacity duration-500 delay-500 group-hover:opacity-0 group-hover:delay-0">
                Residential & Commercial buildings
              </div>
              <div className="text-sm md:text-md text-white font-semibold mt-2 md:mt-4 p-4 text-center opacity-0 group-hover:opacity-100 delay-300">
                Our firm has demonstrated its ability to work with our clients
                in all situations and conditions. It is our goal to ensure that
                all of our clients' requirements are met or exceeded.
              </div>
            </div>
          </div>
          <div className='h-52 md:h-64 w-full bg-[url("/image7.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
              <div className="text-lg md:text-2xl font-semibold text-white mt-12 md:mt-20 text-center transition-opacity duration-500 delay-500 group-hover:opacity-0 group-hover:delay-0">
                Industrial Projects
              </div>
              <div className="text-sm md:text-md text-white font-semibold mt-2 p-4 text-center opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:group-focus:delay-300">
                GENIX Construction puts our owners requirements first when
                assessing and proceeding. Whether scheduled during plant
                shutdown, or performed within operational facilities, our
                workforce will use the best expertise to get the job done.
              </div>
            </div>
          </div>
          <div className='h-52 md:h-64 w-full bg-[url("/image8.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="text-lg md:text-2xl font-semibold text-white mt-12 md:mt-20 text-center transition-opacity duration-500 delay-500 group-hover:opacity-0 group-hover:delay-0">
                Interior Fit-Outs of Offices & Residences
              </div>
              <div className="text-sm md:text-md text-white font-semibold mt-2 text-center opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:group-focus:delay-300">
                GENIX executes the Interior Fit-Out Works of house and workplace
                with the greatest solutions. The Interior Fit-Out services
                include floor installation, ceilings, couplings, and furnishings
                in building preparation
              </div>
            </div>
          </div>
          <div className='h-52 md:h-64 w-full bg-[url("/image9.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="text-lg md:text-2xl font-semibold text-white mt-12 md:mt-20 text-center transition-opacity duration-500 delay-500 group-hover:opacity-0 group-hover:delay-0">
                Floor Epoxy & Waterproofing
              </div>
              <div className="text-sm md:text-md text-white font-semibold mt-2 md:mt-4 p-4 text-center opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:group-focus:delay-300">
                Genix provide complete solution of Epoxy flooring works for
                Industrial, Commercial, Antibacterial epoxy of Pidilite,
                FlowCrete, DenCoat and Sika.
              </div>
            </div>
          </div>
          <div className='h-52 md:h-64 w-full bg-[url("/image10.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <div className="text-lg md:text-2xl font-semibold text-white mt-12 md:mt-20 text-center transition-opacity duration-500 delay-500 group-hover:opacity-0 group-hover:delay-0">
                Luxury Tensile Camps
              </div>
              <div className="text-sm md:text-md text-white font-semibold mt-2 p-4 text-center opacity-0 group-hover:opacity-100 group-hover:delay-300 group-hover:group-focus:delay-300">
                GENIX provide the Design and build solution of luxury tented
                camps. Rakesh has successfully completed design and installation
                of two tensile tented camps in Rajasthan, India from scratch to
                the final handover to the operations team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

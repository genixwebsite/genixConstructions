import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fourth = () => {
  AOS.init();

  return (
    <div className="flex h-screen">
      <div className="flex flex-row h-screen w-screen">
        <div className="bg-white h-screen w-2/5 justify-items-center content-center">
          <div data-aos="fade-right" className="text-6xl font-bold text-[#E30B21]  p-16 text-center">
            Our Services
          </div>
        </div>
        <div className="bg-[#E30B21] h-screen w-3/5">
          <div data-aos="fade-up" className="grid grid-cols-2 gap-4 justify-center items-center p-8">
            <div className='h-52 w-5/5 bg-[url("/image6.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold text-white mt-20 text-center group-hover:hidden">
                  Residential & Commercial buildings
                </div>
                <div className="text-md text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100">
                  Our firm has demonstrated its ability to work with our
                  clients in all situations and conditions. It is our goal to
                  ensure that all of our clients' requirements are met or
                  exceeded.
                </div>
              </div>
            </div>
            <div className='h-52 w-5/5 bg-[url("/image7.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
                <div className="text-2xl font-semibold text-white mt-20 text-center group-hover:hidden">
                  Industrial Projects
                </div>
                <div className="text-md text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100">
                  GENIX Construction puts our owners requirements first when
                  assessing and proceeding. Whether scheduled during plant
                  shutdown, or performed within operational facilities, our
                  workforce will use the best expertise to get the job done.
                </div>
              </div>
            </div>
            <div className='h-52 w-5/5 bg-[url("/image8.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold text-white mt-20 text-center group-hover:hidden">
                  Interior Fit-Outs of Offices & Residences
                </div>
                <div className="text-md text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100">
                  GENIX executes the Interior Fit-Out Works of house and
                  workplace with the greatest solutions. The Interior Fit-Out
                  services include floor installation, ceilings, couplings,
                  and furnishings in building preparation
                </div>
              </div>
            </div>
            <div className='h-52 w-5/5 bg-[url("/image9.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold text-white mt-20 text-center group-hover:hidden">
                  Floor Epoxy & Waterproofing
                </div>
                <div className="flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100">
                  Genix provide complete solution of Epoxy flooring works for
                  Industrial, Commercial, Antibacterial epoxy of Pidilite,
                  FlowCrete, DenCoat and Sika.
                </div>
              </div>
            </div>
            <div className='h-52 w-5/5 bg-[url("/image10.jpg")] bg-cover bg-center relative group rounded-xl overflow-hidden'>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold text-white mt-20 text-center group-hover:hidden">
                  Luxury Tensile Camps
                </div>
                <div className="flex flex-col text-xl text-white font-semibold mt-4 text-center opacity-0 group-hover:opacity-100">
                  GENIX provide the Design and build solution of luxury tented
                  camps. Rakesh has successfully completed design and
                  installation of two tensile tented camps in Rajasthan, India
                  from scratch to the final handover to the operations team.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

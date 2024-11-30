import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye , FaEye} from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

const Second = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Responsive layout with equal-height cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Our Mission Section */}
          <div className="bg-[#02294A] p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <GiBullseye className="w-12 h-12 rounded-full mb-4 object-contain text-[#CFA35D] " />
              <div
                data-aos="flip-up"
                className="text-3xl md:text-4xl italic font-extrabold text-[#CFA35D] text-center mb-4"
              >
                Our Mission
              </div>
              <div
                data-aos="fade-up"
                className="text-base md:text-lg max-w-lg text-justify text-[#CFA35D] font-semibold"
              >
                Our Mission is to understand our client needs to deliver
                high-quality buildings on time and on budget. We will be
                recognised for being innovative and collaborative, developing
                our team, having longterm relationships with our clients.
              </div>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="bg-[#CFA35D] p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <FaEye className="w-12 h-12 rounded-full mb-4 text-[#02294A] " />
              <div
                data-aos="flip-up"
                className="text-3xl md:text-4xl italic font-extrabold text-[#02294A] text-center mb-4"
              >
                Our Vision
              </div>
              <div
                data-aos="fade-up"
                className="text-base md:text-lg max-w-lg text-justify text-[#02294A] font-semibold "
              >
                Expertise in estimating, construction, and project management
                ensures quality and fair pricing. Selective use of responsible
                subcontractors and top-tier employees guarantees effective
                project execution. Commitment to open, honest communication with
                all stakeholders fosters successful project outcomes. Focus on
                relationship building results in 100% referable customers and
                high satisfaction. Dedicated to your success—contact us to
                enhance your next project.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

import { useState, useEffect, useRef } from "react";
import BottomNavBar from "../components/BottomNavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import CoreValues from "../components/CoreValues";

const people = [
  {
    id: 1,
    name: "Rakesh Singh",
    designation: "Managing Director",
    completeInfo: "MD & Founder - B.E (Civil)",
    image: "/person1.jpg",
    info: "Rakesh has worked over 22 years on Industrial, Hotel, Commercial & Residential Projects. His experience includes working on many large projects such as OEM Plants of Daimler & Claas India, 5 Star Hotels - Kabul Serena, Luxury Camps of SUJAN Sher Bagh & JAWAI Leopard camp, High-End Residential Projects — SUPERNOVA Noida, IVY Gurgaon. As the Managing Director, he believes that having an approachable attitude aids in the success of our employees as well as our projects.",
  },
  {
    id: 2,
    name: "Arvind Chaudhary",
    designation: "Co-Founder & Director",
    completeInfo: "Co-Founder & Director - B-Tech & MBA (Finance & Marketing)",
    image: "/person2.jpg",
    info: "Arvind comes with rich experience of 18 years in Industrial Projects and different flooring solutions. He has led a flooring solutions team of Flowcrete and Cipy, and executed industrial projects for companies like Flipkart, Hair, Ahlcon, Amazon retrofitting of floors, etc. As the Co-founder, he believes that 'Quality has No explanation'.",
  },
  {
    id: 3,
    name: "Atul Bhatt",
    designation: "GM Operations",
    completeInfo: "GM Operations - AMICE (Civil)",
    image: "/person3.jpg",
    info: "Atul comes with over 20 years of experience in Industrial Projects, Interior & Office buildings, and Metro Projects. He has worked on many reputed projects like DMRC Airport line, Mahindra Plant Indore, Jubilant Roorkee, Tokia Rika Minda Bangalore, Mitsubishi Chennai, Portia India Pune, Mizuho Bank Interior Mumbai.",
  },
];

const About = () => {
  AOS.init();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const popupRef = useRef(null);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleClosePopup = () => {
    setSelectedPerson(null);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-col md:flex-row pt-28 md:pt-24 ">
        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center p-8 lg:ml-12 mx-auto">
          <div className="  mx-auto">
            <h1
              data-aos="zoom-in"
              className="text-4xl md:text-5xl text-[#02294A] font-bold mb-4"
            >
              About Us
            </h1>
            <p data-aos="zoom-in" className="text-base md:text-lg text-justify">
              GENIX CONSTRUCTIONS is a construction and interior fit-out company
              with a team of skilled professionals who have decades of
              experience in executing High-End Residential Projects, Luxury
              Tented Resorts/Boutique Hotels, Office Fit-Out Work, and
              Industrial Projects. We offer a wide range of services including
              Construction of Industrial & Residential Buildings, Project
              Management, Interior Design, Renovation, and Retrofitting of Old
              Structures. GENIX typically has a team of skilled professionals,
              such as Civil Experience Engineers, Architects, MEP and HVAC
              Consultants, who work together to deliver high-quality projects
              that meet the specific needs and preferences of our clients. We
              use a combination of creativity, technical expertise, and project
              management skills to ensure that each project is completed on
              time, within budget, and to the satisfaction of the client.
              Overall, GENIX plays a crucial role in creating beautiful,
              functional, and sustainable structures that meet the needs of
              their clients. We are skilled at managing complex projects,
              working within tight timelines and budgets, and ensuring that each
              project is completed to the highest standards of quality and
              safety.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div
          data-aos="zoom-in"
          className="flex-1 flex items-center justify-center p-6 md:p-8"
        >
          <img
            src="/logo-color.png"
            alt="About Us"
            className="w-60 max-w-xs md:w-80 h-auto object-cover overflow-hidden"
          />
        </div>
      </div>

      {/* Core Values */}
      <CoreValues />

      {/* Leadership Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-12 mb-12 px-4">
        <div className="flex items-center justify-center flex-1">
          <div className="max-w-screen-lg mt-16">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl text-[#02294A] font-bold mb-8 text-center"
            >
              Leadership
            </h2>

            {/* Loop through people */}
            {people.map((person, index) => (
              <div
                key={person.id}
                className={`flex flex-col md:flex-row mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 flex items-center justify-center p-4">
                  <img
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    src={person.image}
                    alt={person.name}
                    className="w-full max-w-xs md:w-64 h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 flex items-center justify-center p-4">
                  <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                    <h3 className="text-2xl font-bold mb-2">
                      {person.name.toUpperCase()}
                    </h3>
                    <p className="text-lg mb-2">{person.completeInfo}</p>
                    <p className="text-base md:text-lg text-justify">
                      {person.info}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

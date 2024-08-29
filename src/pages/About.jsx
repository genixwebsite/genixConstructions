import { useState, useEffect, useRef } from "react";
import BottomNavBar from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import CoreValues from "../components/CoreValues";

const people = [
  {
    id: 1,
    name: "Rakesh Singh",
    designation: "Managing Director",
    completeInfo: "Managing Director - B.E (Civil)",
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
    <div>
      <div className="flex flex-col md:flex-row min-h-screen pt-24">
        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center p-8 ml-12">
          <div>
            <h1
              data-aos="zoom-in"
              className="text-5xl text-[#02294A] font-bold mb-4"
            >
              About Us
            </h1>
            <p data-aos="zoom-in" className="text-lg text-justify">
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
          className="flex-1 flex items-center justify-center p-8"
        >
          <img
            src="/logo-color.png"
            alt="About Us"
            className="w-80 h-80 object-cover overflow-hidden"
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
              className="text-5xl text-[#02294A] font-bold mb-8 text-center"
            >
              Leadership
            </h2>

            {/* Main Person Section */}
            <div className="flex flex-col items-center justify-center mt-8 mb-8 p-4 max-w-screen-lg">
              <div
                data-aos="zoom-in"
                className="flex items-center justify-center mb-8"
              >
                <img
                  src="/main-person.jpg" // Replace with the actual image path
                  alt="Main Person"
                  className="w-80 h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <h2
                data-aos="fade-up"
                className="text-4xl text-[#02294A] mb-4 font-bold text-center"
              >
                *mother*
              </h2>
              <p data-aos="fade-up" className="text-lg text-justify max-w-2xl">
                [Insert paragraph about the main person here. Provide a brief
                overview of their role, experience, and contributions to the
                company.]
              </p>
            </div>

            {/* Other Persons */}
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center gap-20"
            >
              {people.map((person) => (
                <div
                  key={person.id}
                  className="flex flex-col items-center p-4 cursor-pointer"
                  onClick={() => handlePersonClick(person)}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-64 h-64 object-cover rounded-2xl shadow-xl mb-2"
                  />
                  <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                  <p className="text-lg">{person.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Card */}
      {selectedPerson && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl w-full md:flex relative"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="md:w-1/3">
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="w-full h-full object-cover rounded-2xl shadow-xl
                "
              />
            </div>
            <div className="md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">{selectedPerson.name}</h2>
              <p className="text-xl mb-4">{selectedPerson.completeInfo}</p>
              <p className="text-lg text-justify">{selectedPerson.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

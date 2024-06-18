import React from 'react';
import BottomNavBar from '../components/BottomNavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  AOS.init();

  return (
    <div>
      <div className="flex flex-col md:flex-row min-h-screen pt-24">
        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center p-8 ml-12">
          <div>
            <h1 data-aos="zoom-in" className="text-5xl text-[#02294A] font-bold mb-4">About Us</h1>
            <p data-aos="zoom-in" className="text-lg text-justify">
              GENIX CONSTRUCTIONS is a construction and interior fit-out
              company. which has a team of skilled professionals, who has decades
              of experience in execution of High-End Residential Projects, Luxury
              Tented Resorts/ Boutique Hotels, Office Fit-Out Work & Industrial
              Projects. We offer a wide range of services of Construction of
              Industrial & Residential Buildings, Project Management, Interior
              Design, Renovation and Retrofitting of Old Structures.
              GENIX typically has a team of skilled professionals, such as Civil
              Experience Engineers, Architect, MEP and HVAC Consultant. who work
              together to deliver high-quality projects that meet the specific needs
              and preferences of our clients. We use a combination of creativity,
              technical expertise, and project management skills to ensure that each
              project is completed on time, within budget, and to the satisfaction of
              the client.
              Overall, GENIX plays a crucial role in creating beautiful, functional, and
              sustainable structures that meet the needs of their clients. We are
              skilled at managing complex projects, working within tight timelines
              and budgets, and ensuring that each project is completed to the
              highest standards of quality and safety.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div data-aos="zoom-in" className="flex-1 flex items-center justify-center p-8">
          <img src="/logo-color.png" alt="About Us" className="w-80 h-80 object-cover overflow-hidden" />
        </div>
      </div>
      {/* Leadership Section */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-12 mb-12 px-4">
        <div className="flex items-center justify-center flex-1">
          <div className="max-w-screen-lg mt-16">
            {/* Your content inside max-w-screen-lg */}
            <h2 data-aos="fade-up" className="text-5xl text-[#02294A] font-bold mb-8 text-center">Leadership</h2>

            {/* Person 1 */}
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/2 md:order-1 flex items-center justify-center p-4">
                <img data-aos="fade-right" src="/person1.jpg" alt="Person 1" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:order-2 flex items-center justify-center p-4">
                <div data-aos="fade-left">
                  <h3 className="text-2xl font-bold mb-2">RAKESH SINGH</h3>
                  <p className="text-lg mb-2">Managing Director - B.E (Civil)</p>
                  <p className="text-lg text-justify">
                    Rakesh has worked over 22 years on Industrial, Hotel,
                    Commercial & Residential Projects.
                    Rakesh experience has led him to work on many large
                    project such as OEM Plants of Daimler & Claas India, 5
                    Star Hotels - Kabul Serena, Luxury Camps
                    of SUJAN Sher Bagh & JAWAI Leopard camp, Heigh-End
                    Residential Projects — SUPERNOVA Noida, IVY Gurgaon.
                    "As the Managing Director I believe that having
                    an approachable attitude aids in the success
                    of our employees as well our projects"
                  </p>
                </div>
              </div>
            </div>

            {/* Person 2 */}
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/2 md:order-2 flex items-center justify-center p-4">
                <img data-aos="fade-left" src="/person2.jpg" alt="Person 2" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:order-1 flex items-center justify-center p-4">
                <div data-aos="fade-right">
                  <h3 className="text-2xl font-bold mb-2">ARVIND CHAUDHARY</h3>
                  <p className="text-lg mb-2">Co -Founder & Director - B-Tech & MBA(Finance & Marketing)</p>
                  <p className="text-lg text-justify">
                    Arvind comes with rich experience of 18 years on
                    Industrial Projects and different flooring solutions.
                    Arvind has led a flooring solutions team of Flowcrete ,
                    and Cipy. Executed industrial Projects of companies like,
                    Flipkart, Hair, Ahlcon, Amazon retrofitting of floor etc.
                    "As the Co-founder I believe that Quality has
                    No explanation"
                  </p>
                </div>
              </div>
            </div>

            {/* Person 3 */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:order-1 flex items-center justify-center p-4">
                <img data-aos="fade-right" src="/person3.jpg" alt="Person 3" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:order-2 flex items-center justify-center p-4">
                <div data-aos="fade-left">
                  <h3 className="text-2xl font-bold mb-2">ATUL BHATT</h3>
                  <p className="text-lg mb-2">GM Operations - AMICE (Civil)</p>
                  <p className="text-lg text-justify">
                    Atul comes come with over 20 years on Industrial
                    Projects, Interior & Office buildings, Metro Project.
                    Atul has worked on many reputed Projects like. DMRC
                    Airport line, Mahindra Plant Indore, Jubilant Roorkee,
                    Tokia Rika Minda Bangalore, Mitsubishi Chennai, Portia
                    India Pune, Mizuho Bank Interior Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default About;

// src/pages/Projects.jsx
import { Link } from "react-router-dom";
import "../styles/projects.css"
import roseate from "../assets/projects/roseate/1.jpg"
import taj from "../assets/projects/taj/1.jpg";
import prateek from "../assets/projects/prateek/1.jpg";
import autolek from "../assets/projects/autolek/2.jpg";

const CompletedProjects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="project-card">
        <Link to="/projects/roseate" className="project-link">
          <img
            src={roseate}
            alt="Completed Project 1"
            className="project-image"
            loading="lazy"
          />
          <div className="project-name">Roseate House, Aerocity, Delhi</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/projects/taj" className="project-link">
          <img
            src={taj}
            alt="Completed Project 2"
            className="project-image"
            loading="lazy"
          />
          <div className="project-name">Taj Ambassodor, Delhi</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/projects/prateek-edifice" className="project-link">
          <img
            src={prateek}
            alt="Completed Project 3"
            className="project-image"
            loading="lazy"
          />
          <div className="project-name">Prateek Edifice, Noida</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/projects/autolek" className="project-link">
          <img
            src={autolek}
            alt="Completed Project 4"
            className="project-image"
            loading="lazy"
          />
          <div className="project-name">Auto-Lek Electric</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project5" className="project-link">
          <img
            src="dummyProject.jpeg"
            alt="Completed Project 5"
            className="project-image"
          />
          <div className="project-name">groz-beckert</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project6" className="project-link">
          <img
            src="dummyProject.jpeg"
            alt="Completed Project 6"
            className="project-image"
          />
          <div className="project-name">postcard</div>
        </Link>
      </div>
    </div>
  );
};

// const OngoingProjects = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       <div className="project-card">
//         <Link to="/project4" className="project-link">
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//             alt="Ongoing Project 1"
//             className="project-image"
//           />
//           <div className="project-name">
//             Autoignition Factory, Pirthla, Haryana
//           </div>
//         </Link>
//       </div>
//       <div className="project-card">
//         <Link to="/project5" className="project-link">
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//             alt="Ongoing Project 2"
//             className="project-image"
//           />
//           <div className="project-name">MD of Gainwell Commosales, Noida</div>
//         </Link>
//       </div>
//       </div>
//   );
// };

const Projects = () => {
  return (
    <div className="pt-20 m-10">
      <h2 className="text-5xl py-4 text-center text-[#02294A] font-semibold">
        Our Projects
      </h2>
      <CompletedProjects />
      {/* <h2 className="text-3xl my-8">Ongoing Projects</h2>
      <OngoingProjects /> */}
    </div>
  );
};

export default Projects;

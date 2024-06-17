// src/pages/Projects.jsx
import { Link } from "react-router-dom";
import "../styles/projects.css"
const CompletedProjects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="project-card">
        <Link to="/project1" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 1"
            className="project-image"
          />
          <div className="project-name">SUPERNOVA</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project2" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 2"
            className="project-image"
          />
          <div className="project-name">TAJ Ambassodor, Delhi</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project3" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 3"
            className="project-image"
          />
          <div className="project-name">YAZAKI Plant Expansion, Sanand</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project4" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 4"
            className="project-image"
          />
          <div className="project-name">Prateek edifice, Noida</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project5" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 5"
            className="project-image"
          />
          <div className="project-name">
            AG&P Pratham Corporate office, Jodhpur
          </div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project6" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1604709177225-055f99402ea3"
            alt="Completed Project 6"
            className="project-image"
          />
          <div className="project-name">Roseate House, Aerocity, Delhi</div>
        </Link>
      </div>
    </div>
  );
};

const OngoingProjects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="project-card">
        <Link to="/project4" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Ongoing Project 1"
            className="project-image"
          />
          <div className="project-name">
            Autoignition Factory, Pirthla, Haryana
          </div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/project5" className="project-link">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Ongoing Project 2"
            className="project-image"
          />
          <div className="project-name">MD of Gainwell Commosales, Noida</div>
        </Link>
      </div>
      </div>
  );
};

const Projects = () => {
  return (
    <div className="p-8 pt-32">
      <h2 className="text-3xl mb-4">Completed Projects</h2>
      <CompletedProjects />
      <h2 className="text-3xl my-8">Ongoing Projects</h2>
      <OngoingProjects />
    </div>
  );
};

export default Projects;

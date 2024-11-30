import { Link } from "react-router-dom";

const ProjectsBar = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

return (
  <div className="projects-bar-container py-16 px-8 text-center bg-[#02294A]">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 select-none">
      Know More About Our Work
    </h1>
    <Link to="/projects" onClick={handleScrollToTop}>
      <button className="bg-[#CFA35D] select-none text-white text-md font-semibold py-3 px-8 shadow-md hover:bg-[#9C783E] transition-colors duration-300">
        To Our Projects &nbsp; &gt;
      </button>
    </Link>
  </div>
);
};

export default ProjectsBar;

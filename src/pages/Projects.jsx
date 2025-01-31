import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import roseate from "../assets/projects/roseate/1.jpg";
import taj from "../assets/projects/taj/1.jpg";
import prateek from "../assets/projects/prateek/1.jpg";
import autolek from "../assets/projects/autolek/1.jpeg";
import dlf from "../assets/projects/dlf/1.png";
import VideoLoader from "../components/VideoLoader";

const CompletedProjects = ({ onAllImagesLoaded }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 4; // Update this when more images are added

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const handleImageError = () => {
    // Increment the count even if the image fails to load
    setImagesLoaded((prev) => prev + 1);
  };

  // Check if images are already loaded (from cache) after component mounts
  useEffect(() => {
    const images = document.querySelectorAll(".project-image");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      }
    });

    setImagesLoaded(loadedCount);

    if (loadedCount === totalImages) {
      onAllImagesLoaded();
    }
  }, [totalImages, onAllImagesLoaded]);

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      onAllImagesLoaded();
    }
  }, [imagesLoaded, totalImages, onAllImagesLoaded]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="project-card">
        <Link to="/projects/roseate" className="project-link">
          <img
            src={roseate}
            alt="Completed Project 1"
            className="project-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
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
            onLoad={handleImageLoad}
            onError={handleImageError}
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
            onLoad={handleImageLoad}
            onError={handleImageError}
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
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
          <div className="project-name">Auto-Lek Electric (Supa)</div>
        </Link>
      </div>
      <div className="project-card">
        <Link to="/projects/dlf" className="project-link">
          <img
            src={dlf}
            alt="Completed Project 4"
            className="project-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
          <div className="project-name">D-15, Sector 39, Noida</div>
        </Link>
      </div>
      {/* <div className="project-card">
        <Link to="/project5" className="project-link">
          <img
            src="dummyProject.jpeg"
            alt="Completed Project 5"
            className="project-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
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
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <div className="project-name">postcard</div>
        </Link>
      </div> */}
    </div>
  );
};

const Projects = () => {
  const [loading, setLoading] = useState(true);

  const handleAllImagesLoaded = () => {
    setLoading(false);
  };

  // Add a timeout fallback in case image loading gets stuck
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pt-20 m-10">
      {loading && (
        <div className="flex items-center justify-center h-[80vh] w-full">
          <VideoLoader/>
          {/* You can replace this with a spinner */}
        </div>
      )}
      <div style={{ display: loading ? "none" : "block" }}>
        <h2 className="text-3xl md:text-5xl py-4 text-center text-[#02294A] font-semibold">
          Our Projects
        </h2>
        <CompletedProjects onAllImagesLoaded={handleAllImagesLoaded} />
      </div>
    </div>
  );
};

export default Projects;

import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/autolek/1.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
const Autolek = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  useEffect(() => {
    handleScrollToTop();
  }, []);
  return (
    <div className="py-8 pt-32 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold py-8 text-center text-gray-800">
        Auto-Lek Electric
      </h1>
      <div className="max-w-4xl mx-auto flex bg-gray-100  p-6 justify-center">
        {/* Main Carousel */}

        <img
          src={img1}
          alt="Slide 1"
          className="object-cover w-3/4 h-full"
          loading="lazy"
        />
      </div>
      {/* </div> */}
      <p className="mt-8 text-center text-gray-700 text-lg max-w-2xl mx-auto px-4">
        Auto-Lek Electric is a state-of-the-art manufacturing facility
        specializing in cutting-edge automotive solutions. Located at a
        strategic industrial hub, it exemplifies innovation and efficiency. With
        advanced technology and a commitment to quality, Auto-Lek Electric is
        driving the future of sustainable mobility.
      </p>
      {/* Sliding Button */}
      <div className="relative md:fixed top-2 md:left-4 py-6 md:py-0 md:pt-28 pl-4 md:pl-0">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 font-bold text-white bg-[#CFA35D] transition-transform duration-300 hover:bg-[#9C783E]"
        >
          <IoCaretBackSharp className="mr-2" /> Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Autolek;

import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/autolek/1.jpg";
import img2 from "../../assets/projects/taj/2.jpg";
import img3 from "../../assets/projects/taj/3.jpg";
import img4 from "../../assets/projects/taj/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
const Autolek = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
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
      <p className="mt-8 text-center text-gray-700 text-lg max-w-2xl mx-auto">
        Roseate House is a luxurious retreat offering an exquisite blend of
        modern comfort and traditional elegance. Nestled in a prime location,
        the hotel provides guests with unparalleled hospitality and a serene
        ambiance. Enjoy a stay that combines style, comfort, and sophistication
        at Roseate House.
      </p>
      {/* Sliding Button */}
      <div className="fixed top-1 left-4 pt-28">
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

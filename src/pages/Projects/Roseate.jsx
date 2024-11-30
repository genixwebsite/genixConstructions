import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/roseate/1.jpg";
import img2 from "../../assets/projects/roseate/2.jpg";
import img3 from "../../assets/projects/roseate/3.jpg";
import img4 from "../../assets/projects/roseate/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

const Roseate = () => {
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
    <div className="py-8 pt-40 bg-gray-100 min-h-screen md:pt-32">
      <h1 className="text-4xl font-bold py-8 text-center text-gray-800">
        Roseate House
      </h1>

      {/* Carousel and Thumbnails Wrapper */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start bg-gray-100 p-6 space-y-6 md:space-y-0 ">
        {/* Main Carousel */}
        <div className="w-full md:w-3/4 px-2">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={false}
            selectedItem={activeIndex}
            onChange={setActiveIndex}
            className="shadow-lg"
          >
            <div>
              <img
                src={img1}
                alt="Slide 1"
                className="object-cover w-full h-96"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={img2}
                alt="Slide 2"
                className="object-cover w-full h-96"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={img3}
                alt="Slide 3"
                className="object-cover w-full h-96"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={img4}
                alt="Slide 4"
                className="object-cover w-full h-96"
                loading="lazy"
              />
            </div>
          </Carousel>
        </div>

        {/* Thumbnails */}
        <div className=" md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-2 w-full md:w-1/4 md:flex hidden">
          <img
            src={img1}
            alt="Thumbnail 1"
            className="object-cover h-[5.60rem] w-full md:w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(0)}
            loading="lazy"
          />
          <img
            src={img2}
            alt="Thumbnail 2"
            className="object-cover h-[5.60rem] w-full md:w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(1)}
            loading="lazy"
          />
          <img
            src={img3}
            alt="Thumbnail 3"
            className="object-cover h-[5.60rem] w-full md:w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(2)}
            loading="lazy"
          />
          <img
            src={img4}
            alt="Thumbnail 4"
            className="object-cover h-[5.60rem] w-full md:w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(3)}
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-8 text-justify text-gray-700 text-lg max-w-6xl mx-auto px-4 md:text-center">
        Roseate House is a luxurious retreat offering an exquisite blend of
        modern comfort and traditional elegance. Nestled in a prime location,
        the hotel provides guests with unparalleled hospitality and a serene
        ambiance. Enjoy a stay that combines style, comfort, and sophistication
        at Roseate House.
      </p>

      {/* Sliding Button */}
      <div className="fixed top-2 left-4 pt-32 md:pt-28">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 font-bold text-white bg-[#CFA35D] transition-transform duration-300 hover:bg-[#9C783E]"
          onClick={handleScrollToTop}
        >
          <IoCaretBackSharp className="mr-2" onClick={handleScrollToTop} /> Back
          to Projects
        </Link>
      </div>
    </div>
  );
};

export default Roseate;

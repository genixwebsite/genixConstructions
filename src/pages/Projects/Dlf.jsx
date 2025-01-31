import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/dlf/1.png";
import img2 from "../../assets/projects/dlf/2.png";
import img3 from "../../assets/projects/dlf/3.png";
import img4 from "../../assets/projects/dlf/4.png";
import img5 from "../../assets/projects/dlf/5.jpeg";
import img6 from "../../assets/projects/dlf/6.jpeg";
import img7 from "../../assets/projects/dlf/7.jpeg";
import back from "../../assets/projects/dlf/back.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";

const Dlf = () => {
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
    <>
      <div className="absolute inset-0 backdrop-blur-sm -z-10"></div>
      <div
        className="py-8 bg-gray-100 min-h-screen pt-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${back})` }}
      >
        <h1 className="text-4xl font-bold py-8 text-center text-slate-200 relative">
          <span className="drop-shadow-[0_1.4px_1.4px_rgb(0,0,0)]">
            D-15, Sector 39, Noida
          </span>
        </h1>

        {/* Carousel and Thumbnails Wrapper */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-start bg-gray-100 p-4 space-y-6 md:space-y-0">
          {/* Main Carousel */}
          <div className="w-full md:w-3/4 pr-2">
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
              {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-[31rem]"
                    loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Thumbnails */}
          <div className="md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-2 w-full md:w-1/4 md:flex hidden">
            {[img1, img2, img3, img4, img5, img6, img7].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover h-[4.00rem] w-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleThumbnailClick(index)}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-justify text-gray-700 text-lg max-w-6xl mx-auto px-4 md:text-center bg-slate-100">
          D-15, Sector 39, Noida is an exclusive residential enclave offering a seamless
          blend of regal elegance and modern sophistication. Nestled in the
          vibrant city of Noida, this premium property features luxurious
          apartments and world-class amenities. Experience a lifestyle of
          unparalleled grandeur and comfort at D-15 Noida, where every detail is
          designed to elevate your living experience.
        </p>

        {/* Back Button */}
        <div className="relative md:fixed top-2 md:left-4 py-6 md:py-0 md:pt-28 pl-4 md:pl-0">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 font-bold text-white bg-[#CFA35D] transition-transform duration-300 hover:bg-[#9C783E]"
            onClick={handleScrollToTop}
          >
            <IoCaretBackSharp className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dlf;

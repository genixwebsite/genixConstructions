import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/prateek/1.jpg";
import img2 from "../../assets/projects/prateek/2.jpg";
import img3 from "../../assets/projects/prateek/3.jpg";
import img4 from "../../assets/projects/prateek/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Link } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { useState } from "react";
const Prateek = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="py-8 pt-32 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold py-8 text-center text-gray-800">
        Prateek Edifice
      </h1>
      {/* <div
        className="w-full h-3/4 p-12"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
      <div className="max-w-4xl mx-auto flex bg-gray-100  p-6">
        {/* Main Carousel */}
        <div className="w-3/4">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={false}
            //selectedItem={0}
            className="shadow-lg"
            selectedItem={activeIndex}
            onChange={setActiveIndex}
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
                className=" object-contain w-full h-96"
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={img4}
                alt="Slide 4"
                className="object-contain w-full h-96"
                loading="lazy"
              />
            </div>
          </Carousel>
        </div>

        <div className="w-1/4 flex flex-col space-y-4 ml-4">
          <img
            src={img1}
            alt="Thumbnail 1"
            className="object-cover h-[5.25rem] w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(0)}
            loading="lazy"
          />
          <img
            src={img2}
            alt="Thumbnail 2"
            className="object-cover h-[5.25rem] w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(1)}
            loading="lazy"
          />
          <img
            src={img3}
            alt="Thumbnail 3"
            className="object-cover h-[5.25rem] w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(2)}
            loading="lazy"
          />
          <img
            src={img4}
            alt="Thumbnail 4"
            className="object-cover h-[5.25rem] w-3/4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleThumbnailClick(3)}
            loading="lazy"
          />
        </div>
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

export default Prateek;

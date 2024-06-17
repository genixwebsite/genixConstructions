// src/HomeCarousel.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { imageList } from "../constants/carouselImageList";

const HomeCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          className="w-full h-full"
        >
          {imageList.map((image, index) => (
            <div key={index} className="w-full h-[70vh] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="text-center my-8 z-10 text-white ">
        <h1 className="text-5xl font-light">Genix Constructions</h1>
        <h2 className="text-2xl font-extralight text-gray-500">
          You dream it, We build it!
        </h2>
      </div>
    </div>
  );
};

export default HomeCarousel;

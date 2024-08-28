import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/projects/roseate/1.jpg";
import img2 from "../../assets/projects/roseate/2.jpg";
import img3 from "../../assets/projects/roseate/3.jpg";
import img4 from "../../assets/projects/roseate/4.jpg";

const Roseate = () => {
  return (
    <div className="p-8 pt-32 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Roseate House
      </h1>

      <div className="mx-auto max-w-lg">
        {" "}
        {/* Center the carousel and set max width */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showStatus={false}
          className="rounded-lg shadow-lg"
          showArrows={false}
        >
          <div>
            <img
              src={img1}
              alt="Slide 1"
              className="object-cover h-96 w-full"
            />
          </div>
          <div>
            <img
              src={img4}
              alt="Slide 2"
              className="object-cover h-96 w-full"
            />
          </div>
          <div>
            <img
              src={img2}
              alt="Slide 3"
              className="object-cover h-96 w-full"
            />
          </div>
          <div>
            <img
              src={img3}
              alt="Slide 4"
              className="object-cover h-96 w-full"
            />
          </div>
        </Carousel>
      </div>

      <p className="mt-12 text-center text-gray-700 text-lg max-w-2xl mx-auto">
        Roseate House is a luxurious retreat offering an exquisite blend of
        modern comfort and traditional elegance. Nestled in a prime location,
        the hotel provides guests with unparalleled hospitality and a serene
        ambiance. Enjoy a stay that combines style, comfort, and sophistication
        at Roseate House.
      </p>
    </div>
  );
};

export default Roseate;

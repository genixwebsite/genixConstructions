import { useState, useEffect } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("hero-video");
    if (videoElement) {
      videoElement.oncanplaythrough = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('')" }}
      ></div>
      <video
        id="hero-video"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative text-center my-8 z-10 text-white flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-5xl font-light">Genix Constructions</h1>
          <h2 className="text-2xl font-extralight text-gray-500">
            You dream it, We build it!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

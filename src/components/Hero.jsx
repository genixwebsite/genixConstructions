// import { useState, useEffect } from "react";

const Hero = () => {
  // const [videoLoaded, setVideoLoaded] = useState(false);

  // useEffect(() => {
  //   const videoElement = document.getElementById("hero-video");
  //   if (videoElement) {
  //     videoElement.oncanplaythrough = () => {
  //       setVideoLoaded(true);
  //     };
  //   }
  // }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      {/* Video always present in the DOM */}
      <video
        id="hero-video"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        poster="/videoPoster.png"
      />

      <>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Text Content */}
        <div className="relative text-center my-8 z-10 text-white flex flex-col items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-light">Genix Constructions</h1>
            <h2 className="text-2xl font-extralight text-gray-100">
              <span className="bg-[#CFA35D] px-1"> You dream it, We build it! </span>
            </h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;

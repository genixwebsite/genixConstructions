// src/First.jsx
import React from "react";
import Typical from "react-typical";
import Navbar from "./Navbar.jsx";
import HomeCarousel from "./HomeCarousel.jsx";

const First = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/video.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      /> */}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#02294A] -z-10"></div>
      {/* Page Content */}
      <div className="relative flex flex-col items-center text-white pt-20 ">
        <HomeCarousel />
        {/* <div className="mt-8 text-center z-30">
          <h1 className="text-5xl font-bold">Genix Constructions</h1>
          <h2 className="text-2xl font-bold mt-4">
            You dream it, We build it!
          </h2>
          <Typical
            steps={[
              "Design Consultancy",
              2000,
              "Industrial",
              2000,
              "Residential",
              2000,
              "Office fitouts",
              2000,
              "Hospitality",
              2000,
              "MEP, Joinery",
              2000,
              "Institutional Buildings",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
            className="mt-4 text-xl"
          />
        </div> */}
      </div>
    </div>
  );
};

export default First;

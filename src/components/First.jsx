// src/First.jsx

import Hero from "./Hero.jsx";
import HomeCarousel from "./HomeCarousel.jsx";

const First = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02294A] flex flex-col items-center text-white">
      {/* <HomeCarousel /> */}
      <Hero/>
    </div>
  );
};

export default First;

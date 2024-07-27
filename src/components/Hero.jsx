
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <video
          className=" top-0 left-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/5567711/5567711-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
        />
      <div className="text-center my-8 z-10 text-white ">
        <h1 className="text-5xl font-light">Genix Constructions</h1>
        <h2 className="text-2xl font-extralight text-gray-500">
          You dream it, We build it!
        </h2>
      </div>
    </div>
  );
};

export default Hero;

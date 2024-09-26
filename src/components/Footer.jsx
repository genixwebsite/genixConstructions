import logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <footer className="bg-[#02294A] shadow-sm box-border w-full text-left text-lg font-bold p-12">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        {/* Footer Left */}
        <div className="w-full sm:w-2/5">
          <img src={logo} alt="logo" className="w-[170px]" />
          <p className="text-white uppercase font-medium">
            <Link
              to="/"
              className="inline-block no-underline text-inherit text-white"
              onClick={handleScrollToTop}
            >
              Home
            </Link>{" "}
            |
            <Link
              to="/about"
              className="inline-block no-underline text-inherit text-white ml-2"
              onClick={handleScrollToTop}
            >
              About
            </Link>{" "}
            |
            <Link
              to="/projects"
              className="inline-block no-underline text-inherit text-white ml-2"
              onClick={handleScrollToTop}
            >
              Projects
            </Link>{" "}
            |
            <Link
              to="/contactus"
              className="inline-block no-underline text-inherit text-white ml-2"
              onClick={handleScrollToTop}
            >
              Contact
            </Link>
          </p>
          <p className="text-slate-500 text-[14px] font-normal mt-4 font-sans">
            Copyright © 2024, Genix Constructions Pvt Ltd
          </p>
        </div>

        {/* Footer Center */}
        <div className="w-full sm:w-2/5 my-10 sm:my-0">
          <div className="flex mb-4">
            {/* Icon Column */}
            <div className="flex flex-col items-start mr-4">
              <IoLocationSharp className="text-2xl text-white mb-4" />
              <IoCallSharp className="text-2xl text-white mb-4" />
              <IoMailSharp className="text-2xl text-white" />
            </div>

            {/* Description Column */}
            <div className="flex flex-col justify-start">
              <p className="text-white text-base mb-4">Noida (NCR)</p>
              <p className="text-white text-base mb-4">+91-750-3000-506</p>
              <p className="text-white text-base">
                <a
                  href="mailto:info@genixconstructions.com"
                  className="text-teal-400 no-underline"
                >
                  info@genixconstructions.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Right */}
        <div className="w-full sm:w-1/5">
          <p className="leading-[20px] text-gray-400 text-sm mb-5">
            <span className="block text-white text-base font-bold mb-5">
              About the company
            </span>
            We understand your vision,craft it to your specifications, and bring your dreams to life!
          </p>
          <div className="flex justify-start items-center w-full mt-6 gap-3 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-700" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-700" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

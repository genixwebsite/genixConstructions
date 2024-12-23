import logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const MobileFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <footer className="bg-[#02294A] shadow-sm box-border w-full text-left text-lg font-bold p-6 md:hidden">
      <div className="flex flex-col items-center">
        {/* Logo and Navigation */}
        <div className="mb-6">
          <img src={logo} alt="logo" className="w-[150px] mx-auto" />
          <p className="text-white uppercase font-medium text-center mt-4">
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
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center text-center text-white mb-6">
          <div className="flex items-center mb-4">
            <IoLocationSharp className="text-2xl text-white mr-2" />
            <span className="text-base">Noida (NCR)</span>
          </div>
          <div className="flex items-center mb-4">
            <IoCallSharp className="text-2xl text-white mr-2" />
            <span className="text-base">+91-750-3000-506</span>
          </div>
          <div className="flex items-center">
            <IoMailSharp className="text-2xl text-white mr-2" />
            <a
              href="mailto:info@genixconstructions.com"
              className="text-teal-400 no-underline text-base"
            >
              info@genixconstructions.com
            </a>
          </div>
        </div>

        {/* About and Social Links */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            <span className="block text-white text-base font-bold mb-2">
              About the company
            </span>
            GENIX CONSTRUCTIONS specializes in High-End Residential Projects,
            Luxury Tented Resorts, Office Fit-Outs, and Industrial Projects.
          </p>
          <div className="flex justify-center items-center gap-3 text-white">
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

        {/* Footer Text */}
        <p className="text-slate-500 text-[12px] font-normal mt-6 font-sans text-center">
          Copyright © 2024, Genix Constructions Pvt Ltd
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;


import logo from "../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { FaInstagram,FaFacebook ,FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    return (
      <footer className="bg-[#02294A] shadow-sm box-border w-full text-left text-lg font-bold p-12">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          {/* Footer Left */}
          <div className="w-full sm:w-2/5">
            <img src={logo} alt="logo" className=" w-[170px]" />
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
            <div className="flex items-center my-4">
              <div className=" text-2xl text-white rounded-full text-center bg-[#CFA35D] p-1.5">
                <IoLocationSharp />
              </div>
              <p className="text-white ml-[15px] text-base">
                {/* <span className="block text-sm leading-[2]">
                  444 S. Cedros Ave
                </span>{" "}
                Solana Beach, California */}
                Noida (NCR)
              </p>
            </div>
            <div className="flex items-center my-4">
              <div className=" text-2xl text-white rounded-full text-center bg-[#CFA35D] p-1.5">
                <IoCallSharp />
              </div>
              <p className="text-white ml-[15px]">+91-750-3000-506</p>
            </div>
            <div className="flex items-center my-4">
              <div className=" text-2xl text-white rounded-full text-center bg-[#CFA35D] p-1.5">
                <IoMailSharp />
              </div>
              <p className="text-white ml-[15px]">
                <a
                  href="mailto:info@genixconstructions.com"
                  className="text-teal-400 no-underline"
                >
                  info@genixconstructions.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer Right */}
          <div className="w-full sm:w-1/5">
            <p className="leading-[20px] text-gray-400 text-sm mb-5">
              <span className="block text-white text-base font-bold mb-5">
                About the company
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
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

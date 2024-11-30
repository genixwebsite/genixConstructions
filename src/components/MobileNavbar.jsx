// src/MobileNavbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-bg-removed.png";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const MobileNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setIsMenuOpen(false); // Close the menu when navigating
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine the background color based on the current route and scroll position
  const bgColor =
    location.pathname === "/" && !isScrolled
      ? "bg-transparent"
      : "bg-[#02294A]";
  const iconColor = location.pathname === "/" ? "text-white" : "text-[#CFA35D]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgColor} flex items-center justify-between p-4 md:hidden ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center z-40">
        <Link to="/" onClick={handleScrollToTop}>
          <img src={logo} alt="logo" className="w-20" />
        </Link>
      </div>
      <button
        className={`text-2xl ${iconColor} z-50`}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
      </button>
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-[#02294A] transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <ul className="flex flex-col items-center pt-20">
          <li className="w-full">
            <Link
              to="/"
              className={`block text-lg py-4 text-center relative ${
                location.pathname === "/" ? "text-[#CFA35D]" : "text-white"
              }`}
              onClick={handleScrollToTop}
            >
              Home
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#CFA35D]"></span>
              )}
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/about"
              className={`block text-lg py-4 text-center relative ${
                location.pathname === "/about" ? "text-[#CFA35D]" : "text-white"
              }`}
              onClick={handleScrollToTop}
            >
              About
              {location.pathname === "/about" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#CFA35D]"></span>
              )}
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/projects"
              className={`block text-lg py-4 text-center relative ${
                location.pathname.startsWith("/projects")
                  ? "text-[#CFA35D]"
                  : "text-white"
              }`}
              onClick={handleScrollToTop}
            >
              Projects
              {location.pathname.startsWith("/projects") && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#CFA35D]"></span>
              )}
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/contactus"
              className={`block text-lg py-4 text-center relative ${
                location.pathname === "/contactus"
                  ? "text-[#CFA35D]"
                  : "text-white"
              }`}
              onClick={handleScrollToTop}
            >
              Contact Us
              {location.pathname === "/contactus" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#CFA35D]"></span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;

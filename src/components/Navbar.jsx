// src/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-bg-removed.png";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white z-20 transition-colors duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-[#02294A] shadow-lg "
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-6 pt-1 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className=" w-[100px]" />
        </div>
        <ul className="flex space-x-4">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={handleScrollToTop}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={handleScrollToTop}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname.startsWith("/projects") ? "active" : ""
              }`}
              onClick={handleScrollToTop}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactus"
              className={`nav-link ${
                location.pathname === "/contactus" ? "active" : ""
              }`}
              onClick={handleScrollToTop}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

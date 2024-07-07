// src/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-bg-removed.png";
import "../styles/nav.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#02294A] text-white shadow-lg z-20">
      <div className="mx-auto px-6 pt-1 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className="max-w-[3.5em]" />
        </div>
        <ul className="flex space-x-4">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
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
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
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

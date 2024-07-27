import { useEffect } from "react";
import "../styles/animation.css";
import logo from "../assets/logo-bg-removed.png";

const Animation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Match with the animation duration

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="loader bg-[#02294A]">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Animation;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Animation from "./components/Animation";
import Roseate from "./pages/Projects/Roseate";
import Footer from "./components/Footer";
import Taj from "./pages/Projects/Taj";
import Prateek from "./pages/Projects/Prateek";
import Autolek from "./pages/Projects/Autolek";
import Dlf from "./pages/Projects/Dlf";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationEnd = () => {
    setIsLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <Animation onAnimationEnd={handleAnimationEnd} />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/projects/roseate" element={<Roseate />} />
        <Route path="/projects/taj" element={<Taj />} />
        <Route path="/projects/prateek-edifice" element={<Prateek />} />
        <Route path="/projects/autolek" element={<Autolek />} />
        <Route path="/projects/dlf" element={<Dlf/>} />
      </Routes>
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-[#02294A] text-white rounded-full shadow-lg hover:bg-[#1d394f] transition-colors duration-300 text-xl font-bold pb-1"
        >
          ↑
        </button>
      )}
    </Router>
  );
};

export default App;

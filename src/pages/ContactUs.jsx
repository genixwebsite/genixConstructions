import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BottomNavBar from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "leaflet/dist/leaflet.css"; // Add leaflet styles
import emailjs from "emailjs-com";

const ContactUs = () => {
  AOS.init();

  const noidaCoordinates = [28.5355, 77.3910]; // Coordinates for Noida

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wlgfdp", // Replace with your EmailJS service ID
        "template_jkzcr31", // Replace with your EmailJS template ID
        formRef.current,
        "uXjp_VDmWAPez_oi9" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 mt-24 bg-white">
        <h1 data-aos="zoom-in" className="text-3xl md:text-5xl font-bold mb-2">
          Genix Constructions
        </h1>
        <p data-aos="zoom-in" className="text-lg md:text-2xl italic mb-8">
          You dream it, we build it
        </p>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto p-4 md:p-8 bg-white shadow-lg rounded">
          {/* Contact Info */}
          <div className="flex items-start mb-8">
            {/* Icon Column */}
            <div className="flex flex-col items-center mr-4 md:mr-6">
              <FaMapMarkerAlt className="text-blue-500 text-lg md:text-2xl mb-4" />
              <FaPhone className="text-blue-500 text-lg md:text-2xl mb-6" />
              <FaEnvelope className="text-blue-500 text-lg md:text-2xl" />
            </div>

            {/* Description Column */}
            <div className="flex flex-col">
              <p className="text-sm sm:text-base md:text-lg mb-4">
                Noida (NCR)
              </p>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                +91-750-3000-506
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                <a
                  href="mailto:info@genixconstructions.com"
                  className="text-blue-500 underline"
                >
                  info@genixconstructions.com
                </a>
              </p>
            </div>
          </div>

          {/* Mail to Section */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

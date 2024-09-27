import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import BottomNavBar from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "leaflet/dist/leaflet.css"; // Add leaflet styles

const ContactUs = () => {
  AOS.init();

  const noidaCoordinates = [28.5355, 77.3910]; // Coordinates for Noida

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 mt-24 bg-white">
        <h1 data-aos="zoom-in" className="text-5xl font-bold mb-2">
          Genix Constructions
        </h1>
        <p data-aos="zoom-in" className="text-2xl italic mb-8">
          You dream it, we build it
        </p>

        <div className="w-full max-w-md">
          {/* Contact Info */}
          <div className="flex items-start mb-8">
            {/* Icon Column */}
            <div className="flex flex-col items-center mr-6">
              <FaMapMarkerAlt className="text-blue-500 text-2xl mb-4" />
              <FaPhone className="text-blue-500 text-2xl mb-6" />
              <FaEnvelope className="text-blue-500 text-2xl" />
            </div>

            {/* Description Column */}
            <div className="flex flex-col">
              <p className="text-lg mb-4">Noida (NCR)</p>
              <p className="text-lg mb-4">+91-750-3000-506</p>
              <p className="text-lg">
                <a href="mailto:info@genixconstructions.com">info@genixconstructions.com</a>
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="text-2xl text-center p-4">Find Us Here:</div>

          <div className="mt-8"> {/* Added margin here */}
            <MapContainer
              center={noidaCoordinates}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "500px", width: "100%", z:"10" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={noidaCoordinates}>
                <Popup>Genix Constructions, Noida</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

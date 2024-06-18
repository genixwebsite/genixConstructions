import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import BottomNavBar from '../components/BottomNavBar';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  AOS.init();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      console.log('FAILED...', err);
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div>

      <div className="flex flex-col items-center justify-center min-h-screen p-8 mt-24 bg-white">
        <h1 data-aos="zoom-in" className="text-5xl font-bold mb-2">Genix Constructions</h1>
        <p data-aos="zoom-in" className="text-2xl italic mb-8">You dream it, we build it</p>

        <div className="w-full max-w-md ml-12">
          {/* Address */}
          <div data-aos="zoom-in" className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
            <p className="text-lg">Noida (NCR)</p>
          </div>

          {/* Phone */}
          <div data-aos="zoom-in" className="flex items-center mb-4">
            <FaPhone className="text-blue-500 text-2xl mr-4" />
            <p className="text-lg">+91-750-3000-506</p>
          </div>

          {/* Email */}
          <div data-aos="zoom-in" className="flex items-center mb-8">
            <FaEnvelope className="text-blue-500 text-2xl mr-4" />
            <p className="text-lg">info@genixconstructions.com</p>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className='text-2xl text-center p-4'>Get in touch with us:</div>
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default ContactUs;

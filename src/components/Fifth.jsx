import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fifth = () => {
    AOS.init();

    const images = [
        { src: '/i1.jpg', text: 'Ethical Business' },
        { src: '/i2.jpg', text: 'Risk Management' },
        { src: '/i3.jpg', text: 'Decision Making' },
        { src: '/i4.jpg', text: 'Health & Safety' },
        { src: '/i5.jpg', text: 'Respect Human Rights' },
        { src: '/i6.jpg', text: 'Good Environment' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            {/* Title */}
            <h1 data-aos="fade-up" className="text-5xl text-[#02294A] font-bold mb-8">Our Principles</h1>

            {/* Photo Containers */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-52 w-72 bg-cover bg-center rounded-lg overflow-hidden group"
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-xl font-semibold">{image.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fifth;

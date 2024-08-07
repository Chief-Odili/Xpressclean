import React from 'react';
import Herovideo from '../assets/Herovideo.mp4';

const Hero = () => {
  return (
    <div id="home" className="mt-40 lg:mt-0">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video */}
        <video
          src={Herovideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />

        {/* Blueish transparent overlay */}
        <div className="absolute inset-0 bg-yellow-800 bg-opacity-50 flex flex-col p-6 md:p-10 justify-center items-center md:items-start">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white max-w-lg text-center md:text-left pt-4 mt-8">
            XPRESS CLEAN EMPIRE
          </h1>

          <p className="italic text-xl md:text-2xl lg:text-4xl text-white mt-6 md:mt-12 text-center md:text-left">
            Express Clean for Home and Offices <br />
            Where Freshness Meets Comfort!
          </p>
          <div className="flex flex-col md:flex-row">
            <a
              href="tel:+2349024127040"
              className="mt-6 m-2 md:mt-12 py-3 px-6 md:py-4 md:px-8 lg:py-6 lg:px-12 bg-[#20336E] text-white text-lg md:text-xl lg:text-3xl rounded-lg shadow-lg hover:bg-gray-100 hover:text-[#20336E] transition-colors duration-300 text-center"
            >
              Contact Us
            </a>
            <a
              href="mailto:xpresscleanempire@gmail.com"
              className="mt-6 m-2 md:mt-12 py-3 px-6 md:py-4 md:px-8 lg:py-6 lg:px-12 bg-[#E7EFFA] text-[#20336E] text-lg md:text-xl lg:text-3xl rounded-lg shadow-lg hover:bg-[#20336E] hover:text-white transition-colors duration-300 text-center"
            >
              Get Quotation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

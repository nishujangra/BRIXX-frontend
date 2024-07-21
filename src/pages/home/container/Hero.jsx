import React from 'react';
import images from '../../../constants/image';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <div className="absolute w-full h-full ">
        <img src={images.BG} alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>
      <div className="absolute text-white py-20 px-10 lg:px-20 flex flex-col justify-center items-center lg:justify-start lg:items-start h-full w-full ">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 animate-bounce-slow">Elements Culymca</h1>
        <p className="text-xl lg:text-2xl mb-8 animate-fade-in w-full lg:w-96 text-center lg:text-left">
          Join us for an unforgettable experience filled with music, food, and fun! <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis id delectus, eius dolorem odit temporibus? Soluta dolorem rem quae rerum alias!
        </p>
        <button className="lg:animate-bounce-slow hover:lg:animate-none mt-5 lg:mt-0 border-2 rounded-full border-white px-6 py-2 text-white font-semibold hover:bg-[#EEEDEB] hover:text-dark-hard transition-all">
          Get Passes
        </button>
      </div>
    </div >
  );
};

export default Hero;

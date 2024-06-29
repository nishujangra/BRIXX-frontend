import React, { useState, useEffect } from 'react';
const image_urls = [

];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image_urls.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row mx-8 px-4 py-8 my-12 gap-4 shadow-lg shadow-white">
      <div className="w-full md:w-1/2 text-lg leading-relaxed">
        <h1 className="text-2xl font-bold mb-4">
          Culaiyca
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!
        </p>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-96 flex justify-center items-center">
        <img
          src={image_urls[currentImageIndex]}
          alt="Slideshow img"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import Events from '../../../components/Events';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import images from '../../../constants/image';

const event = [
  {
    id: 1,
    imgurl: "EVENT1",
    title: 'PANKAJ',
    subtitle: 'Subtitle',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!'
  },
  {
    id: 2,
    imgurl: "EVENT2",
    title: 'PANKAJ',
    subtitle: 'Subtitle',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!'
  },
  {
    id: 3,
    imgurl: "BG",
    title: 'PANKAJ',
    subtitle: 'Subtitle',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!'
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex items-center h-20 w-8 justify-center absolute top-1/2 transform cursor-pointer right-2 z-10"
      onClick={onClick}
    >
      <FiChevronRight size={50} className="text-black" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex items-center h-20 w-8 justify-center absolute top-1/2 cursor-pointer left-2 z-10"
      onClick={onClick}
    >
      <FiChevronLeft size={50} className="text-black" />
    </div>
  );
};

const FeaturedEvents = () => {
  const [currentBgImage, setCurrentBgImage] = useState(images[event[0].imgurl]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => {
        setFade(false);
      }, 2000); // Adjust the duration to match the CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      const centerIndex = (next + Math.floor(event.length / 2)) % event.length;
      setFade(true);
      setCurrentBgImage(images[event[centerIndex].imgurl]);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden bg-cover bg-center h-screen">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundImage: `url(${currentBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', objectFit: 'cover' }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-4xl font-bold text-center pt-5 text-white z-20">Featured Events</h1>
      <div className="relative z-20 mt-10">
        <Slider {...settings} className="slick-slider">
          {event.map((e) => (
            <div key={e.id} className="px-2">
              <Events
                imgurl={e.imgurl}
                title={e.title}
                subtitle={e.subtitle}
                description={e.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedEvents;

import React from 'react';
import EventCard from '../../../components/EventCard/EventCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import images from '../../../constants/image';
const event = [
    {
        id: 1,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
    {
        id: 2,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
    {
        id: 3,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
    {
        id: 4,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
    {
        id: 5,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
    {
        id: 6,
        imglink: '/assets/images/landscape-1.png',
        title: 'PANKAJ',
        subtitle: 'FEST THTHR',
        info:
            'Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three interesting',
        btnbody: 'INFO',
    },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-16 h-16 rounded-full cursor-pointer z-10 right-2" onClick={onClick}>
            <FaArrowRight size={30} className="text-white" />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="flex items-center justify-center absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-16 h-16 rounded-full cursor-pointer z-10 left-4" onClick={onClick}>
            <FaArrowLeft size={30} className="text-white" />
        </div>
    );
};

const CulturalEvents = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                    autoplay: true,
                    autoplaySpeed: 3000,
                },
            },
        ],
    };

    return (
        <div className="overflow-hidden">
            <h1 className="text-4xl font-bold text-center py-10">Cultural Events</h1>
            <div className="px-4 md:px-20 relative">
                <Slider {...settings} className="slick-slider">
                    {event.map((e) => (
                        <div key={e.id} className="px-2">
                            <EventCard
                                imglink="BG"
                                title={e.title}
                                subtitle={e.subtitle}
                                info={e.info}
                                btnbody={e.btnbody}
                            />
                        </div>
                    ))}
                </Slider>
                <style>
                    {`
            .slick-slider {
              @apply w-full perspective-1000;
            }

            .slick-list {
              @apply overflow-visible;
            }

            .slick-slide {
              @apply flex justify-center items-center transition-transform duration-500 ease;
            }

            .slick-slide.slick-center {
              @apply transform scale-125 translate-z-100;
              z-index: 1;
            }

            .slick-slide:not(.slick-center) {
              @apply transform scale-80 translate-z-(-100) opacity-70;
            }
          `}
                </style>
            </div>
        </div>
    );
};


export default CulturalEvents

import React from 'react';
import Slider from 'react-slick';
import images from '../../../constants/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sponsors = [
    { name: 'Sight', logo: images.SPONSER },
    { name: 'Bulbasaur', logo: images.SPONSER },
    { name: 'Wie', logo: images.SPONSER },
    { name: 'ieeeymcasb', logo: images.SPONSER },
    { name: 'Charmender', logo: images.SPONSER },
    { name: 'Chansey', logo: images.SPONSER },
    { name: 'Charizard', logo: images.SPONSER },
    { name: 'Meowth', logo: images.SPONSER },
    { name: 'Muk', logo: images.SPONSER },
    // Add more sponsors as needed
];

const Performances = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="text-white touch-pan-up h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Past Performances</h2>
                <Slider {...settings} className="slider-container mx-auto">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="px-4">
                            <div className="flex flex-col items-center justify-end h-full">
                                <img
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`}
                                    className="mb-2 "
                                />
                                <p className="text-xl font-semibold mt-auto">{sponsor.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Performances;

import React, { useState } from 'react';
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
        subtitle: 'Subtile',

        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!'
    },
    {
        id: 2,
        imgurl: "EVENT2",
        title: 'PANKAJ',
        subtitle: 'Subtile',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum omnis, ratione atque dolorum quam eligendi quasi? A tempore repudiandae, laborum, magnam, recusandae exercitationem velit fugit hic sequi ad possimus consequatur!'
    },
    {
        id: 3,
        imgurl: "BG",
        title: 'PANKAJ',
        subtitle: 'Subtile',
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

const CulturalEvents = () => {
    const [bgImage, setBgImage] = useState(images[event[1].imgurl]);

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
        autoplaySpeed: 3000,
        beforeChange: (current, next) => {
            const centerIndex = (current + 2) % event.length;
            setBgImage(images[event[centerIndex].imgurl]);
        },
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
        <div
            className="relative overflow-hidden bg-cover bg-center h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                objectFit: 'cover',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="relative text-2xl md:text-4xl font-bold text-center pt-10 text-white z-20">
                Cultural Events
            </h1>
            <div className="relative z-20 pt-10 px-4 sm:px-8 md:px-12 lg:px-16">
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

export default CulturalEvents


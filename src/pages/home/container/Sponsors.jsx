import React from 'react';
import images from '../../../constants/image';

const mainSponsors = [
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    }
];

const midSponsors = [
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    }
];

const lowSponsors = [
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    },
    {
        imgUrl: 'SPONSER',
        web: 'https://example.com'
    }
];

const Sponsors = () => {
    return (
        <div className="text-white touch-pan-up py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Main Sponsors</h2>

                {/* Main Sponsors */}
                <div className="grid grid-cols-1 md:grid-cols-3 mb-10 justify-items-center md:mx-32">
                    {mainSponsors.map((sponsor, index) => (
                        // <a
                        //     key={index}
                        //     href={sponsor.web}
                        //     target="_blank"
                        //     rel="noopener noreferrer"
                        //     className="flex flex-col items-center"
                        // >
                        <img
                            src={images[sponsor.imgUrl]}
                            alt="Sponsor"
                            className="w-40 h-40 mb-2 rounded-full border-2 border-white"
                        />
                        // {/* </a> */}
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-8 text-center">Mid Sponsors</h2>
                {/* Mid Sponsors */}
                <div className="grid grid-cols-2 md:grid-cols-4 mb-10 justify-items-center">
                    {midSponsors.map((sponsor, index) => (
                        // <a
                        //     key={index}
                        //     href={sponsor.web}
                        //     target="_blank"
                        //     rel="noopener noreferrer"
                        //     className="flex flex-col items-center"
                        // >
                        <img
                            src={images[sponsor.imgUrl]}
                            alt="Sponsor"
                            className="w-32 h-32 mb-2 rounded-full border-2 border-white"
                        />
                        // {/* </a> */ }
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-8 text-center">Low Sponsors</h2>
                {/* Low Sponsors */}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-items-center">
                    {lowSponsors.map((sponsor, index) => (
                        // <a
                        //     key={index}
                        //     href={sponsor.web}
                        //     target="_blank"
                        //     rel="noopener noreferrer"
                        //     className="flex flex-col items-center"
                        // >
                        <img
                            src={images[sponsor.imgUrl]}
                            alt="Sponsor"
                            className="w-24 h-24 mb-4 rounded-full border-2 border-white "
                        />
                        // </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;

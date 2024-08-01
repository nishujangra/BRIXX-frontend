import React from 'react';
import images from '../../../constants/image';

const mainSponsors = [
    {
        imgUrl: 's1',
        web: 'https://example.com'
    },
    {
        imgUrl: 's2',
        web: 'https://example.com'
    },
    {
        imgUrl: 's3',
        web: 'https://example.com'
    }
];

const midSponsors = [
    {
        imgUrl: 's4',
        web: 'https://example.com'
    },
    {
        imgUrl: 's5',
        web: 'https://example.com'
    },
    {
        imgUrl: 's6',
        web: 'https://example.com'
    },
    {
        imgUrl: 's7',
        web: 'https://example.com'
    }
];

const lowSponsors = [
    {
        imgUrl: 's8',
        web: 'https://example.com'
    },
    {
        imgUrl: 's9',
        web: 'https://example.com'
    },
    {
        imgUrl: 's10',
        web: 'https://example.com'
    },
    {
        imgUrl: 's11',
        web: 'https://example.com'
    },
    {
        imgUrl: 's12',
        web: 'https://example.com'
    },
    {
        imgUrl: 's3',
        web: 'https://example.com'
    },
    {
        imgUrl: 's14',
        web: 'https://example.com'
    },
    {
        imgUrl: 's15',
        web: 'https://example.com'
    },
    {
        imgUrl: 's16',
        web: 'https://example.com'
    },
    {
        imgUrl: 's17',
        web: 'https://example.com'
    },
    {
        imgUrl: 's18',
        web: 'https://example.com'
    },
    {
        imgUrl: 's19',
        web: 'https://example.com'
    },
    {
        imgUrl: 's20',
        web: 'https://example.com'
    },
    {
        imgUrl: 's21',
        web: 'https://example.com'
    },
    {
        imgUrl: 's22',
        web: 'https://example.com'
    },
    {
        imgUrl: 's23',
        web: 'https://example.com'
    },
    {
        imgUrl: 's24',
        web: 'https://example.com'
    },
    {
        imgUrl: 's25',
        web: 'https://example.com'
    }
];

const Sponsors = () => {
    return (
        <div className="text-black touch-pan-up py-12 bg-white">
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
                            className="w-40 h-40 mb-2 rounded-full "
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
                            className="w-[56] h-[56] mb-2 rounded-full"
                        />
                        // {/* </a> */ }
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-8 text-center">Low Sponsors</h2>
                {/* Low Sponsors */}
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-items-center px-10">
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
                            className="w-48 h-48 mb-4 rounded-full"
                        />
                        // </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;

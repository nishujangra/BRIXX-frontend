import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import images from '../constants/image';

const Events = ({ imgurl, title, subtitle, description, teamSize, Rules }) => {
    return (
        <div className="flex justify-center py-10 h-auto hover:-translate-y-8 duration-300">
            <div className="relative max-w-sm w-80 h-96 shadow-lg rounded-lg overflow-hidden group">
                <div
                    className="relative w-80 h-96 bg-cover bg-center z-10 transition duration-300 group-hover:blur-sm"
                    style={{ backgroundImage: `url(${images[imgurl]})` }}
                    title="Event Image"
                >
                    <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-white z-30 transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-2">
                    <div className="transition-all duration-300 group-hover:text-2xl pt-5 group-hover:leading-relaxed">
                        <h1 className="text-2xl font-bold transition-transform duration-300">{title}</h1>
                        <p className="text-lg transition-transform duration-300">{subtitle}</p>
                        <p className="text-base transition-transform duration-300">
                            {description}
                        </p>
                        <Link
                            to={`/event-details?imgurl=${encodeURIComponent(images[imgurl])}&title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}&description=${encodeURIComponent(description)}&teamSize=${encodeURIComponent(teamSize)}&Rules=${encodeURIComponent(JSON.stringify(Rules))}`}
                        >
                            <button
                                className="bg-blue-500 text-white font-bold mt-2 py-2 px-4 rounded duration-300 hover:bg-white hover:text-black"
                            // onClick={() => toast.success('Registered successfully!')}
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;

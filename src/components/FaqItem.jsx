import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-voilet-200 py-4 bg-dark-soft text-white">
            <div
                className="flex justify-between items-center"
            >
                <h3 className="text-lg font-medium">{question}</h3>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiArrowDropUpLine size={30} /> : <RiArrowDropDownLine size={30} />}
                </button>
            </div>
            {isOpen && (
                <div className="mt-4 text-white">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default FaqItem;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const EventDetails = () => {
    const query = useQuery();
    const imgurl = query.get('imgurl');
    const title = query.get('title');
    const subtitle = query.get('subtitle');
    const description = query.get('description');
    const teamSize = query.get('teamSize');
    const Rules = JSON.parse(query.get('Rules')) || [];

    const [teamHead, setTeamHead] = useState('');
    const [members, setMembers] = useState(Array(parseInt(teamSize)).fill(''));

    const handleMemberChange = (index, value) => {
        const newMembers = [...members];
        newMembers[index] = value;
        setMembers(newMembers);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ teamHead, members });
    }

    if (!title || !imgurl) {
        return <div>Error: No event data found.</div>;
    }

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${imgurl})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center text-white p-10">
                <div className="w-full max-w-4xl flex flex-col md:flex-row items-start">
                    <div className="md:w-1/2 p-5">
                        <h1 className="text-4xl font-bold mb-4">{title}</h1>
                        <h2 className="text-2xl mb-4">{subtitle}</h2>
                        <p className="mb-4">{description}</p>
                    </div>
                    <div className="md:w-1/2 p-5  bg-opacity-75 rounded-lg  text-black">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {members.map((member, index) => (
                                <div key={index}>
                                    <input
                                        type="email"
                                        value={member}
                                        onChange={(e) => handleMemberChange(index, e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-black text-black"
                                        placeholder={`Team Member ${index + 1} Email`}
                                        required
                                    />
                                </div>
                            ))}
                            <button type="submit" className=" items-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full max-w-4xl mt-10 p-5 bg-white bg-opacity-75 rounded-lg shadow-lg text-black">
                    <h3 className="text-xl font-bold mb-4">Rules</h3>
                    <ul className="list-disc list-inside space-y-2">
                        {Rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;

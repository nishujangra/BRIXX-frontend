import React, { useState } from 'react';
import images from '../../../constants/image';

const Location = () => {
    const [hover, setHover] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("J.C. BOSE University, Sector 6, Faridabad");
        setCopied(true);
        setHover(false);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`bg-white text-black flex flex-col ${hover ? 'bg-slate-800' : ''} md:flex-row py-8 px-8 h-screen overflow-auto`} >
            <div className='flex flex-row w-full mx-8'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className={`w-full `}>
                    <h2 className='text-2xl font-bold mb-4 '>Get Directions</h2>
                    <div
                        className='relative mt-24  hover:mt-24 duration-1300'
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18927.072039947077!2d77.31732200768667!3d28.363125228540596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc70ebd144c7%3A0xe0760d4ff461f9e7!2sYMCA%20University%20Campus%20St%2C%20Sector%206%2C%20Faridabad%2C%20Haryana%20121006!5e0!3m2!1sen!2sin!4v1720376177062!5m2!1sen!2sin"
                            width="300"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={`transform transition-all mx-auto duration-3000 rotate-45  ${hover ? 'rotate-0 scale-150' : ''}`}
                        ></iframe>
                    </div>
                </div>
                <div className={`flex flex-col text-white items-center w-1/2 md:w-1/2 ${hover ? 'block' : 'hidden'} transition duration-300`}>
                    <p className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                    </p>
                    <button
                        onClick={handleCopy}
                        className='border-2 rounded-full border-dark-hard px-6 py-2 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300'
                    >
                        {copied ? 'Copied!' : 'Copy Address'}
                    </button>
                </div>
            </div>
            <div className={`w-full  ${hover ? 'hidden' : 'block'} transition duration-300`}>
                <h1 className='text-4xl '>Hello</h1>
                <div className='p-4'>
                    <img src={images.BG} alt="Background" />
                </div>
                <p className='text-2xl'>kjikkfnvndk</p>
            </div>
        </div>
    );
}

export default Location;

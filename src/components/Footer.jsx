import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-2  bg-black ">
      <div className="container pt-10 px-4 mx-10">
        < div className="grid grid-cols-1 md:grid-cols-4 gap-8" >
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <a href="/" className='hover:underline-offset-8 hover:opacity-75 hover:underline'>
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className='hover:underline-offset-8 hover:opacity-75 hover:underline'>
                  Events
                </a>
              </li>
              <li>
                <a href="/timeline" className='hover:underline-offset-8 hover:opacity-75 hover:underline'>
                  Timeline
                </a>
              </li>
              <li>
                <a href="/contact" className='hover:underline-offset-8 hover:opacity-75 hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-violet-300 transition">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-violet-300 transition">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-violet-300 transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-violet-300 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Core team</h3>
            <p className="mb-2">Asif: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
            <p className="mb-2">Nishu: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
            <p className="mb-2">Pankaj: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Developers team</h3>
            <p className="mb-2">Asif: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
            <p className="mb-2">Nishu: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
            <p className="mb-2">Pankaj: <a href="mailto:info@fest.com" className="hover:underline">  7892929292</a></p>
          </div>
        </ div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} YMCA Fest.</p>
        </div>
      </div >
    </footer >
  );
};

export default Footer;

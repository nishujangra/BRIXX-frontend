import React from 'react';
import FaqItem from '../../../components/FaqItem';
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: 'What is the event about?',
    answer: 'The event is about the Culymca.'
  },
  {
    question: 'What is the event date?',
    answer: 'The event date is 2024-09-21.'
  },
  {
    question: 'Where is the event location?',
    answer: 'The event location is at JC Bose University of Science and Technology.'
  },
  {
    question: 'Where is the event location?',
    answer: 'The event location is at JC Bose University of Science and Technology.'
  }
];

const Faq = () => {
  return (
    <div className='flex flex-col md:flex-row p-6'>
      <div className='w-full md:w-1/2 p-4 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-semibold text-white">Pankaj</h2>
          <div className='flex items-center space-x-4'>
            <p className="text-white">7206189877</p>
            <a href='https://wa.me/917206189877' target='_blank' rel='noopener noreferrer' className='text-green-500 hover:text-green-400 transition-colors duration-300'>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <h2 className="text-xl font-semibold text-white">Pankaj</h2>
          <div className='flex items-center space-x-4'>
            <p className="text-white">7206189877</p>
            <a href='https://wa.me/917206189877' target='_blank' rel='noopener noreferrer' className='text-green-500 hover:text-green-400 transition-colors duration-300'>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 p-4  mb-4 rounded-lg shadow-lg ">
          <h2 className="text-xl font-semibold text-white">Pankaj</h2>
          <div className='flex items-center space-x-4'>
            <p className="text-white">7206189877</p>
            <a href='https://wa.me/917206189877' target='_blank' rel='noopener noreferrer' className='text-green-500 hover:text-green-400 transition-colors duration-300'>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg ">
          <h2 className="text-xl font-semibold text-white">Pankaj</h2>
          <div className='flex items-center space-x-4'>
            <p className="text-white">7206189877</p>
            <a href='https://wa.me/917206189877' target='_blank' rel='noopener noreferrer' className='text-green-500 hover:text-green-400 transition-colors duration-300'>
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-3">
        <h2 className="text-2xl font-bold px-6">Frequently Asked Questions</h2>
        <div className=' p-6 rounded-lg shadow-lg'>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

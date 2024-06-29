import React from 'react';
import FaqItem from '../../../components/FaqItem';

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
  }
];


const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-5 rounded-lg items-center">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

import React from 'react';

const TimelineItem = ({ time, title, description }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 w-10 h-10 text-dark-soft flex items-center justify-center">
        <span className="font-bold text-white">{time}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibol">{title}</h3>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

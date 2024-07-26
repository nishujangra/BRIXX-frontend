import React, { useState } from 'react';
import TimelineItem from '../../../components/TimelineItem';

const timelineEvents = [
    [
        {
            time: '10:00 AM',
            title: 'Opening Ceremony',
            description: 'The fest begins with a grand opening ceremony.',
        },
        {
            time: '11:00 AM',
            title: 'Keynote Speech',
            description: 'A keynote speech by our guest of honor.',
        },
        {
            time: '01:00 PM',
            title: 'Lunch Break',
            description: 'Enjoy a variety of delicious food options.',
        },
        {
            time: '02:00 PM',
            title: 'Workshops',
            description: 'Attend various workshops on different topics.',
        },
        {
            time: '05:00 PM',
            title: 'Panel Discussion',
            description: 'Engage in an insightful panel discussion with experts.',
        },
        {
            time: '07:00 PM',
            title: 'Closing Ceremony',
            description: 'The fest concludes with a closing ceremony and awards.',
        }],
    [
        {
            time: '10:00 AM',
            title: 'Opening Ceremony',
            description: 'The fest begins with a grand opening ceremony.',
        },
        {
            time: '11:00 AM',
            title: 'Keynote Speech',
            description: 'A keynote speech by our guest of honor.',
        },
        {
            time: '01:00 PM',
            title: 'Lunch Break',
            description: 'Enjoy a variety of delicious food options.',
        },
        {
            time: '02:00 PM',
            title: 'Workshops',
            description: 'Attend various workshops on different topics.',
        },
        {
            time: '05:00 PM',
            title: 'Panel Discussion',
            description: 'Engage in an insightful panel discussion with experts.',
        },
        {
            time: '07:00 PM',
            title: 'Closing Ceremony',
            description: 'The fest concludes with a closing ceremony and awards.',
        }],
    [
        {
            time: '10:00 AM',
            title: 'Opening Ceremony',
            description: 'The fest begins with a grand opening ceremony.',
        },
        {
            time: '11:00 AM',
            title: 'Keynote Speech',
            description: 'A keynote speech by our guest of honor.',
        },
        {
            time: '01:00 PM',
            title: 'Lunch Break',
            description: 'Enjoy a variety of delicious food options.',
        },
        {
            time: '02:00 PM',
            title: 'Workshops',
            description: 'Attend various workshops on different topics.',
        },
        {
            time: '05:00 PM',
            title: 'Panel Discussion',
            description: 'Engage in an insightful panel discussion with experts.',
        },
        {
            time: '09:00 PM',
            title: 'Closing Ceremony',
            description: 'The fest concludes with a closing ceremony and awards.',
        }]
];
const Timeline = () => {
    const [currentDay, setCurrentDay] = useState(0);

    const handleDayChange = (dayIndex) => {
        setCurrentDay(dayIndex);
    };

    return (
        <div className='flex flex-col'>
            <div className="flex justify-center gap-4 my-6">
                {timelineEvents.map((_, index) => (
                    <button
                        key={index}
                        className={`mt-5 mr-6 lg:mt-0 border-2 rounded-full border-white-500 px-6 py-2 text-white-500 font-semibold ${currentDay === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => handleDayChange(index)}
                    >
                        Day {index + 1}
                    </button>
                ))}
            </div>
            <div className="max-w-2xl mx-auto my-10 p-5 bg-dark-soft rounded-lg shadow-lg shadow-white gap-y-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Fest Day {currentDay + 1}</h2>
                <div className="border-l-4 border-r-4 border-white px-4">
                    {timelineEvents[currentDay].map((event, index) => (
                        <TimelineItem
                            key={index}
                            time={event.time}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Timeline;

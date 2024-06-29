import React from 'react';
import TimelineItem from '../../../components/TimelineItem';

const timelineEvents = [
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
    },
];

const Timeline = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <div className="max-w-2xl mx-auto my-10 p-5 bg-dark-soft rounded-lg shadow-lg shadow-white gap-y-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Fest Day-1</h2>
                <div className="border-l-4 border-r-4 border-white px-4">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem
                            key={index}
                            time={event.time}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-2xl mx-auto my-10 p-5 bg-dark-soft rounded-lg shadow-lg shadow-white gap-y-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Fest Day-2</h2>
                <div className="border-l-4 border-r-4 border-white px-4">
                    {timelineEvents.map((event, index) => (
                        <TimelineItem
                            key={index}
                            time={event.time}
                            title={event.title}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-2xl mx-auto my-10 p-5 bg-dark-soft rounded-lg shadow-lg shadow-white gap-y-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Fest Day-3</h2>
                <div className="border-l-4 border-r-4 border-white px-4">
                    {timelineEvents.map((event, index) => (
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

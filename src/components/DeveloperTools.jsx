import React from 'react';
import developer from '../assets/developer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Card = ({ icon, title, description, link, routing }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-96 md:h-44">
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={icon} className="text-2xl mr-4 text-amber-700" />
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
            </div>
            <div>
                <p className="text-gray-600 pl-12">{description}</p>
            </div>
            <a href={link} className="text-blue-500 font-bold pl-12 hover:text-blue-700 mt-2 block">
                {routing}
            </a>
        </div>
    );
};

function DeveloperTools() {
    const cardData = [
        {
            icon: faGlobe,
            title: 'Demo Portal',
            description: 'Explore PayPal product experiences from the customer\'s perspective.',
            link: '#',
            routing: 'View Demo',
        },
        {
            icon: faCode,
            title: 'API Executor',
            description: 'Try out PayPal API requests and responses in multiple programming languages.',
            link: '#',
            routing: 'Try APIs',
        },
        {
            icon: faTools,
            title: 'Sandbox Testing Guide',
            description: 'Learn how to test and go live with your integration with the PayPal Sandbox.',
            link: '#',
            routing: 'Learn More',
        },
    ];

    return (
        <div className="bg-orange-50 flex flex-col justify-center py-20 px-8 md:px-16 lg:px-32">
            <h1 className="text-3xl font-bold mb-8 text-center pl-20 mt-10 md:mt-20 lg:text-left">Developer Tools & Resources</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <img src={developer} alt="developer" className="max-w-[80%] mx-auto" />
                </div>
                <div className="flex-1 flex flex-col gap-8">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            routing={card.routing}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default DeveloperTools;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// Card component
const Card = ({ heading, title, paragraph, listItems }) => {
    return (
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden">
            <div className="bg-teal-100 h-40 rounded-t-lg relative">
                <div className="absolute bg-emerald-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold p-3 rounded-full">
                    {heading}
                </div>
            </div>
            <div className="bg-white shadow-md rounded-b-lg p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{paragraph}</p>
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index} className="text-blue-500 font-bold mb-2">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Api_SDK component
const Api_SDK = () => {
    const cardData = [
        {
            heading: 'APIs',
            title: 'APIs',
            paragraph: 'PayPal offers APIs for new and legacy integration',
            listItems: ['REST API', 'SOAP API', 'Braintree GrapQL API'],
        },
        {
            heading: 'SDKs',
            title: 'SDKs',
            paragraph: 'Try our SDKs to streamline the integration ',
            listItems: ['Mobile SDK', 'Web SDK', 'Desktop SDK'],
        },
        {
            heading: 'WH',
            title: 'Event Notifications',
            paragraph: 'This is the paragraph for the Event Notifications card.',
            listItems: ['Order Notifications', 'Subscription Updates', 'Alerts'],
        },
    ];

    return (
        <div className="bg-slate-50 bg-auto pt-10 pb-20 ">
            <h1 className="text-3xl md:text-5xl font-semibold text-center pl-20 mt-10 md:mt-20 lg:text-left">Explore our APIs & SDKs</h1>
            <div className="flex flex-wrap justify-center gap-8 mt-20 md:mt-20">
                <div className='px-8 md:px-20 flex flex-col md:flex-row gap-8'>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            heading={card.heading}
                            title={card.title}
                            paragraph={card.paragraph}
                            listItems={card.listItems}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-center mt-10 md:mt-20'>
                <FontAwesomeIcon icon={faGithub} className='text-3xl' />
                <p className='text-lg text-center mt-2'>To Browse PayPal SDKs see our GitHub library. <span className='text-blue-600'>Learn More</span></p>
            </div>
        </div>
    );
};

export default Api_SDK;
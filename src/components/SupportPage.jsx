import React from 'react';
import Confused from '../assets/confused.png';

const SupportPage = () => {
    return (
        <div className="bg-white py-20 px-8 md:px-16 lg:px-32">
            <div className="flex flex-col md:flex-row items-center justify-between gap-20  ">
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <h1 className="text-5xl font-semibold text-center md:text-left">Looking for something else?</h1>
                    <p className="mb-8 text-center md:text-left">
                        If you need additional help, check out our support articles, community resources, and more.
                    </p>
                    <button className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-40 mx-auto md:mx-0">
                        Find support
                    </button>
                </div>
                <div className="hidden md:block md:size-80">
                    <img src={Confused} alt="Confused" className="size-96 ml-10" />
                </div>
            </div>
            <div className="flex flex-row md:flex-row gap-4 justify-center md:justify-start mt-8">
                <a href='/' className="font-bold">
                    FAQs
                </a>
                <a href="#" className="font-bold">
                    Community
                </a>
                <a href="#" className="font-bold">
                    Blog
                </a>
                <a href="#" className="font-bold">
                    Docs Archive
                </a>
            </div>
        </div>

    );
};

export default SupportPage;
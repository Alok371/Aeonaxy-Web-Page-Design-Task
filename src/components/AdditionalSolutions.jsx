import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faNewspaper, faIdCard } from '@fortawesome/free-solid-svg-icons';

function AdditionalSolutions() {
    return (
        <div className='pt-10 pb-10 md:pt-20 md:pb-20'>
            <h1 className="text-3xl md:text-5xl font-semibold text-center pl-20 mt-10 md:mt-10 lg:text-left">Additional Solutions</h1>
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                {/* Disputes */}
                <div className='px-4 md:px-20 mt-5 md:mt-10'>
                    <div className='flex mt-4 md:mt-8 gap-2'>
                        <FontAwesomeIcon className='text-lg md:text-xl text-blue-500' icon={faFlag} />
                        <h1 className='text-lg md:text-2xl font-semibold'>Disputes</h1>
                    </div>
                    <p className='text-sm md:text-base text-slate-600 mt-2'>Automate your dispute management, from initial claim to final resolution.</p>
                    <ul className='mt-2 md:mt-3 flex flex-wrap gap-4'>
                        <li className='text-sm md:text-base text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>

                {/* Reporting */}
                <div className='px-4 md:px-20 mt-5 md:mt-10'>
                    <div className='flex mt-4 md:mt-8 gap-2'>
                        <FontAwesomeIcon className='text-lg md:text-xl text-blue-500' icon={faNewspaper} />
                        <h1 className='text-lg md:text-2xl font-semibold'>Reporting</h1>
                    </div>
                    <p className='text-sm md:text-base text-slate-600 mt-2'>Get transaction-level insights to help manage your day-to-day operations.</p>
                    <ul className='mt-2 md:mt-3 flex flex-wrap gap-4'>
                        <li className='text-sm md:text-base text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>

                {/* Identity */}
                <div className='px-4 md:px-20 mt-5 md:mt-10'>
                    <div className='flex mt-4 md:mt-8 gap-2'>
                        <FontAwesomeIcon className='text-lg md:text-xl text-blue-500' icon={faIdCard} />
                        <h1 className='text-lg md:text-2xl font-semibold'>Identity</h1>
                    </div>
                    <p className='text-sm md:text-base text-slate-600 mt-2'>Let your customers log in to your website using their PayPal credentials.</p>
                    <ul className='mt-2 md:mt-3 flex flex-wrap gap-4'>
                        <li className='text-sm md:text-base text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AdditionalSolutions;

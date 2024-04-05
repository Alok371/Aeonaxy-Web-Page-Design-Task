import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faNewspaper, faIdCard } from '@fortawesome/free-solid-svg-icons';

function AdditionalSolutions() {
    return (
        <div className='pt-20 pb-20'>
            <h1 className='text-5xl font-semibold pl-20 mt-10'>Additional Solutions</h1>
            <div className='flex gap-4 justify-items-center'>
                <div className='px-20 mt-10'>
                    <div className='flex mt-8 gap-2'>
                        <FontAwesomeIcon className='text-xl text-blue-500' icon={faFlag} />
                        <h1 className='text-2xl font-semibold'>Disputes</h1>
                    </div>
                    <p className='text-slate-600 mt-2'>Automate your dispute management, from</p>
                    <p className='text-slate-600'> initial claim to final resolution</p>
                    <ul className='mt-3 flex-row gap-4'>
                        <li className='mt-3 text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>
                <div className='px-20 mt-10'>
                    <div className='flex mt-8 gap-2'>
                        <FontAwesomeIcon className='text-xl text-blue-500' icon={faNewspaper} />
                        <h1 className='text-2xl font-semibold'>Reporting</h1>
                    </div>
                    <p className='text-slate-600 mt-2'>Get transaction-level insights to help</p>
                    <p className='text-slate-600'> manage your day-to-day operations</p>
                    <ul className='mt-3 flex-row gap-4'>
                        <li className='mt-3 text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>
                <div className='px-20 mt-10'>
                    <div className='flex mt-8 gap-2'>
                        <FontAwesomeIcon className='text-xl text-blue-500' icon={faIdCard} />
                        <h1 className='text-2xl font-semibold'>Identity</h1>
                    </div>
                    <p className='text-slate-600 mt-2'>Let your customers log in to your website</p>
                    <p className='text-slate-600'> using their PayPal credentials</p>
                    <ul className='mt-3 flex-row gap-4'>
                        <li className='mt-3 text-sky-700 font-bold'>Get Started</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdditionalSolutions

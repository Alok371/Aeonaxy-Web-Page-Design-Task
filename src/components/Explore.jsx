import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Explore() {
    return (
        <div className='flex justify-center px-4 md:px-8 lg:px-18'>
            <div className='bg-slate-100 flex flex-col md:flex-row items-center gap-4 rounded-full w-full md:w-auto m-4 p-2'>
                {/* New */}
                <span className='bg-violet-400 flex gap-1 rounded-full px-2 py-1'>
                    <FontAwesomeIcon icon={faClock} className='bg-voilet-950 p-1' />
                    <h3 className='text-voilet-950'>New</h3>
                </span>
                <h3 className='text-lg text-center'>Explore our Checkout code with the interactive Integration Builder.<span className='text-blue-600'>Try it now</span></h3>
            </div>
            {/* Feedback */}
            <div className='bg-slate-400 -rotate-90 h-8 mb-0 mt-5 font-semibold p-0 absolute right-0'>
                <h2 className='p-1'>Feedback</h2>
            </div>
        </div>
    )
}

export default Explore

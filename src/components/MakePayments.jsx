import React from 'react';
import MakePayment from '../assets/MakePayment.png';

function MakePayments() {
    return (
        <div className='bg-slate-50 bg-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start p-4 md:p-40'>
            <div className='max-w-xs md:max-w-none'>
                <img src={MakePayment} alt='' className='h-auto w-full md:max-h-90 md:w-96' />
            </div>
            <div className='mt-4 md:mt-0'>
                <h1 className='text-4xl md:text-5xl font-sans font-semibold'>Make Payments</h1>
                <h2 className='text-2xl md:text-3xl font-sans font-semibold mt-4 md:mt-10'>Payouts</h2>
                <div className='mt-4 md:mt-6 text-slate-600'>
                    <p>Code a solution to send mass payments to</p>
                    <p>contract workers, claimants, freelancers, and</p>
                    <p>sellers around the world</p>
                </div>
                <h2 className='text-xl md:text-2xl text-blue-600 font-sans font-bold mt-4 md:mt-6'>Get Started</h2>
            </div>
        </div>
    );
}

export default MakePayments;

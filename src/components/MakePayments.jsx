import React from 'react'
import MakePayment from '../assets/MakePayment.png'
function MakePayments() {
    return (
        <div className='bg-slate-200 bg-auto flex gap-4 justify-center max-h-fit'>
            <div className='h-90 w-96 m-40'>
                <img src={MakePayment} alt=''></img>
            </div>
            <div className='mr-20'>
                <h1 className='text-5xl font-sans font-semibold mt-40'>Make Payments</h1>
                <h2 className='text-3xl font-sans font-semibold mt-10'>Payouts</h2>
                <div className='mt-6 text-slate-600'>
                    <p>Code a solution to send mass payments to</p>
                    <p>contract workers, claimants, freelancers, and</p>
                    <p>sellers around the world</p>
                </div>
                <h2 className='text-2xl text-blue-600 font-sans font-bold mt-6'>Get Started</h2>

            </div>
        </div>
    )
}

export default MakePayments

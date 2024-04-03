import React from 'react'

function Home() {
    return (
        <div className='bg-blue-950 font-sans flex flex-col gap-8 p-20 content-evenly'>
            <div className='text-blue-200 text-2xl px-3'>PayPal Developer</div>
            <div className='px-3'>
                <div className='text-white font-semibold text-5xl leading-normal'>Build a payment solution thats right for you with </div>
                <div className='text-white font-semibold text-5xl'>PayPal for Developers</div>
            </div>
            <div className='px-3'>
                <div className='text-white text-lg tracking-wide'>Whether you're building an online, mobile or in-person payment solution, create a PayPal Developer account and</div>
                <div className='text-white text-lg tracking-wide'>find the resources you need to test & go live.</div>
            </div>
            <div className='px-3'>
                <button className='bg-yellow-500 font-medium text-xl text-inherit rounded-full px-8 py-3'>Get API Credentials</button>
            </div>

        </div>
    )
}

export default Home

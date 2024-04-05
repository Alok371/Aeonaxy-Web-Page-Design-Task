import React from 'react';

function Home() {
    return (
        <div className="bg-blue-950 font-sans flex flex-col gap-8 p-20 md:p-12 lg:p-20 content-evenly">
            <div className="text-blue-200 text-2xl px-3 md:text-3xl lg:text-4xl">PayPal Developer</div>
            <div className="px-3">
                <div className="text-white font-semibold leading-normal text-2xl md:flex md:flex-col md:text-4xl lg:text-5xl">
                    Build a payment solution that's right for you with <br className="hidden md:inline" /> PayPal for Developers
                </div>
            </div>

            <div className="px-3">
                <div className="text-white text-lg tracking-wide md:text-base lg:text-lg">
                    Whether you're building an online, mobile or in-person payment solution, create a PayPal Developer account and
                </div>
                <div className="text-white text-lg tracking-wide md:text-base lg:text-lg">
                    find the resources you need to test & go live.
                </div>
            </div>
            <div className="px-3">
                <button className="bg-yellow-500 font-medium text-xl text-inherit rounded-full px-8 py-3 md:text-base lg:text-xl">
                    Get API Credentials
                </button>
            </div>
        </div>
    );
}

export default Home;
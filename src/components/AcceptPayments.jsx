import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUserFriends, faWallet, faHome } from '@fortawesome/free-solid-svg-icons';
import payment from '../assets/payment.jpg';

function AcceptPayments() {
    return (
        <div className='p-8 sm:p-20 font-sans'>
            <h1 className='text-3xl sm:text-5xl font-semibold ml-4 sm:ml-10'>Accept Payments</h1>
            <div className='flex flex-col sm:flex-row mt-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-10'>
                    {/* grid 1 */}
                    <div className='mb-8 sm:mb-0'>
                        <div className='flex mt-4 sm:mt-8 gap-2'>
                            <FontAwesomeIcon className='text-xl sm:text-2xl text-blue-500' icon={faLaptop} />
                            <h1 className='text-lg sm:text-2xl font-semibold'>Online</h1>
                        </div>
                        <p className='text-sm sm:text-base text-slate-600 mt-2'>Build a scalable checkout solution for</p>
                        <p className='text-sm sm:text-base text-slate-600'> web and mobile with our REST APIs</p>
                        <p className='text-sm sm:text-base text-slate-600'>JavaScript SDK</p>
                        <ul className='mt-2 sm:mt-4 flex flex-wrap sm:flex-row gap-2 sm:gap-4'>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Checkout</li>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Subscription</li>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Invoicing</li>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Donate</li>
                        </ul>
                    </div>
                    {/* grid 2 */}
                    <div className='ml-0 sm:ml-20'>
                        <div className='flex mt-4 sm:mt-8 gap-4'>
                            <FontAwesomeIcon className='text-xl sm:text-2xl text-blue-500' icon={faUserFriends} />
                            <h1 className='text-lg sm:text-2xl font-semibold'>In-Person</h1>
                        </div>
                        <p className='text-sm sm:text-base text-slate-600 mt-2'>Set up a ready-made point-of-sale</p>
                        <p className='text-sm sm:text-base text-slate-600'> solution or integrate a payment solution</p>
                        <p className='text-sm sm:text-base text-slate-600'>to your service</p>
                        <ul className='mt-2 sm:mt-4 flex flex-wrap sm:flex-row gap-2 sm:gap-4'>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Point of Sale Solution</li>
                        </ul>
                    </div>
                    {/* grid 3 */}
                    <div className='mt-8 sm:mt-0'>
                        <div className='flex mt-4 sm:mt-8 gap-2'>
                            <FontAwesomeIcon className='text-xl sm:text-2xl text-blue-500' icon={faWallet} />
                            <h1 className='text-lg sm:text-2xl font-semibold'>Multiparty</h1>
                        </div>
                        <p className='text-sm sm:text-base text-slate-600 mt-2'>Create an onboarding & payments</p>
                        <p className='text-sm sm:text-base text-slate-600'> solution for your marketplace or</p>
                        <p className='text-sm sm:text-base text-slate-600'>payments platform</p>
                        <ul className='mt-2 sm:mt-4 flex flex-wrap sm:flex-row gap-2 sm:gap-4'>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Build a Market Place</li>
                        </ul>
                    </div>
                    {/* grid 4 */}
                    <div className='ml-0 sm:ml-20 mt-8 sm:mt-0'>
                        <div className='flex mt-4 sm:mt-8 gap-4'>
                            <FontAwesomeIcon className='text-xl sm:text-2xl text-blue-500' icon={faHome} />
                            <h1 className='text-lg sm:text-2xl font-semibold'>3rd Party</h1>
                        </div>
                        <p className='text-sm sm:text-base text-slate-600 mt-2'>Integrate PayPal with a 3rd-party</p>
                        <p className='text-sm sm:text-base text-slate-600'> shopping cart or plugin</p>
                        <ul className='mt-2 sm:mt-4 flex flex-wrap sm:flex-row gap-2 sm:gap-4'>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Partners</li>
                            <li className='mt-2 sm:mt-3 text-xs sm:text-sm text-sky-700 font-bold'>Plugins</li>
                        </ul>
                    </div>
                </div>
                <div className='p-8 sm:p-20'>
                    <img src={payment} alt='payment' className='h-72 sm:h-96 m-auto'></img>
                </div>
            </div>
        </div>
    );
}

export default AcceptPayments;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import payment from '../assets/payment.jpg'

function AcceptPayments() {
    return (
        <div className='p-20 font-sans'>
            <h1 className='text-5xl font-semibold ml-10'>Accept Payments</h1>
            <div className='flex mt-8'>
                <div className='grid grid-cols-2 px-10'>
                    {/* grid 1 */}
                    <div>
                        <div className='flex mt-8 gap-2'>
                            <FontAwesomeIcon className='text-xl' icon={faLaptop} />
                            <h1 className='text-2xl font-semibold'>Online</h1>
                        </div>
                        <p className='text-slate-600 mt-2'>Build a scalable checkout solution for</p>
                        <p className='text-slate-600'> web and mobile with our REST APIs</p>
                        <p className='text-slate-600'>JavaScript SDK</p>
                        <ul className='mt-3 flex-row gap-4'>
                            <li className='mt-3 text-sky-700 font-bold'>Checkout</li>
                            <li className='mt-3 text-sky-700 font-bold'>Subscription</li>
                            <li className='mt-3 text-sky-700 font-bold'>Invoicing</li>
                            <li className='mt-3 text-sky-700 font-bold'>Donate</li>
                        </ul>
                    </div>
                    {/* grid 2 */}
                    <div className='ml-20'>
                        <div className='flex mt-8 gap-4'>
                            <FontAwesomeIcon className='text-xl' icon={faUserFriends} />
                            <h1 className='text-2xl font-semibold'>In-Person</h1>
                        </div>
                        <p className='text-slate-600 mt-2'>Set up a ready-made point-of-sale</p>
                        <p className='text-slate-600'> solution or integrate a payment solution</p>
                        <p className='text-slate-600'>to your service</p>
                        <ul className='mt-3 flex-row gap-4'>
                            <li className='mt-3 text-sky-700 font-bold'>Point of Sale Solution</li>

                        </ul>
                    </div>
                    {/* grid 3 */}
                    <div>
                        <div className='flex mt-8 gap-2'>
                            <FontAwesomeIcon className='text-xl' icon={faLaptop} />
                            <h1 className='text-2xl font-semibold'>Online</h1>
                        </div>
                        <p className='text-slate-600 mt-2'>Build a scalable checkout solution for</p>
                        <p className='text-slate-600'> web and mobile with our REST APIs</p>
                        <p className='text-slate-600'>JavaScript SDK</p>
                        <ul className='mt-3 flex-row gap-4'>
                            <li className='mt-3 text-sky-700 font-bold'>Checkout</li>
                            <li className='mt-3 text-sky-700 font-bold'>Subscription</li>
                            <li className='mt-3 text-sky-700 font-bold'>Invoicing</li>
                            <li className='mt-3 text-sky-700 font-bold'>Donate</li>
                        </ul>
                    </div>
                    {/* grid 4 */}
                    <div className='ml-20'>
                        <div className='flex mt-8 gap-4'>
                            <FontAwesomeIcon className='text-xl' icon={faUserFriends} />
                            <h1 className='text-2xl font-semibold'>In-Person</h1>
                        </div>
                        <p className='text-slate-600 mt-2'>Set up a ready-made point-of-sale</p>
                        <p className='text-slate-600'> solution or integrate a payment solution</p>
                        <p className='text-slate-600'>to your service</p>
                        <ul className='mt-3 flex-row gap-4'>
                            <li className='mt-3 text-sky-700 font-bold'>Point of Sale Solution</li>

                        </ul>
                    </div>


                </div>
                <div className='p-20'>
                    <img src={payment} alt='payment' className='h-96 m-auto'></img>
                </div>
            </div>

        </div>
    )
}

export default AcceptPayments

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <navbar className='shadow-md'>
            <div className='flex p-3 items-center justify-between'>

                {/* Left Side content */}
                <div className='flex gap-5'>
                    {/* Logo */}
                    <div className='p-2'>
                        <Link to='/' className=''>
                            <span className='text-3xl text-sky-500 font-bold italic'>Pay</span>
                            <span className='text-3xl font-bold italic'>Pal</span>
                            <span className='text-lg px-2 text-slate-500 font-thin italic'>Developer</span>
                        </Link>
                    </div>
                    {/* Search Bar */}
                    <div className='p-2'>
                        <form className='border-sky-600 border px-1 py-2 rounded-3xl flex items-center gap-1'>
                            <button>
                                <FontAwesomeIcon icon={faSearch} className='text-blue-400 outline-none' />
                            </button>
                            <input type='text' placeholder='Search' className='focus:outline-none w-16 sm:w-40' />
                        </form>
                    </div>
                </div>

                {/* Left Side content */}
                <div className='flex gap-8'>
                    {/* Routes */}
                    <div className='flex gap-6 justify-end px-3 py-2'>
                        <Link to='/'>
                            <li className='hidden sm:inline text-black font-bold hover:underline cursor-pointer'>Docs</li>
                        </Link>
                        <Link to='/'>
                            <li className='hidden sm:inline text-black font-bold hover:underline cursor-pointer'>APIs & SDK</li>
                        </Link>
                        <Link to='/'>
                            <li className='hidden sm:inline text-black font-bold hover:underline cursor-pointer'>Tools</li>
                        </Link>
                        <Link to='/'>
                            <li className='hidden sm:inline text-black font-bold hover:underline cursor-pointer'>Support</li>
                        </Link>
                    </div>
                    {/* Login Button */}
                    <button className='bg-blue-950 text-white rounded-full px-5 py-2 '>Login to Dashboard</button>
                </div>
            </div>
        </navbar>
    );
}

export default Navbar;

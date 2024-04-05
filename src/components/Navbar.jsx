import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='shadow-md'>
            <div className='flex justify-between items-center p-3'>
                {/* Logo */}
                <div className='flex gap-5'>
                    <div>
                        <span className='text-3xl text-sky-500 font-bold italic'>Pay</span>
                        <span className='text-3xl font-bold italic'>Pal</span>
                        <span className='text-lg px-2 text-slate-500 font-thin italic'>Developer</span>
                    </div>
                    {/* Search Bar */}
                    <div className='hidden sm:block'>
                        <form className='border-sky-600 border px-1 py-2 rounded-3xl flex items-center gap-1'>
                            <button>
                                <FontAwesomeIcon icon={faSearch} className='text-blue-400 outline-none' />
                            </button>
                            <input type='text' placeholder='Search' className='focus:outline-none w-16 sm:w-40' />
                        </form>
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className='sm:hidden'>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <FontAwesomeIcon icon={faBars} className='text-black text-xl' />
                    </button>
                </div>

                {/* Routes */}
                <div className={`sm:flex ${showMenu ? 'block' : 'hidden'} sm:items-center`}>
                    <ul className='sm:flex gap-6 justify-end px-3 py-2'>
                        <li className='text-black font-bold hover:underline cursor-pointer'>Docs</li>
                        <li className='text-black font-bold hover:underline cursor-pointer'>APIs & SDK</li>
                        <li className='text-black font-bold hover:underline cursor-pointer'>Tools</li>
                        <li className='text-black font-bold hover:underline cursor-pointer'>Support</li>
                    </ul>
                    {/* Login Button */}
                    <button className='bg-blue-950 text-white rounded-full px-5 py-2'>Login to Dashboard</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

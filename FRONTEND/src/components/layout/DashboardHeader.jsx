import React, { useState } from 'react';
import ProfileIcon from '../ui/ProfileIcon';

const HomeHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white h-auto sticky top-0 lg:shadow z-50">
            <nav className="flex flex-row items-center justify-between bg-white py-4 px-5 border-b border-gray-200">
                {/* Logo */}
                <div className="flex flex-row items-center gap-1">
                    <img src="TrustSphereBankIcon1.png" className="w-16" />
                    <a href="/dashboard" className="text-2xl font-semibold">TrustSphereBank</a>
                </div>
                {/* Navigation Links */}
                <div
                    className={`absolute shadow lg:shadow-none lg:static left-0 w-full lg:w-auto ${menuOpen ? 'bg-white/100' : 'bg-white'
                        } lg:bg-white lg:flex lg:flex-row lg:items-center gap-5 p-5 lg:p-0 transition-transform transform ${menuOpen ? 'md:translate-y-[122px] translate-y-[122px]' : '-translate-y-full'
                        } lg:translate-y-0`}
                >

                    <ul className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        {/* <li>
                            <a href="/account" className="text-black font-semibold hover:text-blue-400">Account</a>
                        </li> */}
                        <li>
                            <a href="/transaction" className="text-black font-semibold hover:text-blue-400">Transaction</a>
                        </li>
                        <li>
                            <a href="/payments" className="text-black font-semibold hover:text-blue-400">Payments</a>
                        </li>
                        <li>
                            <a href="/history" className="text-black font-semibold hover:text-blue-400">History</a>
                        </li>
                    </ul>
                </div>
                {/* Buttons and Actions */}
                <div className="flex items-center gap-4">
                    <a href="/account" className='flex items-center gap-2 border border-blue-600 bg-gray-50 rounded-md shadow px-4 py-2'>
                        <button>Account</button>
                        <ProfileIcon />
                    </a>
                    <button onClick={toggleMenu} className="lg:hidden font-bold text-1xl w-12 shadow p-2 rounded">
                        {menuOpen ? 'X' : 'III'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;

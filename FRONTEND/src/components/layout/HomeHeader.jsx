import React, { useState } from 'react';

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
                    <a href="/" className="text-2xl font-semibold">TrustSphereBank</a>
                </div>
                {/* Navigation Links */}
                <div
                    className={`absolute shadow lg:shadow-none lg:static left-0 w-full lg:w-auto ${menuOpen ? 'bg-white/100' : 'bg-white'
                        } lg:bg-white lg:flex lg:flex-row lg:items-center gap-5 p-5 lg:p-0 transition-transform transform ${menuOpen ? 'md:translate-y-[140px] translate-y-[175px]' : '-translate-y-full'
                        } lg:translate-y-0`}
                >

                    <ul className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <li>
                            <a href="/home" className="text-black font-semibold hover:text-blue-400">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="text-black font-semibold hover:text-blue-400">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" className="text-black font-semibold hover:text-blue-400">Contact Us</a>
                        </li>
                        <li>
                            <a href="/service" className="text-black font-semibold hover:text-blue-400">Services</a>
                        </li>
                        <button className="md:hidden bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
                            <a href="/login">Log In</a>
                        </button>
                    </ul>
                </div>
                {/* Buttons and Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
                        <a href="/login">Log In</a>
                    </button>
                    <button onClick={toggleMenu} className="lg:hidden font-bold text-1xl w-12 shadow p-2 rounded">
                        {menuOpen ? 'X' : 'III'}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default HomeHeader;

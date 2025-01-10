import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full p-10 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Pages Section */}
                <div>
                    <h1 className="text-xl font-bold mb-4">Pages</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="text-sm text-gray-400 hover:text-blue-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-sm text-gray-400 hover:text-blue-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-sm text-gray-400 hover:text-blue-300">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="text-sm text-gray-400 hover:text-blue-300">
                                Services
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h1 className="text-xl font-bold mb-4">Contact Us</h1>
                    <ul className="space-y-2">
                        <li>
                            <span className="text">Email: </span>
                            <a href="mailto:ajamanka72@gmail.com" className="hover:text-blue-300 text-gray-400 text-sm ">
                                ajamanka72@gmail.com
                            </a>
                        </li>
                        <li>
                            <span className="text">Phone: </span>
                            <a href="tel:+2205018946" className="hover:text-blue-300 text-gray-400 text-sm">
                                +(220) 501 8946
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h1 className="text-xl font-bold mb-4">Follow Us</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-400 hover:text-blue-300">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Additional Links */}
                <div>
                    <h1 className="text-xl font-bold mb-4">Quick Links</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="/privacy" className="text-sm text-gray-400 hover:text-blue-300">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="text-sm text-gray-400 hover:text-blue-300">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="/support" className="text-sm text-gray-400 hover:text-blue-300">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
                &copy; 2024 TrustSphereBank. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

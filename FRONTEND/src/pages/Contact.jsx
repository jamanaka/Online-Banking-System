import React from 'react';
import HomeHeader from '@/components/layout/HomeHeader';
import { Button } from '@/components/ui/Button';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Footer from '@/components/layout/Footer';

const Contact = () => {
    return (
        <div className="bg-[#F8F9FA] min-h-screen flex flex-col">
            <HomeHeader />
            <div className="flex flex-col md:flex-row justify-center items-center md:min-h-screen container mx-auto px-4">
                {/* Contact Us Header Section */}
                <div className="flex-1 hidden md:flex flex-col justify-center items-center bg-indigo-950 text-center p-8 rounded-lg">
                    <p className="text-white text-5xl md:text-7xl font-bold mb-4">Contact Us</p>
                    <p className="text-white text-lg md:text-xl max-w-md">
                        We'd love to hear from you! Whether you have a question or need assistance,
                        our team is here to help. Reach out to us anytime.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        {/* Social Media Icons */}
                        <a href="#" className="text-white hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="h-8 w-8" />
                        </a>
                        <a href="#" className="text-white hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className="h-8 w-8" />
                        </a>
                        <a href="#" className="text-white hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon className="h-8 w-8" />
                        </a>
                    </div>
                </div>

                {/* Form Section */}
                <form
                    action="#"
                    method="post"
                    className="bg-white flex-1 p-6 sm:p-8 md:p-10 rounded-lg shadow w-full max-w-lg my-5 md:mx-5"
                >
                    {/* Full Name Input */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="fullName" className="text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your full name"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none shadow focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none shadow focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="message" className="text-gray-700 font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            placeholder="Enter the message to send"
                            className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none shadow focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;

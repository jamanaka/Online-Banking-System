import React from 'react';
import HomeHeader from '@/components/layout/HomeHeader';
import Footer from '@/components/layout/Footer';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <HomeHeader />

            {/* Hero Section */}
            <div className="bg-indigo-950 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    We are dedicated to delivering exceptional solutions that transform the way you experience technology.
                </p>
            </div>

            {/* Mission Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600">
                        Our mission is to create innovative products that empower individuals and businesses to achieve their goals.
                        We strive for excellence in every aspect of our work and prioritize our customers’ success above all.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member */}
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <div className="h-32 w-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        {/* Team Member */}
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <div className="h-32 w-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
                            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                            <p className="text-gray-600">CTO</p>
                        </div>
                        {/* Team Member */}
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <div className="h-32 w-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
                            <p className="text-gray-600">Marketing Lead</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
};

export default About;

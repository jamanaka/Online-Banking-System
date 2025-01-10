import Footer from '@/components/layout/Footer';
import HomeHeader from '@/components/layout/HomeHeader';
import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <HomeHeader />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <div className="w-full bg-indigo-950 my-2">
                    <section className="flex flex-row items-center justify-center gap-5 p-12 lg:px-32">
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-left">
                            <h1 className="text-4xl lg:text-6xl text-white font-bold leading-tight">
                                Banking Made Simple, Secure, and Convenient
                            </h1>
                            <p className="mt-6 border-t-2 text-lg lg:text-2xl text-gray-300">
                                Manage your finances anytime, anywhere. Join us today!
                            </p>
                            <button className="bg-gray-200 text-blue-900 px-6 py-2 mt-3 rounded shadow hover:bg-gray-300">
                                <a href="/register">Get Started</a>
                            </button>
                        </div>

                        {/* Image */}
                        <div className="lg:w-1/2">
                            <img
                                src="/image.jpg"
                                alt="Banking Illustration"
                                className="w-full rounded-lg shadow-lg hidden md:block"
                            />
                        </div>
                    </section>
                </div>

                {/* Services Section */}
                <section className="bg-white py-12">
                    <div className="container mx-auto px-6 lg:px-32">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                            Our Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 border rounded shadow-sm bg-gray-50 text-center">
                                <h3 className="text-xl font-semibold">Online Banking</h3>
                                <p className="mt-4 text-gray-600">
                                    Access your accounts and perform transactions from the comfort of your home.
                                </p>
                            </div>
                            <div className="p-6 border rounded shadow-sm bg-gray-50 text-center">
                                <h3 className="text-xl font-semibold">Mobile Payments</h3>
                                <p className="mt-4 text-gray-600">
                                    Make quick and secure payments on the go using our mobile app.
                                </p>
                            </div>
                            <div className="p-6 border rounded shadow-sm bg-gray-50 text-center">
                                <h3 className="text-xl font-semibold">Personalized Support</h3>
                                <p className="mt-4 text-gray-600">
                                    Our dedicated team is here to assist you 24/7 with all your banking needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-gray-200 py-12">
                    <div className="container mx-auto px-6 lg:px-32">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
                            What Our Customers Say
                        </h2>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="bg-white p-6 rounded shadow">
                                <p className="italic text-gray-700">
                                    "The best banking experience I've ever had. Highly recommended!"
                                </p>
                                <p className="mt-4 font-bold text-blue-900">- Sarah T.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <p className="italic text-gray-700">
                                    "Their mobile app is incredibly intuitive and easy to use."
                                </p>
                                <p className="mt-4 font-bold text-blue-900">- John D.</p>
                            </div>
                            <div className="bg-white p-6 rounded shadow">
                                <p className="italic text-gray-700">
                                    "Exceptional customer service and secure online banking."
                                </p>
                                <p className="mt-4 font-bold text-blue-900">- Emily R.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call-to-Action Section */}
                <section className="bg-indigo-950 text-white py-12">
                    <div className="container mx-auto px-6 lg:px-32 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Ready to Simplify Your Banking?
                        </h2>
                        <p className="mt-4 text-lg">
                            Open an account with us today and take control of your finances.
                        </p>
                        <button className="bg-gray-200 text-blue-900 px-6 py-2 mt-6 rounded shadow hover:bg-gray-300">
                            <a href="/register">Join Now</a>
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;

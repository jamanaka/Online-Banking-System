import Footer from '@/components/layout/Footer';
import HomeHeader from '@/components/layout/HomeHeader';
import React from 'react';

const Service = () => {
    const services = [
        { id: 1, title: 'Account Management', description: 'Manage your accounts effortlessly with 24/7 access to balance details and transaction history.' },
        { id: 2, title: 'Online Payments', description: 'Securely send and receive payments online with minimal hassle and maximum security.' },
        { id: 3, title: 'Loan Services', description: 'Apply for personal, home, or business loans with competitive interest rates.' },
        { id: 4, title: 'Investment Options', description: 'Explore investment opportunities to grow your wealth securely and efficiently.' },
        { id: 5, title: 'Customer Support', description: 'Access dedicated customer support for any assistance or queries, 24/7.' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <HomeHeader />

            {/* Main Content */}
            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Banking Services</h1>
                    <p className="text-center text-gray-600 mb-10">
                        Our banking system offers a wide range of services to make your financial management seamless and secure.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
                            >
                                <h2 className="text-xl font-semibold text-blue-800 mb-4">{service.title}</h2>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Service;

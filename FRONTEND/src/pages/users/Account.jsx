import DashboardHeader from '@/components/layout/DashboardHeader';
import React from 'react';

const Account = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="p-6 bg-white rounded-lg shadow-md mt-4">
                <h1 className="text-xl font-semibold text-gray-800">Account Details</h1>

                {/* Account Information */}
                <div className="mt-4">
                    <div className="mb-4">
                        <strong>Account Number:</strong> 123456789
                    </div>
                    <div className="mb-4">
                        <strong>Account Type:</strong> Standard
                    </div>
                    <div className="mb-4">
                        <strong>Balance:</strong> $0.00
                    </div>
                    <div className="mb-4">
                        <strong>Account Status:</strong> Active
                    </div>
                </div>

                {/* User Profile Information */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-800">User Profile</h2>
                    <div className="mb-4">
                        <strong>Name:</strong> John Doe
                    </div>
                    <div className="mb-4">
                        <strong>Email:</strong> john.doe@example.com
                    </div>
                </div>

                {/* Recent Transactions */}
                <h2 className="text-lg font-semibold text-gray-800 mt-6">Recent Transactions</h2>
                <ul className="mt-4 space-y-4">
                    <li className="flex justify-between">
                        <span>Deposit</span>
                        <span className="text-green-600">+$500.00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Withdrawal</span>
                        <span className="text-red-600">-$100.00</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Transfer</span>
                        <span className="text-blue-600">-$50.00</span>
                    </li>
                </ul>

                {/* Account Balance Progress Bar */}
                <div className="mt-6">
                    <label className="text-gray-700">Account Balance</label>
                    <div className="w-full bg-gray-300 rounded-full mt-2">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                </div>

                {/* Account Actions (Deposit, Withdraw, Transfer) */}
                <div className="mt-6 flex space-x-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Deposit</button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-md">Withdraw</button>
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-md">Transfer</button>
                </div>

                {/* Account Security Settings */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Security Settings</h2>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <span>Password:</span>
                        <button className="text-blue-600">Change</button>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Two-Factor Authentication:</span>
                        <button className="text-blue-600">Enable</button>
                    </div>
                </div>

                {/* Account Statement Download */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Account Statement</h2>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md mt-4">
                    Download Statement (PDF)
                </button>
                <button className="px-4 py-2 bg-gray-300 text-white rounded-md mt-2">
                    Download Statement (CSV)
                </button>

                {/* Loan or Credit Section */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Loan or Credit</h2>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <span>Current Loan Balance:</span>
                        <span className="text-red-600">-$2000.00</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Available Credit:</span>
                        <span className="text-green-600">$3000.00</span>
                    </div>
                </div>

                {/* Notifications Section */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Notifications</h2>
                <div className="mt-4">
                    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 mb-4">
                        <span>Important: Your password was recently changed.</span>
                    </div>
                    <div className="p-4 bg-blue-100 border-l-4 border-blue-500 mb-4">
                        <span>System Maintenance: Scheduled for Sunday at 2 AM.</span>
                    </div>
                </div>

                {/* Update Account Information Section */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Update Account Information</h2>
                <div className="mt-4">
                    <div className="flex justify-between mb-4">
                        <span>Email:</span>
                        <button className="text-blue-600">Update</button>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Phone Number:</span>
                        <button className="text-blue-600">Update</button>
                    </div>
                </div>

                {/* Account Overview */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Account Overview</h2>
                <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
                    <div className="flex justify-between">
                        <span><strong>Account Number:</strong> 123456789</span>
                        <span><strong>Balance:</strong> $0.00</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span><strong>Account Type:</strong> Standard</span>
                        <span><strong>Status:</strong> Active</span>
                    </div>
                </div>

                {/* Account Help Section */}
                <h2 className="text-lg font-semibold text-gray-800 mt-8">Account Help</h2>
                <div className="mt-4">
                    <a href="#" className="text-blue-600">FAQs</a>
                    <br />
                    <a href="#" className="text-blue-600">Customer Support</a>
                </div>
            </div>
        </div>
    );
};

export default Account;

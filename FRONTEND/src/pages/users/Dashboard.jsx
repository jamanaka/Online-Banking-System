import DashboardHeader from '@/components/layout/DashboardHeader';
import React from 'react';

const Dashboard = (balance) => {
  balance = 0;
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <DashboardHeader />

      {/* Main Body */}
      <main className="p-4 sm:p-5">
        <div className="space-y-5">
          {/* Welcome Section */}
          <section className="bg-indigo-950 text-white rounded-lg shadow-md p-4 sm:p-5">
            <h2 className="text-xl sm:text-2xl font-semibold">Welcome Back, [User]!</h2>
            <p className="mt-2 text-sm sm:text-base">
              Here's an overview of your account and recent activity. Stay on top of your finances with our powerful tools.
            </p>
          </section>

          {/* Grid Layout for Profile, Notifications, and Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Profile Summary */}
            <section className="bg-white shadow-md rounded-lg p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">Profile Summary</h2>
              <div className="space-y-2 text-sm sm:text-base text-gray-700">
                <p>Name: <span className="font-bold">John Doe</span></p>
                <p>Email: <span className="font-bold">john.doe@example.com</span></p>
                <a href="/account">
                  <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Update Profile
                  </button>
                </a>
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-white shadow-md rounded-lg p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">Notifications</h2>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="text-gray-700">
                  <span className="font-bold text-blue-600">[Dec 25]</span> Your credit card statement is ready.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-blue-600">[Dec 24]</span> Salary credited to your account.
                </li>
                <li className="text-gray-700">
                  <span className="font-bold text-blue-600">[Dec 23]</span> Your electricity bill is due tomorrow.
                </li>
              </ul>
            </section>

            {/* Account Overview */}
            <section className="md:col-span-2 bg-white shadow-md rounded-lg p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">Account Overview</h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>Account Balance: <span className="font-bold">D{balance.toFixed(2)}</span></li>
                <li>Account Type: <span className="font-bold">Savings</span></li>
                <li>Last Login: <span className="font-bold">December 25, 2024</span></li>
              </ul>
            </section>
          </div>

          {/* Quick Actions */}
          <section className="bg-white shadow-md rounded-lg p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700">
                Transfer Money
              </button>
              <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700">
                Pay Bills
              </button>
              <button className="bg-yellow-600 text-white py-3 px-4 rounded-lg hover:bg-yellow-700">
                Request Statement
              </button>
              <button className="bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700">
                Report Issue
              </button>
            </div>
          </section>

          {/* Financial Analytics */}
          <section className="bg-white shadow-md rounded-lg p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Financial Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-gray-100 rounded-lg p-4 sm:p-5">
                <h3 className="font-semibold text-lg mb-3">Monthly Spending</h3>
                <p>[Chart Placeholder - Integrate a chart library like Chart.js or Recharts]</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 sm:p-5">
                <h3 className="font-semibold text-lg mb-3">Income vs. Expenses</h3>
                <p>[Chart Placeholder - Integrate a chart library like Chart.js or Recharts]</p>
              </div>
            </div>
          </section>

          {/* Recent Transactions */}
          <section className="bg-white shadow-md rounded-lg p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-sm sm:text-base">
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Description</th>
                    <th className="p-3 border">Amount</th>
                    <th className="p-3 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Dec 25, 2024</td>
                    <td className="p-3 border">Grocery Store</td>
                    <td className="p-3 border">-$150.00</td>
                    <td className="p-3 border text-green-600">Completed</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Dec 24, 2024</td>
                    <td className="p-3 border">Salary</td>
                    <td className="p-3 border">+$5,000.00</td>
                    <td className="p-3 border text-green-600">Completed</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Dec 23, 2024</td>
                    <td className="p-3 border">Electric Bill</td>
                    <td className="p-3 border">-$120.00</td>
                    <td className="p-3 border text-red-600">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-black p-6 text-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Navigation Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <a href="/transactions" className="text-gray-400 hover:text-blue-600" aria-label="View Transactions">
              Transactions
            </a>
            <a href="/payments" className="text-gray-400 hover:text-blue-600" aria-label="Make Payments">
              Payments
            </a>
            <a href="/history" className="text-gray-400 hover:text-blue-600" aria-label="View History">
              History
            </a>
          </div>

          {/* Quick Actions Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <a href="/transactions" className="text-gray-400 hover:text-blue-600" aria-label="Transfer Money">
              Transfer Money
            </a>
            <a href="/payments" className="text-gray-400 hover:text-blue-600" aria-label="Pay Bills">
              Pay Bills
            </a>
            <a href="/transactions" className="text-gray-400 hover:text-blue-600" aria-label="Request Statement">
              Request Statement
            </a>
            <a href="/payments" className="text-gray-400 hover:text-blue-600" aria-label="Report an Issue">
              Report Issue
            </a>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <a href="mailto:ajamanka72@gmail.com" className="text-gray-400 hover:text-blue-600" aria-label="Email Us">
              Email: ajamanka72@gmail.com
            </a>
            <a href="tel:+2205018946" className="text-gray-400 hover:text-blue-600" aria-label="Call Us">
              Phone: +(220) 501 8946
            </a>
          </div>

          {/* Social Media or Additional Navigation */}
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <a href="/" className="text-gray-400 hover:text-blue-600" aria-label="Follow on Twitter">
              Twitter
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-600" aria-label="Follow on Facebook">
              Facebook
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-600" aria-label="Follow on Instagram">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TrstSphereBank. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Dashboard;

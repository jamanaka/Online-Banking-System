import React, { useState } from 'react';
import HomeHeader from '@/components/layout/HomeHeader';
import { Button } from '@/components/ui/Button';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';

const handleSubmit = async (event, setErrors, navigate) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const errors = {};

  // Client-side validations
  if (!data.firstName) errors.server = 'First Name is required';
  if (!data.lastName) errors.server = 'Last Name is required';
  if (!data.phone) errors.server = 'Phone number is required';
  if (!data.email) errors.server = 'Email is required';
  if (!data.password || data.password.length < 6) errors.server = 'Password must be at least 6 characters long';
  if (data.password !== data.confirmPassword) errors.server = 'Passwords do not match';

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      // alert('Registration Successful');
      navigate('/login');
    } else {
      setErrors({ server: result.message || 'An error occurred' });
    }
  } catch (error) {
    console.error('Error during fetch:', error);
    setErrors({ server: 'Failed to submit the form. Please try again.' });
  }
};

const Register = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // useNavigate hook inside the component

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HomeHeader />
      <main className="flex justify-center items-center h-[850px]">
        {/* Left Section */}
        <div className="flex-1 hidden md:flex items-center justify-center bg-indigo-950 p-8 h-full">
          <h1 className="text-white text-start font-bold text-5xl">
            Banking with us makes the world easier
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={(event) => handleSubmit(event, setErrors, navigate)}
            className="bg-white shadow flex flex-col space-y-4 items-center justify-center p-6 rounded-2xl w-[90%] max-w-[500px]">
            <div className="flex flex-row py-3 items-center justify-center">
              <FontAwesomeIcon
                icon={faUserPlus}
                className="text-3xl text-[#6C757D]"
              />
              <h1 className="font-bold text-2xl px-2">Register</h1>
            </div>
            {/* First Name */}
            <div className="flex flex-col w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.firstName ? 'border-red-500' : ''
                  }`}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your First Name"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
            {/* Last Name */}
            <div className="flex flex-col w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.lastName ? 'border-red-500' : ''
                  }`}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
            {/* Phone */}
            <div className="flex flex-col w-full">
              <label htmlFor="phone">Phone Number</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.phone ? 'border-red-500' : ''
                  }`}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your Phone Number"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
            {/* Email */}
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.email ? 'border-red-500' : ''
                  }`}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            {/* Password */}
            <div className="flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.password ? 'border-red-500' : ''
                  }`}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div className="flex flex-col w-full">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.confirmPassword ? 'border-red-500' : ''
                  }`}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            {/* Server Error */}
            {errors.server && <p className="text-red-500 bg-red-200 px-2 rounded-md">{errors.server}</p>}
            {/* Submit Button */}
            <div className="flex flex-col w-full">
              <Button type="submit" className="text-white">
                Register
              </Button>
              <p className="text-lg pt-2">
                Already have an account?{' '}
                <a
                  href="/login"
                  className="hover:underline font-bold text-blue-600 hover:text-blue-800">
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;

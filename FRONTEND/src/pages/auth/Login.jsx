import HomeHeader from '@/components/layout/HomeHeader';
import { Button } from '@/components/ui/Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const handleSubmit = async (event, setError, navigate) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = {
		emailOrNumber: formData.get('emailOrNumber'),
		password: formData.get('password'),
	};

	const errors = {};

	// Input Validations
	if (!data.emailOrNumber) {
		errors.emailOrNumber = 'Email or Phone is required';
	}
	if (!data.password) {
		errors.password = 'Password is required';
	}

	if (Object.keys(errors).length > 0) {
		setError(errors);
		return;
	}

	try {
		const response = await fetch('http://localhost:5000/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		const result = await response.json();

		if (response.ok) {
			// alert('Login Successful');
			navigate('/dashboard');
		} else {
			setError({ server: result.message || 'An error occurred' });
		}
	} catch (error) {
		console.error('Server Error:', error);
		setError({ server: 'Failed to submit the form. Please try again.' });
	}
};

const Login = () => {
	const [errors, setError] = useState({});
	const navigate = useNavigate();

	return (
		<div className="bg-[#F8F9FA] min-h-screen">
			<HomeHeader />
			<main className="flex items-center justify-center h-[850px]">
				{/* Left Section */}
				<div className="flex-1 hidden md:flex items-center justify-center bg-indigo-950 p-8 h-full">
					<h1 className="text-white text-start font-bold text-5xl">
						Banking with us makes the world easier
					</h1>
				</div>

				{/* Right Section */}
				<div className="flex-1 flex items-center justify-center">
					<form
						onSubmit={(event) => handleSubmit(event, setError, navigate)}
						className="bg-white shadow flex flex-col space-y-4 items-center justify-center p-6 rounded-2xl w-[90%] max-w-[400px]"
					>
						<div className="flex flex-row py-3 items-center justify-center">
							<FontAwesomeIcon icon={faUser} className="text-3xl text-[#6C757D]" />
							<h1 className="font-bold text-2xl px-2">Log In</h1>
						</div>

						{/* Server Error */}
						{errors.server && (
							<p className="text-red-500 bg-red-200 px-2 rounded-md">{errors.server}</p>
						)}

						{/* Email or Number */}
						<div className="flex flex-col w-full">
							<label htmlFor="emailOrNumber">Email or Number</label>
							<input
								className={`w-full text-[17px] outline-none shadow rounded-md p-4 border ${errors.emailOrNumber ? 'border-red-500' : ''
									}`}
								type="text"
								name="emailOrNumber"
								id="emailOrNumber"
								placeholder="Enter your Email or Phone Number..."
							/>
							{errors.emailOrNumber && (
								<p className="text-red-500">{errors.emailOrNumber}</p>
							)}
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
							{errors.password && <p className="text-red-500">{errors.password}</p>}
							<p className="text-sm pt-1 hover:text-blue-800">
								<span
									onClick={() => navigate('/forget-password')}
									className="cursor-pointer text-blue-600">
									Forgot Password?
								</span>
							</p>
						</div>

						{/* Submit Button */}
						<div className="flex flex-col w-full">
							<Button type='submit'>Login</Button>
							<p className="text-lg pt-2">
								Don't have an account?{' '}
								<span
									onClick={() => navigate('/register')}
									className="hover:underline font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
								>
									Register
								</span>
							</p>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Login;

import { useState } from 'react';
import { BrowserRouter as useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';


export default function Auth() {
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login/Register
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate(); // To redirect users (e.g., after registration)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const endpoint = isRegister
        ? 'https://backend-56gc.onrender.com/api/auth/register'
        : 'https://backend-56gc.onrender.com/api/auth/login';

      const payload = isRegister ? { name, email, password } : { email, password };

      const response = await axios.post(endpoint, payload);

      // Store the token (for login)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token:', response.data.token);
      }

      // Redirect based on the operation
      if (isRegister) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert('Login successful!');
        navigate('/dashboard'); // Adjust the route as needed
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'An error occurred.');
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-purple-900">
      <Navbar />
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-sm animate-fade-in">
        <h1 className="text-3xl font-extrabold text-center text-black mb-6">
          {isRegister ? 'Create an Account 🚀' : 'Welcome Back 👋'}
        </h1>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          {isRegister && (
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          )}
          <button
            type="submit"
            className={`w-full ${
              isRegister ? 'bg-green-500 hover:bg-green-600' : 'bg-purple-900 hover:bg-blue-600'
            } text-white font-bold py-3 rounded-lg transition duration-300 shadow-md`}
          >
            {isRegister ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          {isRegister ? (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsRegister(false)}
                className="text-purple-900 hover:underline focus:outline-none"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don t have an account?{' '}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

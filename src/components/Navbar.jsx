import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from'../assets/fruit.png';

export default function Navbar() {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/login"); // Redirect to login page
  };

  const isLoggedIn = !!localStorage.getItem("token"); // Check if the user is logged in

  return (
    <nav className="bg-gradient-to-r from-black to-black shadow-lg text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
  <Link to="/" className="flex items-center text-2xl font-bold tracking-wide hover:text-gray-200 transition duration-300">
    <img src={img} alt="logo" className="w-8 h-8 mr-2" />
    TaskBot
  </Link>
</div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-200 text-lg transition duration-300">
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/dashboard" className="hover:text-gray-200 text-lg transition duration-300">
              Dashboard
            </Link>
          )}
        </div>

        {/* CTA Buttons */}
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-purple-800  text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-gray-200 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-300">TaskBot</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-slide-in">
            Organize, prioritize, and conquer your tasks with an AI-powered chatbot.
          </p>

          {/* CTA Button */}
          <a
            href="/login"
            className="inline-block bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 animate-bounce"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-200">
        © 2024 TaskBot. All rights reserved.
      </footer>
    </div>
  );
}

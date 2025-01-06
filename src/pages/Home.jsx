import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black via-black to-purple-800 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to <span className="text-[#F7F7F7]">TaskBot</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 animate-slide-in">
            Organize, prioritize, and conquer your tasks with an AI-powered chatbot.
          </p>

          {/* CTA Button */}
          <a
            href="/login"
            className="inline-block bg-purple-900 text-[#F7F7F7] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-black transition-all duration-200 border-2"
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

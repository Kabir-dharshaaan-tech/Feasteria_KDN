
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onExploreClick }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-orange-500 shadow-md px-6 py-4 relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left side */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-medium whitespace-nowrap">
            <span className="text-red-600 font-bold">Fea</span>steria
          </h1>

          <input
            type="text"
            placeholder="Search..."
            className="w-72 px-3 py-1 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <div className="flex space-x-6 ml-6 text-base">
            <Link to="/" className="text-black font-semibold hover:text-red-600">🏠 Home</Link>

            <button
              onClick={onExploreClick}
              className="text-black font-semibold hover:text-red-600 focus:outline-none"
            >
              🍲 Explore Recipes
            </button>

            <a href="#" className="text-black font-semibold hover:text-red-600">📢 Events</a>
            <a href="#" className="text-black font-semibold hover:text-red-600">💡 About</a>
            <a href="#" className="text-black font-semibold hover:text-red-600">📝 Feedback</a>
            <Link to="/health" className="text-black font-semibold hover:text-red-600">🫀 Health</Link> 
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6 text-base font-medium text-gray-700 relative">
          <Link to="/login" className="text-black font-semibold hover:text-red-600">🔓 Login</Link>
          <a href="/Profile" className="text-black font-semibold hover:text-red-600">👤 Profile</a>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-3xl text-gray-700 focus:outline-none"
              onClick={toggleDropdown}
            >
              &#8942;
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">✅ My Recipes</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">✅ Saved Recipes</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🧑‍🍳 Live Kitchen</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">🏆 Leaderboard</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">📖 Blog / Tips</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





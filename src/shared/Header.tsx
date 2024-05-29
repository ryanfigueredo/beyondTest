import React, { useState } from 'react';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-red-800 text-white p-4 flex justify-between items-center">
      <a href="#" className="text-xl font-bold">Interplanetary Food</a>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-7">
          <a href="#" className="hover:text-gray-300">Home</a>
          <div className="relative">
            <button 
              className="flex items-center space-x-1 hover:text-gray-300" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>More orders</span>
              <svg 
                className={`w-4 h-4 transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Burger with fries</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Japanese food</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Earth Food</a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-gray-300">Wish</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </nav>
        <button 
          className="md:hidden text-white hover:text-gray-300" 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
        </button>
      </div>
      <div className="flex space-x-4">
        <button className="hidden md:block text-white font-bold py-2 px-3 rounded transition ease-in-out bg-red-500 hover:-translate-y-1 hover:bg-red-900 duration-200">
          Sign Up
        </button>
        <button className="hidden md:block text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, Search, Bell, User , Video ,LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and menu button */}
        <div className="flex items-center">
          <button className="mr-4 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
          <div className="flex items-center">
            <span className="text-xl font-bold">Vidflix</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-800 rounded-l-full focus:outline-none"
            />
            <button className="bg-gray-700 px-4 py-2.5 rounded-r-full">
              <Search size={20} />
            </button>
          </div>

        {/* Icons */}
        <div className="flex items-center">
            
            {isLoggedIn ? (
              <div className="flex items-center">
              <button className="p-2">
              <Video size={24} />
            </button>
              <button className="p-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </button>
              </div>
            ) : (
              <button className="p-2 flex items-center" onClick={toggleLogin}>
                <LogIn size={24} className="mr-2" />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>

            {/* Mobile search bar */ }
        <div className="mt-4 md:hidden">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-800 rounded-l-full focus:outline-none"
            />
            <button className="bg-gray-700 px-4 py-2.5 rounded-r-full">
              <Search size={20} />
            </button>
          </div>
        </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mt-4 lg:hidden">
          <nav>
            <a href="#" className="block py-2">Home</a>
            <a href="#" className="block py-2">Trending</a>
            <a href="#" className="block py-2">Subscriptions</a>
            <a href="#" className="block py-2">Library</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
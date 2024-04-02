import React, { useState } from 'react';
import logo from './logos.png';

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Handle search
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <nav className="bg-black py-4 sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <img src={logo} alt='logo' />
          {/* Hamburger Icon for small devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          {/* End of Hamburger Icon */}
          {/* Navigation links */}
          <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden' }`}>
            <div className=" md:flex space-x-6">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/Explorer" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Explorer</a>
              <a href="/News" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>
              <a href="/TV Shows" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TV Shows</a>
              <a href="/Genre" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Genre</a>
              <a href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
              <a href="/search" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Search</a>
            </div>
          </div>
          {/* End of Navigation links */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

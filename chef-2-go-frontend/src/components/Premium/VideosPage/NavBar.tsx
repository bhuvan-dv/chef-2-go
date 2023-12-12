// NavBar.tsx
import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-lg font-bold">Chef 2 Go</span>
          {/* Add any other page-specific branding or icons here */}
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none"
            />
            <button className="absolute right-0 top-0 mt-1 mr-2">
              {/* You can add a search icon here */}
              Search
            </button>
          </div>
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFilter}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Filter
            </button>
            {showFilter && (
              <div className="absolute top-8 right-0 mt-2 bg-white border border-gray-300 rounded-md p-2">
                {/* Dropdown content goes here */}
                <p> Option 1</p>
                <p> Option 2</p>
                {/* Add more filter options as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

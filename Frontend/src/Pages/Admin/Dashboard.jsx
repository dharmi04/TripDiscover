import React, { useState } from 'react';
import AddDestination from './AddDestination';
import AddTours from './AddTours';
import AllUsers from './AllUsers';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('add-destination');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderActiveComponent = () => {
    switch (activeOption) {
      case 'add-destination':
        return <AddDestination />;
      case 'add-tours':
        return <AddTours />;
      case 'all-users':
        return <AllUsers />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar - Desktop */}
      <div className="w-1/4 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h1 className="font-Montserrat text-4xl font-semibold">Dashboard</h1>
          {/* Sidebar Menu - Desktop */}
          <ul className="mt-6 space-y-4">
            <li>
              <button
                onClick={() => setActiveOption('add-destination')}
                className={`block text-lg font-medium py-2 w-full rounded-md transition-colors duration-300 ${activeOption === 'add-destination' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              >
                Add Destination
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveOption('add-tours')}
                className={`block text-lg font-medium py-2 w-full rounded-md transition-colors duration-300 ${activeOption === 'add-tours' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              >
                Add Tours
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveOption('all-users')}
                className={`block text-lg font-medium py-2 w-full rounded-md transition-colors duration-300 ${activeOption === 'all-users' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
              >
                All Users
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu - Mobile */}
      <div className="lg:hidden fixed top-0 right-0 z-50">
        <button className="p-4 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-4">
        {/* Mobile Menu - Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50" onClick={toggleMenu}></div>
        )}

        {/* Sidebar Menu - Mobile */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 bg-gray-800 text-white w-3/4 max-w-xs transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            <h1 className="font-Montserrat text-4xl font-semibold">Dashboard</h1>
            <ul className="mt-6 space-y-4">
              <li>
                <button
                  onClick={() => {
                    setActiveOption('add-destination');
                    toggleMenu();
                  }}
                  className={`block text-lg font-medium py-2 w-full rounded-md ${activeOption === 'add-destination' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  Add Destination
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveOption('add-tours');
                    toggleMenu();
                  }}
                  className={`block text-lg font-medium py-2 w-full rounded-md ${activeOption === 'add-tours' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  Add Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveOption('all-users');
                    toggleMenu();
                  }}
                  className={`block text-lg font-medium py-2 w-full rounded-md ${activeOption === 'all-users' ? 'bg-gray-600' : 'hover:bg-gray-600'}`}
                >
                  All Users
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Render Active Component */}
        <div className="ml-8">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;

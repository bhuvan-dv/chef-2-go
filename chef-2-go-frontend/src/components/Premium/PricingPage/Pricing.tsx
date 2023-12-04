// components/premium/PricingPage/Pricing.tsx

import React from 'react';
import './Pricing.css'; // Import your stylesheet

const Pricing: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="group relative w-1/5 h-96 p-8 bg-opacity-20 bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Explorer</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$9.99/month</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1">Select</button>
      </div>

      <div className="group relative w-1/5 h-96 p-8 bg-opacity-20 bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Enthusiast</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$19.99/month</p>
        <button className="bg-white text-purple-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1">Select</button>
      </div>

      <div className="group relative w-1/5 h-96 p-8 bg-opacity-20 bg-white text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:shadow-xl hover:-translate-y-1">
        <div className="before absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-1">Connoisseur</h2>
        <p className="text-gray-300 mb-4 relative z-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300 mb-4 relative z-1">$29.99/month</p>
        <button className="bg-white text-green-500 px-6 py-3 rounded-full hover:bg-gray-300 relative z-1">Select</button>
      </div>
    </div>
  );
};

export default Pricing;
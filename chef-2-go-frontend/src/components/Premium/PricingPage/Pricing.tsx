// components/premium/PricingPage/Pricing.tsx

import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="w-1/5 h-full p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
        <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
        <p className="text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300">$9.99/month</p>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-300">Select</button>
      </div>

      <div className="w-1/5 h-full p-6 bg-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
        <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
        <p className="text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300">$19.99/month</p>
        <button className="mt-4 bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-gray-300">Select</button>
      </div>

      <div className="w-1/5 h-full p-6 bg-green-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
        <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
        <p className="text-gray-300 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="text-gray-300">$29.99/month</p>
        <button className="mt-4 bg-white text-green-500 px-4 py-2 rounded-full hover:bg-gray-300">Select</button>
      </div>
    </div>
  );
};

export default Pricing;

// pages/PricingPage.tsx

import React from 'react';
import Pricing from '../../components/Premium/PricingPage/Pricing';

const PricingPage: React.FC = () => {
  return (
    <div className="bg-black  h-screen flex items-center justify-center text-white">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">Become a Foodie!</h1>
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;

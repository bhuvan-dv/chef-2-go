// pages/Premium/PricingPage.tsx

import React from 'react';
import './PricingPage.css';
import Pricing from '../../components/Premium/PricingPage/Pricing';
import Testimonials from '../../components/Premium/PricingPage/Testimonials';

const PricingPage: React.FC = () => {
  return (
    <div className="background-container h-screen flex items-center justify-center text-white">
      <div className="overlay"></div>
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold h1">Become a Foodie</h1>
        <Pricing />
        <Testimonials />
      </div>
    </div>
  );
};

export default PricingPage;
